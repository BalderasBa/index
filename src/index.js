import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./contexts/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18nextConf";

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
