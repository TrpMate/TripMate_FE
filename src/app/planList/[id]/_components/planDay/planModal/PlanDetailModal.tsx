import { useOnclickOutside } from "@/hooks/useOnClickOutSide";
import { useRef, useState } from "react";
import { PlanDetailModalProps } from "../../../types/planDetailType";
import PlanMemo from "./PlanMemo";
import PlanModalButton from "./PlanModalButton";
import PlanModalPlace from "./PlanModalPlace";
import PlanModalSelect from "./PlanModalSelect";
import PlanModalTime from "./PlanModalTime";
import PlanModalTitle from "./PlanModalTitle";
import PlanSearchModal from "./planSearchModal/PlanSearchModal";
import { useAddPlanDay } from "../../../_api";

const PlanDetailModal = ({ dayId, setIsOpen }: PlanDetailModalProps) => {
  const [listOpen, setListOpen] = useState(false);
  const [listType, setListType] = useState(12);
  const [searchTitle, setSearchTitle] = useState("");
  const [data, setData] = useState({
    contentid: "",
    contenttypeid: "",
    name: "",
    address: "",
    phone: "",
  });
  const { mutate } = useAddPlanDay();

  const modalRef = useRef(null);
  useOnclickOutside(modalRef, () => {
    setIsOpen(false);
  });


  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center  bg-[#15232F] bg-opacity-80 z-[999]">
      <div
        ref={modalRef}
        className="w-[640px] bg-white p-10 rounded-[10px] relative"
      >
        <PlanModalTitle title="플랜 수정" onClick={() => setIsOpen(false)} />
        <PlanModalTime />
        <PlanModalPlace />
        <PlanModalSelect data={data} onClick={() => setListOpen(true)} />
        <PlanMemo />
        <PlanModalButton
          onClick={() => {
            console.log("저장하기",);
            mutate({
              data: {
                id: dayId,
                data: data,
              }

            }, {

              onSuccess: () => {
                setIsOpen(false);
                setData({
                  contentid: "",
                  contenttypeid: "",
                  name: "",
                  address: "",
                  phone: "",
                });
                setListOpen(false);
              }
            })
          }}
        />
        {listOpen && (
          <PlanSearchModal
            closeOnClick={() => setListOpen(false)}
            searchTitle={searchTitle}
            listType={listType}
            setListType={setListType}
            setSearchText={setSearchTitle}
            setListOpen={setListOpen}
            setData={setData}
          />
        )}
      </div>
    </div>
  );
};

export default PlanDetailModal;
