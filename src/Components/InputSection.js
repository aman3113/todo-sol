import React, { useState } from "react";

const InputSection = ({ itemList, setItemList }) => {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    if (event.key === "Enter") {
      setText("");
      setItemList([...itemList, text]);
    }
  }

  return (
    <input
      type="text"
      placeholder="Create a new todo..."
      className="w-full p-3 rounded-xl dark:bg-[hsl(234, 11%, 52%)] text-[hsl(236, 9%, 61%)] dark:text-[hsl(234, 39%, 85%)]"
      name="inputItem"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleSubmit}
    />
  );
};

export default InputSection;
