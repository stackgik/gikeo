import { FormEvent, useState } from "react";
import Button from "../../ui/Button";

const LoginForm = (): JSX.Element => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} action="#" className="flex flex-col gap-4">
      <div className="border border-grey-200 pt-10 px-8 relative">
        <input
          type="text"
          value={username}
          className="outline-none text-[1.5rem] py-4 w-full"
          onFocus={() => handleFocus("username")}
          onBlur={handleBlur}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label
          htmlFor=""
          className={`absolute top-1/2 left-8 font-medium ${
            focusedField === "username" ? "text-[1.2rem]" : "text-[1.3rem]"
          } ${
            focusedField === "username" ? "top-3" : "-translate-y-1/2"
          } transition-all duration-200 ease-in-out`}
        >
          Username
        </label>
      </div>
      <div className="border border-grey-200 pt-10 px-8 relative">
        <input
          type="password"
          value={password}
          className="outline-none text-[1.5rem] py-4 w-full"
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          className={`absolute top-1/2 left-8 font-medium ${
            focusedField === "password" ? "text-[1.2rem]" : "text-[1.3rem]"
          } ${
            focusedField === "password" ? "top-3" : "-translate-y-1/2"
          } transition-all duration-200 ease-in-out`}
        >
          Password
        </label>
      </div>

      <Button variation={"primary"} width={"full"} size={"large"}>
        Log into your account
      </Button>
    </form>
  );
};

export default LoginForm;
