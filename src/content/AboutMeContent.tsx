import React from "react";
import { Box, Chip } from "@mui/material";
import {
  Keyword,
  Punc,
  Comment,
  VarName,
  String,
  ReactTag,
  Symbols,
} from "../components/SyntaxComponents";

export default function AboutMeContent() {
  const interests = [
    "UI/UX Design",
    "Animazioni CSS",
    "Performance Optimization",
    "Accessibilità Web",
  ];

  return (
    <Box
      component="pre"
      sx={{ lineHeight: 1.75, fontSize: "0.9rem", whiteSpace: "pre-wrap" }}
    >
      <Comment>
        {`/**
 * @file about-me.md
 * @author Andrea Vannetti
 * @description Una breve introduzione su di me, le mie passioni e la mia filosofia di sviluppo.
 */`}
      </Comment>
      <br />
      <br />
      <Keyword>const</Keyword> <VarName>developer</VarName> <Punc>=</Punc>{" "}
      <Symbols>&#123;</Symbols>
      <br />
      {"  "}
      <VarName>name</VarName>
      <Punc>:</Punc> <String>"Andrea Vannetti"</String>
      <Punc>,</Punc>
      <br />
      {"  "}
      <VarName>title</VarName>
      <Punc>:</Punc> <String>"Creative Web Developer"</String>
      <Punc>,</Punc>
      <br />
      {"  "}
      <VarName>philosophy</VarName>
      <Punc>:</Punc>{" "}
      <String>
        "Scrivere codice non è solo una questione di logica, ma anche di empatia
        verso l'utente finale."
      </String>
      <Punc>,</Punc>
      <br />
      {"  "}
      <VarName>interests</VarName>
      <Punc>:</Punc> <Symbols>&#91;</Symbols>
      <br />
      {interests.map((interest) => (
        <React.Fragment key={interest}>
          {"    "}
          <String>'{interest}'</String>
          <Punc>,</Punc>
          <br />
        </React.Fragment>
      ))}
      {"  "}
      <Symbols>&#93;</Symbols>
      <br />
      <Symbols>&#125;</Symbols>
      <Punc>;</Punc>
      <br />
      <br />
      <Comment>&#47;&#47; Visualizziamo gli interessi come tag</Comment>
      <br />
      <Symbols>&lt;</Symbols>
      <ReactTag>Box</ReactTag>
      <Symbols>&gt;</Symbols>
      <br />
      {"  "}
      {interests.map((interest) => (
        <Chip
          key={interest}
          label={interest}
          variant="outlined"
          sx={{ mr: 1, mb: 1, color: "text.primary", borderColor: "divider" }}
        />
      ))}
      <br />
      <Symbols>&lt;/</Symbols>
      <ReactTag>Box</ReactTag>
      <Symbols>&gt;</Symbols>
      <Punc>;</Punc>
    </Box>
  );
}
