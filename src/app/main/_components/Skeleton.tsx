type SkeletonType = {
  length: number;
  skeletonType: "main" | "place";
};

const Skeleton = ({ length, skeletonType }: SkeletonType) => {
  const renderSkeleton = {
    main: "w-[330px] h-[500px] rounded-[20px]",
    place: "w-[330px] h-[360px] rounded-[30px]",
  };

  return (
    <>
      {Array.from({ length: length }).map((_, index) => (
        <div
          key={index}
          className={`${skeletonType === "place" ? "mb-10" : "mb-0"}`}
        >
          <div
            className={`${renderSkeleton[skeletonType]} skeleton relative overflow-hidden`}
          />
          <div className="mt-[20px]">
            <p className="text-[22px] w-[200px] h-[40px] skeleton  font-extrabold"></p>
            <p className=" mt-2 text-[16px] ml-[4px] skeleton  w-[300px] h-[20px] font-medium"></p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skeleton;
