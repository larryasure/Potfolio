import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="w-full sm:w-65 ">
      <motion.div 
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        className="w-full rounded-[20px] cursor-pointer bg-gray-800 p-px"
      >
        <div className="rounded-[20px] py-5 px-12 flex justify-center flex-col items-center gap-4 h-96 ">
          <img loading="lazy" src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default function About() {
  return (
    <>
      <motion.section  
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={` relative z-0 `}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.heroHeadText}>Overview.</h2>
        </motion.div>

        <motion.p 
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="md:mt-4 text-[17px] leading-7 text-gray-300 max-w-2xl md:max-w-3xl"
        >
          I'm a developer excited about building interactive web experiences. In
          the past few months, I've been learning and creating projects with
          React, experimenting with responsive designs, and exploring 3D visuals
          on the web using Three.js. I enjoy turning ideas into small,
          functional digital products and continually improving my skills along
          the way.
        </motion.p>

        <div id="about" className="mt-10 flex flex-wrap gap-7">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.section>
    </>
  );
}
