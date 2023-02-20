// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";

import React from "react";
import { createRoot } from "react-dom/client";

import Hey from "./components/Hey";

function App() {
  return (
    <h1>
      <Hello />
      <Hey />
    </h1>
  );
}

const Hello = () => {
  return <>Hello React TypeScript!!!</>;
};

const root = document.getElementById("root");
if (!root) {
  throw new Error("No root element");
}
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
