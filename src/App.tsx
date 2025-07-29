import { useState } from "react";
import { ThemeProvider, CssBaseline, Box, Collapse } from "@mui/material";
import codeEditorTheme from "../src/theme";
import Sidebar from "./components/Sidebar";
import Terminal from "./components/Terminal";

import MainContent from "./components/MainContent";

import { findFileById, fileSystem } from "./data/fileSystem";
import type { FileNode } from "./types";
import StatusBar from "./components/StatusBar";
import TabBar from "./components/TabBar";
import TitleBar from "./components/TitleBar";

function App() {
  // NUOVO STATO: teniamo traccia di tutti i tab aperti e di quale è attivo
  const readmeFile = findFileById(fileSystem, "readme");
  const [openTabs, setOpenTabs] = useState<FileNode[]>(
    readmeFile ? [readmeFile] : []
  );
  const [activeTabId, setActiveTabId] = useState<string | null>(
    readmeFile ? readmeFile.id : null
  );
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  // Funzione per APRIRE un file (chiamata dalla Sidebar)
  const handleOpenFile = (file: FileNode) => {
    // Controlla se il tab è già aperto
    if (!openTabs.find((tab) => tab.id === file.id)) {
      setOpenTabs([...openTabs, file]);
    }
    // Imposta il tab come attivo
    setActiveTabId(file.id);
  };

  const handleToggleTerminal = () => {
    setIsTerminalOpen((prev) => !prev);
  };

  // Funzione per CAMBIARE tab (chiamata dalla TabBar)
  const handleTabChange = (event: React.SyntheticEvent, newTabId: string) => {
    setActiveTabId(newTabId);
  };

  const handleCloseTab = (tabIdToClose: string) => {
    const tabIndex = openTabs.findIndex((tab) => tab.id === tabIdToClose);

    // Rimuoviamo il tab dalla lista
    const newOpenTabs = openTabs.filter((tab) => tab.id !== tabIdToClose);
    setOpenTabs(newOpenTabs);

    // Se il tab chiuso era quello attivo, dobbiamo decidere quale tab attivare
    if (activeTabId === tabIdToClose) {
      if (newOpenTabs.length === 0) {
        // Se non ci sono più tab, non c'è nessun tab attivo
        setActiveTabId(null);
      } else {
        // Altrimenti, attiva il tab successivo o precedente
        const newActiveIndex = Math.max(0, tabIndex - 1);
        setActiveTabId(newOpenTabs[newActiveIndex].id);
      }
    }
  };

  // Troviamo il file corrispondente al tab attivo da passare a MainContent
  const activeFile = openTabs.find((tab) => tab.id === activeTabId) || null;

  return (
    <ThemeProvider theme={codeEditorTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
        }}
      >
        <TitleBar activeFile={activeFile} />
        <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
          {/* La sidebar ora chiama handleOpenFile */}
          <Sidebar
            onFileSelect={handleOpenFile}
            selectedFileId={activeTabId ?? undefined}
          />

          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            {/* La nostra nuova barra dei tab */}
            <TabBar
              openTabs={openTabs}
              activeTabId={activeTabId}
              onTabChange={handleTabChange}
              onCloseTab={handleCloseTab}
            />
            {/* Il contenuto principale mostra il file del tab attivo */}
            <MainContent file={activeFile} />
          </Box>
        </Box>
        <Collapse in={isTerminalOpen}>
          <Terminal />
        </Collapse>
        <StatusBar file={activeFile} onToggleTerminal={handleToggleTerminal} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
