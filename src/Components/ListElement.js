import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import IconCheck from "../images/icon-check.svg";

const ListElement = ({ text, itemList, setItemList }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  function handleDelete() {
    setItemList(itemList.filter((item) => item !== text));
  }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full border-b-2 border-gray-300 py-3 flex justify-between items-center"
    >
      <div className="flex gap-2 items-center">
        <span
          className={`w-6 h-6 rounded-[50%] relative cursor-pointer	border-2 border-gray-500 ${
            isChecked && "bg-purple-400"
          }`}
          onClick={() => setIsChecked(!isChecked)}
        >
          {isChecked && (
            <img
              src={IconCheck}
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              alt=""
            />
          )}
        </span>
        <span
          className={`text-blue-950 dark:text-gray-200 ${
            isChecked && "line-through"
          }`}
        >
          {text}
        </span>
      </div>

      {isHovered && (
        <RxCross2 style={{ color: "gray" }} onClick={handleDelete} />
      )}
    </div>
  );
};

export default ListElement;
