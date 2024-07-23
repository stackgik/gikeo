import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="text-grey-400 transition-all duration-300 dark:text-dark-grey-400" />
      ) : (
        <HiOutlineMoon className="text-grey-400 transition-all duration-300 dark:text-dark-grey-400" />
      )}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
