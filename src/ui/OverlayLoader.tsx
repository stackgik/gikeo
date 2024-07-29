const OverlayLoader = () => {
  return (
    <div className="fixed inset-0 z-[999999] h-screen w-full backdrop-blur-md">
      <div className="loader fixed inset-1/2 h-[30px] w-[65px] -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default OverlayLoader;
