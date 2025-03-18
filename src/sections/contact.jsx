import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="p-[60px_20px] tablet:p-[60px_30px]">
      <div className="mx-auto max-w-[1000px] tablet:p-[30px] text-center">
        <h4 className="mt-2.5 mb-2.5 text-[35px] font-bold leading-[1.05em]">
          Get in touch.
        </h4>
        <div className="mt-[40px]">
          <form
            action="https://formsubmit.co/shreyanshshrinet2107@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border-b border-[#d2d5d5] px-2.5 py-2 focus:outline-none text-[#333] h-[38px] text-xl leading-[29px] placeholder-[#333]"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border-b border-[#d2d5d5] px-2.5 py-2 focus:outline-none text-[#333] h-[38px] text-xl leading-[29px] placeholder-[#333]"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Enter a message"
              required
              className="border border-[#d2d5d5] px-3 py-5 focus:outline-none text-[#333] h-[38px] text-lg leading-[26px] mb-2.5 resize-y h-auto"
              value={formData.message}
              onChange={handleChange}
            />

            <div>
              <button
                type="submit"
                className="mt-6 bg-[#ff00d4] tracking-[2px] uppercase rounded p-[12px_100px] font-bold w-full tablet:w-auto text-white hover:bg-[rgba(255,0,213,0.5)] transition-all duration-[800ms] ease-in-out"
              >
                Submit
              </button>
            </div>
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
