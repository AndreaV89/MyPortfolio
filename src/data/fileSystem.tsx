import type { FileSystemNode, FileNode } from "../types";

import ReadmeContent from "../content/ReadmeContent";
import AboutMeContent from "../content/AboutMeContent";
import PortfolioProjectContent from "../content/PortfolioProjectContent";
import ContactContent from "../content/ContactContent";
import SkillsContent from "../content/SkillsContent";
import Succulentarte from "../content/Succulentarte";

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
        id: "project-2",
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
