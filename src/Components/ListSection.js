import React from "react";
import ListElement from "./ListElement";
import { Droppable } from "react-beautiful-dnd";

const ListSection = ({
  displayList,
  itemList,
  setItemList,
  completedTasks,
  setCompletedTask,
}) => {
  return (
    <Droppable droppableId="ToDoList">
      {(provided, snapShot) => (
        <div
          className="h-[47vh]  overflow-y-auto"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {displayList?.map((item, index) => (
            <ListElement
              index={index}
              key={item}
              text={item}
              setItemList={setItemList}
              itemList={itemList}
              completedTasks={completedTasks}
              setCompletedTask={setCompletedTask}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ListSection;
