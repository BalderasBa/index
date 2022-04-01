import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "./contexts/theme";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
