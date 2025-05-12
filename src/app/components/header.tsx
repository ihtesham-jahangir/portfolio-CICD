import React from "react";
import logo from "@/app/images/logo.svg";
import Image from "next/image";
function Header() {
  return (
    <div className="fixed top-0 w-full z-10 bg-white left-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={logo} height={100} width={100} alt={"Logo"}></Image>
            <span className="ml-3 text-xl">Ihtesham Jahangir</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a href="#home" className="mr-5 hover:text-gray-900">
              Home
            </a>
            <a href="#projects" className="mr-5 hover:text-gray-900">
              Projects
            </a>
            <a href="#achievements" className="mr-5 hover:text-gray-900">
              Achievements
            </a>
            <a href="#contact" className="mr-5 hover:text-gray-900">
              Contact
            </a>
            <a href="#about" className="mr-5 hover:text-gray-900">
              About
            </a>
            <a href="#review" className="mr-5 hover:text-gray-900">
              Client Review
            </a>
          </nav>
          <a
            href="/resume.pdf"
            download="Resume.pdf"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base mt-4 md:mt-0 hover:text-white font-bold"
          >
            Resume
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
