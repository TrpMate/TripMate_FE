type DetailTitleProps = {
  title: string;
}

const DetailTitle = ({ title }: DetailTitleProps) => {
  return (
    <div className="flex items-center h-[50px]">
      <p className="font-medium text-[40px] leading-none">{title}</p>
    </div>
  );
};

export default DetailTitle;
