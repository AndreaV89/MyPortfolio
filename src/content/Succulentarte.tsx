import React from "react";
import { Box, Chip, Link } from "@mui/material";
import {
  String,
  Keyword,
  Keyword2,
  CompName,
  Symbols,
  Punc,
  Comment,
  VarName,
  Brackets1,
  Brackets2,
  Brackets3,
  ReactTag,
} from "../components/SyntaxComponents";

export default function Succulentarte() {
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
    sourceCodeUrl: "https://github.com/AndreaV89/succulentarte",
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
      <Keyword2>const</Keyword2> <CompName>Succulentarte</CompName>{" "}
      <Punc>=</Punc> <Brackets1>&#123;</Brackets1>
      <br />
      ··
      <VarName>name</VarName>
      <Punc>:</Punc> <String>"{project.name}"</String>
      <Punc>,</Punc>
      <br />
      ··
      <VarName>description</VarName>
      <Punc>:</Punc> <String>`{project.description}`</String>
      <Punc>,</Punc>
      <br />
      ··
      <VarName>features</VarName>
      <Punc>:</Punc> <Brackets2>&#91;</Brackets2>
      <br />
      {project.features.map((s) => (
        <React.Fragment key={s}>
          ····
          <String>"{s}"</String>
          <Punc>,</Punc>
          <br />
        </React.Fragment>
      ))}
      ··
      <Brackets2>&#93;</Brackets2>
      <Punc>,</Punc>
      <br />
      <Brackets1>&#125;</Brackets1>
      <Punc>;</Punc>
      <br />
      <br />
      <Comment>&#47;&#47; Visualizza i dettagli del progetto</Comment>
      <br />
      <Keyword>export </Keyword>
      <Keyword2>const</Keyword2> <CompName>ProjectDetails</CompName>{" "}
      <Punc>=</Punc> <Brackets1>()</Brackets1> <Punc>=&gt;</Punc>{" "}
      <Brackets2>&#40;</Brackets2>
      <br />
      ··
      <Symbols>&lt;</Symbols>
      <ReactTag>Box</ReactTag> <VarName>sx</VarName>
      <Punc>&#61;</Punc>
      <Brackets1>&#123;</Brackets1>
      <Brackets3>&#123;</Brackets3> <VarName>marginTop</VarName>
      <Punc>:</Punc> <String>'1rem'</String> <Brackets3>&#125;</Brackets3>
      <Brackets1>&#125;</Brackets1>
      <Symbols>&gt;</Symbols>
      <br />
      ····<Symbols>&lt;</Symbols>
      <ReactTag>Stack Tecnologico:</ReactTag>
      <Symbols> /&gt;</Symbols>
      <br />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 1 }}>
        {project.stack.map((tech) => (
          <Chip key={tech} label={tech} color="primary" variant="outlined" />
        ))}
      </Box>
      <br />
      ····<Symbols>&lt;</Symbols>
      <ReactTag>Link Utili:</ReactTag>
      <Symbols> /&gt;</Symbols>
      <br />
      ······
      <Link href={project.liveUrl} target="_blank" color="primary">
        Sito Live
      </Link>
      <br />
      ······
      <Link href={project.sourceCodeUrl} target="_blank" color="primary">
        Codice Sorgente (GitHub)
      </Link>
      <br />
      ··
      <Symbols>&lt;/</Symbols>
      <ReactTag>Box</ReactTag>
      <Symbols>&gt;</Symbols>
      <br />
      <Brackets2>&#41;</Brackets2>
      <Punc>;</Punc>
    </Box>
  );
}
