import React from "react";
import Container from "./Container";
import Button from "./Button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home" className="flex items-center pb-28 min-h-screen">
      <Container>
        <div className="mt-28 ">
          <motion.p
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.2 }}
            className="xl:text-lg md:text-base text-sm text-primary tracking-widest"
          >
            Greetings! I’m
          </motion.p>
          <motion.h1
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.3 }}
            className="text-LightestSlate xl:text-6xl md:text-5xl text-3xl font-bold lg:mb-4 mb-2 xl:mt-6 mt-3"
          >
            Awais Ali.
          </motion.h1>
          <motion.h1
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.4 }}
            className="xl:text-5xl md:text-4xl text-2xl font-bold text-Slate"
          >
Crafting engaging, responsive user experiences with clean code.
</motion.h1>
          <motion.p
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.5 }}
            className="text-Slate md:mt-9 mt-6 md:mb-12 mb-8 md:text-[17px] text-[15px] md:leading-7 leading-6 max-w-2xl w-full pr-7"
          >
           I transform ideas into captivating digital experiences, focusing on delivering seamless and interactive user interfaces. I am dedicated to writing clean, efficient, and scalable code while ensuring each project meets the highest industry standards and exceeds user expectations.
          </motion.p>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <motion.div
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.6 }}
            >
              <Button text="Contact Me" link="/" />
            </motion.div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Home;
