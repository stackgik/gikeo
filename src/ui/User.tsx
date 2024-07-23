import useCurrentUser from "../features/auth/useCurrentUser";

const User = () => {
  const { user } = useCurrentUser();
  const { username, avatar } = user?.user_metadata || {};

  return (
    <div className="flex items-center gap-4">
      <figure className="h-[40px] w-[40px] overflow-hidden rounded-full">
        <img
          src={avatar || "/default-user.png"}
          alt="user avatar"
          className="h-full w-full object-cover"
        />
      </figure>

      <span className="text-[1.8rem] font-semibold capitalize miniDesktop:hidden dark:text-grey-50">
        {username}
      </span>
    </div>
  );
};

export default User;
