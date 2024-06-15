import { MouseEvent, ReactNode } from "react";

interface IButton {
  children: ReactNode;
  width?: "full";
  size: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  className: string;
}

// prettier-ignore
function Button({size, children, disabled, onClick, width, href, className}: IButton): JSX.Element {
  const btnSize = {
    small:
      "text-[1.2rem] py-[0.4rem] px-[0.8rem] uppercase font-semibold",
    medium: "text-[1.4rem] py-[1.2rem] px-[1.6rem] font-medium", 
    large: "text-[1.6rem] py-[1.2rem] px-[2.4rem] font-medium",
  };

  if(href){
    return <a href={href}>{children}</a>
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex gap-4 transition-all ${width? 'w-full': ''} duration-300 disabled:cursor-not-allowed disabled:bg-grey-200 dark:disabled:bg-dark-grey-200 ${className} ${btnSize[size]}`}
      >
        {children}
      </button>
    )
}

export default Button;
