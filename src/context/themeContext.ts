import { createContext } from "react";

export type Theme = "pink" | "silver" | "blue" | "dark" | "green" | "azure";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
