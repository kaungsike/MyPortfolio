// App.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import DotGrid from "./ReactBits/DotGrid"; // ✅ ensure this path is correct

const PortfolioContent = () => {
  return (
<>

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
      {/* 🌟 Page Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto p-8 flex flex-col items-center">
        {/* Navigation */}
        <motion.nav
          className="flex justify-between items-center py-6 w-full"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            KaungSike.dev
          </motion.div>

          <div className="flex space-x-6">
            {["Home", "Projects", "About", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.section
          className="py-20 text-center w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Creative{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Building digital experiences with modern technologies and clean code.
          </motion.p>

          <motion.button
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.section>

        {/* Projects Grid */}
        <motion.section
          className="py-16 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="bg-black/5 rounded-2xl p-6 backdrop-blur-sm border border-black/10 hover:border-cyan-500/40 transition-all"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + item * 0.1 }}
              >
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                <p className="text-gray-700">
                  A modern web application built with cutting-edge technologies.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

    </div>


</>

  );
};

export default PortfolioContent;
