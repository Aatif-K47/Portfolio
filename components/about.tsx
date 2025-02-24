"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After completing my studies, I discovered a passion for{" "}
  <span className="font-medium">web development</span> and decided to dive into{" "}
  <span className="font-medium">frontend programming</span>. I started with 
  HTML, CSS, and JavaScript, and quickly fell in love with{" "}
  <span className="font-medium">React</span>.{" "}
  <span className="italic">My favorite part of programming</span> is 
  problem-solving—I <span className="underline">love</span> breaking down 
  complex challenges and finding efficient solutions. My core stack includes{" "}
  <span className="font-medium">React, Next.js, and Redux</span>. I am always 
  eager to learn new technologies and improve my skills. I am currently looking 
  for a <span className="font-medium">frontend developer</span> role where I can 
  contribute my skills and grow as a developer.
</p>

<p>
  <span className="italic">When I am not coding</span>, I am a{" "}
  <span className="font-medium">sports enthusiast</span>. I love staying active, 
  whether it is playing <span className="font-medium">cricket, football, Badminton</span>, 
  or hitting the gym. Sports keep me disciplined, motivated, and always striving 
  for improvement—just like in programming!
</p>

    </motion.section>
  );
}
