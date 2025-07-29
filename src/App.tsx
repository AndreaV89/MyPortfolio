import codeEditorTheme from "../src/theme";
import { ThemeProvider, CssBaseline, Box, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import GlitchableText from "./components/GlitchableText";
import MainContent from "./components/MainContent";
import React, { useState } from "react";
import { findFileById, fileSystem } from "./data/fileSystem";

function App() {
  // Stato per tenere traccia del file selezionato. Iniziamo con README.md
  const [selectedFile, setSelectedFile] = useState(
    findFileById(fileSystem, "readme")
  );

  // Funzione che verrà chiamata dalla Sidebar
  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  return (
    <ThemeProvider theme={codeEditorTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar
          onFileSelect={handleFileSelect}
          selectedFileId={selectedFile?.id}
        />
        <MainContent file={selectedFile} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
