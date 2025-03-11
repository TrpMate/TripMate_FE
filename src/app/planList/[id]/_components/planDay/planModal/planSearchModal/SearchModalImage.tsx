import { SearchModalImageProps } from "@/app/planList/[id]/types/planDetailType";
import Image from "next/image";

const SearchModalImage = ({ image }: SearchModalImageProps) => {
  return (
    <div className="size-[60px] rounded-full relative">
      <Image
        src={image ? image : "/images/no_image.png"}
        fill
        sizes="100%"
        className="object-cover rounded-full"
        alt="이미지"
      />
    </div>
  );
};

export default SearchModalImage;
