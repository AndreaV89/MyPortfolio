import { Box, Link } from "@mui/material";
import { Punc, Comment, VarName, String } from "../components/SyntaxComponents"; // <-- Importiamo gli stili

export default function AboutMeContent() {
  return (
    <Box
      component="pre"
      sx={{ lineHeight: 1.75, fontSize: "0.9rem", whiteSpace: "pre-wrap" }}
    >
      <Comment>
        {`
    /*******************************************************\\
     * GET IN TOUCH                     *
    \\*******************************************************/
            `}
      </Comment>
      <br />
      <Punc>&#123;</Punc>
      <br />
      {"  "}
      <VarName>"status"</VarName>
      <Punc>:</Punc> <String>"Disponibile per nuove opportunità"</String>
      <Punc>,</Punc>
      <br />
      {"  "}
      <VarName>"email"</VarName>
      <Punc>:</Punc>{" "}
      <String>
        "
        <Link href="mailto:a.vannetti08@gmail.com" sx={{ color: "#a6e22e" }}>
          a.vannetti08@gmail.com
        </Link>
        "
      </String>
      <Punc>,</Punc>
      <br />
      {"  "}
      <VarName>"website"</VarName>
      <Punc>:</Punc>{" "}
      <String>
        "
        <Link
          href="https://tuo-sito.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#a6e22e" }}
        >
          tuo-sito.com
        </Link>
        "
      </String>
      <Punc>,</Punc>
      <br />
      {"  "}
      <VarName>"socials"</VarName>
      <Punc>:</Punc> <Punc>&#123;</Punc>
      <br />
      {"    "}
      <VarName>"linkedin"</VarName>
      <Punc>:</Punc>{" "}
      <String>
        "
        <Link
          href="https://www.linkedin.com/in/andrea-vannetti-215105153/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#a6e22e" }}
        >
          /in/andrea-vannetti
        </Link>
        "
      </String>
      <Punc>,</Punc>
      <br />
      {"    "}
      <VarName>"github"</VarName>
      <Punc>:</Punc>{" "}
      <String>
        "
        <Link
          href="https://github.com/AndreaV89"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#a6e22e" }}
        >
          /AndreaV89
        </Link>
        "
      </String>
      <br />
      {"  "}
      <Punc>&#125;</Punc>
      <br />
      <Punc>&#125;</Punc>
    </Box>
  );
}
