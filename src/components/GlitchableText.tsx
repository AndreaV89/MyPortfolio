import React, { useState, useEffect } from "react";
import "./Glitch.css";

// Funzione helper per generare un numero casuale in un range
const random = (min, max) => Math.random() * (max - min) + min;

function GlitchableText({ text }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let glitchTimeout;

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

  return (
    <div
      className={`glitch-container ${isGlitching ? "glitching" : ""}`}
      data-text={text}
    >
      {text}
    </div>
  );
}

export default GlitchableText;
