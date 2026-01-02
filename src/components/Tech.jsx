import React from "react";
import { BallCanvas } from "./canvas";
import { textVariant } from "../utils/motion";
import { technologies } from "../constants";

export default function Tech() {
  return <>
    <section className="flex flex-row flex-wrap gap-15 justify-center">
      {technologies.map((technology) => <div className="w-28  h-28 cursor-grab" key={technology.name}> 
        <BallCanvas  icon={technology.icon}/>
      </div> )}
      </section>
  </>;
}
