import React from "react";
import {
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
} from "../components";
import { styles } from "../styles";

export default function Home() {
  return (
    <>
      <div className={`hero-bg z-10 ${styles.paddingX} ${styles.paddingY} `}  >
        <Hero />
        <About/>
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
      </div>
    </>
  );
}
