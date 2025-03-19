import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t border-[#00000033] p-[80px_30px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex gap-10 flex-col tablet:flex-row">
          <div className="flex-1">
            <div>
              <a href="/">
                {" "}
                <img
                  src="https://cdn.prod.website-files.com/646ddb3266c5a1a9cf624c2d/647a0797692a8751499cc2ab_empower.svg"
                  loading="lazy"
                  alt="logo"
                  className="h-[25px] tablet:h-[30px] mb-5"
                />
              </a>
            </div>
            <div className="mb-[5px]">
              <a
                href="mailto:hello@empower.com"
                className="text-sm font-semibold no-underline leading-6"
              >
                hello@empower.com
              </a>
            </div>
            <div>
              <a
                href="tel:654-708-2554"
                className="text-sm font-semibold no-underline leading-6"
              >
                654-708-2554
              </a>
            </div>
            <div className="mt-5 flex items-center">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                class="w-5 mr-5 invert"
              >
                <img
                  src="https://cdn.prod.website-files.com/646ddb3266c5a1a9cf624c2d/647084985fcdb6b4d0ea1295_linkedin%20(1).png"
                  loading="lazy"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                class="w-5 mr-5 invert"
              >
                <img
                  src="https://cdn.prod.website-files.com/646ddb3266c5a1a9cf624c2d/647084985fcdb6b4d0ea1297_instagram%20(4).png"
                  loading="lazy"
                  alt=""
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="w-5 mr-5 invert"
              >
                <img
                  src="https://cdn.prod.website-files.com/646ddb3266c5a1a9cf624c2d/647084985fcdb6b4d0ea1293_facebook%20(2).png"
                  loading="lazy"
                  alt=""
                />
              </a>
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
          <div class="copywright-text">
            © This is a{" "}
            <a
              href="/"
              target="_blank"
              class="text-left text-sm font-semibold"
            >
              Parid Andoni
            </a>{" "}
            template powered by{" "}
            <a
              href="/"
              target="_blank"
              class="copywrite-link"
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
