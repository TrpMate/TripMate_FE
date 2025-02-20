import { menuList } from "@/utils/Menu";
import Link from "next/link";

const NevMenu = () => {
  return (
    <ul className="flex text-[22px] text-[#353535] font-medium leading-[22px] gap-[70px]">
      {menuList.map((menu) => (
        <Link key={menu.id} href={menu.link}>
          <li className="hover:text-[#AED400]">{menu.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default NevMenu;
