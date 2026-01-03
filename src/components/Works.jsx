import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";
import { projectss } from "../constants";
import { styles } from "../styles";

const ProjectCard = (index, name, description, tags, image, source_code_link) => {
  return <motion.div variants={fadeIn("up","spring", index * 0.5, 0.75 )} className={`${styles.paddingY}`}>
    test
  </motion.div>;
};
export default function Works() {
  return (
    <>
      <section className={styles.paddingY}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        <div className="flex w-full">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-7.5"
          >
            A collection of projects that showcase my journey as a full-stack
            developer. From concept to deployment, these real-world applications
            demonstrate my expertise in React, modern JavaScript, and building
            solutions that matter.
          </motion.p>
        </div>

        <div className="flex flex-row gap-8 flex-wrap">
          {projectss.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
