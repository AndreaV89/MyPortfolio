import React, { useState } from "react";
import { Typography, Box, Chip, Link, Fade } from "@mui/material";
import {
  String,
  Keyword,
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
import ModuleLoader from "../components/ModuleLoader";

export default function PortfolioProjectContent() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setTimeout(() => setIsLoading(false), 300); // Un piccolo ritardo per fluidità
  };

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
    sourceCodeUrl: "https://github.com/tuo-username/tuo-repo", // URL Reale o segnaposto
  };

  return (
    <Box>
      {isLoading ? (
        <ModuleLoader onComplete={handleLoadingComplete} />
      ) : (
        <Fade in={!isLoading} timeout={500}>
          {/* Tutto il JSX del contenuto del progetto che avevamo prima va qui dentro */}
          <Box
            component="pre"
            sx={{
              lineHeight: 1.75,
              fontSize: "0.9rem",
              whiteSpace: "pre-wrap",
            }}
          >
            <Comment>
              &#47;&#47; file: /progetti/portfolio-interattivo.jsx
            </Comment>
            <br />
            <br />
            <Keyword>const</Keyword> <VarName>portfolio</VarName> <Punc>=</Punc>{" "}
            <Brackets1>&#123;</Brackets1>
            <br />
            {"  "}
            <VarName>name</VarName>
            <Punc>:</Punc> <String>"{portfolio.name}"</String>
            <Punc>,</Punc>
            <br />
            {"  "}
            <VarName>description</VarName>
            <Punc>:</Punc> <String>`{portfolio.description}`</String>
            <Punc>,</Punc>
            <br />
            {"  "}
            <VarName>stack</VarName>
            <Punc>:</Punc> <Brackets2>&#91;</Brackets2>
            {portfolio.stack.map((s) => (
              <React.Fragment key={s}>
                <String>"{s}"</String>
                <Punc>,</Punc>{" "}
              </React.Fragment>
            ))}
            <Brackets2>&#93;</Brackets2>
            <Punc>,</Punc>
            <br />
            {"  "}
            <VarName>features</VarName>
            <Punc>:</Punc> <Brackets3>&#91;</Brackets3>
            <br />
            {portfolio.features.map((f) => (
              <React.Fragment key={f}>
                {"    "}
                <String>"{f}"</String>
                <Punc>,</Punc>
                <br />
              </React.Fragment>
            ))}
            {"  "}
            <Brackets3>&#93;</Brackets3>
            <Punc>,</Punc>
            <br />
            <Brackets1>&#125;</Brackets1>
            <Punc>;</Punc>
            <br />
            <br />
            <Comment>&#47;&#47; Visualizza i dettagli del progetto</Comment>
            <br />
            <Keyword>export const</Keyword> <CompName>ProjectDetails</CompName>{" "}
            <Punc>=</Punc> <Brackets1>()</Brackets1> <Punc>=&gt;</Punc>{" "}
            <Brackets2>&#40;</Brackets2>
            <br />
            {"  "}
            <Symbols>&lt;</Symbols>
            <ReactTag>Box</ReactTag> <VarName>sx</VarName>
            <Punc>&#61;</Punc>
            <Brackets1>&#123;</Brackets1>
            <Brackets3>&#123;</Brackets3> <VarName>marginTop</VarName>
            <Punc>:</Punc> <String>'1rem'</String> <Brackets3>&#125;</Brackets3>
            <Brackets1>&#125;</Brackets1>
            <Symbols>&gt;</Symbols>
            <br />
            {"    "}
            <Typography variant="h6">Stack Tecnologico:</Typography>
            <br />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 1 }}>
              {/* Ora questo funziona perché 'portfolio' esiste! */}
              {portfolio.stack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
            <br />
            <Typography variant="h6">Link Utili:</Typography>
            <br />
            {"    "}
            <Link
              href={portfolio.sourceCodeUrl}
              target="_blank"
              color="primary"
            >
              Codice Sorgente (GitHub)
            </Link>
            <br />
            {"  "}
            <Symbols>&lt;/</Symbols>
            <ReactTag>Box</ReactTag>
            <Symbols>&gt;</Symbols>
            <br />
            <Brackets2>&#41;</Brackets2>
            <Punc>;</Punc>
          </Box>
        </Fade>
      )}
    </Box>
  );
}
