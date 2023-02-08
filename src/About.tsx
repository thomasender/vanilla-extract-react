import React from "react";
import { Content, TextBox, H1 } from "./styles.css";

export const About = () => {
  return (
    <div className={Content}>
      <div className={H1}>About</div>
      <div className={TextBox}>
        @vanilla-extract/css is a npm package that provides a way to write
        type-safe, locally scoped stylesheets in TypeScript. It can be installed
        via npm install @vanilla-extract/css. It allows you to generate static
        CSS files at build time, with TypeScript serving as the preprocessor.
        This approach allows for increased maintainability and scalability of
        styles in your project, as well as the benefits of type checking in
        TypeScript. There are 237 other projects using @vanilla-extract/css in
        the npm registry.
      </div>
    </div>
  );
};
