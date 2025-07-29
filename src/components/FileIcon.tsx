import { VscJson, VscMarkdown, VscFileCode } from "react-icons/vsc";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { BiLogoTypescript, BiLogoJavascript, BiLogoCss3 } from "react-icons/bi";

interface FileIconProps {
  name: string;
}

const iconStyle = { marginRight: "8px", verticalAlign: "middle" };
const iconSize = 20;

export default function FileIcon({ name }: FileIconProps) {
  // File JSon
  if (name.endsWith(".json")) {
    return (
      <VscJson size={iconSize} style={{ ...iconStyle, color: "#f8a825" }} />
    );
  }
  // File Markdown
  if (name.endsWith(".md")) {
    return (
      <VscMarkdown size={iconSize} style={{ ...iconStyle, color: "#42a5f5" }} />
    );
  }
  // File Typescript o Javascript con JSX
  if (name.endsWith(".tsx") || name.endsWith(".jsx")) {
    return (
      <FaReact size={iconSize} style={{ ...iconStyle, color: "#0088d1" }} />
    );
  }
  // File Typescript
  if (name.endsWith(".ts")) {
    return (
      <BiLogoTypescript
        size={iconSize}
        style={{ ...iconStyle, color: "#0088d1" }}
      />
    );
  }
  // File JavaScript
  if (name.endsWith(".js")) {
    return (
      <BiLogoJavascript
        size={iconSize}
        style={{ ...iconStyle, color: "#ffca27" }}
      />
    );
  }
  // File HTML
  if (name.endsWith(".html")) {
    return (
      <FaHtml5 size={iconSize} style={{ ...iconStyle, color: "#e65000" }} />
    );
  }
  // File CSS
  if (name.endsWith(".css")) {
    return (
      <BiLogoCss3 size={iconSize} style={{ ...iconStyle, color: "#7e57c2" }} />
    );
  }

  // Icona di default
  return <VscFileCode size={iconSize} style={iconStyle} />;
}
