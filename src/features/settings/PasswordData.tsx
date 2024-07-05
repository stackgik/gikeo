import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import useVerifyPassword from "../auth/useVerifyPassword";
import useCurrentUser from "../auth/useCurrentUser";
import useLogout from "../auth/useLogout";
import useUpdatedUser from "../auth/useUpdatedUser";
import OverlayLoader from "../../ui/OverlayLoader";

type FormUpdateData = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const PasswordData = () => {
  const { user } = useCurrentUser();
  const { verifyPassword, isVerifyingPassword, passwordVerificationError } =
    useVerifyPassword();
  const { logout, isLoggingOut } = useLogout();
  const { updateUser, isUpdatingUser } = useUpdatedUser();

  const onSubmit = (data: FormUpdateData) => {
    const { oldPassword, newPassword } = data || {};

    if (!user?.email) {
      console.error("User email is not defined");
      return;
    }

    // verify if the old password is valid
    verifyPassword(
      { password: oldPassword, email: user.email },
      {
        onSuccess: () => {
          updateUser({ password: newPassword }, { onSuccess: () => logout() });
        },
      },
    );

    if (passwordVerificationError) return;
  };

  const handleReset = () => {};

  // prettier-ignore
  const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormUpdateData>();

  if (isVerifyingPassword || isLoggingOut || isUpdatingUser)
    return <OverlayLoader />;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium text-grey-800 dark:text-dark-grey-800">
        Update password
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 rounded-sm bg-grey-0 p-10 dark:bg-dark-grey-0"
      >
        <div className="flex w-full flex-col gap-4 text-[1.4rem]">
          <label htmlFor="" className="font-semibold">
            Old password
          </label>
          <input
            type="password"
            {...register("oldPassword", {
              required: "This field is required",
            })}
            className="rounded-sm border border-grey-100 bg-grey-0 px-6 py-[1.5rem] outline-brand-500 disabled:cursor-not-allowed disabled:bg-grey-200 dark:border-dark-grey-100 dark:bg-dark-grey-0 dark:text-dark-grey-700 dark:disabled:bg-dark-grey-200"
          />
          <span className="text-[1.1rem] text-red-700">
            {errors?.oldPassword?.message}
          </span>
        </div>

        <div className="flex w-full flex-col gap-4 text-[1.4rem]">
          <label htmlFor="" className="font-semibold">
            New password
          </label>
          <input
            type="password"
            {...register("newPassword", {
              required: "This field is required",
              pattern: {
                value:
                  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
                message:
                  "The password must be at least 8 characters, lowercase, uppercase, and a special character",
              },
            })}
            className="rounded-sm border border-grey-100 bg-grey-0 px-6 py-[1.5rem] outline-brand-500 disabled:cursor-not-allowed disabled:bg-grey-200 dark:border-dark-grey-100 dark:bg-dark-grey-0 dark:text-dark-grey-700 dark:disabled:bg-dark-grey-200"
          />
          <span className="text-[1.1rem] text-red-700">
            {errors?.newPassword?.message}
          </span>
        </div>

        <div className="flex w-full flex-col gap-4 text-[1.4rem]">
          <label htmlFor="" className="font-semibold">
            Confirm password
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === getValues().newPassword || "Password does not match",
            })}
            className="rounded-sm border border-grey-100 bg-grey-0 px-6 py-[1.5rem] outline-brand-500 disabled:cursor-not-allowed disabled:bg-grey-200 dark:border-dark-grey-100 dark:bg-dark-grey-0 dark:text-dark-grey-700 dark:disabled:bg-dark-grey-200"
          />
          <span className="text-[1.1rem] text-red-700">
            {errors?.confirmPassword?.message}
          </span>
        </div>

        <div className="flex justify-end gap-6">
          <Button
            type="reset"
            variation="secondary"
            size={"medium"}
            onClick={handleReset}
          >
            Cancel
          </Button>

          <Button
            disabled={false}
            variation="primary"
            size={"medium"}
            onClick={() => {}}
          >
            Update password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PasswordData;
