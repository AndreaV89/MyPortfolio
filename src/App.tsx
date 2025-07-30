import React, { useState, useMemo } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Collapse,
  createTheme,
  GlobalStyles,
} from "@mui/material";
import type { PaletteMode } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Terminal from "./components/Terminal";

import MainContent from "./components/MainContent";

import { findFileById, fileSystem } from "./data/fileSystem";
import type { FileNode } from "./types";
import StatusBar from "./components/StatusBar";
import TabBar from "./components/TabBar";
import TitleBar from "./components/TitleBar";

function App() {
  const [mode, setMode] = useState<PaletteMode>("dark");
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

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          // Definiamo i colori per entrambi i temi per coerenza
          ...(mode === "dark"
            ? {
                primary: {
                  main: "#a8e400",
                },
                // Valori per il tema scuro
                background: { default: "#181818", paper: "#1f1f1f" },
                text: { primary: "#abb2bf" },
                divider: "rgba(255, 255, 255, 0.12)",
                syntax: {
                  reactTag: "#4ec9b0",
                  keyword: "#c284bd",
                  string: "#ce9178",
                  comment: "#679554",
                  varName: "#9ad8f8",
                  compName: "#d8d8a7",
                  punc: "#f8f8f2",
                  symbols: "#757575",
                  brackets1: "#ffd700",
                  brackets2: "#d76fd3",
                  brackets3: "#179fff",
                },
              }
            : {
                primary: {
                  main: "#007acc", // Un blu classico e leggibile
                },
                // Valori per il tema chiaro
                background: { default: "#f8f8f8", paper: "#ffffff" },
                text: { primary: "#242424", secondary: "#585858" },
                divider: "rgba(0, 0, 0, 0.12)",
                syntax: {
                  reactTag: "#398aa2",
                  keyword: "#af00db",
                  string: "#a82121",
                  comment: "#008000",
                  varName: "#0070c1",
                  compName: "#7b6129",
                  punc: "#0d0d0d",
                  symbols: "#800000",
                  brackets1: "#0431fa",
                  brackets2: "#319331",
                  brackets3: "#966145",
                },
              }),
        },
        typography: {
          fontFamily: '"Fira Code", monospace',
        },
      }),
    [mode]
  );

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
          // Applichiamo gli stili al body per una migliore performance e compatibilità
          "*": {
            // Per Firefox
            scrollbarWidth: "thin",
            scrollbarColor: `${theme.palette.primary.main} ${theme.palette.background.paper}`,
          },
          "*::-webkit-scrollbar": {
            width: "8px",
          },
          "*::-webkit-scrollbar-track": {
            background: theme.palette.background.paper,
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "4px",
            border: `2px solid ${theme.palette.background.paper}`,
          },
        })}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100%",
        }}
      >
        <TitleBar
          activeFile={activeFile}
          onGoBack={handleGoBack}
          onGoForward={handleGoForward}
          canGoBack={canGoBack}
          canGoForward={canGoForward}
          onToggleTheme={toggleTheme}
          currentTheme={mode}
        />
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            overflow: "hidden",
            minHeight: 0,
          }}
        >
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
          <Terminal onOpenFile={handleOpenFile} onToggleTheme={toggleTheme} />
        </Collapse>
        <StatusBar file={activeFile} onToggleTerminal={handleToggleTerminal} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
