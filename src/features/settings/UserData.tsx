import { FormEvent, useState } from "react";
import AvatarInput from "../../ui/AvatarInput";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import useCurrentUser from "../auth/useCurrentUser";
import useUpdatedUser from "../auth/useUpdatedUser";
import OverlayLoader from "../../ui/OverlayLoader";

const UserData = () => {
  const { user } = useCurrentUser();
  const email = user?.email;
  const currentUsername = user?.user_metadata.username;

  const [username, setUsername] = useState(currentUsername);
  const [avatar, setAvatar] = useState<File | null>(null);

  const { updateUser, isUpdatingUser } = useUpdatedUser();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username) return;
    updateUser(
      { username, avatar },
      {
        onSettled: () => {
          setAvatar(null);
          (e.target as HTMLFormElement).reset();
        },
      },
    );
  };

  if (isUpdatingUser) return <OverlayLoader />;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium text-grey-800 dark:text-dark-grey-800">
        Update user data
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 rounded-sm bg-grey-0 p-10 dark:bg-dark-grey-0"
      >
        <InputField
          type={"text"}
          disabled={true}
          label={"Email address"}
          value={email}
        />

        <InputField
          type={"text"}
          disabled={isUpdatingUser}
          label={"Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <AvatarInput setAvatar={setAvatar} />

        <div className="flex justify-end gap-6">
          <Button
            type="reset"
            variation="secondary"
            size={"medium"}
            onClick={() => {}}
          >
            Cancel
          </Button>

          <Button disabled={isUpdatingUser} variation="primary" size={"medium"}>
            Update account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserData;
