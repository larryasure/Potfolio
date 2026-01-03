import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets";
import { projectss } from "../constants";
import { styles } from "../styles";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (

    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1.5)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 1500 }}
        className="bg-[#0b0631] py-4 px-3 rounded-2xl  w-full"
      >
        <div className="relative w-full">
          <img
            src={image}
            alt={name}
            className="w-full rounded-lg cursor-pointer object-cover"
          />
          <div className="absolute inset-0 flex justify-end m-3 ">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full justify-center cursor-pointer items-center flex"
            >
              <img
                src={github}
                alt={github}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-[20px] font-bold">{name}</h3>
          <p className="text-[14px] leading-relaxed text-gray-300/95 tracking-wide">{ description}</p>

        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (<p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default function Works() {
  return (
    <>
      <section className={styles.paddingY}>
        <motion.div
          variants={textVariant()}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        <div className="flex w-full">
          <motion.p
            variants={fadeIn("", "", 0.4, 1)}
            className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-7.5"
          >
            A collection of projects that showcase my journey as a full-stack
            developer. From concept to deployment, these real-world applications
            demonstrate my expertise in React, modern JavaScript, and building
            solutions that matter.
          </motion.p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ${styles.paddingY}`}>
          {projectss.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
