import { Box } from "@mui/material";
import GlitchableText from "./GlitchableText";
import type { FileNode } from "../types";

interface MainContentProps {
  file: FileNode | null;
}

export default function MainContent({ file }: MainContentProps) {
  if (!file) {
    return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <GlitchableText text="SELEZIONA UN FILE" />
      </Box>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#1f1f1f",
        flexGrow: 1,
        p: 4,
        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      <GlitchableText text={file.name.toUpperCase()} />
      {file.content}
    </Box>
  );
}
