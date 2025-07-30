import React, { useState, useRef, useEffect } from "react";
import { Box, InputBase, Typography } from "@mui/material";
import type { FileNode } from "../types";
import { fileSystem, findFileById } from "../data/fileSystem";
import TerminalIcon from "@mui/icons-material/Terminal";

const NeofetchOutput = () => {
  const asciiLogo = `
    ██████╗░██╗░░░░░██╗
    ██╔══██╗██║░░░░░██║
    ██║░░██║██║░░░░░██║
    ██║░░██║██║░░░░░██║
    ██████╔╝███████╗██║
    ╚═════╝░╚══════╝╚═╝
  `;

  const specs = {
    User: "guest@portfolio",
    Host: "Vercel Cloud",
    Kernel: "6.1.0-Linux",
    Uptime: `${Math.floor(Math.random() * 24)}h ${Math.floor(
      Math.random() * 60
    )}m`,
    Shell: "react-bash",
    Resolution: `${window.innerWidth}x${window.innerHeight}`,
    CPU: "Intel Core i9 (Emulated)",
    GPU: "NVIDIA RTX 4090 (Emulated)",
    Memory: "32GB (Available)",
  };

  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <Typography
        component="pre"
        sx={{ color: "primary.main", fontSize: "0.8rem" }}
      >
        {asciiLogo}
      </Typography>
      <Box>
        {Object.entries(specs).map(([key, value]) => (
          <Typography key={key} component="p" variant="body2">
            <Typography
              component="span"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              {key}
            </Typography>
            : {value}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

const WelcomeMessage = () => (
  <>
    <Typography variant="body2">Benvenuto nel mio terminale.</Typography>
    <Typography variant="body2">
      Digita `help` per la lista dei comandi.
    </Typography>
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {/* <-- RIGA AGGIUNTA --> */}
      Suggerimento: Puoi mostrare/nascondere questo pannello cliccando
      sull'icona lampeggiante (
      <TerminalIcon sx={{ fontSize: "1.1rem" }} />) nella status bar.
    </Typography>
  </>
);

interface TerminalProps {
  onOpenFile: (file: FileNode) => void;
  onToggleTheme: () => void;
}

export default function Terminal({ onOpenFile, onToggleTheme }: TerminalProps) {
  const [history, setHistory] = useState<React.ReactNode[]>([
    <WelcomeMessage key="welcome" />,
  ]);
  const [input, setInput] = useState("");
  const endOfHistoryRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const executeCommand = (fullInput: string) => {
    const [command, ...args] = fullInput.toLowerCase().split(" ");
    const arg = args.join(" "); // Raccoglie tutto ciò che viene dopo il comando
    let output: React.ReactNode = `Comando non trovato: ${command}. Digita 'help'.`;

    switch (command) {
      case "help":
        output =
          "Comandi: about, projects, contact, open <file-id>, theme, neofetch, clear";
        break;
      case "about":
        output =
          "Sono un Web Developer con la passione per il codice pulito e le UI creative.";
        break;
      case "projects":
        output = "1. portfolio-interattivo.jsx";
        break;
      case "contact":
        output = "Puoi trovarmi su [la tua email] o [il tuo LinkedIn].";
        break;
      case "theme":
        onToggleTheme();
        output = "Tema cambiato.";
        break;
      case "clear":
        setHistory([]);
        return;

      // --- NUOVO COMANDO 'open' ---
      case "open":
        if (!arg) {
          output = "Uso: open <file-id>. Es: 'open about-me'";
        } else {
          const fileToOpen = findFileById(fileSystem, arg);
          if (fileToOpen) {
            onOpenFile(fileToOpen);
            output = `Apertura di '${fileToOpen.name}'...`;
          } else {
            output = `Errore: file '${arg}' non trovato.`;
          }
        }
        break;

      // --- NUOVO COMANDO 'neofetch' ---
      case "neofetch":
        output = <NeofetchOutput />;
        break;
    }
    setHistory((prev) => [...prev, output]);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newHistory = [...history, `> ${input}`];
      setHistory(newHistory);
      executeCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    endOfHistoryRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Funzione per mettere a fuoco l'input quando si clicca ovunque nel terminale
  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Box
      sx={{
        height: "250px",
        //position: "relative",
        backgroundColor: "background.default",
        p: 2,
        overflowY: "auto",
        fontFamily: "monospace",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
      onClick={focusInput}
    >
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        {history.map((line, index) => (
          <Typography
            key={index}
            variant="body2"
            component="pre"
            sx={{ whiteSpace: "pre-wrap" }}
          >
            {line}
          </Typography>
        ))}
      </Box>
      <Box component="form" sx={{ display: "flex", alignItems: "center" }}>
        <Typography component="span" sx={{ mr: 1 }}>
          &gt;
        </Typography>
        <InputBase
          inputRef={inputRef}
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          sx={{ fontFamily: "monospace", color: "primary.main" }}
        />
      </Box>
      <div ref={endOfHistoryRef} />
    </Box>
  );
}
