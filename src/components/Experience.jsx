import { motion } from "framer-motion";
import React from "react";

import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { experiences } from "../constants";

export default function Experience() {
  const ExperienceCard = ({ experience, index }) => {
    return (
      <motion.div
        variants={fadeIn("right", "spring", index * 0.8, 0.95)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.30 }}
        className={`mb-8 flex gap-4 `}
      >
        <div id="work" className="flex flex-col items-center">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
            style={{ backgroundColor: experience.iconBg }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-9 h-9 object-contain"
            />
          </div>
          <div className="w-1 h-24 bg-gray-600"></div>
        </div>

        <div  className="pt-2">
          <h3 className="text-white text-[20px] font-bold">
            {experience.title}
          </h3>
          <p className="text-gray-400 text-[16px] font-semibold mb-1">
            {experience.company_name}
          </p>
          <p className="text-gray-500 text-[15px] mb-4">{experience.date}</p>

          <ul className="list-disc list-inside space-y-2">
            {experience.points.map((point, i) => (
              <li key={i} className="text-gray-300 text-[15px]">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <section className={`${styles.paddingY} mt-20 `}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>

        <div className="flex mt-10 flex-col">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
