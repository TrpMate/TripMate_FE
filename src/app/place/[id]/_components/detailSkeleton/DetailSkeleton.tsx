const DetailSkeleton = () => {
  return (
    <div className="pt-[100px]">
      <div className="flex flex-col items-center justify-center py-[100px]">
        <div className="skeleton h-[70px] w-[650px]" />
        <div className="skeleton mt-[10px] h-[25px] w-[200px]" />
        <div className="skeleton mt-10 h-[60px] w-[250px] rounded-[30px]" />
      </div>
      <div className="skeleton relative h-[600px] w-full" />
      <div className="px-[240px] pb-[200px] pt-[100px]">
        <div className="skeleton h-[100px] w-full" />
        <div className="skeleton mt-[100px] h-[500px] w-full" />
        <div className="flex items-start gap-[191px] pt-[100px]">
          <div className="flex flex-col gap-[20px]">
            <div className="skeleton h-[33px] w-[200px]" />
            <div className="skeleton h-[33px] w-[200px]" />
            <div className="skeleton h-[33px] w-[200px]" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="skeleton h-[33px] w-[200px]" />
            <div className="skeleton h-[33px] w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailSkeleton
