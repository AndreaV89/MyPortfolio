import React from "react";
import { Typography } from "@mui/material";

// Nota: ho rinominato il componente 'React' in 'ReactTag' per evitare conflitti.
export const ReactTag = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "#4ec5ae" }}>
    {children}
  </Typography>
);

export const Keyword = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "#c284bd" }}>
    {children}
  </Typography>
);

export const String = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "#ce9178" }}>
    {children}
  </Typography>
);

export const Comment = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "#679554" }}>
    {children}
  </Typography>
);

export const VarName = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "#9ad8f8" }}>
    {children}
  </Typography>
);

export const CompName = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "#d8d8a7" }}>
    {children}
  </Typography>
);

export const Punc = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "#f8f8f2" }}>
    {children}
  </Typography>
);

export const Symbols = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "#7e7e7e" }}>
    {children}
  </Typography>
);

export const Brackets1 = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "#ffd602" }}>
    {children}
  </Typography>
);

export const Brackets2 = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "#d670d3" }}>
    {children}
  </Typography>
);

export const Brackets3 = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "#169fff" }}>
    {children}
  </Typography>
);
