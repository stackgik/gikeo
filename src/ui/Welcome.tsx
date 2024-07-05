import useCurrentUser from "../features/auth/useCurrentUser";

const Welcome = () => {
  const { user } = useCurrentUser();
  const username = user?.user_metadata.username;

  return (
    <div className="flex flex-col gap-2">
      <span className="text-4xl font-bold capitalize text-grey-800 dark:text-dark-grey-800">
        {`Hey ${username}!`}
      </span>
      <small className="text-[1.3rem] font-medium dark:text-dark-grey-500">
        Enjoy the best of times
      </small>
    </div>
  );
};

export default Welcome;
