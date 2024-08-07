import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";
import useSignUp from "./useSignUp";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({ mode: "all" });

  const { signUp, isSigningUp } = useSignUp();

  const onSubmit: SubmitHandler<FormData> = ({ username, email, password }) => {
    signUp(
      { username, email, password },
      {
        onSettled: () => reset,
      },
    );
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const usernameValue = watch("username", "");
  const passwordValue = watch("password", "");
  const emailValue = watch("email", "");
  const confirmPasswordValue = watch("confirmPassword", "");

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action="#"
      className="flex flex-col gap-4"
    >
      <div className="relative border border-grey-200 px-8 pt-10 dark:border-dark-grey-200">
        <input
          type="text"
          className="w-full bg-transparent py-4 text-[1.5rem] outline-none"
          {...register("username", {
            required: "This field is required",
            maxLength: {
              value: 10,
              message: "Username must be less than 10 characters",
            },
          })}
          onFocus={() => handleFocus("username")}
          onBlur={handleBlur}
        />
        <label
          className={`absolute left-8 top-1/2 font-medium ${
            focusedField === "username" || usernameValue
              ? "top-3 text-[1.2rem]"
              : "-translate-y-1/2 text-[1.3rem]"
          } transition-all duration-200 ease-in-out`}
        >
          Username
        </label>
      </div>
      <span className="text-[1.1rem] text-red-700">
        {errors?.username?.message}
      </span>

      <div className="relative border border-grey-200 px-8 pt-10 dark:border-dark-grey-200">
        <input
          type="text"
          className="w-full bg-transparent py-4 text-[1.5rem] outline-none"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Please enter a valid email address",
            },
          })}
          onFocus={() => handleFocus("email")}
          onBlur={handleBlur}
        />
        <label
          className={`absolute left-8 top-1/2 font-medium ${
            focusedField === "email" || emailValue
              ? "top-3 text-[1.2rem]"
              : "-translate-y-1/2 text-[1.3rem]"
          } } transition-all duration-200 ease-in-out`}
        >
          Email address
        </label>
      </div>
      <span className="text-[1.1rem] text-red-700">
        {errors?.email?.message}
      </span>

      <div className="relative border border-grey-200 px-8 pt-10 dark:border-dark-grey-200">
        <input
          type="password"
          className="w-full bg-transparent py-4 text-[1.5rem] outline-none"
          {...register("password", {
            required: "This field is required",
            pattern: {
              value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
              message:
                "The password must be at least 8 characters, lowercase, uppercase, and a special character",
            },
          })}
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
        />
        <label
          className={`absolute left-8 top-1/2 font-medium ${
            focusedField === "password" || passwordValue
              ? "top-3 text-[1.2rem]"
              : "-translate-y-1/2 text-[1.3rem]"
          } transition-all duration-200 ease-in-out`}
        >
          Password
        </label>
      </div>
      <span className="text-[1.1rem] text-red-700">
        {errors?.password?.message}
      </span>

      <div className="relative border border-grey-200 px-8 pt-10 dark:border-dark-grey-200">
        <input
          type="password"
          className="w-full bg-transparent py-4 text-[1.5rem] outline-none"
          {...register("confirmPassword", {
            validate: (value) =>
              value === getValues().password || "Password does not match",
          })}
          onFocus={() => handleFocus("confirmPassword")}
          onBlur={handleBlur}
        />
        <label
          className={`absolute left-8 top-1/2 font-medium ${
            focusedField === "confirmPassword" || confirmPasswordValue
              ? "top-3 text-[1.2rem]"
              : "-translate-y-1/2 text-[1.3rem]"
          } transition-all duration-200 ease-in-out`}
        >
          Repeat password
        </label>
      </div>
      <span className="text-[1.1rem] text-red-700">
        {errors?.confirmPassword?.message}
      </span>

      <button
        className="mt-8 flex h-20 w-full items-center justify-center bg-brand-500 font-semibold text-grey-0 transition-all duration-300 ease-linear hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-brand-200"
        disabled={isSigningUp}
      >
        {isSigningUp ? (
          <p className="flex items-center gap-2">
            <SpinnerMini />
            <span> Signing up... </span>
          </p>
        ) : (
          "Sign Up"
        )}
      </button>

      <p className="mt-8 text-center text-[1.4rem] font-medium text-grey-400">
        <span>Already have an account?</span>{" "}
        <Link to={"/login"} className="text-brand-500">
          login
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
