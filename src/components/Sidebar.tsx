import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ChevronRight from "@mui/icons-material/ChevronRight";
import FolderIcon from "@mui/icons-material/Folder";
import DescriptionIcon from "@mui/icons-material/Description";

import { fileSystem } from "../data/fileSystem";

// Componente ricorsivo per una singola voce
function FileSystemItem({ item, level = 0, onFileSelect, selectedFileId }) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    if (item.type === "folder") {
      setOpen(!open);
    } else {
      onFileSelect(item); // Comunica al genitore quale file è stato selezionato
    }
  };

  const isSelected = item.id === selectedFileId;

  if (item.type === "folder") {
    return (
      <>
        <ListItemButton onClick={handleClick} sx={{ pl: 2 + level * 2 }}>
          {open ? <ExpandMore /> : <ChevronRight />}
          <FolderIcon sx={{ mr: 1, fontSize: "1.2rem" }} />
          <ListItemText
            primary={item.name}
            primaryTypographyProps={{ variant: "body2" }}
          />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((child) => (
              <FileSystemItem
                key={child.id}
                item={child}
                level={level + 1}
                onFileSelect={onFileSelect}
                selectedFileId={selectedFileId}
              />
            ))}
          </List>
        </Collapse>
      </>
    );
  }

  // Se è un file
  return (
    <ListItemButton
      onClick={handleClick}
      sx={{ pl: 4 + level * 2 }}
      selected={isSelected}
    >
      <DescriptionIcon sx={{ mr: 1, fontSize: "1.2rem" }} />
      <ListItemText
        primary={item.name}
        primaryTypographyProps={{ variant: "body2" }}
      />
    </ListItemButton>
  );
}

// Componente principale della Sidebar
export default function Sidebar({ onFileSelect, selectedFileId }) {
  return (
    <Box
      component="aside"
      sx={{
        width: "280px",
        height: "100%",
        backgroundColor: "background.paper",
        borderRight: "1px solid rgba(255, 255, 255, 0.12)",
        p: 2,
        overflowY: "auto",
      }}
    >
      <Typography variant="h6" sx={{ color: "text.primary", mb: 2 }}>
        ESPLORA
      </Typography>
      <List component="nav">
        {fileSystem.map((item) => (
          <FileSystemItem
            key={item.id}
            item={item}
            onFileSelect={onFileSelect}
            selectedFileId={selectedFileId}
          />
        ))}
      </List>
    </Box>
  );
}
