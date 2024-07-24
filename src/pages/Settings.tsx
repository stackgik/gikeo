import PasswordData from "../features/settings/PasswordData";
import UserData from "../features/settings/UserData";

const Settings = () => {
  return (
    <div className="mx-auto my-24 flex w-full max-w-[500px] flex-col gap-12 mobile:px-8">
      <h1 className="mb-4 text-5xl font-bold text-grey-800 dark:text-dark-grey-800">
        Update your account
      </h1>
      <UserData />
      <PasswordData />
    </div>
  );
};

export default Settings;
