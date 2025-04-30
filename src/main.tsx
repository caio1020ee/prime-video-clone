import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </Router>
);
