import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import type { FileNode } from "../types";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface TitleBarProps {
  activeFile: FileNode | null;
  onGoBack: () => void;
  onGoForward: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
  onToggleTheme: () => void;
  currentTheme: "light" | "dark";
}

export default function TitleBar({
  activeFile,
  onGoBack,
  onGoForward,
  canGoBack,
  canGoForward,
  onToggleTheme,
  currentTheme,
}: TitleBarProps) {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "50px",
        backgroundColor: "background.default",
        borderBottom: "1px solid",
        borderColor: "divider",
        color: "text.primary",
        p: "0 8px",
        flexShrink: 0,
      }}
    >
      {/* Gruppo Sinistra (segnaposto per bilanciare) */}
      <Box sx={{ width: 80 }} />
      {/* --- BLOCCO CENTRALE UNICO --- */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Frecce di Navigazione (ora senza sfondo) */}
        <IconButton size="small" onClick={onGoBack} disabled={!canGoBack}>
          <ArrowBackIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={onGoForward}
          disabled={!canGoForward}
          sx={{ mr: 1 }}
        >
          <ArrowForwardIcon fontSize="small" />
        </IconButton>

        {/* Barra del Percorso File (ora con il suo stile dedicato) */}
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.2)",
            borderRadius: 1,
            p: "6px 12px", // Leggermente aggiustato per l'altezza
            minWidth: "600px",
            border: "1px solid",
            borderColor: "divider",
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
      {/* --- GRUPPO DESTRA: Selettore Tema --- */}
      <Box sx={{ marginLeft: "auto" }}>
        <IconButton onClick={onToggleTheme} sx={{ color: "text.secondary" }}>
          {currentTheme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>
    </Box>
  );
}
