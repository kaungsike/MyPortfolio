import React from "react";
import { motion } from "framer-motion";
import DotGrid from "./ReactBits/DotGrid";
import BlurText from "./ReactBits/BlurText";
import HTMLContent from "./motion/HTMLContent";

const LandingAnimation = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* Dot background - positioned absolutely */}
      <div className="absolute inset-0 flex items-center justify-center">
        <DotGrid
          dotSize={1.5}
          gap={20}
          baseColor="#000000"
          activeColor="#000000"
          proximity={0}
          shockRadius={0}
          shockStrength={0}
          resistance={0}
          returnDuration={0}
        />
      </div>

      {/* Text centered with dot grid */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-2xl md:text-2xl font-bold text-black "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <BlurText
              text="KaungSike.dev"
              delay={250}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl mb-3"
            />
            <HTMLContent/>
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingAnimation;
