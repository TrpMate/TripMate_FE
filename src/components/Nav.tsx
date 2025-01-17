import Link from 'next/link'
import React from 'react'

const Nav = () => {
  const menuList = [
    { name: 'HOME', link: '/main' },
    { name: 'PLACE', link: '/' },
    { name: 'PLAN', link: '/' },
    { name: 'HELP', link: '/' },
  ]
  return (
    <nav className="absolute z-10 flex h-[100px] w-full max-w-[1920px] items-center justify-between bg-[rgba(0,0,0,0.1)] px-[50px] text-white">
      <Link href={'/'}>
        <p className="text-[40px] font-medium leading-[50px]">TripMate</p>
      </Link>
      <ul className="flex gap-[70px] text-[22px] font-medium leading-[22px]">
        {menuList.map((menu, index) => (
          <Link key={index} href={menu.link}>
            <li>{menu.name}</li>
          </Link>
        ))}
      </ul>
      <Link href={'/login'}>
        <div className="flex w-[165.33px] justify-end self-start">
          <div className="leading-0 flex h-[40px] items-center justify-center rounded-[38px] border px-[22px] py-[9px]">
            <p className="text-[18px] font-bold leading-[22px]">Login</p>
          </div>
        </div>
      </Link>
    </nav>
  )
}

export default Nav
