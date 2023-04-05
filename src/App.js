import { useState } from "react";
import Layout from "./Components/Layout";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <div className="App dark:bg-gray-900 bg-gray-200 flex items-center justify-center">
        <Layout theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;
