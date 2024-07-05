import { ChangeEvent } from "react";

interface IInputField {
  disabled: boolean;
  label: string;
  type: string;
  value: string | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
const InputField = ({
  disabled,
  label,
  type,
  value,
  onChange,
}: IInputField) => {
  return (
    <div className="flex w-full flex-col gap-4 text-[1.4rem]">
      <label htmlFor="" className="font-semibold">
        {label}
      </label>
      <input
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className="rounded-sm border border-grey-100 bg-grey-0 px-6 py-[1.5rem] outline-brand-500 disabled:cursor-not-allowed disabled:bg-grey-200 dark:border-dark-grey-100 dark:bg-dark-grey-0 dark:text-dark-grey-700 dark:disabled:bg-dark-grey-200"
      />
    </div>
  );
};

export default InputField;
