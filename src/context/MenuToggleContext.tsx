import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IMenuToggle {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}

const MenuToggleContext = createContext<IMenuToggle | undefined>(undefined);

const MenuToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <MenuToggleContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </MenuToggleContext.Provider>
  );
};

const useMenuToggle = () => {
  const context = useContext(MenuToggleContext);

  if (context === undefined)
    throw new Error(
      "MenuToggleContext was used outside the MenuToggleProvider",
    );

  return context;
};

export { useMenuToggle, MenuToggleProvider };
