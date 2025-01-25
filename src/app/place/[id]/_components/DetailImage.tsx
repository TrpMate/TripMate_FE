import Image from "next/image";
type DetailImageProps = {
  image: string;
};

const DetailImage = ({ image }: DetailImageProps) => {
  return (
    <div className="w-full h-[600px] relative">
      <Image
        src={image ? image : "/images/no_image.png"}
        fill
        sizes="1"
        style={{ objectFit: "cover" }}
        alt="디테일 이미지"
        priority
      />
    </div>
  );
};

export default DetailImage;
