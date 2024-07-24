import { Dispatch, SetStateAction } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import ReactPlayer from "react-player/youtube";

type VideoPopupProps = {
  videoId: string | null;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  resetVideoState: () => void;
};

const VideoPopup = ({
  videoId,
  show,
  resetVideoState,
  setShow,
}: VideoPopupProps) => {
  return (
    <>
      {show && (
        <div
          className="overlay fixed left-0 top-0 z-10 h-screen w-full backdrop-blur-sm"
          onClick={() => setShow(false)}
        ></div>
      )}
      {show && (
        <div className="fixed left-1/2 top-1/2 z-20 h-[50rem] w-full max-w-[100rem] -translate-x-1/2 -translate-y-1/2 PC:h-[40rem]">
          <span
            className="absolute -right-[6rem] -top-[4rem] z-20 flex aspect-square h-[4rem] cursor-pointer items-center justify-center rounded-full bg-brand-200 text-[2rem] PC:hidden"
            onClick={resetVideoState}
          >
            <HiOutlineXMark className="dark:text-dark-grey-100" />
          </span>

          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            width="100%"
            height="100%"
          />
        </div>
      )}
    </>
  );
};

export default VideoPopup;
