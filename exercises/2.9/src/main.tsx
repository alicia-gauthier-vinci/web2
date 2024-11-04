import React from "react";
//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.tsx'
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./themes";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <ThemeProvider theme={theme}>
        <CssBaseline /> 
    <App />
    </ThemeProvider>

  </React.StrictMode>,
)
