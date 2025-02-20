import PlaceRightArrow from "@/utils/svg/PlaceRightArrow";
import Image from "next/image";
import Link from "next/link";
import ItemIcon from "./ItemIcon";

type ContentItemProps = {
  href: string;
  src: string;
  title: string;
  content: string;
};

const ContentItem = ({ href, src, title, content }: ContentItemProps) => {
  return (
    <Link
      href={href}
      className="w-[330px] border rounded-[30px] overflow-hidden relative"
    >
      <ItemIcon number={100} />
      <div className="w-full h-[360px] relative">
        <Image
          src={src}
          fill
          className="rounded-[30px] -z-10"
          sizes="1"
          style={{ objectFit: "cover" }}
          alt="플레이스 이미지"
        />
      </div>
      <div className="py-[25px] px-[21px] flex justify-between items-center">
        <div className="max-w-[245px]">
          <p className="font-medium text-[22px] leading-1 truncate">{title}</p>
          <p className="font-medium text-[14px] mt-[5px] leading-1 text-[#353535]">
            {content}
          </p>
        </div>
        <PlaceRightArrow />
      </div>
    </Link>
  );
};

export default ContentItem;
