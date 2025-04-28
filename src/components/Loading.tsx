const Loading = () => {
  return (
    <div className="fixed w-screen h-screen z-[999] flex items-center justify-center bg-black bg-opacity-40 top-0">
      <div className="relative w-[172px] h-[172px] border rounded-full">
        <div className="absolute w-[14px] h-[14px] rounded-full bg-white top-1/2 left-1/2 transform -translate-x-1/2 animate-rotate" />
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-[24px] text-white leading-none font-medium">
            TripMate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
