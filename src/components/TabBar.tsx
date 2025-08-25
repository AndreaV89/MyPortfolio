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
        sx={(theme) => {
          const animationName = `glitchTabSelect-${theme.palette.mode}`;

          return {
            minHeight: "40px",
            [`@keyframes ${animationName}`]: {
              "0%": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#2d2d2d" : "#e0e0e0",
                borderColor: theme.palette.divider,
                color: theme.palette.text.secondary,
              },
              "25%": {
                backgroundColor: theme.palette.primary.main,
                borderColor:
                  theme.palette.mode === "dark" ? "#2d2d2d" : "#e0e0e0",
                color: theme.palette.mode === "dark" ? "#1a1d21" : "#ffffff",
              },
              "50%": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#2d2d2d" : "#e0e0e0",
                borderColor: theme.palette.primary.main,
              },
              "100%": {
                backgroundColor: theme.palette.background.default,
                borderColor: theme.palette.primary.main,
                color: theme.palette.text.primary,
              },
            },
            "& .MuiTab-root": {
              minHeight: "40px",
              textTransform: "none",
              color: "text.secondary",
              backgroundColor: "background.default",
              borderRight: "1px solid",
              borderColor: "divider",
              outline: "none",
              py: "7px",
              "&.Mui-selected": {
                color: "text.primary",
                // 3. Usiamo lo stesso nome dinamico per APPLICARE l'animazione
                animation: `${animationName} 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
                backgroundColor: "background.default",
                borderTop: "1px solid",
                borderColor: "primary.main",
              },
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          };
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
