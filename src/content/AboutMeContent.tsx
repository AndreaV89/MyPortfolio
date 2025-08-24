// In src/content/AboutMeContent.tsx

import React from "react";
import { Box, Chip, Typography, Divider } from "@mui/material"; // Aggiunto Typography e Divider
import {
  Keyword,
  Punc,
  Comment,
  VarName,
  String,
  Symbols,
} from "../components/SyntaxComponents";

export default function AboutMeContent() {
  const interests = [
    "UI/UX Design",
    "Animazioni CSS",
    "Performance Optimization",
    "Accessibilità Web",
  ];

  // Abbiamo arricchito l'oggetto con più dettagli
  const developer = {
    name: "Andrea Vannetti",
    title: "Creative Web Developer",
    philosophy:
      "Scrivere codice non è solo una questione di logica, ma anche di empatia verso l'utente finale.",
    story:
      "La mia avventura nel mondo dello sviluppo è iniziata quasi per caso, smontando e rimontando temi per blog. Quella curiosità iniziale si è trasformata in una vera e propria passione per la creazione di esperienze digitali che siano non solo funzionali, ma anche belle da vedere e intuitive da usare.",
    currentGoal:
      "Approfondire le mie conoscenze di architetture a micro-frontend e contribuire a un progetto open-source.",
    interests: interests,
  };

  return (
    <Box>
      {/* La parte "codice" rimane pulita e d'impatto */}
      <Box
        component="pre"
        sx={{ lineHeight: 1.75, fontSize: "0.9rem", whiteSpace: "pre-wrap" }}
      >
        <Comment>
          {`/**
 * @file about-me.md
 * @author Andrea Vannetti
 * @description Chi sono, cosa faccio e perché.
 */`}
        </Comment>
        <br />
        <br />
        <Keyword>const</Keyword> <VarName>developer</VarName> <Punc>=</Punc>{" "}
        <Symbols>&#123;</Symbols>
        <br />
        {"  "}
        <VarName>name</VarName>
        <Punc>:</Punc> <String>"{developer.name}"</String>
        <Punc>,</Punc>
        <br />
        {"  "}
        <VarName>title</VarName>
        <Punc>:</Punc> <String>"{developer.title}"</String>
        <Punc>,</Punc>
        <br />
        {"  "}
        <VarName>story</VarName>
        <Punc>:</Punc> <String>"{developer.story}"</String>
        <Punc>,</Punc>
        <br />
        {"  "}
        <VarName>currentGoal</VarName>
        <Punc>:</Punc> <String>"{developer.currentGoal}"</String>
        <Punc>,</Punc>
        <br />
        {"  "}
        <VarName>interests</VarName>
        <Punc>:</Punc> <Symbols>&#91;</Symbols>
        {/* ... mapping degli interessi rimane uguale ... */}
        {developer.interests.map((interest) => (
          <React.Fragment key={interest}>
            <br />
            {"    "}
            <String>'{interest}'</String>
            <Punc>,</Punc>
          </React.Fragment>
        ))}
        <br />
        {"  "}
        <Symbols>&#93;</Symbols>
        <br />
        <Symbols>&#125;</Symbols>
        <Punc>;</Punc>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* --- NUOVA SEZIONE NARRATIVA --- */}
      <Box>
        <Typography variant="h6" sx={{ color: "primary.main", mb: 2 }}>
          La mia Filosofia
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {developer.philosophy} Per me, un'interfaccia ben progettata è come un
          ponte invisibile tra l'utente e la complessità del software. Il mio
          obiettivo è rendere questo ponte solido, elegante e piacevole da
          attraversare.
        </Typography>

        <Typography variant="h6" sx={{ color: "primary.main", mt: 4, mb: 2 }}>
          Interessi Professionali
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {developer.interests.map((interest) => (
            <Chip
              key={interest}
              label={interest}
              variant="outlined"
              sx={{ color: "text.primary", borderColor: "divider" }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
