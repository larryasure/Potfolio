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
import Footer from "../Components/Footer";


export default function Home() {
  return (
    <>
      <div className={`relative z-10 ${styles.paddingX} ${styles.paddingY}`}>
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
        <Footer/>
      </div>
    </>
  );
}
