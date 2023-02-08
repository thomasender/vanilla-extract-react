import React from "react";
import { Content, H1, TextBox } from "./styles.css";
import { VanillaLogo } from "./vanilla-logo";

export const Home = () => {
  return (
    <div className={Content}>
      <div className={H1}>Vite React App utilising Vanilla Extract</div>
      <div className={TextBox}>
        With Vanilla Extract, your CSS shines bright In your TypeScript files,
        everything feels just right Write locally scoped class names, with CSS
        Variables in sight And at build time, watch your styles take flight! In
        your Vite React app, you'll find peace of mind With styles written in
        TypeScript, you won't be far behind No more runtime issues, just locally
        scoped styles of kind With Vanilla Extract, your CSS will be designed!
      </div>
      <VanillaLogo />
    </div>
  );
};
