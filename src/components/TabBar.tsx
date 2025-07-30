import React from "react";
import { Box, Tabs, Tab, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { FileNode } from "../types";

interface TabBarProps {
  openTabs: FileNode[];
  activeTabId: string | null;
  onTabChange: (event: React.SyntheticEvent, newTabId: string) => void;
  onCloseTab: (tabIdToClose: string) => void;
}

export default function TabBar({
  openTabs,
  activeTabId,
  onTabChange,
  onCloseTab,
}: TabBarProps) {
  const handleCloseClick = (event: React.MouseEvent, tabId: string) => {
    event.stopPropagation();
    onCloseTab(tabId);
  };

  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      <Tabs
        value={activeTabId}
        onChange={onTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          minHeight: "40px",
          "@keyframes glitchTabSelect": {
            "0%": {
              backgroundColor: "#2d2d2d",
              borderColor: "#424242",
              color: "text.secondary",
            },
            "25%": {
              backgroundColor: "primary.main",
              borderColor: "#2d2d2d",
              color: "#1a1d21",
            },
            "50%": { backgroundColor: "#2d2d2d", borderColor: "primary.main" },
            "100%": {
              backgroundColor: "background.default",
              borderColor: "primary.main",
              color: "text.primary",
            },
          },
          "& .MuiTab-root": {
            minHeight: "40px",
            textTransform: "none",
            color: "text.secondary",
            backgroundColor: "#2d2d2d",
            borderRight: "1px solid",
            borderColor: "divider",
            outline: "none",
            py: "7px",

            // Stile per il tab selezionato
            "&.Mui-selected": {
              color: "text.primary",
              animation: "glitchTabSelect 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              backgroundColor: "background.default",
              borderTop: "1px solid #a8e400",
              // Abbiamo rimosso la riga "borderBottomColor: 'background.default'"
              // Ora anche il tab selezionato mostrerà il suo bordo inferiore.
            },
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        {openTabs.map((tab) => (
          <Tab
            key={tab.id}
            value={tab.id}
            label={
              <Box
                component="span"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {tab.name}
                <IconButton
                  component="span"
                  size="small"
                  onClick={(event) => handleCloseClick(event, tab.id)}
                  sx={{
                    ml: 2,
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  <CloseIcon sx={{ fontSize: "1rem" }} />
                </IconButton>
              </Box>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
}
