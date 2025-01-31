import TripTitle from './TripTitle'

type TripCreateButtonProps = {
  title: string
  buttonPosition: string
  link: string
}

const TripCreateButton = ({ title, buttonPosition, link }: TripCreateButtonProps) => {
  const buttonType = {
    left: 'left',
    right: 'right',
  }

  return (
    <div className="flex items-center">
      {buttonType.right === buttonPosition ? (
        <>
          <div className="size-[10px] rounded-full bg-white" />
          <div className="h-px w-[115px] bg-white" />
          <TripTitle title={title} link={link} />
        </>
      ) : (
        <>
          <TripTitle title={title} link={link} />
          <div className="h-px w-[115px] bg-white" />
          <div className="size-[10px] rounded-full bg-white" />
        </>
      )}
    </div>
  )
}

export default TripCreateButton
