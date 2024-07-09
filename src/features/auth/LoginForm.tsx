import { FormEvent, useState } from "react";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { Link } from "react-router-dom";

const LoginForm = (): JSX.Element => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [email, setEmail] = useState("therealidesignconcept@gmail.com");
  const [password, setPassword] = useState("Adedoyin1994!");
  const { login, isLoggingIn } = useLogin();

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <form onSubmit={handleSubmit} action="#" className="flex flex-col gap-4">
      <div className="relative border border-grey-200 px-8 pt-10 dark:border-dark-grey-200">
        <input
          type="text"
          value={email}
          className="w-full bg-transparent py-4 text-[1.5rem] outline-none"
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label
          htmlFor=""
          className={`absolute left-8 top-1/2 font-medium ${
            focusedField === "email" || email !== ""
              ? "text-[1.2rem]"
              : "text-[1.3rem]"
          } ${
            focusedField === "email" || email !== ""
              ? "top-3"
              : "-translate-y-1/2"
          } transition-all duration-200 ease-in-out`}
        >
          Email
        </label>
      </div>
      <div className="relative border border-grey-200 px-8 pt-10 dark:border-dark-grey-200">
        <input
          type="password"
          value={password}
          className="w-full bg-transparent py-4 text-[1.5rem] outline-none"
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          className={`absolute left-8 top-1/2 font-medium ${
            focusedField === "password" || password !== ""
              ? "text-[1.2rem]"
              : "text-[1.3rem]"
          } ${
            focusedField === "password" || password !== ""
              ? "top-3"
              : "-translate-y-1/2"
          } transition-all duration-200 ease-in-out`}
        >
          Password
        </label>
      </div>

      <button
        className="mt-8 flex h-20 w-full items-center justify-center bg-brand-500 font-semibold text-grey-0 transition-all duration-300 ease-linear hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-brand-200"
        disabled={isLoggingIn}
      >
        {isLoggingIn ? (
          <p className="flex items-center gap-2">
            <SpinnerMini />
            <span> Logging in... </span>
          </p>
        ) : (
          "Log into your account"
        )}
      </button>

      <p className="mt-8 text-center text-[1.4rem] font-medium text-grey-400">
        <span>Don't have an account?</span>{" "}
        <Link to={"/register"} className="text-brand-500">
          create account
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
