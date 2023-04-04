import React, { useEffect, useRef, useState } from "react";

import InputSection from "./InputSection";
import ListSection from "./ListSection";
import Details from "./Details";
import Heading from "./Heading";
import { DragDropContext } from "react-beautiful-dnd";

const Layout = ({ theme, setTheme }) => {
  const [itemList, setItemList] = useState([]);
  const [completedTasks, setCompletedTask] = useState([]);
  const [activeTasks, setActiveTask] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [state, setState] = useState({
    all: true,
    active: false,
    completed: false,
  });

  console.log(completedTasks);

  const initialRef = useRef(true);

  useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;
      const storedItems = localStorage.getItem("toDoList");
      const completedList = localStorage.getItem("completedList");
      storedItems && setItemList(JSON.parse(storedItems));
      completedList && setCompletedTask(JSON.parse(completedList));
    }

    localStorage.setItem("toDoList", JSON.stringify(itemList));
    localStorage.setItem("completedList", JSON.stringify(completedTasks));
    setActiveTask(itemList.filter((item) => !completedTasks.includes(item)));
  }, [itemList, completedTasks]);

  useEffect(() => {
    if (state.all) {
      setDisplayList(itemList);
    }
    if (state.completed) {
      setDisplayList(completedTasks);
    }
    if (state.active) {
      setDisplayList(activeTasks);
    }
  }, [state, itemList, completedTasks, activeTasks]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (destination.index === source.index) return;

    let add,
      active = displayList;
    add = active[source.index];
    active.splice(source.index, 1);
    active.splice(destination.index, 0, add);

    setDisplayList(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="w-[80%] lg:w-[40%] h-[80vh] flex flex-col ">
        <Heading theme={theme} setTheme={setTheme} />
        <InputSection itemList={itemList} setItemList={setItemList} />
        <div className="rounded-md  dark:bg-gray-800 bg-white">
          <ListSection
            displayList={displayList}
            itemList={itemList}
            setItemList={setItemList}
            completedTasks={completedTasks}
            setCompletedTask={setCompletedTask}
          />
          <Details
            state={state}
            displayList={displayList}
            setState={setState}
            completedTasks={completedTasks}
            setCompletedTask={setCompletedTask}
            setItemList={setItemList}
          />
        </div>
      </div>
    </DragDropContext>
  );
};

export default Layout;
