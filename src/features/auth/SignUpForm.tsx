import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

type FormData = {
  username: string;
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
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const usernameValue = watch("username", "");
  const passwordValue = watch("password", "");
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
      <div className="border border-grey-200 pt-10 px-8 relative">
        <input
          type="text"
          className="outline-none text-[1.5rem] py-4 w-full"
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
          className={`absolute top-1/2 left-8 font-medium ${
            focusedField === "username" || usernameValue
              ? "text-[1.2rem]"
              : "text-[1.3rem]"
          } ${
            focusedField === "username" || usernameValue
              ? "top-3"
              : "-translate-y-1/2"
          } transition-all duration-200 ease-in-out`}
        >
          Username
        </label>
      </div>
      <span className="text-red-700 text-[1.1rem]">
        {errors?.username?.message}
      </span>

      <div className="border border-grey-200 pt-10 px-8 relative">
        <input
          type="password"
          className="outline-none text-[1.5rem] py-4 w-full"
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
          className={`absolute top-1/2 left-8 font-medium ${
            focusedField === "password" || passwordValue
              ? "text-[1.2rem]"
              : "text-[1.3rem]"
          } ${
            focusedField === "password" || passwordValue
              ? "top-3"
              : "-translate-y-1/2"
          } transition-all duration-200 ease-in-out`}
        >
          Password
        </label>
      </div>
      <span className="text-red-700 text-[1.1rem]">
        {errors?.password?.message}
      </span>

      <div className="border border-grey-200 pt-10 px-8 relative">
        <input
          type="password"
          className="outline-none text-[1.5rem] py-4 w-full"
          {...register("confirmPassword", {
            validate: (value) =>
              value === getValues().password || "Password does not match",
          })}
          onFocus={() => handleFocus("confirmPassword")}
          onBlur={handleBlur}
        />
        <label
          className={`absolute top-1/2 left-8 font-medium ${
            focusedField === "confirmPassword" || confirmPasswordValue
              ? "text-[1.2rem]"
              : "text-[1.3rem]"
          } ${
            focusedField === "confirmPassword" || confirmPasswordValue
              ? "top-3"
              : "-translate-y-1/2"
          } transition-all duration-200 ease-in-out`}
        >
          Repeat password
        </label>
      </div>
      <span className="text-red-700 text-[1.1rem]">
        {errors?.confirmPassword?.message}
      </span>

      <Button variation="primary" width="full" size="large">
        Create an account
      </Button>

      <span className=" block text-center text-2xl mt-4 text-grey-800">
        Already have an account?{" "}
        <Link className="text-brand-500" to="/login">
          Login
        </Link>
      </span>
    </form>
  );
};

export default SignUpForm;
