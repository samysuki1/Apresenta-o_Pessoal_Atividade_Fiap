import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvi } from "./routes/Route.jsx";
import { GlobalStyle } from "./styles/GlobalStyle.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvi />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
