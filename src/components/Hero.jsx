import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Fallback from "./canvas/Fallback";

export default function Hero() {
  const [isAndroid, setIsAndroid] = useState(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroidDevice = /android/.test(userAgent);
    setIsAndroid(isAndroidDevice);
  }, []);

  if (isAndroid === null) {
    return null;
  }

  if (isAndroid) {
    return <Fallback />;
  }

  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <div className="absolute inset-0 bg-[#0d0c0c94] h-full w-full z-0"></div>
        <div
          className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col items-center justify-center mt-5 relative">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 bg-linear-90 from-[#804dee] to-[#3c335000]" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Lanre</span>
            </h1>
            <motion.p
              className={`${styles.myText} mt-1 text-white`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              A Full Stack Developer Building modern web applications from idea
              to production.
              <br className="sm:block hidden" />I specialize in React, Django,
              and REST APIs, creating responsive user experiences backed by
              secure and scalable backend systems.
            </motion.p>
          </div>
        </div>

        <ComputersCanvas />

        <div className="relative w-full flex items-center justify-center bottom-70 sm:bottom-50 md:bottom-18 lg:bottom-32 xl:bottom-18">
          <a href="#about">
            <div className="w-8 h-14 rounded-3xl border-3 border-gray-200 flex justify-center items-start p-2">
              <motion.div
                className="w-3 h-3 bg-[#9365f6] rounded-full"
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
