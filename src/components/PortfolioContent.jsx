// App.jsx
"use client";

import React from "react";
import DotGrid from "./ReactBits/DotGrid";
import BubbleMenu from "./ReactBits/BubbleMenu";

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

      {/* 🌟 Centered Content with Overflow Protection */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        <div
          className="
            max-w-[90vw] 
            max-h-[90vh] 
            flex 
            flex-col 
            items-center 
            justify-center 
            overflow-hidden
          "
        >
          <BubbleMenu
            logo={<span style={{ fontWeight: 700 }}>KaungSike.dev</span>
            }
            items={items}
            menuAriaLabel="Toggle navigation"
            menuBg="#ffffff"
            menuContentColor="#111111"
            useFixedPosition={false}
            animationEase="back.out(1.5)"
            animationDuration={0.5}
            staggerDelay={0.12}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
