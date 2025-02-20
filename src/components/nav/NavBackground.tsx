"use client";
import { useEffect, useState } from "react";

const NavBackground = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`w-full max-w-[1920px] h-[100px] flex items-center px-[50px] justify-between transition_css bg-[#F5F5F5] fixed z-40 ${
        scroll === 0 ? "bg-opacity-60" : "bg-opacity-100"
      }`}
    />
  );
};

export default NavBackground;
