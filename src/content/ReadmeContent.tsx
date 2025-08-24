// In src/content/ReadmeContent.tsx

import { Typography, Box, Divider, Chip } from "@mui/material";

// Tecnologie usate per questo portfolio
const techStack = ["React", "TypeScript", "Vite", "Material-UI"];

export default function ReadmeContent() {
  return (
    <Box sx={{ lineHeight: 1.75 }}>
      <Typography variant="h6" component="pre" sx={{ color: "text.secondary" }}>
        &gt; Inizializzazione sistema...
        <br />
        &gt; Caricamento moduli completato.
        <br />
        &gt; Connessione stabilita. Benvenuto.
      </Typography>
      <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.12)" }} />
      <Typography>
        Ciao, sono{" "}
        <Typography
          component="span"
          sx={{ color: "primary.main", fontWeight: "bold" }}
        >
          Andrea Vannetti
        </Typography>
        , Web Developer con una passione per le interfacce non convenzionali e
        il codice creativo.
      </Typography>
      <Typography sx={{ mt: 2 }}>
        Quello che vedi non è un semplice sito, ma un portfolio interattivo che
        vive e respira all'interno di un'emulazione di code editor.
      </Typography>

      {/* --- NUOVA SEZIONE: TECH STACK --- */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Stack di questo Portfolio
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {techStack.map((tech) => (
          <Chip key={tech} label={tech} variant="outlined" color="primary" />
        ))}
      </Box>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Come funziona
      </Typography>
      <ul>
        <li>
          <Typography>
            <strong>Naviga</strong> usando l'esploratore di file sulla sinistra
            per scoprire i miei progetti e le mie competenze.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Interagisci</strong> con il terminale in basso. È una parte
            fondamentale dell'esperienza!
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Attenzione:</strong> occasionali scariche di dati (
            <em>glitch</em>) sono una feature, non un bug. È il sistema che
            pensa.
          </Typography>
        </li>
      </ul>

      {/* --- NUOVA SEZIONE: COMANDI RAPIDI --- */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Comandi Rapidi da Provare
      </Typography>
      <Typography
        component="pre"
        sx={{
          backgroundColor: "background.paper",
          p: 2,
          borderRadius: 1,
          color: "text.secondary",
        }}
      >
        <code>
          neofetch{" "}
          <span style={{ color: "#679554" }}>
            // Mostra le specifiche di questo "sistema"
          </span>
        </code>
        <br />
        <code>
          open skills{" "}
          <span style={{ color: "#679554" }}>
            // Apre direttamente il file delle competenze
          </span>
        </code>
        <br />
        <code>
          theme{" "}
          <span style={{ color: "#679554" }}>
            // Cambia il tema da scuro a chiaro e viceversa
          </span>
        </code>
      </Typography>

      <Typography sx={{ mt: 4 }}>Buona esplorazione.</Typography>
    </Box>
  );
}
