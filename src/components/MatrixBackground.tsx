import { useRef, useEffect } from "react";
import { Box } from "@mui/material";

interface MatrixBackgroundProps {
  isSplashScreen: boolean;
  color: string;
}

export default function MatrixBackground({
  isSplashScreen,
  color,
}: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let intervalId: number;

    // Questa funzione imposta e avvia (o riavvia) l'animazione
    const startAnimation = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const katakana =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
      const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const nums = "0123456789";
      const alphabet = katakana + latin + nums;

      const fontSize = 16;
      const columns = Math.floor(canvas.width / fontSize);
      const rainDrops: number[] = [];

      for (let i = 0; i < columns; i++) {
        rainDrops[i] = Math.floor((Math.random() * -canvas.height) / fontSize);
      }

      const draw = () => {
        context.fillStyle = "rgba(0, 0, 0, 0.05)";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = color;
        context.font = `${fontSize}px monospace`;

        for (let i = 0; i < rainDrops.length; i++) {
          const text = alphabet.charAt(
            Math.floor(Math.random() * alphabet.length)
          );
          context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

          if (
            rainDrops[i] * fontSize > canvas.height &&
            Math.random() > 0.975
          ) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
      };

      intervalId = window.setInterval(draw, 30);
    };

    // Funzione che viene chiamata al ridimensionamento della finestra
    const handleResize = () => {
      window.clearInterval(intervalId); // Ferma l'animazione precedente
      startAnimation(); // E la fa ripartire con le nuove dimensioni
    };

    // Aggiungiamo l'ascoltatore per l'evento 'resize'
    window.addEventListener("resize", handleResize);

    // Avviamo l'animazione la prima volta
    startAnimation();

    // Funzione di pulizia
    return () => {
      window.removeEventListener("resize", handleResize);
      window.clearInterval(intervalId);
    };
  }, [color]); // L'array vuoto assicura che questo effetto venga eseguito solo una volta (al montaggio)

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        opacity: isSplashScreen ? 1 : 0.5,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </Box>
  );
}
