import { Box, Typography, IconButton } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import AccountTreeIcon from "@mui/icons-material/AccountTree"; // Icona per il branch Git
import CodeIcon from "@mui/icons-material/Code";
import type { FileNode } from "../types";
import GlitchableIcon from "./GlitchableIcon";

interface StatusBarProps {
  file: FileNode | null;
  onToggleTerminal: () => void;
}

export default function StatusBar({ file, onToggleTerminal }: StatusBarProps) {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1a1d21", // Un colore leggermente diverso per staccare
        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        p: "0 16px",
        height: "28px",
        color: "text.secondary",
      }}
    >
      {/* --- Sezione Sinistra --- */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <GlitchableIcon>
          {/* <-- AVVOLGIAMO L'ICONA */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <AccountTreeIcon sx={{ fontSize: "1rem" }} />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              main
            </Typography>
          </Box>
        </GlitchableIcon>
        <Typography variant="body2">
          {/* Mostriamo il percorso del file selezionato */}
          {file ? `aperto: ${file.name}` : "nessun file aperto"}
        </Typography>
        <IconButton
          size="small"
          onClick={onToggleTerminal}
          disableRipple
          sx={{
            borderRadius: "50%",
            "&:focus": {
              outline: "none",
            },

            // --- NUOVA ANIMAZIONE "A BATTITO" ---
            "@keyframes heartbeatGlow": {
              // Il primo lampo
              "0%": { boxShadow: "none", color: "text.secondary" },
              "10%": {
                boxShadow: "0 0 12px 3px #a8e400",
                color: "primary.main",
              },
              "20%": { boxShadow: "none", color: "text.secondary" },
              // Il secondo lampo, più veloce
              "30%": {
                boxShadow: "0 0 12px 3px #a8e400",
                color: "primary.main",
              },
              "40%": { boxShadow: "none", color: "text.secondary" },
              // Lunga pausa fino alla fine dell'animazione
              "100%": { boxShadow: "none", color: "text.secondary" },
            },
            animation: "heartbeatGlow 2.5s infinite linear",
          }}
        >
          <TerminalIcon sx={{ fontSize: "1.1rem" }} />
        </IconButton>
      </Box>

      {/* --- Sezione Destra --- */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="body2">Ln 1, Col 1</Typography>
        <Typography variant="body2">UTF-8</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <CodeIcon sx={{ fontSize: "1rem" }} />
          <Typography variant="body2">TypeScript React</Typography>
        </Box>
      </Box>
    </Box>
  );
}
