"use client";
import { useEffect, useRef, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import IconContacts from "./IconContacts";
import Logo from "../../public/logo1.svg";
import Image from "next/image";
function Header() {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header
      className={`w-full flex justify-between items-center py-8 gap-5 lg:gap-10 fixed top-0 px-14 lg:px-24  transition-all duration-300 z-50  ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${open ? "bg-background" : "bg-opacity-70 backdrop-blur-sm"}`}
    >
      <Image
        src={Logo}
        alt="Logo RB"
        width={40}
        height={40}
        className="size-10 lg:size-11"
      />
      <div className="flex justify-center items-center gap-4">
        <nav>
          <ul
            className={`${
              open
                ? "flex flex-col absolute bg-background right-0 top-24 w-full gap-10 h-[calc(100vh-6rem)] "
                : "hidden lg:flex "
            }  lg:flex-row justify-center items-center gap-14 lg:gap-9  `}
          >
            <li className="active:text-white hover:text-white hover:font-medium hover:-translate-y-1 py-0 transition-all hover:light:text-black">
              <a href="#about" onClick={handleLinkClick}>
                <span className="text-primary-dark dark:text-primary-ligth active:font-semibold ">
                  #
                </span>
                sobre-mi
              </a>
            </li>
            <li className="active:text-white hover:text-white hover:font-medium hover:-translate-y-1 py-0 transition-all hover:light:text-black">
              <a href="#skills" onClick={handleLinkClick}>
                <span className="text-primary-dark dark:text-primary-ligth">
                  #
                </span>
                skills
              </a>
            </li>
            <li className="active:text-white hover:text-white hover:font-medium hover:-translate-y-1 py-0 transition-all hover:light:text-black">
              <a href="#experience">
                <span className="text-primary-dark dark:text-primary-ligth">
                  #
                </span>
                experiencia
              </a>
            </li>
            <li className="active:text-white hover:text-white hover:font-medium hover:-translate-y-1 py-0 transition-all hover:light:text-black">
              <a href="#proyects" onClick={handleLinkClick}>
                {" "}
                <span className="text-primary-dark dark:text-primary-ligth">
                  #
                </span>
                proyectos
              </a>
            </li>
            <li className="block lg:hidden active:text-white hover:text-white hover:font-medium hover:-translate-y-1 py-0 transition-all hover:light:text-black">
              <a href="#contacts" onClick={handleLinkClick}>
                {" "}
                <span className="text-primary-dark dark:text-primary-ligth">
                  #
                </span>
                contactos
              </a>
            </li>
            <div className="flex lg:hidden mt-8">
              <IconContacts />
            </div>
          </ul>
        </nav>
        <div
          className="size-6 flex justify-center items-center lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <RxHamburgerMenu className="stroke-1 md:stroke-current cursor-pointer" />
          ) : (
            <IoMdClose className="stroke-2 md:stroke-current cursor-pointer" />
          )}
        </div>

        <ThemeSwitch />
      </div>
    </header>
  );
}

export default Header;
