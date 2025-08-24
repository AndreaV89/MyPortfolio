import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import "./Glitch.css";

// Funzione helper per generare un numero casuale in un range
const random = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

interface GlitchableTextProps {
  text: string;
  animationsEnabled: boolean;
}

function GlitchableText({ text, animationsEnabled }: GlitchableTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let glitchTimeout: ReturnType<typeof setTimeout>;

    const triggerRandomGlitch = () => {
      // Calcola un intervallo di tempo casuale per il prossimo glitch
      const glitchDelay = random(2000, 7000); // Tra 2 e 7 secondi

      glitchTimeout = setTimeout(() => {
        // 1. Attiva lo stato di glitch
        setIsGlitching(true);

        const animationDuration = 600; // Durata del glitch

        // 2. Imposta un timer per disattivare il glitch
        setTimeout(() => {
          setIsGlitching(false);

          // 3. SOLO ADESSO, dopo che il glitch è finito,
          //    richiama la funzione per avviare il prossimo ciclo.
          triggerRandomGlitch();
        }, animationDuration);
      }, glitchDelay);
    };

    // Avvia il primo ciclo
    triggerRandomGlitch();

    // Funzione di pulizia per fermare il loop quando il componente non è più visibile
    return () => {
      clearTimeout(glitchTimeout);
    };
  }, []); // L'array vuoto assicura che useEffect venga eseguito solo una volta

  const className = isGlitching && animationsEnabled ? "glitching" : "";

  return (
    <Box
      sx={(theme) => ({
        // Definiamo l'animazione direttamente qui per accedere al tema
        "@keyframes glitch-chaos": {
          "0%": {
            opacity: 1,
            transform: "translate(0)",
            clipPath: "polygon(0 2%, 100% 2%, 100% 40%, 0 40%)",
          },
          "5%": { clipPath: "polygon(0 60%, 100% 60%, 100% 50%, 0 50%)" },
          // ... (puoi copiare tutti gli altri keyframes da Glitch.css)
          "100%": {
            opacity: 1,
            transform: "translate(0)",
            clipPath: "polygon(0 5%, 100% 5%, 100% 30%, 0 30%)",
          },
        },
        position: "relative",
        fontSize: "4rem",
        fontWeight: "bold",
        color: "primary.main", // <-- Usa il colore primario del tema
        cursor: "pointer",
        userSelect: "none",

        "&::before, &::after": {
          content: `attr(data-text)`,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: theme.palette.background.paper, // Sfondo del tema
          overflow: "hidden",
          opacity: 0,
        },
        "&.glitching::before": {
          left: "2px",
          textShadow: "-2px 0 magenta",
          animation: "glitch-chaos 0.4s ease-in-out infinite alternate-reverse",
        },
        "&.glitching::after": {
          left: "-2px",
          textShadow: "-2px 0 cyan",
          animation: "glitch-chaos 0.5s ease-in-out infinite alternate-reverse",
        },
      })}
      className={className}
      data-text={text}
    >
      {text}
    </Box>
  );
}

export default GlitchableText;
