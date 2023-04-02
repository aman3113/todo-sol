import React from "react";
import ListElement from "./ListElement";

const ListSection = ({
  displayList,
  itemList,
  setItemList,
  completedTasks,
  setCompletedTask,
}) => {
  return (
    <div className="h-[47vh]  overflow-y-auto">
      {displayList?.map((item, index) => (
        <ListElement
          key={item}
          text={item}
          setItemList={setItemList}
          itemList={itemList}
          completedTasks={completedTasks}
          setCompletedTask={setCompletedTask}
        />
      ))}
    </div>
  );
};

export default ListSection;
