import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { FileNode } from "../types";

interface TitleBarProps {
  activeFile: FileNode | null;
}

export default function TitleBar({ activeFile }: TitleBarProps) {
  // Per ora, le frecce sono disabilitate. La logica di cronologia si può aggiungere in seguito.
  const canGoBack = false;
  const canGoForward = false;

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "50px",
        backgroundColor: "#3c3c3c",
        color: "text.primary",
        p: "0 8px",
        flexShrink: 0,
      }}
    >
      {/* --- BLOCCO CENTRALE UNICO --- */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Frecce di Navigazione (ora senza sfondo) */}
        <IconButton size="small" disabled={!canGoBack}>
          <ArrowBackIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" disabled={!canGoForward} sx={{ mr: 1 }}>
          <ArrowForwardIcon fontSize="small" />
        </IconButton>

        {/* Barra del Percorso File (ora con il suo stile dedicato) */}
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.2)",
            borderRadius: 1,
            p: "6px 12px", // Leggermente aggiustato per l'altezza
            minWidth: "600px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Typography
            variant="body2"
            noWrap
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            {activeFile ? `MioPortfolio > ${activeFile.name}` : "MioPortfolio"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
