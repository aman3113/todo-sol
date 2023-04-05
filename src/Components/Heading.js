import React, { useEffect, useRef } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const Heading = ({ theme, setTheme }) => {
  const initialRef = useRef(true);

  useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;
      const storedItems = localStorage.getItem("theme");
      storedItems && setTheme(JSON.parse(storedItems));
    }

    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
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
  );
};

export default Heading;
