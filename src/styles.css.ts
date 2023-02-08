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

globalStyle("a", {
  color: "#FFFFFF",
  textDecoration: "none"
});

export const FlexRowCenterStart = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexFlow: "row"
});

export const FlexColCenterStart = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start"
});

export const P10 = style({
  padding: 10
});

export const H1 = style({
  color: "white",
  fontSize: 32,
  fontWeight: 700,
  margin: 0
});

export const TextBox = style([
  P10,
  FlexRowCenterStart,
  {
    maxWidth: 600,
    backgroundColor: "#15171a",
    color: "#FFFFFF",
    borderRadius: 8
  }
]);

export const AppFrame = style([
  FlexColCenterStart,
  {
    height: "100vh"
  }
]);

export const Content = style([
  FlexColCenterStart,
  {
    backgroundColor: "#2A2B2DFF",
    width: "100%",
    height: "100%",
    padding: 12,
    gap: 24
  }
]);
