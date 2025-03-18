import React from "react";

let visionJson = [
  {
    image:
      "https://cdn.prod.website-files.com/646ddb3266c5a1a9cf624c2d/646f400be2e8d92d2c1498c3_care.png",
    title: "Care About",
  },
  {
    image:
      "https://cdn.prod.website-files.com/646ddb3266c5a1a9cf624c2d/646f400ae8ca2f42b7915850_charity.png",
    title: "Food Help",
  },
  {
    image:
      "https://cdn.prod.website-files.com/646ddb3266c5a1a9cf624c2d/646f400a00e64cd1e296f485_medicine.png",
    title: "Medicine Delivery",
  },
];

const Vision = () => {
  return (
    <section className="max-w-[1440px] mx-auto p-[60px_30px]">
      <div className="flex flex-col tablet:flex-row w-full">
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
        <h2 className="mb-2.5 text-[45px] font-bold leading-[1.05em]">Building a Better World</h2>
       
        <p className="mt-[30px] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Nunc ut sem vitae risus tristique posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
