import { MouseEvent, ReactNode } from "react";

interface IButton {
  children: ReactNode;
  width?: "full";
  size: "small" | "medium" | "large";
  variation: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "reset";
  extraClass?: string;
}

// prettier-ignore
function Button({ size, variation, children, type, disabled, onClick, width, extraClass }: IButton) {
  const btnSize = {
    small:
      'text-[1.2rem] py-[0.4rem] px-[0.8rem] uppercase font-semibold text-center',
    medium: 'text-[1.4rem] py-[1.2rem] px-[1.6rem] font-medium', // Corrected
    large: 'text-[1.6rem] py-[1.2rem] px-[2.4rem] font-medium',
  };

  const btnVariation = {
    primary: 'text-brand-50 bg-brand-600 hover:bg-brand-700',
    secondary:
      'text-brand-600 bg-transparent border border-grey-200 dark:border-dark-grey-200 hover:bg-grey-50 dark:hover:bg-dark-grey-50',
    danger: 'text-red-100 bg-red-700 hover:bg-red-800',
  };

  // Corrected the order and method of checking props and accessing object properties
  const classes = [
    size ? btnSize[size] : '',
    variation ? btnVariation[variation] : '',
  ].join(' ');

  return (
    <button
      className={`${classes} width && w-${width} disabled:cursor-not-allowed  rounded-sm disabled:bg-grey-200 dark:disabled:bg-dark-grey-200 ${extraClass}`}
      type={type === 'reset' ? 'reset' : 'submit'}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

// function Button({size, children, disabled, onClick, width, href, className}: IButton): JSX.Element {
//   const btnSize = {
//     small:
//       "text-[1.2rem] py-[0.4rem] px-[0.8rem] uppercase font-semibold",
//     medium: "text-[1.4rem] py-[1.2rem] px-[1.6rem] font-medium",
//     large: "text-[1.6rem] py-[1.2rem] px-[2.4rem] font-medium",
//   };

//   if(href){
//     return <a href={href}>{children}</a>
//   }

//   return (
//     <button
//       disabled={disabled}
//       onClick={onClick}
// className={`flex gap-4 transition-all ${width? 'w-full': ''} duration-300 disabled:cursor-not-allowed disabled:bg-grey-200 dark:disabled:bg-dark-grey-200 ${className} ${btnSize[size]}`}
//       >
//         {children}
//       </button>
//     )
// }

// export default Button;
