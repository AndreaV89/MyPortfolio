// In src/content/AboutMeContent.tsx

import React from "react";
import { Box } from "@mui/material"; // Aggiunto Typography e Divider
import {
  Keyword,
  Keyword2,
  ReactTag,
  Punc,
  Comment,
  VarName,
  String,
  Brackets1,
  Brackets2,
  Brackets3,
  CompName,
} from "../components/SyntaxComponents";

// Dati delle competenze
const skillsData = [
  { name: "Html", category: "Frontend" },
  { name: "Css", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Material-UI", category: "Strumenti" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Git", category: "Strumenti" },
];

// Raggruppo le competenze per categoria
const skillsByCategory = skillsData.reduce((acc, skill) => {
  const categoryObj = acc.find((c) => c.categoria === skill.category);
  if (categoryObj) {
    categoryObj.skills.push(skill.name);
  } else {
    acc.push({ categoria: skill.category, skills: [skill.name] });
  }
  return acc;
}, [] as { categoria: string; skills: string[] }[]);

export default function AboutMeContent() {
  const interests = [
    "UI/UX Design",
    "Animazioni CSS",
    "Performance Optimization",
    "Accessibilità Web",
  ];

  const developer = {
    name: "Andrea Vannetti",
    title: "Creative Web Developer",
    dayOfBirth: 8101989,
    email: "a.vannetti08@gmail.com",
    philosophy:
      "Scrivere codice non è solo una questione di logica, ma anche di empatia verso l'utente finale.",
    currentGoal:
      "Approfondire le mie conoscenze di architetture a micro-frontend e contribuire a un progetto open-source.",
    interests: interests,
  };

  return (
    <Box>
      <Box
        component="pre"
        sx={{ lineHeight: 1.75, fontSize: "0.9rem", whiteSpace: "pre-wrap" }}
      >
        <Comment>// file: /about-me.md.tsx</Comment>
        <br />
        <br />
        <Keyword2>class</Keyword2> <ReactTag>Andrea Vannetti</ReactTag>{" "}
        <Brackets1>&#123;</Brackets1>
        <br />
        ··<Comment>// Do or do not, there is no try.</Comment>
        <br />
        ··<Comment>// More I know, less I know .</Comment>
        <br />
        ··<CompName>constructor</CompName>
        <Brackets2>()</Brackets2> <Brackets3>&#123;</Brackets3>
        <br />
        ····<Keyword2>this</Keyword2>
        <Punc>.</Punc>
        <VarName>name</VarName>
        <Punc> =</Punc> <String>"{developer.name}"</String>
        <Punc>,</Punc>
        <br />
        ····<Keyword2>this</Keyword2>
        <Punc>.</Punc>
        <VarName>dayOfBirth</VarName>
        <Punc> =</Punc> <String>"{developer.dayOfBirth}"</String>
        <Punc>,</Punc>
        <br />
        ····<Keyword2>this</Keyword2>
        <Punc>.</Punc>
        <VarName>email</VarName>
        <Punc> =</Punc> <String>"{developer.email}"</String>
        <Punc>,</Punc>
        <br />
        ····<Keyword2>this</Keyword2>
        <Punc>.</Punc>
        <VarName>title</VarName>
        <Punc> =</Punc> <String>"{developer.title}"</String>
        <Punc>,</Punc>
        <br />
        ··<Brackets3>&#125;</Brackets3>
        <br />
        ··<CompName>interests</CompName>
        <Brackets2>()</Brackets2> <Brackets1>&#123;</Brackets1>
        <br />
        ····<Keyword>return</Keyword> <Brackets2>&#91;</Brackets2>
        {developer.interests.map((interest) => (
          <React.Fragment key={interest}>
            <br />
            ······
            <String>'{interest}'</String>
            <Punc>,</Punc>
          </React.Fragment>
        ))}
        <br />
        ······<Brackets2>&#93;</Brackets2>
        <Punc>;</Punc>
        <br />
        ··<Brackets1>&#125;</Brackets1>
        <Punc>;</Punc>
        <br />
        ··<CompName>getSkills</CompName>
        <Brackets2>()</Brackets2> <Brackets3>&#123;</Brackets3>
        <br />
        ····<Keyword>return</Keyword> <Brackets2>&#91;</Brackets2>
        {skillsByCategory.map((categoryGroup, index) => (
          <React.Fragment key={categoryGroup.categoria}>
            <br />
            ······
            <Brackets1>&#123;</Brackets1>
            <br />
            ········
            <VarName>categoria</VarName>
            <Punc>:</Punc> <String>'{categoryGroup.categoria}'</String>
            <Punc>,</Punc>
            <br />
            ········
            <VarName>skills</VarName>
            <Punc>:</Punc> <Brackets3>[</Brackets3>
            {categoryGroup.skills.map((skill, skillIndex) => (
              <React.Fragment key={skill}>
                <String>'{skill}'</String>
                {skillIndex < categoryGroup.skills.length - 1 ? (
                  <Punc>, </Punc>
                ) : (
                  ""
                )}
              </React.Fragment>
            ))}
            <Brackets3>]</Brackets3>
            <br />
            ······
            <Brackets1>&#125;</Brackets1>
            {index < skillsByCategory.length - 1 ? <Punc>,</Punc> : ""}
          </React.Fragment>
        ))}
        <br />
        ····<Brackets2>&#93;</Brackets2>
        <Punc>;</Punc>
        <br />
        <Brackets3>&#125;</Brackets3>
        <Brackets1>&#125;</Brackets1>
        <Punc>;</Punc>
      </Box>
    </Box>
  );
}
