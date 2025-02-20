import Logo from "./Logo";
import NavBackground from "./NavBackground";
import NavLoginButton from "./NavLoginButton";
import NevMenu from "./NevMenu";

const MainNav = () => {
  return (
    <>
      <nav
        className={
          "w-full max-w-[1920px] h-[100px] flex items-center px-[50px] justify-between  fixed z-50"
        }
      >
        <Logo />
        <NevMenu />
        <NavLoginButton />
      </nav>
      <NavBackground />
    </>
  );
};

export default MainNav;
