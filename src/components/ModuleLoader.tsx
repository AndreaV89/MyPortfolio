import { useState, useEffect } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const modules = [
  "Connessione al server...",
  "Caricamento VDOM...",
  "Compilazione JIT...",
  "Rendering UI...",
  "Fatto.",
];

interface ModuleLoaderProps {
  onComplete: () => void; // Funzione da chiamare quando il caricamento è finito
}

export default function ModuleLoader({ onComplete }: ModuleLoaderProps) {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  useEffect(() => {
    // Passa al modulo successivo ogni 400ms
    const interval = setInterval(() => {
      setCurrentModuleIndex((prevIndex) => {
        if (prevIndex >= modules.length - 1) {
          clearInterval(interval);
          onComplete(); // Comunica al genitore che abbiamo finito
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <Box>
      {modules.slice(0, currentModuleIndex + 1).map((module, index) => (
        <Box
          key={index}
          sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}
        >
          <Typography sx={{ color: "text.secondary", minWidth: "200px" }}>
            {`> ${module}`}
          </Typography>
          {/* Mostra la barra di caricamento solo se non è l'ultimo modulo */}
          {index < modules.length - 1 && (
            <LinearProgress
              variant="determinate"
              value={100}
              color="primary"
              sx={{ width: "100px", height: 8 }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
