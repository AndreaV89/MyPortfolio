import { Typography, Box, Chip, Link } from "@mui/material";
import {
  String,
  Keyword,
  Punc,
  Comment,
  VarName,
} from "../components/SyntaxComponents";

export default function Succulentarte() {
  // --- INSERISCI QUI I DETTAGLI DEL TUO PROGETTO ---
  const project = {
    name: "Succulentarte",
    description: `Applicazione web full-stack sviluppata per l'artista Renzo Vannetti. Il sito funziona come un catalogo digitale per la sua collezione di piante succulente e include un'area di amministrazione completa per la gestione dei contenuti.`,
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Material-UI",
      "Firebase",
      "Vercel Serverless",
    ],
    features: [
      "Catalogo dinamico con navigazione per Famiglia e Genere",
      "Dashboard protetta da autenticazione per la gestione dei contenuti (CMS)",
      "Operazioni CRUD complete per piante e categorie",
      "Upload di immagini su Firebase Storage con ridimensionamento automatico",
      "Funzione serverless (Vercel) per l'invio di email tramite form di contatto",
    ],
    liveUrl: "https://www.succulentarte.com/",
    sourceCodeUrl: "", // Se il codice è privato, puoi omettere questo link
    imageUrl: "",
  };
  // ---------------------------------------------------

  return (
    <Box
      component="pre"
      sx={{
        lineHeight: 1.75,
        fontSize: "0.9rem",
        whiteSpace: "pre-wrap",
      }}
    >
      <Comment>&#47;&#47; file: /progetti/succulentarte.tsx</Comment>
      <br />
      <br />
      <Keyword>const</Keyword> <VarName>project</VarName> <Punc>=</Punc>{" "}
      <Punc>&#123;</Punc>
      <br />
      {"  "}
      <VarName>name</VarName>
      <Punc>:</Punc> <String>"{project.name}"</String>
      <Punc>,</Punc>
      <br />
      {"  "}
      <VarName>description</VarName>
      <Punc>:</Punc> <String>`{project.description}`</String>
      <Punc>,</Punc>
      <br />
      <Punc>&#125;</Punc>
      <Punc>;</Punc>
      <br />
      <br />
      {/* --- IMMAGINE --- */}
      {project.imageUrl && (
        <Box component="div" sx={{ my: 2 }}>
          <img
            src={project.imageUrl}
            alt="Screenshot del portfolio"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #424242",
            }}
          />
        </Box>
      )}
      {/* --- DETTAGLI --- */}
      <Typography variant="h6">Features:</Typography>
      <Comment>&#47;&#47; Visualizza i dettagli del progetto</Comment>
      <br />
      <Box sx={{ marginTop: "1rem" }}>
        <Typography variant="h6">Stack Tecnologico:</Typography>
        <br />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 1 }}>
          {project.stack.map((tech) => (
            <Chip key={tech} label={tech} color="primary" variant="outlined" />
          ))}
        </Box>
        <br />
        <Typography variant="h6">Link Utili:</Typography>
        <br />
        <Link href={project.liveUrl} target="_blank" color="primary">
          Sito Live
        </Link>
        <br />
        {project.sourceCodeUrl && (
          <Link href={project.sourceCodeUrl} target="_blank" color="primary">
            Codice Sorgente (GitHub)
          </Link>
        )}
      </Box>
    </Box>
  );
}
