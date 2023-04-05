import React, { useState } from "react";

const InputSection = ({ itemList, setItemList }) => {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    if (event.key === "Enter") {
      setText("");
      if (!itemList.includes(text)) setItemList([text, ...itemList]);
    }
  }

  return (
    <input
      type="text"
      placeholder="Create a new todo..."
      className="w-full mb-6  p-3 rounded-md  dark:bg-gray-800 text-blue-950 dark:text-gray-200"
      name="inputItem"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleSubmit}
    />
  );
};

export default InputSection;
