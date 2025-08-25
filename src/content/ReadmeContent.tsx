import { Typography, Box, Divider, Chip } from "@mui/material";

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
      <Typography sx={{ mt: 2 }}>
        Quello che vedi non è un semplice sito, ma un portfolio interattivo che
        vive e respira all'interno di un'emulazione di code editor.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Stack di questo Progetto
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {techStack.map((tech) => (
          <Chip key={tech} label={tech} variant="outlined" color="primary" />
        ))}
      </Box>

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Come Esplorare
      </Typography>
      <ul>
        <li>
          <Typography>
            <strong>Naviga</strong> usando l'esploratore di file sulla sinistra
            per scoprire chi sono, i miei progetto e come contattarmi.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Prova il terminale</strong> in basso per un'esperienza più
            interattiva.
          </Typography>
        </li>
      </ul>

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
          help{" "}
          <span style={{ color: "#679554" }}>
            // Mostra la lista dei comandi disponibili"
          </span>
        </code>
        <br />
        <code>
          neofetch{" "}
          <span style={{ color: "#679554" }}>
            // Mostra le specifiche di questo "sistema"
          </span>
        </code>
        <br />
        <code>
          open about-me{" "}
          <span style={{ color: "#679554" }}>
            // Apre direttamente il file about-me.md
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
