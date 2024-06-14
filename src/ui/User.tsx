const User = () => {
  return (
    <div className="flex gap-4 items-center ">
      <figure className="h-[40px] w-[40px] rounded-full overflow-hidden">
        <img
          src="/default-user.png"
          alt="user avatar"
          className="object-cover w-full h-full"
        />
      </figure>

      <span className="text-[1.8rem] dark:text-grey-50 font-semibold">
        Stackgik
      </span>
    </div>
  );
};

export default User;
