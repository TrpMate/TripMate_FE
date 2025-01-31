import Link from 'next/link'

type TripTitleProps = {
  title: string
  link: string
}

const TripTitle = ({ title, link }: TripTitleProps) => {
  return (
    <Link href={link}>
      <div className="flex size-[170px] items-center justify-center rounded-full border text-[30px]">
        <p className="font-medium">{title}</p>
      </div>
    </Link>
  )
}

export default TripTitle
