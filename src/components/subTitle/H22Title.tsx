type H22TitleProps = {
  title: string;
};

const H22Title = ({ title }: H22TitleProps) => {
  return (
    <div className="flex items-center h-[22px]">
      <p className="text-[18px] leading-none font-medium">{title}</p>
    </div>
  );
};

export default H22Title;
