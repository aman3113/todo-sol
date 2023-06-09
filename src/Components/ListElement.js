import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import IconCheck from "../images/icon-check.svg";
import { Draggable } from "react-beautiful-dnd";

const ListElement = ({
  index,
  text,
  itemList,
  setItemList,
  completedTasks,
  setCompletedTask,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(
    completedTasks.includes(text) ? true : false
  );

  useEffect(() => {
    if (isChecked) {
      if (!completedTasks.includes(text))
        setCompletedTask((prev) => [...prev, text]);
      console.log(completedTasks);
    } else {
      setCompletedTask((prev) => prev?.filter((task) => !task.includes(text)));
      console.log(completedTasks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  function handleDelete() {
    setItemList(itemList.filter((item) => item !== text));
    setCompletedTask(completedTasks.filter((item) => item !== text));
  }

  return (
    <Draggable draggableId={text} index={index}>
      {(provided, snapShot) => (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`w-full h-[9.5vh] border-b  hover:scale-105 hover:px-6 hover:shadow-md  ${
            snapShot.isDragging &&
            "border bg-gray-400 dark:bg-gray-600 rounded-lg"
          } border-gray-300 p-3 flex justify-between items-center `}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
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
              className={`text-blue-950 font-bold dark:font-normal dark:text-gray-200 text-xs md:text-sm ${
                isChecked && "line-through"
              }`}
            >
              {text}
            </span>
          </div>

          {isHovered && (
            <RxCross2
              size={25}
              style={{ color: "gray", cursor: "pointer" }}
              onClick={handleDelete}
            />
          )}
        </div>
      )}
    </Draggable>
  );
};

export default ListElement;
