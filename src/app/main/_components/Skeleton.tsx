type SkeletonType = {
  length: number
  skeletonType: 'main' | 'place'
}

const Skeleton = ({ length, skeletonType }: SkeletonType) => {
  const renderSkeleton = {
    main: 'w-[330px] h-[500px] rounded-[20px]',
    place: 'w-[330px] h-[360px] rounded-[30px]',
  }

  return (
    <>
      {Array.from({ length: length }).map((_, index) => (
        <div key={index} className={`${skeletonType === 'place' ? 'mb-10' : 'mb-0'}`}>
          <div className={`${renderSkeleton[skeletonType]} skeleton relative overflow-hidden`} />
          <div className="mt-[20px]">
            <p className="skeleton h-[40px] w-[200px] text-[22px] font-extrabold"></p>
            <p className="skeleton ml-[4px] mt-2 h-[20px] w-[300px] text-[16px] font-medium"></p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Skeleton
