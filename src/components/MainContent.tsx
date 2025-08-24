import React from "react";
import { Box, CircularProgress } from "@mui/material";
import GlitchableText from "./GlitchableText";
import type { FileNode } from "../types";

interface MainContentProps {
  file: FileNode | null;
  animationsEnabled: boolean;
}

export default function MainContent({
  file,
  animationsEnabled,
}: MainContentProps) {
  if (!file) {
    return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <GlitchableText
          text="SELEZIONA UN FILE"
          animationsEnabled={animationsEnabled}
        />
      </Box>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "background.paper",
        flexGrow: 1,
        p: 4,
        borderTop: "1px solid",
        borderColor: "divider",
        overflowY: "auto",
      }}
    >
      <GlitchableText
        text={file.name.toUpperCase()}
        animationsEnabled={animationsEnabled}
      />
      <React.Suspense
        fallback={
          <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
            <CircularProgress />
          </Box>
        }
      >
        {file.content}
      </React.Suspense>
    </Box>
  );
}
