import React, { useState } from "react";
import DonationModal from "./donationModal";
import {HEADER_DATA} from "../assets/data";
import logo from "../assets/logo 2.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="px-5 tablet:px-[30px] py-2.5 z-40 bg-black sticky top-0 z-[999999">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        <a
          href="/"
          className="outline-none float-left text-[#333] no-underline relative"
        >
          <img
            // src={HEADER_DATA?.logo?.src}
            src={logo}
            loading="lazy"
            alt={HEADER_DATA?.logo?.alt}
            // className="h-[30px]"
            className="w-[120px]"
          />
        </a>
        <nav
          className={`absolute top-[60px] left-0 w-full bg-black text-white shadow-md p-4 
    desktop:static flex flex-col justify-center items-center desktop:space-x-6 
    desktop:p-0 desktop:shadow-none desktop:hidden transition-all duration-500 
    ${isMenuOpen ? "open-menu" : "hidden"}`}
        >
          {HEADER_DATA?.menuItems.map((item,index)=>(
             <a
             key={index}
             href={item?.url}
             className="block py-2 px-4 hover:bg-gray-200 tablet:hover:bg-transparent"
           >
             {item?.text}
           </a>
          ))}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
            className="block tablet:hidden mt-2 bg-[#ff3232] tracking-[2px] uppercase rounded p-[12px_40px] font-bold text-white hover:bg-red-500/50 transition-all duration-[800ms] ease-in-out "
          >
            DONATE
          </a>
        </nav>

        <nav
          className={`w-full bg-black text-white shadow-md p-4 
    desktop:static desktop:flex  justify-center items-center tablet:space-x-6 
    desktop:p-0 tablet:shadow-none hidden transition-all duration-500 
    `}
        >
        {HEADER_DATA?.menuItems.map((item,index)=>(
             <a
             key={index}
             href={item?.url}
             className="block py-2 px-4 hover:bg-gray-200 tablet:hover:bg-transparent"
           >
             {item?.text}
           </a>
          ))}
          
      
        </nav>
        <div className="flex items-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
            className="hidden tablet:block bg-[#ff3232] tracking-[2px] uppercase rounded p-[12px_40px] font-bold text-white hover:bg-red-500/50 transition-all duration-[800ms] ease-in-out "
          >
            DONATE
          </a>
          <DonationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          <button
            className="w-nav-button tablet:hidden flex flex-col justify-center items-center w-10 h-10 focus-visible:outline-none cursor-pointer"
            style={{ WebkitUserSelect: "text" }}
            aria-label="menu"
            tabIndex={0}
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 " : "-translate-y-2"
              }`}
            ></span>

            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>

            <span
              className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
