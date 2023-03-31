import React, { useState } from "react";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import InputSection from "./InputSection";
import ListSection from "./ListSection";

const Layout = ({ theme, setTheme }) => {
  const [itemList, setItemList] = useState([]);

  return (
    <div className="w-[40%] border-2 border-yellow-400">
      <div className="flex w-full justify-between items-center">
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
      <ListSection itemList={itemList} setItemList={setItemList} />
    </div>
  );
};

export default Layout;
