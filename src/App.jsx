import React, { useContext } from 'react';
import { NavBar } from "./components";
import ThemeContext from "./ThemeContext ";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <NavBar />
      <div className={isDarkMode ? 'bg-blue-300' : 'bg-white'}>Hello</div>
      <div className="flex md:flex-row sm:text-2xl flex-col">
        <div className="flex-1">
          Hello
        </div>
        <div className="flex-1">
          Vinayak
        </div>

      </div>
    </div>
  )
}

export default App
