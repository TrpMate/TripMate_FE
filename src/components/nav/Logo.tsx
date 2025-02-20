import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <p className="text-[40px] leading-[50px] text-[#111111] font-medium">
        TripMate
      </p>
    </Link>
  );
};

export default Logo;
