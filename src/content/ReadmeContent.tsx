import { Typography, Box, Divider } from "@mui/material"; // <-- Importiamo gli stili

export default function ReadmeContent() {
  return (
    <Box sx={{ lineHeight: 1.75 }}>
      <Typography variant="h6" component="pre" sx={{ color: "text.secondary" }}>
        &gt; Inizializzazione sistema...
        <br />
        &gt; Caricamento moduli...
        <br />
        &gt; Connessione stabilita.
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

      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Come funziona
      </Typography>
      <ul>
        <li>
          <Typography>
            <strong>Naviga</strong> usando l'esploratore di file sulla sinistra.
            Ogni file e cartella rivela qualcosa di diverso su di me.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Esplora</strong> la cartella <code>progetti/</code> per
            vedere i miei lavori più significativi.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Scopri</strong> le mie <code>competenze/</code> e le
            tecnologie con cui amo lavorare.
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

      <Typography sx={{ mt: 4 }}>Buona esplorazione.</Typography>
    </Box>
  );
}
