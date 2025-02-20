import TripTitle from "./TripTitle";

type TripCreateButtonProps = {
  title: string;
  buttonPosition: string;
  link: string;
};

const TripCreateButton = ({
  title,
  buttonPosition,
  link,
}: TripCreateButtonProps) => {
  const buttonType = {
    left: "left",
    right: "right",
  };

  return (
    <div className="flex items-center">
      {buttonType.right === buttonPosition ? (
        <>
          <div className="w-[10px] h-[10px] bg-white rounded-full" />
          <div className="w-[115px] h-[1px] bg-white" />
          <TripTitle title={title} link={link} />
        </>
      ) : (
        <>
          <TripTitle title={title} link={link} />
          <div className="w-[115px] h-[1px] bg-white" />
          <div className="w-[10px] h-[10px] bg-white rounded-full" />
        </>
      )}
    </div>
  );
};

export default TripCreateButton;
