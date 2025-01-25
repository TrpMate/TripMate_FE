type DetailOverviewProps = {
  overview: string;
};

const DetailOverview = ({ overview }: DetailOverviewProps) => {
  return (
    <div className="">
      <p>{overview}</p>
    </div>
  );
};

export default DetailOverview;
