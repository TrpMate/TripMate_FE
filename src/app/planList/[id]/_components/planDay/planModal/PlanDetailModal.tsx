import { useOnclickOutside } from "@/hooks/useOnClickOutSide";
import { useRef, useState } from "react";
import { PlanDetailModalProps } from "../../../types/planDetailType";
import PlanMemo from "./PlanMemo";
import PlanModalButton from "./PlanModalButton";
import PlanModalPlace from "./PlanModalPlace";
import PlanModalSelect from "./PlanModalSelect";
import PlanModalTime from "./PlanModalTime";
import PlanModalTitle from "./PlanModalTitle";

const PlanDetailModal = ({ setIsOpen }: PlanDetailModalProps) => {
  const [data, setData] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const modalRef = useRef(null);
  useOnclickOutside(modalRef, () => {
    setIsOpen(false);
  });
  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center  bg-[#15232F] bg-opacity-80 z-[999]">
      <div ref={modalRef} className="w-[640px] bg-white p-10 rounded-[10px]">
        <PlanModalTitle onClick={() => setIsOpen(false)} />
        <PlanModalTime />
        <PlanModalPlace />
        <PlanModalSelect data={data} onClick={() => {}} />
        <PlanMemo />
        <PlanModalButton />
      </div>
    </div>
  );
};

export default PlanDetailModal;
