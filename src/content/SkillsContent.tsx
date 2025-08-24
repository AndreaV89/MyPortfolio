import { Typography, Box, LinearProgress } from "@mui/material";
import {
  CompName,
  Comment,
  Keyword,
  VarName,
  Punc,
  String,
  Brackets1,
  Brackets2,
  Brackets3,
} from "../components/SyntaxComponents";

// --- PERSONALIZZA LE TUE COMPETENZE QUI ---
const skillsData = [
  { name: "Html", level: 95, category: "Frontend" },
  { name: "Css", level: 80, category: "Frontend" },
  { name: "React", level: 70, category: "Frontend" },
  { name: "TypeScript", level: 50, category: "Frontend" },
  { name: "Node.js", level: 60, category: "Backend" },
  { name: "Express", level: 60, category: "Backend" },
  { name: "Material-UI", level: 80, category: "Strumenti" },
  { name: "Bootstrap", level: 80, category: "Frontend" },
  { name: "Git", level: 65, category: "Strumenti" },
];
// -----------------------------------------

// Raggruppiamo le competenze per categoria
const groupedSkills = skillsData.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skillsData>);

export default function SkillsContent() {
  return (
    <Box
      component="pre"
      sx={{ lineHeight: 1.75, fontSize: "0.9rem", whiteSpace: "pre-wrap" }}
    >
      <Comment>&#47;&#47; file: /competenze/skills.jsx</Comment>
      <br />
      <br />
      <Keyword>import</Keyword> <VarName>SkillBar</VarName>{" "}
      <Keyword>from</Keyword> <String>'./components/ProgressBar'</String>
      <Punc>;</Punc>
      <br />
      <br />
      <Keyword>const</Keyword> <CompName>MySkills</CompName> <Punc>=</Punc>{" "}
      <Brackets1>()</Brackets1> <Punc>=&gt;</Punc> <Brackets2>&#123;</Brackets2>
      <br />
      {"  "}
      <Keyword>return</Keyword> <Brackets3>(</Brackets3>
      <br />
      <Box sx={{ maxWidth: "800px" }}>
        {"    "}
        <Punc>&lt;&gt;</Punc>
        <br />
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <Box key={category} sx={{ mb: 4, ml: 4 }}>
            {" "}
            {/* Aggiunto un po' di margine per l'indentazione */}
            <Typography
              variant="h6"
              sx={{ color: "primary.main", mb: 2 }}
            >{`// ${category}`}</Typography>
            {skills.map((skill) => (
              <Box key={skill.name} sx={{ mb: 2 }}>
                <Typography variant="body2">{skill.name}</Typography>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  color="primary"
                  sx={{ height: 8, borderRadius: 2 }}
                />
              </Box>
            ))}
          </Box>
        ))}
        {"    "}
        <Punc>&lt;/&gt;</Punc>
      </Box>
      <br />
      {"  "}
      <Brackets3>);</Brackets3>
      <br />
      <Brackets2>&#125;</Brackets2>
      <Punc>;</Punc>
    </Box>
  );
}
