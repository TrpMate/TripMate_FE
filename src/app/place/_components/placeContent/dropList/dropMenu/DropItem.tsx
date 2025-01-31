type DropItemProps = {
  type: 'ranking' | 'numOfRow'
  name?: string
  list: { id: number; name: string }[]
  onClick: (name: string) => () => void
}

const DropItem = ({ type, name, list, onClick }: DropItemProps) => {
  const buttonWidth = {
    ranking: 'w-[130px]',
    numOfRow: 'w-[170px]',
  }
  return (
    <div
      className={`${buttonWidth[type]} flex flex-col justify-start gap-[25px] rounded-[10px] border border-[#CCCCCC] bg-white py-[28px] pl-[19px]`}
    >
      {list.map((item) => (
        <div key={item.id} className="flex h-[25px] items-center" onClick={onClick(item.name)}>
          <p
            className={`${
              name === item.name ? 'text-[#333333]' : 'text-[#CCCCCC]'
            } cursor-pointer text-[20px] font-medium leading-none`}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default DropItem
