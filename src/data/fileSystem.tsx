import { Typography, Link, Box, Divider } from "@mui/material";
import type { FileSystemNode, FileNode } from "../types";
import {
  Keyword,
  String,
  Comment,
  VarName,
  Punc,
  Brackets1,
  Brackets2,
  Brackets3,
} from "../components/SyntaxComponents";
import {
  ReactTag, // Importa il componente rinominato
} from "../components/SyntaxComponents";

// Dati del nostro finto file system
export const fileSystem: FileSystemNode[] = [
  {
    id: "readme",
    type: "file",
    name: "README.md",
    content: (
      <Box sx={{ lineHeight: 1.75 }}>
        <Typography
          variant="h6"
          component="pre"
          sx={{ color: "text.secondary" }}
        >
          &gt; Inizializzazione sistema...
          <br />
          &gt; Caricamento moduli...
          <br />
          &gt; Connessione stabilita.
        </Typography>
        <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.12)" }} />
        <Typography>
          Ciao, sono{" "}
          <Typography
            component="span"
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            Andrea Vannetti
          </Typography>
          , Web Developer con una passione per le interfacce non convenzionali e
          il codice creativo.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Quello che vedi non è un semplice sito, ma un portfolio interattivo
          che vive e respira all'interno di un'emulazione di code editor.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Come funziona
        </Typography>
        <ul>
          <li>
            <Typography>
              <strong>Naviga</strong> usando l'esploratore di file sulla
              sinistra. Ogni file e cartella rivela qualcosa di diverso su di
              me.
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Esplora</strong> la cartella <code>progetti/</code> per
              vedere i miei lavori più significativi.
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Scopri</strong> le mie <code>competenze/</code> e le
              tecnologie con cui amo lavorare.
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Attenzione:</strong> occasionali scariche di dati (
              <em>glitch</em>) sono una feature, non un bug. È il sistema che
              pensa.
            </Typography>
          </li>
        </ul>

        <Typography sx={{ mt: 4 }}>Buona esplorazione.</Typography>
      </Box>
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
        name: "E-commerce React.jsx",
        // --- NUOVO CONTENUTO ---
        content: (
          <Box
            component="pre"
            sx={{
              lineHeight: 1.75,
              fontSize: "0.9rem",
              whiteSpace: "pre-wrap",
            }}
          >
            <Comment>
              &#47;&#47; Descrizione del progetto: Piattaforma E-commerce
            </Comment>
            <br />
            <br />
            <Keyword>import</Keyword> <VarName>React</VarName>{" "}
            <Keyword>from</Keyword> <String>'react'</String>
            <Punc>;</Punc>
            <br />
            <Keyword>import</Keyword> <Brackets1>&#123;</Brackets1>{" "}
            <VarName>ShoppingCart</VarName> <Brackets1>&#125;</Brackets1>{" "}
            <Keyword>from</Keyword> <String>'@mui/icons-material'</String>
            <Punc>;</Punc>
            <br />
            <br />
            <Keyword>const</Keyword> <VarName>project</VarName> <Punc>=</Punc>{" "}
            <Brackets1>&#123;</Brackets1>
            <br />
            {"  "}
            <VarName>name</VarName>
            <Punc>:</Punc> <String>"Piattaforma E-commerce"</String>
            <Punc>,</Punc>
            <br />
            {"  "}
            <VarName>stack:</VarName>
            <Brackets2> [</Brackets2>
            <String>"React"</String>
            <Punc>,</Punc> <String>"TypeScript"</String>
            <Punc>,</Punc> <String>"Material-UI"</String>
            <Punc>,</Punc> <String>"Node.js"</String>
            <Brackets2>],</Brackets2>
            <br />
            {"  "}
            <VarName>description</VarName>
            <Punc>:</Punc>{" "}
            <String>
              `Una piattaforma completa per la vendita online, con gestione del
              carrello, checkout e un pannello di amministrazione per i
              prodotti.`
            </String>
            <Punc>,</Punc>
            <br />
            <Brackets1>&#125;</Brackets1>
            <Punc>;</Punc>
            <br />
            <br />
            <Keyword>export const</Keyword> <ReactTag>Links</ReactTag>{" "}
            <Punc>=</Punc> <Brackets3>()</Brackets3> <Punc>=&gt;</Punc>{" "}
            <Brackets1>(</Brackets1>
            <br />
            {"  "}
            <Punc>&lt;</Punc>
            <ReactTag>Box</ReactTag>
            <Punc>&gt;</Punc>
            <br />
            {"    "}
            <Link href="#" target="_blank" color="primary">
              Live Demo
            </Link>
            <br />
            {"    "}
            <Link href="#" target="_blank" color="primary">
              Codice Sorgente (GitHub)
            </Link>
            <br />
            {"  "}
            <Punc>&lt;/</Punc>
            <ReactTag>Box</ReactTag>
            <Punc>&gt;</Punc>
            <br />
            <Brackets1>)</Brackets1>
            <Punc>;</Punc>
          </Box>
        ),
        // --- FINE NUOVO CONTENUTO ---
      },
      {
        id: "project-2",
        type: "file",
        name: "API per Blog.css",
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
