"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  ReactNode,
  Context,
} from "react";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  useMediaQuery,
  Theme,
} from "@mui/material";

// Define context type
interface AppThemeContextType {
  theme: Theme;
}

const AppThemeContext: Context<AppThemeContextType | null> =
  createContext<AppThemeContextType | null>(null);

interface AppThemeProviderProps {
  children: ReactNode;
}

const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        cssVariables: {
          colorSchemeSelector: "class",
          disableCssColorScheme: true,
        },
        typography: {
          fontFamily: "var(--font-josefin-sans)",
        },
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#FAF8EE",
            contrastText: "#000",
          },
          secondary: {
            main: "#FAF8EE",
            contrastText: "#000",
          },
          background: {
            default: prefersDarkMode ? "#09081F" : "#FAF8EE",
            paper: prefersDarkMode ? "#09081F" : "#FAF8EE",
          },
        },
        colorSchemes: {
          light: {
            palette: {
              primary: { main: "#FAF8EE" },
              secondary: { main: "#FAF8EE" },
              background: {
                default: "#FAF8EE",
                paper: "#FAF8EE",
              },
            },
          },
          dark: {
            palette: {
              primary: { main: "#09081F" },
              secondary: { main: "#09081F" },
              background: {
                default: "#09081F",
                paper: "#09081F",
              },
            },
          },
        },
      })
    );
  }, [prefersDarkMode]);

  return (
    <AppThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useAppThemeContext = (): AppThemeContextType => {
  const context = useContext(AppThemeContext);
  if (!context)
    throw new Error("useAppThemeContext must be used within AppThemeProvider");
  return context;
};

export default AppThemeProvider;
