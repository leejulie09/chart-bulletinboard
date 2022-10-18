import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Style/GlobalStyle";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "./Style/Theme";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </ThemeProvider>
);
