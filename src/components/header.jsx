import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="px-5 tablet:px-[30px] py-2.5 z-40 bg-white">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        <a
          href="/"
          className="outline-none float-left text-[#333] no-underline relative"
        >
          <img
            src="https://cdn.prod.website-files.com/646ddb3266c5a1a9cf624c2d/647a0797692a8751499cc2ab_empower.svg"
            loading="lazy"
            alt="logo"
            className="h-[30px]"
          />
        </a>
        <nav
          className={`absolute top-[60px] left-0 w-full bg-black text-white shadow-md p-4 tablet:static flex flex-col justify-center items-center tablet:space-x-6 tablet:p-0 tablet:shadow-none overflow-hidden ${
            isMenuOpen ? "open-menu" : "close-menu"
          }`}
        >
          <a
            href="/"
            className="block py-2 px-4 hover:bg-gray-200 tablet:hover:bg-transparent"
          >
            OUR MISSION
          </a>
          <a
            href="/"
            className="block py-2 px-4 hover:bg-gray-200 tablet:hover:bg-transparent"
          >
            PROJECTS
          </a>
          <a
            href="/"
            className="block py-2 px-4 hover:bg-gray-200 tablet:hover:bg-transparent"
          >
            TEAM
          </a>
          <a
            href="/"
            className="block py-2 px-4 hover:bg-gray-200 tablet:hover:bg-transparent"
          >
            GET INVOLVED
          </a>
          <a
            href="/"
            className="block tablet:hidden mt-2 bg-[#ff00d4] tracking-[2px] uppercase rounded p-[12px_40px] font-bold text-white hover:bg-[rgba(255,0,213,0.5)] transition-all duration-[800ms] ease-in-out "
          >
            DONATE
          </a>
        </nav>

        <div className="flex items-center">
          <a
            href="/"
            className="hidden tablet:block bg-[#ff00d4] tracking-[2px] uppercase rounded p-[12px_40px] font-bold text-white hover:bg-[rgba(255,0,213,0.5)] transition-all duration-[800ms] ease-in-out "
          >
            DONATE
          </a>

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
              className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "rotate-45 " : "-translate-y-2"
              }`}
            ></span>

            <span
              className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>

            <span
              className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
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
