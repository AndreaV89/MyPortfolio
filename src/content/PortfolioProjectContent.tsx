import React from "react";
import { Box, Chip, Link } from "@mui/material";
import {
  String,
  Keyword,
  Keyword2,
  Punc,
  Comment,
  VarName,
  Brackets1,
  Brackets2,
  Brackets3,
  CompName,
  Symbols,
  ReactTag,
} from "../components/SyntaxComponents"; // <-- Importiamo gli stili

export default function PortfolioProjectContent() {
  const portfolio = {
    name: "Portfolio Interattivo // Code Editor",
    description: `Un meta-progetto: un portfolio sviluppato per assomigliare e comportarsi come un moderno editor di codice (VS Code). L'intera interfaccia è il portfolio stesso.`,
    stack: ["React", "TypeScript", "Material-UI", "React-Icons"],
    features: [
      "UI reattiva stile VS Code",
      "Sistema di navigazione a Tab con cronologia",
      "Effetto 'Glitch' e animazioni CSS",
      "Terminale interattivo con comandi custom",
    ],
    sourceCodeUrl: "https://github.com/AndreaV89/MyPortfolio",
    imageUrl: "/path/to/your/screenshot-portfolio.jpg",
  };

  return (
    <Box
      component="pre"
      sx={{
        lineHeight: 1.75,
        fontSize: "0.9rem",
        whiteSpace: "pre-wrap",
      }}
    >
      <Comment>&#47;&#47; file: /progetti/portfolio-interattivo.tsx</Comment>
      <br />
      <br />
      <Keyword2>const</Keyword2> <CompName>Portfolio</CompName> <Punc>= </Punc>
      <Brackets1>&#123;</Brackets1>
      <br />
      ··
      <VarName>name</VarName>
      <Punc>:</Punc> <String>"{portfolio.name}"</String>
      <Punc>,</Punc>
      <br />
      ··
      <VarName>description</VarName>
      <Punc>:</Punc> <String>`{portfolio.description}`</String>
      <Punc>,</Punc>
      {"  "}
      <br />
      ··
      <VarName>features</VarName>
      <Punc>:</Punc> <Brackets3>&#91;</Brackets3>
      <br />
      {portfolio.features.map((f) => (
        <React.Fragment key={f}>
          ····
          <String>"{f}"</String>
          <Punc>,</Punc>
          <br />
        </React.Fragment>
      ))}
      ··
      <Brackets3>&#93;</Brackets3>
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
        {portfolio.stack.map((tech) => (
          <Chip key={tech} label={tech} color="primary" variant="outlined" />
        ))}
      </Box>
      <br />
      ····<Symbols>&lt;</Symbols>
      <ReactTag>Link Utili:</ReactTag>
      <Symbols> /&gt;</Symbols>
      <br />
      ······
      <Link href={portfolio.sourceCodeUrl} target="_blank" color="primary">
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
