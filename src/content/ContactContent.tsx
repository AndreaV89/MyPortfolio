import { Box, Button } from "@mui/material";
import {
  Punc,
  Comment,
  VarName,
  String,
  Keyword,
} from "../components/SyntaxComponents";

export default function ContactContent() {
  return (
    <Box
      component="pre"
      sx={{ lineHeight: 1.75, fontSize: "0.9rem", whiteSpace: "pre-wrap" }}
    >
      <Comment>
        {`
    /*******************************************************\\
     * CONNECTION ESTABLISHED -- WAITING FOR INPUT...      *
    \\*******************************************************/
        `}
      </Comment>
      <br />
      <Keyword>const</Keyword> <VarName>contactInfo</VarName> <Punc>=</Punc>{" "}
      <Punc>&#123;</Punc>
      <br />
      {"  "}
      <VarName>"status"</VarName>
      <Punc>:</Punc> <String>"Disponibile per nuove opportunità"</String>
      <Punc>,</Punc>
      <br />
      {"  "}
      <VarName>"location"</VarName>
      <Punc>:</Punc> <String>"Italia"</String>
      <Punc>,</Punc>
      <br />
      {"  "}
      <VarName>"timezone"</VarName>
      <Punc>:</Punc> <String>"Central European Time (CET)"</String>
      <Punc>,</Punc>
      <br />
      {"  "}
      <VarName>"preferredMethod"</VarName>
      <Punc>:</Punc> <String>"Email"</String>
      <br />
      <Punc>&#125;</Punc>
      <Punc>;</Punc>
      <br />
      <br />
      <Comment>&#47;&#47; Oppure, invia un messaggio diretto:</Comment>
      <br />
      <Keyword>function</Keyword> <VarName>sendMessage</VarName>
      <Punc>()</Punc> <Punc>&#123;</Punc>
      <br />
      {"  "}
      <Keyword>return</Keyword> <Punc>(</Punc>
      <br />
      {"    "}
      <Button
        variant="outlined"
        color="primary"
        href="mailto:a.vannetti08@gmail.com"
        sx={{ textTransform: "none", fontFamily: "Fira Code" }}
      >
        <String>'Invia un messaggio'</String>
      </Button>
      <br />
      {"  "}
      <Punc>);</Punc>
      <br />
      <Punc>&#125;</Punc>
    </Box>
  );
}
