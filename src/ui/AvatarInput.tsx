import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IAvatar {
  setAvatar: Dispatch<SetStateAction<File | null>>;
}

const AvatarInput = ({ setAvatar }: IAvatar) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setAvatar(e.target.files[0]);
  };

  return (
    <div>
      <label htmlFor="" className="mb-4 block text-[1.4rem] font-semibold">
        Avatar image
      </label>
      <input
        type="file"
        className="fileInput"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default AvatarInput;
