type H27TitleProps = {
  title: string;
};

const H27Title = ({ title }: H27TitleProps) => {
  return (
    <div className="flex items-center h-[27px]">
      <p className="font-medium text-[22px] leading-none">{title}</p>
    </div>
  );
};

export default H27Title;
