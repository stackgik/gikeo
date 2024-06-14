import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="group-hover:text-brand-500 text-brand-500 transition-all duration-300" />
      ) : (
        <HiOutlineMoon className="group-hover:text-brand-500 text-brand-500 transition-all duration-300" />
      )}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
