type SkeletonType = {
  skeletonType: 'main' | 'place'
}

const Skeleton = ({ skeletonType }: SkeletonType) => {
  const renderSkeleton = {
    main: 'w-[330px] h-[500px] rounded-[20px]',
    place: 'w-[330px] h-[360px] rounded-[30px] mt-10',
  }

  return (
    <div className={`${skeletonType === 'place' ? 'mb-10' : 'mb-0'}`}>
      <div className={`${renderSkeleton[skeletonType]} relative overflow-hidden bg-gray-200`} />
      <div className="mt-[20px]">
        <p className="h-[40px] w-[200px] bg-gray-200 text-[22px] font-extrabold"></p>
        <p className="ml-[4px] mt-2 h-[20px] w-[300px] bg-gray-200 text-[16px] font-medium"></p>
      </div>
    </div>
  )
}

export default Skeleton
