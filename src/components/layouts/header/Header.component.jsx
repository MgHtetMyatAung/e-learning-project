import { NavLink } from "react-router-dom";
import { navItems } from "./nav-items";
import { Button } from "../../button";
import { Logo, RightArrow } from "../../../assets/icons";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

export default function Header() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: for smooth scrolling
    });
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setIsHeaderHidden(true);
    } else {
      // Scrolling up
      setIsHeaderHidden(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`bg-white-1 laptop:py-3 sticky z-30 transition-all duration-500 ${
        isHeaderHidden
          ? "top-[-40px] tablet:top-[-55px] laptop:top-[-67px]"
          : "top-[-1px] shadow"
      } shadow-sm`}
    >
      <div className=" h-[40px] tablet:h-[55px] w-full laptop:w-[calc(100vw-50px)] bg-orange-8 mx-auto laptop:rounded-[8px]">
        <div className=" h-full flex items-center gap-3 justify-center">
          <p className=" text-sm tablet:text-[18px] text-white-1">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </p>
          <img
            src={RightArrow}
            alt="arrow"
            className=" w-[20px] h-[20px] tablet:w-[24px] tablet:h-[24px]"
          />
        </div>
      </div>
      <nav className=" container mx-auto py-3 flex items-center justify-between ">
        <div className=" flex items-center gap-[50px]">
          <img
            src={Logo}
            alt="logo"
            className=" w-[40px] tablet:w-[44px] laptop:w-[54px] h-[40px] tablet:h-[44px] laptop:h-[54px]"
          />
          <ul className=" hidden laptop:flex items-center gap-[30px]">
            {navItems.map(({ label, link }) => (
              <NavLink
                key={label}
                to={link}
                className=" tablet:text-lg"
                onClick={scrollToTop}
              >
                {label}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* buttons  */}
        <div className=" flex items-center gap-5">
          <div>
            <Button label={"Sign Up"} page={"sign-up"} />
            <Button
              label={"Login"}
              page={"login"}
              className={" bg-orange-8 text-white-1"}
            />
          </div>
          <MobileMenu handleScroll={scrollToTop} />
        </div>
      </nav>
    </header>
  );
}
