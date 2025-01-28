import { useOnclickOutside } from '@/hooks/useOnClickOutSide'
import { useRef, useState } from 'react'
import DropDown from './dropMenu/DropDown'
import MenuList from './dropMenu/MenuList'

type DropListProps = {
  rankingName: { name: string; value: string }
  setRankingName: (value: { name: string; value: string }) => void
  numOfRowName: { name: string; value: number }
  setNumOfRowName: (value: { name: string; value: number }) => void
}

const DropList = ({
  rankingName,
  setRankingName,
  numOfRowName,
  setNumOfRowName,
}: DropListProps) => {
  const [numOfRowOpen, setNumOfRowOpen] = useState(false)
  const [rankingOpen, setRankingOpen] = useState(false)
  const dropRef = useRef(null)
  const dropRef2 = useRef(null)

  useOnclickOutside(dropRef, () => setRankingOpen(false))
  useOnclickOutside(dropRef2, () => setNumOfRowOpen(false))

  return (
    <div className="z-10 flex w-full items-center justify-end gap-[10px]">
      <div className="relative">
        <DropDown
          dropOpen={rankingOpen}
          type="ranking"
          title={rankingName.name}
          onClick={() => setRankingOpen(!rankingOpen)}
        />
        {rankingOpen && (
          <MenuList
            ref={dropRef}
            setRankingOpen={setRankingOpen}
            rankingOpen={rankingOpen}
            setRankingName={setRankingName}
            rankingName={rankingName.name}
          />
        )}
      </div>
      <div className="relative">
        <DropDown
          dropOpen={numOfRowOpen}
          type="numOfRow"
          title={numOfRowName.name}
          onClick={() => setNumOfRowOpen(!numOfRowOpen)}
        />
        {numOfRowOpen && (
          <MenuList
            ref={dropRef2}
            setNumOfRowOpen={setNumOfRowOpen}
            numOfRowOpen={numOfRowOpen}
            setNumOfRowName={setNumOfRowName}
            numOfRowName={numOfRowName.name}
          />
        )}
      </div>
    </div>
  )
}

export default DropList
