import { ReactNode } from "react";

type ButtonIconProps = {
  children: ReactNode;
  onClick: () => void;
};
function ButtonIcon({ children, onClick }: ButtonIconProps) {
  return (
    <button
      className="p-[0.6rem] text-[2rem] group rounded-sm transition-all duration-200 hover:bg-grey-100 dark:hover:bg-dark-grey-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
