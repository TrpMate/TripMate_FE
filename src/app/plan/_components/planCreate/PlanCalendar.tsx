import { useOnclickOutside } from "@/hooks/useOnClickOutSide";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Dispatch, SetStateAction, useRef } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { PlanDataTypes } from "./PlanCreateContent";

type PlanCalendarProps = {
  selectedDate: PlanDataTypes;
  setSelectedDate: Dispatch<SetStateAction<PlanDataTypes>>;
  setIsOpen: (isOpen: boolean) => void;
};

const PlanCalendar = ({
  selectedDate,
  setSelectedDate,
  setIsOpen,
}: PlanCalendarProps) => {
  const selectedDateObj1 = new Date(selectedDate.startDate);
  const selectedDateObj2 = new Date(selectedDate.endDate);
  const pickerRef = useRef<HTMLDivElement | null>(null);

  useOnclickOutside(pickerRef, () => setIsOpen(false));

  const css = `
    .rdp-nav{
      width:100%;
      justify-content:space-between;  
    }
    .rdp-month_caption {
        justify-content:center;
    }
    .rdp-chevron{
      fill:#D0FF00;
    }
    .rdp-today:not(.rdp-outside) {
      color: #D0FF00;
    }
    .rdp-range_end .rdp-day_button{
      background-color: #D0FF00;
    }
    .rdp-range_start .rdp-day_button{
      background-color: #D0FF00;
    }
    .rdp-selected .rdp-day_button{
    border:none;
    }
`;

  const handleRangeSelect = (range: DateRange | undefined) => {
    if (range) {
      const formattedStartDate = range.from
        ? format(range.from, "yyyy-MM-dd")
        : "";
      const formattedEndDate = range.to
        ? format(range.to, "yyyy-MM-dd")
        : formattedStartDate;

      setSelectedDate((prev) => ({
        ...prev,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      }));
    }
  };

  return (
    <div
      ref={pickerRef}
      className=" transform scale-[1.3] border bg-white rounded-2xl overflow-hidden"
    >
      <style>{css}</style>
      <DayPicker
        mode="range"
        locale={ko}
        showOutsideDays
        selected={{
          from: selectedDateObj1,
          to: selectedDateObj2,
        }}
        disabled={{ before: new Date() }}
        startMonth={new Date()}
        onSelect={handleRangeSelect}
      />
    </div>
  );
};

export default PlanCalendar;
