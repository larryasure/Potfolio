import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { services } from "../constants";
import { styles } from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const ServiceCard = ({ title, icon, text, index }) => {
  return (
    <Tilt className="w-full sm:w-65 ">
      <motion.div
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        className="w-full rounded-[20px] cursor-pointer bg-gray-800 p-px"
      >
        <div className="rounded-[20px] py-8 px-8 flex justify-center flex-col items-center gap-4 min-h-[352px]">
          <img
            loading="lazy"
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[18px] font-bold text-center">
            {title}
          </h3>
          <p className="text-gray-300 text-sm text-center leading-6">{text}</p>
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
          I am a Full Stack Developer focused on creating modern web
          applications that solve real problems. I work across frontend and
          backend development, building responsive interfaces, designing APIs,
          managing databases, and integrating complete application workflows.
        </motion.p>

        <motion.div
          className="flex  gap-4 mt-8 "
          variants={fadeIn("down", "tween", 0.1, 1)}
        >
          <a
            href="#projects"
            className="px-4 py-2 rounded-lg bg-[#13315c] text-white duration-300 transition-all hover:translate-y-2  font-medium"
          >
            View Projects
          </a>

          <a
            href="/Lanrecodes_CV.pdf"
            target="_blank"
            rel="noopener noreferer"
            className="text-[#155daf] border[#13315c] border px-4 py-2 rounded-lg hover:text-white hover:bg-[#13315c] transition-all duration-300 font-medium hover:-translate-y-2"
          >
            Download Resume
          </a>
        </motion.div>

        <div id="about" className="mt-10 flex flex-wrap gap-7">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.section>
    </>
  );
}
