import React from "react";

const Details = ({
  state,
  setState,
  displayList,
  completedTasks,
  setCompletedTask,
  setItemList,
}) => {
  const handleClearTasks = () => {
    setItemList((prev) =>
      prev.filter((item) => !completedTasks.includes(item))
    );
    setCompletedTask([]);
  };
  return (
    <div className="h-[9vh] rounded-md text-gray-900 border-t p-3 text-sm border-gray-300 dark:text-gray-200 flex justify-between items-center relative">
      <span>{displayList.length} items Left</span>
      <div className="flex gap-3 rounded-md items-center absolute bottom-[-90%] left-[50%] translate-x-[-50%] lg:static lg:translate-x-0  bg-white dark:bg-gray-800 px-4 py-2 lg:p-0">
        <span
          className={`${state.all && "text-blue-700 font-bold"} cursor-pointer`}
          onClick={() =>
            setState({ all: true, active: false, completed: false })
          }
        >
          All
        </span>
        <span
          className={`${
            state.active && "text-blue-700 font-bold"
          } cursor-pointer`}
          onClick={() =>
            setState({ all: false, active: true, completed: false })
          }
        >
          Active
        </span>
        <span
          className={`${
            state.completed && "text-blue-700 font-bold"
          } cursor-pointer`}
          onClick={() =>
            setState({ all: false, active: false, completed: true })
          }
        >
          Completed
        </span>
      </div>
      <span
        onClick={handleClearTasks}
        className="cursor-pointer hover:font-bold hover:text-purple-800 dark:hover:text-purple-400"
      >
        Clear Completed
      </span>
    </div>
  );
};

export default Details;
