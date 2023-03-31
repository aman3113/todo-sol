import React from "react";
import ListElement from "./ListElement";

const ListSection = ({ itemList, setItemList }) => {
  return (
    <div>
      {itemList?.map((item, index) => (
        <ListElement
          key={index}
          text={item}
          setItemList={setItemList}
          itemList={itemList}
        />
      ))}
    </div>
  );
};

export default ListSection;
