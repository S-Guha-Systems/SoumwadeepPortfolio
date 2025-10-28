// components/useBootstrapTheme.js  (client)
"use client";

import { useEffect, useState } from "react";

export function useBootstrapTheme() {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") return "auto";
    return localStorage.getItem("theme") || "auto"; // 'light' | 'dark' | 'auto'
  });

  const apply = (m: string) => {
    if (m === "auto") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.setAttribute(
        "data-bs-theme",
        prefersDark ? "dark" : "light"
      );
    } else {
      document.documentElement.setAttribute("data-bs-theme", m);
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem("theme", mode);
    } catch {}
    apply(mode);
  }, [mode]);

  // When in auto, react to system changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const stored = localStorage.getItem("theme") || "auto";
      if (stored === "auto") apply("auto");
    };
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return { mode, setMode };
}
