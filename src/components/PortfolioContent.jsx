"use client";

import React from "react";
import DotGrid from "./ReactBits/DotGrid";
import BubbleMenu from "./ReactBits/BubbleMenu";
import PixelTransition from "./ReactBits/PixelTransition";
import GithubContributions from "./github/GithubContributions";
import ScrollStack, { ScrollStackItem } from "./ReactBits/ScrollStackItem";

const PortfolioContent = () => {
  const items = [
    {
      label: "home",
      href: "#",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
    },
    {
      label: "about",
      href: "#",
      ariaLabel: "About",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "projects",
      href: "#",
      ariaLabel: "Projects",
      rotation: 8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    },
    {
      label: "blog",
      href: "#",
      ariaLabel: "Blog",
      rotation: 8,
      hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
    },
    {
      label: "contact",
      href: "#",
      ariaLabel: "Contact",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
    },
  ];

  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* ⚪ Dot Background */}
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

      <div className="relative container mx-auto z-10 w-full h-full min-h-screen flex flex-col p-2">
        <div className=" w-full flex flex-col h-full items-center justify-center overflow-y-scroll  md:p-5 p-4">
          <BubbleMenu
            logo={<span style={{ fontWeight: 700 }}>KaungSike.dev</span>}
            items={items}
            menuAriaLabel="Toggle navigation"
            menuBg="#ffffff"
            menuContentColor="#111111"
            useFixedPosition={false}
            animationEase="back.out(1.5)"
            animationDuration={0.5}
            staggerDelay={0.12}
          />

          <div className=" w-full h-full flex-col pt-[90px] lg:pt-[85px] flex-grow ">
            <div className="rounded-2xl px-3 py-4 mb-7  border  bg-white/30 backdrop-blur-sm w-full  lg:rounded-3xl lg:p-5 flex lg:flex-row flex-col items-center lg:items-start  justify-between gap-3 lg:overflow-auto ">
              <div className="w-full flex flex-col gap-5 lg:w-1/3 items-center lg:items-start">
                <PixelTransition
                  firstContent={
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                      alt="default pixel transition content, a cat!"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      className="rounded-2xl w-full"
                    />
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#111",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 900,
                          fontSize: "2rem",
                          color: "#ffffff",
                        }}
                      >
                        KaungSike.dev
                      </p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor="#ffffff"
                  once={false}
                  animationStepDuration={0.4}
                  className="custom-pixel-card"
                />

                <div className="max-w-md w-full text-start lg:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Kaung Sike
                  </h2>
                  <p className="text-gray-700 mb-1">kaungsike9@gmail.com</p>
                  <p className="text-gray-700 leading-relaxed">
                    Hi there! I'm a Fullstack Web Developer, currently in my
                    fourth year at the University of Computer Studies, Hpa-An. I
                    am on track to graduate in 2027–2028 and passionate about
                    building modern, responsive, and interactive web
                    applications.
                  </p>
                </div>
              </div>

              {/* GitHub Contributions and Stats */}
              <div className="w-full h-full flex flex-col gap-5 lg:w-2/3">
                <div className="w-full flex items-center justify-center">
                  <GithubContributions />
                </div>
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=kaungsike&theme=github-light&hide_border=true&area=true"
                  alt="Kaung Sike GitHub Activity"
                  className="w-full"
                />

                <div className="flex lg:flex-row flex-col lg:h-[220px]">
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=kaungsike&show_icons=true&theme=default&hide_border=true"
                    alt="Kaung Sike GitHub Stats"
                    className="w-full"
                  />
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=kaungsike&layout=compact&theme=default&hide_border=true"
                    alt="Top Languages"
                  />
                </div>
              </div>
            </div>

            <ScrollStack>
              <ScrollStackItem>
                <h2>Card 1</h2>
                <p>This is the first card in the stack</p>
              </ScrollStackItem>
              <ScrollStackItem>
                <h2>Card 2</h2>
                <p>This is the second card in the stack</p>
              </ScrollStackItem>
              <ScrollStackItem>
                <h2>Card 3</h2>
                <p>This is the third card in the stack</p>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
