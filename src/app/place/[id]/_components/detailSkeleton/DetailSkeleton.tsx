const DetailSkeleton = () => {
  return (
    <div className="pt-[100px]">
      <div className="py-[100px] flex flex-col justify-center items-center">
        <div className="w-[650px] h-[70px] skeleton" />
        <div className="mt-[10px] w-[200px] h-[25px] skeleton" />
        <div className="mt-10 rounded-[30px] w-[250px] h-[60px] skeleton" />
      </div>
      <div className="w-full h-[600px] relative skeleton" />
      <div className="pt-[100px] pb-[200px] px-[240px] ">
        <div className="w-full h-[100px] skeleton" />
        <div className="mt-[100px] w-full h-[500px] skeleton" />
        <div className="pt-[100px] flex items-start gap-[191px]">
          <div className="flex flex-col gap-[20px]">
            <div className="w-[200px] h-[33px] skeleton" />
            <div className="w-[200px] h-[33px] skeleton" />
            <div className="w-[200px] h-[33px] skeleton" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="w-[200px] h-[33px] skeleton" />
            <div className="w-[200px] h-[33px] skeleton" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
