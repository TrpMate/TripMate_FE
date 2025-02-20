import CategoryDownArrow from "@/utils/svg/CategoryDownArrow";

type CategoriesProps = {
  categoryName: string;
  onClick: () => void;
};

const Categories = ({ categoryName, onClick }: CategoriesProps) => {
  return (
    <div
      className="flex items-center pl-[22px] pr-[10px] cursor-pointer relative"
      onClick={onClick}
    >
      <p className="text-[20px] text-nowrap text-[#333333] font-medium mr-[33px]">
        {categoryName}
      </p>
      <CategoryDownArrow />
    </div>
  );
};

export default Categories;
