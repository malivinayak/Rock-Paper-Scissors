import React, { createContext, useState } from 'react';

const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export default ThemeContext;

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  const value = {
    isDarkMode,
    toggleDarkMode,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
