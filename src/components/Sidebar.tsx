import { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
  Typography,
} from "@mui/material";
import FileIcon from "./FileIcon"; // <-- Manteniamo le icone personalizzate
import { fileSystem } from "../data/fileSystem";
import type { FileSystemNode, FileNode } from "../types";
import { FcOpenedFolder } from "react-icons/fc";
import { FcFolder } from "react-icons/fc";

// Tipi per le props...
interface SidebarProps {
  onFileSelect: (file: FileNode) => void;
  selectedFileId: string | undefined;
}

interface FileSystemItemProps {
  item: FileSystemNode;
  level?: number;
  onFileSelect: (file: FileNode) => void;
  selectedFileId: string | undefined;
}

function FileSystemItem({
  item,
  level = 0,
  onFileSelect,
  selectedFileId,
}: FileSystemItemProps) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    if (item.type === "folder") {
      setOpen(!open);
    } else {
      onFileSelect(item);
    }
  };

  const isSelected = item.id === selectedFileId;

  if (item.type === "folder") {
    return (
      <>
        <ListItemButton onClick={handleClick} sx={{ pl: 2 + level * 2 }}>
          {/* Usiamo le icone corrette */}
          {open ? (
            <FcOpenedFolder size={20} style={{ marginRight: "8px" }} />
          ) : (
            <FcFolder size={20} style={{ marginRight: "8px" }} />
          )}
          <ListItemText
            primary={item.name}
            primaryTypographyProps={{ variant: "body2", fontWeight: "bold" }}
          />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((child: FileSystemNode) => (
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

  return (
    <ListItemButton
      onClick={handleClick}
      sx={{
        pl: 2 + level * 2,
        py: 0.5,
        "&.Mui-selected": {
          backgroundColor: "rgba(255, 255, 255, 0.08) !important",
        },
      }}
      selected={isSelected}
    >
      <FileIcon name={item.name} />
      <ListItemText
        primary={item.name}
        primaryTypographyProps={{ variant: "body2" }}
      />
    </ListItemButton>
  );
}

export default function Sidebar({
  onFileSelect,
  selectedFileId,
}: SidebarProps) {
  return (
    <Box
      component="aside"
      sx={{
        width: "300px",
        height: "100%",
        flexShrink: 0,
        // --- COLORI RIPRISTINATI ---
        backgroundColor: "#181818",
        borderRight: "1px solid rgba(255, 255, 255, 0.12)",
        // Non serve specificare il colore di testo e icone, lo ereditano dal tema
        // --- FINE MODIFICA ---
        p: 2,
        overflowY: "auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
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
