import { useState, useEffect, SetStateAction, Dispatch } from "react";

export const useLocalStorageState = (
  initialState: string | boolean | number,
  key: string,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  //  When the component mounts, the hook executes the function passed to useState. This function reads the value from localStorage using localStorage.getItem(key). If a value is found, it is parsed from a JSON string back into a JavaScript value and used as the initial state. If no value is found (i.e., getItem returns null), the initialState provided to the hook is used instead.

  //Each time the user refreshes the page, the component re-mounts, which triggers the hook to execute again. During this execution, it reads the current value from localStorage and sets it as the initial state. This is how the state persists across page reloads.
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
