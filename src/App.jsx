// App.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import LandingAnimation from "./components/LandingAnimation";
import PortfolioContent from "./components/PortfolioContent";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LandingAnimation/>
        ) : (
          <PortfolioContent/>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
