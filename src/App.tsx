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
  const [history, setHistory] = useState<string[]>([activeTabId || ""]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Funzione per navigare a un tab e aggiornare la cronologia
  const navigateToTab = (tabId: string) => {
    setActiveTabId(tabId);

    // Se navighiamo indietro e poi apriamo un nuovo tab, la cronologia "futura" viene cancellata
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(tabId);

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  // Funzione per APRIRE un file (chiamata dalla Sidebar)
  const handleOpenFile = (file: FileNode) => {
    // Controlla se il tab è già aperto
    if (!openTabs.find((tab) => tab.id === file.id)) {
      setOpenTabs([...openTabs, file]);
    }
    // Imposta il tab come attivo
    navigateToTab(file.id);
  };

  const handleToggleTerminal = () => {
    setIsTerminalOpen((prev) => !prev);
  };

  // Funzione per CAMBIARE tab (chiamata dalla TabBar)
  const handleTabChange = (event: React.SyntheticEvent, newTabId: string) => {
    navigateToTab(newTabId);
    console.log(event);
  };

  const handleCloseTab = (tabIdToClose: string) => {
    const tabIndex = openTabs.findIndex((tab) => tab.id === tabIdToClose);
    const newOpenTabs = openTabs.filter((tab) => tab.id !== tabIdToClose);
    setOpenTabs(newOpenTabs);

    if (activeTabId === tabIdToClose) {
      if (newOpenTabs.length === 0) {
        setActiveTabId(null);
        // --- AGGIUNTA: RESET DELLA CRONOLOGIA ---
        setHistory([]);
        setHistoryIndex(0);
        // --- FINE AGGIUNTA ---
      } else {
        const newActiveIndex = Math.max(0, tabIndex - 1);
        const newActiveTabId = newOpenTabs[newActiveIndex].id;
        setActiveTabId(newActiveTabId);

        // Per coerenza, aggiorniamo anche la cronologia quando chiudiamo un tab attivo
        const newHistory = history.slice(0, historyIndex + 1);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
      }
    }
  };

  // --- NUOVE FUNZIONI PER LE FRECCE ---
  const handleGoBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setActiveTabId(history[newIndex]);
    }
  };

  const handleGoForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setActiveTabId(history[newIndex]);
    }
  };

  // Determiniamo se i bottoni devono essere attivi
  const canGoBack = historyIndex > 0;
  const canGoForward = historyIndex < history.length - 1;

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
        <TitleBar
          activeFile={activeFile}
          onGoBack={handleGoBack}
          onGoForward={handleGoForward}
          canGoBack={canGoBack}
          canGoForward={canGoForward}
        />
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
          <Terminal onOpenFile={handleOpenFile} />
        </Collapse>
        <StatusBar file={activeFile} onToggleTerminal={handleToggleTerminal} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
