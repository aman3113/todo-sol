import React from "react";

const Details = () => {
  return (
    <div className="h-[9vh] text-gray-900 border-t p-3 text-sm border-gray-300 dark:text-gray-200 flex justify-between items-center relative">
      <span>5 items left</span>
      <div className="flex gap-3 items-center absolute bottom-[-50%] left-[50%] translate-x-[-50%] sm:static sm:translate-x-0">
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
      <span>Clear Completed</span>
    </div>
  );
};

export default Details;
