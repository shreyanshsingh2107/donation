import React from "react";
import { FOOTER_DATA } from "../assets/data";

const Footer = () => {
  return (
    <footer className=" border-t border-[#00000033] p-[80px_30px] z-30 relative bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex gap-10 flex-col tablet:flex-row">
          <div className="flex-1">
            <div>
              <a href="/">
                {" "}
                <img
                  src={FOOTER_DATA?.logo?.src}
                  loading="lazy"
                  alt="logo"
                  className="h-[25px] tablet:h-[30px] mb-5"
                />
              </a>
            </div>
            <div className="mb-[5px]">
              <a
                href={FOOTER_DATA?.contact?.email?.url}
                className="text-sm font-semibold no-underline leading-6"
              >
                {FOOTER_DATA?.contact?.email?.display}
              </a>
            </div>
            <div>
              <a
                href={FOOTER_DATA?.contact?.phone?.url}
                className="text-sm font-semibold no-underline leading-6"
              >
               {FOOTER_DATA?.contact?.phone?.display}
              </a>
            </div>
            <div className="mt-5 flex items-center">
              {FOOTER_DATA?.socialLinks.map((item,index)=>(
                 <a
                 href={item?.url}
                 target="_blank"
                 key={index}
                 className="w-5 mr-5 invert"
               >
                 <img
                   src={item?.icon}
                   loading="lazy"
                   alt={item?.display}
                 />
               </a>
              ))}
                
            </div>
          </div>
          <div className="flex-1">
            <div className="transform-[1px] uppercase mb-[25px] text-base font-semibold">
              {" "}
              HOME
            </div>
            <div className="mb-4">
              <a
                href="/"
                className="text-sm font-semibold leading-5 no-underline block"
              >
                Projects
              </a>
            </div>
            <div className="mb-4">
              <a
                href="/"
                className="text-sm font-semibold leading-5 no-underline block"
              >
                Our Mission
              </a>
            </div>
            <div className="mb-4">
              <a
                href="/"
                className="text-sm font-semibold leading-5 no-underline block"
              >
                Team
              </a>
            </div>
            <div className="mb-4">
              <a
                href="/"
                className="text-sm font-semibold leading-5 no-underline block"
              >
                Get Involved
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="transform-[1px] uppercase mb-[25px] text-base font-semibold">
              {" "}
              Product Link
            </div>
            <div className="mb-4">
              <a
                href="/"
                className="text-sm font-semibold leading-5 no-underline block"
              >
                Style Guide
              </a>
            </div>
            <div className="mb-4">
              <a
                href="/"
                className="text-sm font-semibold leading-5 no-underline block"
              >
                Licensing
              </a>
            </div>
            <div className="mb-4">
              <a
                href="/"
                className="text-sm font-semibold leading-5 no-underline block"
              >
                Changelog
              </a>
            </div>
            <div className="mb-4">
              <a
                href="/"
                className="text-sm font-semibold leading-5 no-underline block"
              >
                Instructions
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-sm leading-5">
          <div className="copywright-text">
            © This is a{" "}
            <a
              href="/"
              target="_blank"
              className="text-left text-sm font-semibold"
            >
              Parid Andoni
            </a>{" "}
            template powered by{" "}
            <a
              href="/"
              target="_blank"
              className="copywrite-link"
            >
              Webflow
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
