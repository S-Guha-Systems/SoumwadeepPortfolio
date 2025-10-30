"use client";

import { useBootstrapTheme } from "./useBootstrapTheme";

export default function ThemeToggler() {
  const { mode, setMode } = useBootstrapTheme();

  return (
    <div className="btn-group" role="group" aria-label="Theme switcher">
      <button
        type="button"
        className={`btn btn-outline-${
          mode === "light" ? "success" : "success"
        } ${mode === "light" ? "active" : ""}`}
        onClick={() => setMode("light")}
        title="Light"
      >
        <i className="bi bi-brightness-high" />
      </button>
      <button
        type="button"
        className={`btn btn-outline-${
          mode === "light" ? "success" : "success"
        } ${mode === "dark" ? "active" : ""}`}
        onClick={() => setMode("dark")}
        title="Dark"
      >
        <i className="bi bi-moon-stars" />
      </button>
      <button
        type="button"
        className={`btn btn-outline-${
          mode === "light" ? "success" : "success"
        } ${mode === "auto" ? "active" : ""}`}
        onClick={() => setMode("auto")}
        title="Auto"
      >
        <i className="bi bi-circle-half" />
      </button>
    </div>
  );
}
