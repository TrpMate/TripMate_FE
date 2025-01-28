import Link from 'next/link'

const Nav = () => {
  const menuList = [
    { name: 'HOME', link: '/main' },
    { name: 'PLACE', link: '/place' },
    { name: 'PLAN', link: '/planList' },
    { name: 'HELP', link: '/' },
  ]
  return (
    <nav className="absolute z-10 flex h-[100px] w-full max-w-[1920px] items-center justify-between bg-[#F5F5F5] bg-opacity-60 px-[50px]">
      <Link href={'/main'}>
        <p className="text-[40px] font-medium leading-[50px] text-[#111111]">TripMate</p>
      </Link>
      <ul className="flex gap-[70px] text-[22px] font-medium leading-[22px] text-[#353535]">
        {menuList.map((menu, index) => (
          <Link key={index} href={menu.link}>
            <li>{menu.name}</li>
          </Link>
        ))}
      </ul>
      <Link href={'/login'}>
        <div className="flex w-[165.33px] justify-end self-start">
          <div className="leading-0 flex h-[40px] items-center justify-center rounded-[38px] border border-[rgba(0,0,0,0.5)] px-[22px] py-[9px]">
            <p className="text-[18px] font-bold leading-[22px] text-[#353535]">Login</p>
          </div>
        </div>
      </Link>
    </nav>
  )
}

export default Nav
