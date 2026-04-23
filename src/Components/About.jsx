import React from "react";

const About = () => {
  const aboutItems = [
    {
      label: "Project Completed",
      number: 25,
    },
    {
      label: "Years of experience",
      number: 6,
    },
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md-p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[68ch]">
            Most businesses in Nigeria have a website. Very few have a good one.
            I'm Rapheal — a Frontend Developer and UI Designer based in Nigeria
            with 4+ years of experience turning ideas into fast, beautiful web
            products that actually work for your business. My background is a
            bit different from most developers. I started in graphics design,
            moved into UI/UX, and then into frontend development. That means I
            don't just build what you describe — I think about how it looks, how
            users move through it, and how it makes your brand feel. I
            specialise in working with restaurants and real estate businesses —
            two industries where first impressions online directly translate to
            real customers and bookings.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key} className="">
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-red-500 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400 ">{label}</p>
              </div>
            ))}
            <img
              src="./images/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
