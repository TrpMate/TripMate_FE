import Position from "@/utils/svg/Position";
import Image from "next/image";
import Link from "next/link";
import { MenuItemProps } from "../types/mainType";

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <Link href={`/place/${item.contentid}t${item.contenttypeid}`}>
      <div className="w-[330px] h-[500px] rounded-[20px] relative overflow-hidden">
        <Image
          src={item.firstimage ? item.firstimage : "/images/main_no_image.png"}
          style={{ objectFit: "cover" }}
          fill
          sizes="1"
          alt="메뉴 이미지"
          property="image"
        />
      </div>
      <div className="mt-[20px] w-full max-w-[330px]">
        <p className="text-[22px] font-extrabold">{item.title}</p>
        <div className="flex items-center">
          <Position />
          <p className="text-[16px] ml-[4px] font-medium truncate">{`${item.addr1} ${item.addr2}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
