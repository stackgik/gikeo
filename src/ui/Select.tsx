import { ChangeEvent } from "react";

export interface IOption {
  label: string;
  value: string;
}

type SelectProps = {
  options: IOption[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};
const Select = ({ options, value, onChange }: SelectProps) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="cursor-pointer rounded-sm border border-grey-100 bg-grey-0 px-[1.2rem] py-[0.8rem] text-[1.4rem] font-medium dark:border-dark-grey-100 dark:bg-dark-grey-0 dark:text-dark-grey-700 dark:focus:border-dark-grey-200"
    >
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
