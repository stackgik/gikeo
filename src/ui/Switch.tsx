import { Dispatch, SetStateAction } from "react";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

type SwitchProp = {
  setActive: Dispatch<SetStateAction<string>>;
  active: string;
  value1: string;
  value2: string;
};
const Switch = ({ setActive, active, value1, value2 }: SwitchProp) => {
  return (
    <div className="w-fit rounded-[50px] bg-grey-100 p-1 dark:bg-dark-grey-100 dark:text-dark-grey-700">
      <button
        onClick={() => setActive(value1)}
        className={`rounded-[40px] px-10 py-4 transition-all duration-300 ease-spring ${active === value1 ? "bg-brand-500 text-grey-0" : ""}`}
      >
        {capitalizeFirstLetter(value1)}
      </button>
      <button
        onClick={() => setActive(value2)}
        className={`rounded-[40px] px-10 py-4 transition-all delay-100 duration-300 ease-spring ${active === value2 ? "bg-brand-500 text-grey-0" : ""}`}
      >
        {capitalizeFirstLetter(value2)}
      </button>
    </div>
  );
};

export default Switch;
