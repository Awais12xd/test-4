import React, { useRef, useEffect } from "react";
import Container from "./Container";
import Heading from "./Heading";
import { motion, Variants } from "framer-motion";
import about from "../../public/images/about.png";
import Image from "next/image";
import { Icon } from "@iconify/react";

const About = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const stack = [
    {
          name:"Tech Stack:",
      skills:[
    "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "Responsive Web Design",
  "Git & GitHub",
  "Figma to Code",
  "UI/UX Design Principles"
      ]
    }
  ]

  return (
    <section
      id="about"
      style={{
        backgroundImage: "url(/images/about.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="about-poster relative py-10 max-w-6xl w-full mx-auto"
    >
      <Container>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Heading headingNumber={1} headingText="About Me" />
          </motion.div>
          <div className="">
            <div className="flex flex-col gap-5 my-5 text-Slate md:text-base text-sm leading-normal ">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                Thanks for visiting my profile. I’m a passionate Frontend Developer with experience building engaging and responsive web applications. I turn complex challenges into seamless digital experiences through creative design and clean code. Focused on user-centric development, I ensure every project is optimized for performance and usability.
                <br /> <br /> I have worked on a variety of web projects, including eCommerce, portfolios, and business websites, delivering high-quality, maintainable code. My goal is to create intuitive interfaces that enhance user experiences and meet modern web standards. I am also currently learning backend technologies such as Node.js, Express.js, and MongoDB, with a solid foundational knowledge, and I am dedicated to mastering them professionally soon.
                <br /> <br />

                <p className="text-center text-[#c7d1f0] text-lg mb-4">Technologies I’m Proficient In</p>
                {stack.map((item) => (
                  <div className="" key={item.name}>
                    <h1 className="mt-4 text-[#61f8d4]">{item.name}</h1>
                <div className="grid md:grid-cols-3 grid-cols-2 mt-4 gap-2">
                  {item.skills.map((name, index) => <div key={index} className="flex items-center gap-2">
                      <Icon
                        icon="mdi:arrow-compass"
                        className="pt-1.5 transorm rotate-90 text-[15px] text-primary "
                      />
                    {name}
                  </div> )}
                </div>
                  </div>
                ))}
              </motion.div>
              {/* <motion.p
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at the Dev Corporate for a variety of clients.
              </motion.p> */}
              {/* <p>
                Here are a few technologies I’ve been working with recently:
              </p> */}
            </div>
            {/* <div>
              <Image src={about} alt='about' className='custom-img' />
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
