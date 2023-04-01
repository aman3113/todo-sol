import React, { useEffect, useRef, useState } from "react";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import InputSection from "./InputSection";
import ListSection from "./ListSection";
import Details from "./Details";

const Layout = ({ theme, setTheme }) => {
  const [itemList, setItemList] = useState([]);
  const [completedTasks, setCompletedTask] = useState([]);

  const initialRef = useRef(true);

  useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;
      const storedItems = localStorage.getItem("toDoList");
      storedItems && setItemList(JSON.parse(storedItems));
    }

    localStorage.setItem("toDoList", JSON.stringify(itemList));
  }, [itemList]);

  return (
    <div className="w-[40%] h-[80vh] flex flex-col ">
      <div className=" mb-8 flex w-full justify-between items-center">
        <span className="text-4xl text-white font-bold">TODO</span>
        <span
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="cursor-pointer"
        >
          {theme === "light" ? (
            <BsFillMoonFill style={{ color: "white" }} size={30} />
          ) : (
            <BsFillSunFill style={{ color: "white" }} size={30} />
          )}
        </span>
      </div>
      <InputSection itemList={itemList} setItemList={setItemList} />
      <div className="rounded-md  dark:bg-gray-800">
        <ListSection itemList={itemList} setItemList={setItemList} />
        <Details />
      </div>
    </div>
  );
};

export default Layout;
