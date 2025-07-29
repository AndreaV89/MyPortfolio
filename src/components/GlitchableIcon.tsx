import React, { useState, useEffect } from "react";
import "./GlitchIcon.css"; // Creeremo questo nuovo file CSS

const random = (min: number, max: number) => Math.random() * (max - min) + min;

interface GlitchableIconProps {
  children: React.ReactNode;
}

export default function GlitchableIcon({ children }: GlitchableIconProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let glitchTimeout: ReturnType<typeof setTimeout>;

    const triggerRandomGlitch = () => {
      const glitchDelay = random(4000, 10000); // Intervallo più lungo per renderlo più speciale

      glitchTimeout = setTimeout(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 300); // Durata breve del glitch
        triggerRandomGlitch();
      }, glitchDelay);
    };

    triggerRandomGlitch();

    return () => {
      clearTimeout(glitchTimeout);
    };
  }, []);

  return (
    <div className={`glitch-icon-container ${isGlitching ? "glitching" : ""}`}>
      {children}
    </div>
  );
}
