import React from "react";
import { Typography } from "@mui/material";

// Dati del nostro finto file system
export const fileSystem = [
  {
    id: "readme",
    type: "file",
    name: "README.md",
    content: (
      <>
        <Typography variant="h5" sx={{ mt: 2, color: "primary.main" }}>
          Web Developer & Creative Coder
        </Typography>
        <Typography sx={{ mt: 4, maxWidth: "600px" }}>
          Benvenuto nel mio spazio interattivo. Sono un developer con una
          passione per le interfacce dinamiche e le esperienze utente non
          convenzionali.
        </Typography>
        <Typography sx={{ mt: 2, maxWidth: "600px" }}>
          Usa la sidebar per esplorare i miei progetti e le mie competenze.
        </Typography>
      </>
    ),
  },
  {
    id: "projects",
    type: "folder",
    name: "progetti",
    children: [
      {
        id: "project-1",
        type: "file",
        name: "E-commerce React",
        content: <Typography>Dettagli del progetto E-commerce...</Typography>,
      },
      {
        id: "project-2",
        type: "file",
        name: "API per Blog",
        content: <Typography>Dettagli del progetto API per Blog...</Typography>,
      },
    ],
  },
  {
    id: "skills",
    type: "folder",
    name: "competenze",
    children: [
      {
        id: "skill-1",
        type: "file",
        name: "React.jsx",
        content: <Typography>Sono esperto in React...</Typography>,
      },
      {
        id: "skill-2",
        type: "file",
        name: "Node.js",
        content: <Typography>Ho esperienza con Node.js...</Typography>,
      },
    ],
  },
  {
    id: "contatti",
    type: "file",
    name: "contatti.json",
    content: <Typography>{'{ "email": "mia@email.com" }'}</Typography>,
  },
];

// Funzione per trovare un file nel nostro "file system" tramite il suo id
export function findFileById(nodes, id) {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.children) {
      const found = findFileById(node.children, id);
      if (found) return found;
    }
  }
  return null;
}
