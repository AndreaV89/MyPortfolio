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
        backgroundColor: "background.default",
        borderTop: "1px solid",
        borderColor: "divider",
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
        <Typography
          variant="body2"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {/* Mostriamo il percorso del file selezionato */}
          {file ? `aperto: ${file.name}` : "nessun file aperto"}
        </Typography>
        <IconButton
          size="small"
          onClick={onToggleTerminal}
          disableRipple
          sx={(theme) => {
            // 1. Creiamo un nome di animazione UNICO per ogni tema.
            const animationName = `heartbeatGlow-${theme.palette.mode}`;

            return {
              borderRadius: "50%",
              "&:focus": {
                outline: "none",
              },

              // 2. Usiamo il nome dinamico per DEFINIRE l'animazione.
              [`@keyframes ${animationName}`]: {
                // Ho raggruppato gli stati per pulizia
                "0%, 20%, 40%, 100%": {
                  boxShadow: "none",
                  color: "text.secondary",
                },
                "10%, 30%": {
                  boxShadow: `0 0 12px 3px ${theme.palette.primary.main}`,
                  color: "primary.main",
                },
              },
              // 3. Usiamo lo stesso nome dinamico per APPLICARE l'animazione.
              animation: `${animationName} 2.5s infinite linear`,
            };
          }}
        >
          <TerminalIcon sx={{ fontSize: "1.1rem" }} />
        </IconButton>
      </Box>

      {/* --- Sezione Destra --- */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography
          variant="body2"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Ln 1, Col 1
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          UTF-8
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <CodeIcon sx={{ fontSize: "1rem" }} />
          <Typography variant="body2">TypeScript React</Typography>
        </Box>
      </Box>
    </Box>
  );
}
