import React from "react";

let visionJson = [
  {
    image:
      "https://cdn.prod.website-files.com/646ddb3266c5a1a9cf624c2d/646f400be2e8d92d2c1498c3_care.png",
    title: "Education Access",
  },
  {
    image:
      "https://cdn.prod.website-files.com/646ddb3266c5a1a9cf624c2d/646f400ae8ca2f42b7915850_charity.png",
    title: "Basic Necessities Assistance",
  },
  {
    image:
      "https://cdn.prod.website-files.com/646ddb3266c5a1a9cf624c2d/646f400a00e64cd1e296f485_medicine.png",
    title: "Employment Support",
  },
];

const Vision = () => {
  return (
    <section className="flex  justify-center p-[60px_30px] bg-white z-30 relative">
      <div className="flex flex-col tablet:flex-row w-full max-w-[1440px] ">
        <div className="flex flex-col w-full tablet:w-1/2 pr-[40px] mb-[60px]">
          <div className="tracking-[1.5px] uppercase text-lg leading-6 font-bold">
            our vision
          </div>
          <div className="mt-[55px] flex gap-[40px] flex-col tablet:flex-row">
            {visionJson.map((item, index) => (
              <div key={index} className={` flex-1 ${index === visionJson.length -1 ? '':'tablet:border-r border-[rgba(0,0,0,0.15)]'}`}>
                <div className="flex justify-center items-center mb-5 h-[50px] w-[50px]">
                  <img src={item.image} alt={item.title}  className="w-full h-full"/>
                </div>
                <div className="mb-[3px]">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full tablet:w-1/2">
        <h2 className="mb-2.5 text-[45px] font-bold leading-[1.05em]">Unwavering embrace of care and support.</h2>
       
        <p className="mt-[30px] text-base">Our vision is a society where every individual has the opportunity to thrive, echoing the spirit of
unity and warmth that defines rural India. We believe in creating a world where people have
access to education, jobs, food, and shelter. Like the loving care of a mother, we aim to provide
a nurturing environment where every life is valued and every dream is cherished.</p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
