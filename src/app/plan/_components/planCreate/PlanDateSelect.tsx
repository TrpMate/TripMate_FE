import { Dispatch, SetStateAction } from 'react'
import PlanSubTitle from '../PlanSubTitle'
import PlanCalendar from './PlanCalendar'
import { PlanDataTypes } from './PlanCreateContent'
import PlanDateButton from './PlanDateButton'

type PlanDateSelectProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  selectedDate: PlanDataTypes
  setSelectedDate: Dispatch<SetStateAction<PlanDataTypes>>
  onClick: () => void
}

const PlanDateSelect = ({
  isOpen,
  setIsOpen,
  selectedDate,
  setSelectedDate,
  onClick,
}: PlanDateSelectProps) => {
  return (
    <div className="mt-[25px] w-full">
      <PlanSubTitle cType="title" title="여행 기간" />
      <div className="relative flex w-full items-center justify-between">
        {isOpen && <div className="absolute top-0 h-[60px] w-full" />}
        <PlanDateButton onClick={onClick} title={selectedDate.startDate} />
        <p>-</p>
        <PlanDateButton onClick={onClick} title={selectedDate.endDate} />
        {isOpen && (
          <div className="absolute top-[115px] flex w-full items-center justify-center">
            <PlanCalendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              setIsOpen={setIsOpen}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default PlanDateSelect
