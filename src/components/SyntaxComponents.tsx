import React from "react";
import { Typography } from "@mui/material";

// Nota: ho rinominato il componente 'React' in 'ReactTag' per evitare conflitti.
export const ReactTag = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "syntax.reactTag" }}>
    {children}
  </Typography>
);

export const Keyword = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "syntax.keyword" }}>
    {children}
  </Typography>
);

export const String = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "syntax.string" }}>
    {children}
  </Typography>
);

export const Comment = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "syntax.comment" }}>
    {children}
  </Typography>
);

export const VarName = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "syntax.varName" }}>
    {children}
  </Typography>
);

export const CompName = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "syntax.compName" }}>
    {children}
  </Typography>
);

export const Punc = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "syntax.punc" }}>
    {children}
  </Typography>
);

export const Symbols = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "syntax.symbols" }}>
    {children}
  </Typography>
);

export const Brackets1 = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "syntax.brackets1" }}>
    {children}
  </Typography>
);

export const Brackets2 = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "syntax.brackets2" }}>
    {children}
  </Typography>
);

export const Brackets3 = ({ children }: { children: React.ReactNode }) => (
  <Typography component="span" sx={{ color: "syntax.brackets3" }}>
    {children}
  </Typography>
);
