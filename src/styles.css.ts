import { style, globalStyle, createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "#D9514EFF",
    text: "#FFFFFF",
    background: "#2A2B2DFF"
  }
});

export const Header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexFlow: "row nowrap",
  backgroundColor: "#D9514EFF",
  gap: 12,
  padding: 14
});

globalStyle("body", {
  margin: 0,
  backgroundColor: "#D9514EFF"
});

globalStyle("p", {
  color: "#FFFFFF"
});

export const P10 = style({
  padding: 10
});

export const TextBox = style([
  P10,
  {
    maxWidth: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexFlow: "row",
    backgroundColor: ""
  }
]);

export const AppFrame = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "100vh"
});

export const Content = style({
  backgroundColor: "#2A2B2DFF",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexFlow: "column",
  padding: 12
});

export const H1 = style({
  color: "white",
  fontSize: 32,
  fontWeight: 700,
  margin: 0
});
