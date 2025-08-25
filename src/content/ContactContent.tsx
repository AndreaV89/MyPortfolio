// In src/content/ContactContent.tsx

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  CircularProgress,
} from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importiamo le icone
import {
  Punc,
  Comment,
  VarName,
  String,
  Keyword2,
  Symbols,
} from "../components/SyntaxComponents";

export default function ContactContent() {
  // Stato per gestire i campi del form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Qui andrebbe la logica per inviare i dati a una funzione serverless
    // Esempio:
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // if (response.ok) { setStatus('success'); } else { setStatus('error'); }

    // Per ora, simuliamo un invio con un ritardo
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Resetta il form
    }, 2000);
  };

  return (
    <Box>
      <Box
        component="pre"
        sx={{ lineHeight: 1.75, fontSize: "0.9rem", whiteSpace: "pre-wrap" }}
      >
        <Comment>// file: /contatti.html</Comment>
        <br />
        <br />
        <Symbols>&lt;!</Symbols>
        <Keyword2>DOCTYPE</Keyword2> <VarName>html</VarName>
        <Symbols>&gt;</Symbols>
        <br />
        <Symbols>&lt;</Symbols>
        <Keyword2>html</Keyword2> <VarName>lang</VarName> <Punc>=</Punc>
        <String>"it"</String>
        <Symbols>&gt;</Symbols>
        <br />
        ··<Symbols>&lt;</Symbols>
        <Keyword2>head</Keyword2>
        <Symbols>&gt;</Symbols>
        <Symbols>&lt;/</Symbols>
        <Keyword2>head</Keyword2>
        <Symbols>&gt;</Symbols>
        <br />
        ··<Symbols>&lt;</Symbols>
        <Keyword2>body</Keyword2>
        <Symbols>&gt;</Symbols>
        <br />
        ····<Symbols>&lt;</Symbols>
        <Keyword2>ul</Keyword2> <VarName>class</VarName> <Punc>=</Punc>{" "}
        <String>"SOCIAL LINKS"</String>
        <Symbols>&gt;</Symbols>
        <br />
        ······<Symbols>&lt;</Symbols>
        <Keyword2>li</Keyword2> <VarName>class</VarName> <Punc>=</Punc>{" "}
        <String>"Github"</String>
        <Symbols>&gt;</Symbols>
        <br />
        {"         "}
        <Link
          href="https://github.com/AndreaV89"
          target="_blank"
          color="text.primary"
        >
          <FaGithub size={40} color="#f0f6fc" />
        </Link>
        <br />
        ······<Symbols>&lt;/</Symbols>
        <Keyword2>li</Keyword2>
        <Symbols>&gt;</Symbols>
        <br />
        ······<Symbols>&lt;</Symbols>
        <Keyword2>li</Keyword2> <VarName>class</VarName> <Punc>=</Punc>{" "}
        <String>"Linkedin"</String>
        <Symbols>&gt;</Symbols>
        <br />
        {"         "}
        <Link
          href="https://linkedin.com/in/andrea-vannetti-186526188/"
          target="_blank"
          color="text.primary"
        >
          <FaLinkedin size={40} color="#0a66c2" />
        </Link>
        <br />
        ······<Symbols>&lt;/</Symbols>
        <Keyword2>li</Keyword2>
        <Symbols>&gt;</Symbols>
        <br />
        ····<Symbols>&lt;/</Symbols>
        <Keyword2>ul</Keyword2>
        <Symbols>&gt;</Symbols>
        <br />
        ··<Symbols>&lt;/</Symbols>
        <Keyword2>body</Keyword2>
        <Symbols>&gt;</Symbols>
        <br />
        <Symbols>&lt;/</Symbols>
        <Keyword2>html</Keyword2>
        <Symbols>&gt;</Symbols>
      </Box>

      {/* Sezione Modulo di Contatto */}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ color: "primary.main", mb: 2 }}>
          Oppure invia un messaggio diretto
        </Typography>
        <TextField
          fullWidth
          label="Il tuo nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="La tua email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Messaggio"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          multiline
          rows={4}
          margin="normal"
        />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          disabled={status === "sending"}
          sx={{ mt: 2, fontFamily: '"Fira Code", monospace' }}
        >
          {status === "sending" ? (
            <CircularProgress size={24} />
          ) : (
            "Invia Messaggio"
          )}
        </Button>

        {status === "success" && (
          <Typography sx={{ mt: 2, color: "success.main" }}>
            Messaggio inviato con successo!
          </Typography>
        )}
        {status === "error" && (
          <Typography sx={{ mt: 2, color: "error.main" }}>
            Errore nell'invio. Riprova più tardi.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
