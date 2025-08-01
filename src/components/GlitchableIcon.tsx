import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
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
    <Box
      sx={{
        "@keyframes icon-shake": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(2px, -1px)" },
          "50%": { transform: "translate(-2px, 1px)" },
          "75%": { transform: "translate(1px, 2px)" },
        },
        "@keyframes block-tear": {
          "0%, 100%": { opacity: 0 },
          "50%": {
            opacity: 0.7,
            clipPath: "polygon(0 40%, 100% 40%, 100% 50%, 0 50%)",
          },
        },
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "primary.main", // <-- Usa il colore primario del tema
          opacity: 0,
        },
        "&.glitching > *": {
          animation: "icon-shake 0.3s ease-in-out",
        },
        "&.glitching::before": {
          animation: "block-tear 0.3s steps(2, end)",
        },
      }}
      className={`glitch-icon-container ${isGlitching ? "glitching" : ""}`}
    >
      {children}
    </Box>
  );
}
