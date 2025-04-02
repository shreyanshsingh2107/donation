import React from "react";

const projects = [
  {
    title: "Education for All",
    image:
      "https://cdn.prod.website-files.com/646f4f7d12e13b06701ebe78/646f5e12e331f0375e32cda5_pexels-vanessa-loring-7869442-1-p-1080.jpg",
    url: "/",
    text: "Ensuring children from underserved regions have access to quality education, school supplies, and mentorship programs to shape a brighter future.",
  },
  {
    title: "Employment & Skill Development",
    image:
      "https://cdn.prod.website-files.com/646f4f7d12e13b06701ebe78/646f5baf7f64141352d91982_pexels-rocketmann-team-9486905-1-p-1080.jpg",
    url: "/",
    text: "Providing vocational training, entrepreneurship support, and job placement programs to empower individuals economically.",
  },
  {
    title: "Basic Needs Support",
    image:
      "https://cdn.prod.website-files.com/646f4f7d12e13b06701ebe78/646f5a9e69229d10f8e0c957_pexels-lagos-food-bank-initiative-9090750-1-p-1080.jpg",
    url: "/",
    text: "Ensuring families have access to nutritious food, clean water, and safe shelter, preserving the dignity of every household.",
  },
  {
    title: "Community Empowerment",
    image:
      "https://cdn.prod.website-files.com/646f4f7d12e13b06701ebe78/646f5e6d82334172e6da36e4_ben-koorengevel-sjuLxUOEMY8-unsplash-1-p-1080.jpg",
    url: "/",
    text: "Facilitating self-help groups and local initiatives that promote financial independence and social support, restoring the pride and resilience of villages.",
  },
];


const Projects = () => {
  return (
    <section className="p-[60px_20px] tablet:p-[60px_30px] bg-[#f2f2f2] z-30 relative">
      <div className="mx-auto max-w-[1440px]">
        <h3 className="mt-5 text-[40px] mb-[40px] tablet:mb-[60px] font-bold leading-[1.05em]">
          Love Projects
        </h3>
        <div className="flex flex-wrap gap-[60px] justify-between">
          {projects.map((item, index) => (
            <div key={index} className="w-full tablet:w-[calc(50%-30px)]">
              <a href={item.url} className="block h-[350px] tablet:h-[400px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-[4px] grayscale-[50%] transition-all duration-[800ms] hover:grayscale-0"
                />
              </a>
              <div className="mt-[20px]">
                <div className="text-[25px] font-bold leading-[1.05em]">{item.title}</div>
                <div className="my-[30px]"><p className="text-base">{item.text}</p></div>
                {/* <a href={item.url} className="text-black uppercase text-[14px] font-bold tracking-[2px] no-underline transition-all duration-[500ms] hover:underline">view more</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
