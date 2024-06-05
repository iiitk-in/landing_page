"use client";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useScreenDetector } from "./useScreenDetector";
const titleFont = Roboto_Mono({
  subsets: ["latin"],
  weight: "600",
});

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 300
        ? setStickyClass("stickyCSSClass")
        : setStickyClass("relative");
    }
  };
  const blogLink = "https://blog.iiitk.in";
  const port0Link = "https://port0.iiitk.in";
  const buttonClass =
    "text-lg font-bolder  mt-2 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition transition-all-0.5s";
  const { isDesktop, isMobile, isTablet } = useScreenDetector();
  if (isDesktop) {
    return (
      <div
        className={`${stickyClass} transition ease-in-out w-full flex flex-row justify-center justify-between items-center`}
      >
        <div className="flex flex-row mr-auto">
          <Link href={"/"} className={`ml-3 mr-3 ${buttonClass}`}>
            Home
          </Link>
          <Link href={"/projects"} className={`mr-3 ${buttonClass}`}>
            Projects on IIITK.in
          </Link>
          <button
            onClick={() => {
              window.open(blogLink, "_blank");
            }}
            className={`mr-3 ${buttonClass}`}
          >
            IIITK.in Blog
          </button>
        </div>
        <div className="flex flex-row">
          <button
            onClick={() => {
              window.open(port0Link, "_blank");
            }}
            className={`mr-5 ${buttonClass}`}
          >
            Register for <span className={titleFont.className}>Port0</span>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`flex flex-row justify-center justify-between w-full ${stickyClass}`}
      >
        <div className="flex flex-row">
          <Link href={"/"} className={` text-base ml-3 mr-3 ${buttonClass}`}>
            Home
          </Link>
          <Link href={"/projects"} className={`text-base mr-3 ${buttonClass}`}>
            Projects
          </Link>
          <button
            onClick={() => {
              window.open(blogLink, "_blank");
            }}
            className={`mt-2 text-base mr-3 ${buttonClass}`}
          >
            Blog
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              window.open(port0Link, "_blank");
            }}
            className={`text-base mr-5 ${buttonClass}`}
          >
            <span className={titleFont.className}>Port0</span>
          </button>
        </div>
      </div>
    );
  }
};

export default Navbar;
