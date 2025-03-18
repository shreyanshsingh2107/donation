import React from "react";

const HeroSection = () => {
  return (
    <section
      className="flex items-center h-[570px] px-8 py-10 text-white bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://assets-global.website-files.com/646ddb3266c5a1a9cf624c2d/646f598c5363d6fa7ae73798_bill-wegener-8ldqRkOk5oo-unsplash-1.jpg')`,
        backgroundPosition: "0 0, 50%",
        backgroundSize: "auto, cover",
      }}
    >
      <div className="max-w-[1440px] mx-auto flex-1">
        <div className="max-w-[550px]">
        <h1 className="text-white mt-5 mb-2.5 text-[55px] font-bold leading-[1.05em]">
          The Power of Giving Can Change Lives
        </h1>
        <button className="mt-6 bg-[#ff00d4] tracking-[2px] uppercase rounded p-[12px_40px] font-bold text-white hover:bg-[rgba(255,0,213,0.5)] transition-all duration-[800ms] ease-in-out">
          DISCOVER MORE
        </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
