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

const PlanDetailModal = ({
  dayId,
  setIsOpen,
  onSave,
}: PlanDetailModalProps) => {
  const [listOpen, setListOpen] = useState(false);
  const [listType, setListType] = useState(12);

  const [searchTitle, setSearchTitle] = useState("");
  const [courseData, setCourseData] = useState({
    courseDayId: dayId,
    placeName: "",
    category: "",
    contentTypeId: "",
    visitStartTime: "",
    visitEndTime: "",
    mapX: 0,
    mapY: 0,
    address: "",
    phoneNumber: "",
  });

  const handleSubmit = () => {
    onSave(courseData);
    setIsOpen(false);
  };

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
        <PlanModalPlace courseData={courseData} setCourseData={setCourseData} />
        <PlanModalSelect data={courseData} onClick={() => setListOpen(true)} />
        <PlanMemo />
        <PlanModalButton onClick={handleSubmit} />
        {listOpen && (
          <PlanSearchModal
            closeOnClick={() => setListOpen(false)}
            searchTitle={searchTitle}
            listType={listType}
            setListType={setListType}
            setSearchText={setSearchTitle}
            setListOpen={setListOpen}
            courseData={courseData}
            setCourseData={setCourseData}
          />
        )}
      </div>
    </div>
  );
};

export default PlanDetailModal;
