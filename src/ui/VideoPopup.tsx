import { Dispatch, SetStateAction } from 'react';
import { HiOutlineXMark } from 'react-icons/hi2';
import ReactPlayer from 'react-player/youtube';

type VideoPopupProps = {
  videoId: string | null;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  resetVideoState: () => void;
};

const VideoPopup = ({ videoId, show, resetVideoState }: VideoPopupProps) => {
  return (
    <>
      {show && (
        <div className="overlay h-screen w-full backdrop-blur-sm fixed top-0 left-0 z-10"></div>
      )}
      {show && (
        <div className="w-[100rem] h-[50rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <span
            className="h-[4rem] flex items-center justify-center text-[2rem] bg-brand-50 aspect-square rounded-full absolute -top-[4rem] -right-[6rem] z-20 cursor-pointer"
            onClick={resetVideoState}
          >
            <HiOutlineXMark />
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
