// In src/components/CodeFlowBackground.tsx

import { useRef, useEffect } from "react";
import { Box } from "@mui/material";

interface CodeFlowBackgroundProps {
  color: string;
  animationsEnabled: boolean;
}

// Array di frammenti di codice da mostrare
const codeSnippets = [
  "() =>",
  "{}",
  "[]",
  "<>",
  "/>",
  "const",
  "let",
  "var",
  "import",
  "export",
  "React",
  "sx={{}}",
  "()",
  "git",
  "commit",
  "push",
  "pull",
  "merge",
];

export default function CodeFlowBackground({
  color,
  animationsEnabled,
}: CodeFlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId: number;
    let particles: {
      x: number;
      y: number;
      text: string;
      speed: number;
      opacity: number;
    }[] = [];
    const particleCount = 100; // Meno particelle per un effetto più leggero

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Creiamo le "particelle" di codice
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          speed: Math.random() * 0.2 + 0.1, // Movimento molto lento
          opacity: Math.random() * 0.7 + 0.1, // Opacità bassa
        });
      }
    };

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.font = "16px 'Fira Code', monospace";

      particles.forEach((p) => {
        // Aggiorna la posizione
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }

        // Disegna il testo con l'opacità corrente
        context.fillStyle = `rgba(${parseInt(
          color.slice(1, 3),
          16
        )}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(
          color.slice(5, 7),
          16
        )}, ${p.opacity})`;
        context.fillText(p.text, p.x, p.y);
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    // Inizializza e avvia l'animazione
    if (animationsEnabled) {
      setupCanvas();
      animate();
    }

    // Gestisci il ridimensionamento della finestra
    window.addEventListener("resize", setupCanvas);

    // Funzione di pulizia
    return () => {
      window.removeEventListener("resize", setupCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [color, animationsEnabled]); // L'effetto si riavvia se cambia il colore del tema

  if (!animationsEnabled) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        opacity: 1, // Manteniamo un'opacità bassa di base
      }}
    >
      <canvas ref={canvasRef} />
    </Box>
  );
}
