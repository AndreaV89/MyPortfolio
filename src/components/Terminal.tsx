import React, { useState, useRef, useEffect } from "react";
import { Box, InputBase, Typography } from "@mui/material";

const WelcomeMessage = () => (
  <>
    <Typography variant="body2">Benvenuto nel mio terminale.</Typography>
    <Typography variant="body2">
      Digita `help` per la lista dei comandi.
    </Typography>
  </>
);

export default function Terminal() {
  const [history, setHistory] = useState<React.ReactNode[]>([
    <WelcomeMessage key="welcome" />,
  ]);
  const [input, setInput] = useState("");
  const endOfHistoryRef = useRef<null | HTMLDivElement>(null);

  const executeCommand = (command: string) => {
    let output: React.ReactNode = `Comando non trovato: ${command}. Digita 'help'.`;

    switch (command.toLowerCase()) {
      case "help":
        output = "Comandi disponibili: about, projects, contact, clear";
        break;
      case "about":
        output =
          "Sono un Web Developer con la passione per il codice pulito e le UI creative.";
        break;
      case "projects":
        output = "1. E-commerce React\n2. API per Blog";
        break;
      case "contact":
        output = "Puoi trovarmi su [la tua email] o [il tuo LinkedIn].";
        break;
      case "clear":
        setHistory([]);
        return; // Esce dalla funzione per non aggiungere output
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

  // Scrolla automaticamente alla fine
  useEffect(() => {
    endOfHistoryRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <Box
      sx={{
        height: "250px",
        backgroundColor: "#181818",
        borderTop: "1px solid #2b2b2b",
        p: 2,
        overflowY: "auto",
        fontFamily: "monospace",
      }}
    >
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
      <Box component="form" sx={{ display: "flex", alignItems: "center" }}>
        <Typography component="span" sx={{ mr: 1 }}>
          &gt;
        </Typography>
        <InputBase
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
