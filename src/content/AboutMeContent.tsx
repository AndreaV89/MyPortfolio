import { Typography, Box } from "@mui/material";
import { Keyword, Punc, Comment } from "../components/SyntaxComponents"; // <-- Importiamo gli stili

export default function AboutMeContent() {
  return (
    <Box
      component="pre"
      sx={{ lineHeight: 1.75, fontSize: "0.9rem", whiteSpace: "pre-wrap" }}
    >
      <Comment>&#47;&#47; Chi Sono</Comment>
      <br />
      <br />
      <Typography>
        Ciao! Sono{" "}
        <Typography
          component="span"
          sx={{ color: "primary.main", fontWeight: "bold" }}
        >
          Andrea Vannetti
        </Typography>
        , un web developer a cui piace dare vita a idee creative e interattive
        attraverso il codice.
      </Typography>
      <br />
      <Typography>
        La mia filosofia è semplice: scrivere codice pulito, creare interfacce
        intuitive e non smettere mai di imparare. Questo portfolio è un esempio
        di come mi piace unire la logica della programmazione con un design
        d'impatto.
      </Typography>
      <br />
      <br />
      <Comment>&#47;&#47; Aree di Competenza</Comment>
      <br />
      <br />
      <Punc>*</Punc> <Keyword>Frontend:</Keyword>{" "}
      <Typography component="span">React, TypeScript, Next.js</Typography>
      <br />
      <Punc>*</Punc> <Keyword>Styling:</Keyword>{" "}
      <Typography component="span">
        Material-UI, Styled Components, CSS-in-JS
      </Typography>
      <br />
      <Punc>*</Punc> <Keyword>Backend:</Keyword>{" "}
      <Typography component="span">Node.js, Express, REST API</Typography>
      <br />
      <br />
      <br />
      <Comment>&#47;&#47; Obiettivi</Comment>
      <br />
      <br />
      <Typography>
        Attualmente sto cercando opportunità dove posso contribuire a progetti
        stimolanti e continuare a crescere come sviluppatore.
      </Typography>
    </Box>
  );
}
