import React from "react";
import type { FileSystemNode, FileNode } from "../types";

const ReadmeContent = React.lazy(() => import("../content/ReadmeContent"));
const AboutMeContent = React.lazy(() => import("../content/AboutMeContent"));
const PortfolioProjectContent = React.lazy(
  () => import("../content/PortfolioProjectContent")
);
const ContactContent = React.lazy(() => import("../content/ContactContent"));
const SkillsContent = React.lazy(() => import("../content/SkillsContent"));
const Succulentarte = React.lazy(() => import("../content/Succulentarte"));

// Dati del nostro finto file system
export const fileSystem: FileSystemNode[] = [
  {
    id: "readme",
    type: "file",
    name: "README.md",
    content: <ReadmeContent />,
  },
  {
    id: "about-me",
    type: "file",
    name: "about-me.md",
    content: <AboutMeContent />,
  },
  {
    id: "projects",
    type: "folder",
    name: "progetti",
    children: [
      {
        id: "project-1",
        type: "file",
        name: "portfolio-interattivo.jsx",
        content: <PortfolioProjectContent />,
      },
      {
        id: "succulentarte.tsx",
        type: "file",
        name: "Succulentarte.tsx",
        content: <Succulentarte />,
      },
    ],
  },
  {
    id: "skills",
    type: "folder",
    name: "competenze",
    children: [
      {
        id: "skills",
        type: "file",
        name: "skills.jsx",
        content: <SkillsContent />,
      },
    ],
  },
  {
    id: "contatti",
    type: "file",
    name: "contatti.json",
    // --- NUOVO CONTENUTO ---
    content: <ContactContent />,
    // --- FINE NUOVO CONTENUTO ---
  },
];

// Funzione per trovare un file nel nostro "file system" tramite il suo id
export function findFileById(
  nodes: FileSystemNode[],
  id: string
): FileNode | null {
  for (const node of nodes) {
    if (node.id === id && node.type === "file") return node;
    if (node.children) {
      const found = findFileById(node.children, id);
      if (found) return found;
    }
  }
  return null;
}
