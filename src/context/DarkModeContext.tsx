import { ReactNode, createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorage";

interface IDarkModeContext {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const defaultContextValue: IDarkModeContext = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

const DarkModeContext = createContext<IDarkModeContext>(defaultContextValue);

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "theme");

  //   Now we need Effect to handle the side effect
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((isDarkMode) => !isDarkMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside the DarkModeProvider");

  return context;
};

export { useDarkMode, DarkModeProvider };
