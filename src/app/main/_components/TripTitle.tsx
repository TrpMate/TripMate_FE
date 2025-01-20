import Link from "next/link";
import React from "react";

type TripTitleProps = {
  title: string;
  link: string;
};

const TripTitle = ({ title, link }: TripTitleProps) => {
  return (
    <Link href={link}>
      <div className="w-[170px] text-[30px] h-[170px] rounded-full border flex items-center justify-center">
        <p className="font-medium">{title}</p>
      </div>
    </Link>
  );
};

export default TripTitle;
