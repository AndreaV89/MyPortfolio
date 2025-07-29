import { createTheme } from "@mui/material/styles";

const codeEditorTheme = createTheme({
  palette: {
    mode: "dark", 
        primary: {
      main: '#a8e400', // Verde lime
    },
    // Attiviamo il dark mode di base
    background: {
      default: "#21252b", // Colore di sfondo tipico di un editor
      paper: "#282c34", // Colore per gli elementi "in rilievo" come la sidebar
    },
    text: {
      primary: "#abb2bf", // Un grigio chiaro per il testo, non bianco puro
    },

  },
  typography: {
    fontFamily: '"Fira Code", monospace', // Usiamo un font da programmatore
  },
});

export default codeEditorTheme;
