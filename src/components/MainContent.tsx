import React from "react";
import { Box } from "@mui/material";
import GlitchableText from "./GlitchableText";

export default function MainContent({ file }) {
  if (!file) {
    return (
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <GlitchableText text="SELEZIONA UN FILE" />
      </Box>
    );
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
      <GlitchableText text={file.name.toUpperCase()} />
      {file.content}
    </Box>
  );
}
