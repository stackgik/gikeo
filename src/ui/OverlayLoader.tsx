const OverlayLoader = () => {
  return (
    <>
      <div className="fixed inset-0 z-40 h-screen w-full backdrop-blur-md"></div>
      <div className="loader fixed inset-1/2 z-50 h-[30px] w-[65px] -translate-x-1/2 -translate-y-1/2"></div>
    </>
  );
};

export default OverlayLoader;
