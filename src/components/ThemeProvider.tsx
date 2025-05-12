import { useState, ReactNode, useEffect } from "react";
import { Theme, ThemeContext } from "../context/themeContext";

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const getInitialTheme = (): Theme => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get("theme");

      if (
        themeParam &&
        ["pink", "silver", "blue", "dark", "green", "wildberries"].includes(themeParam)
      ) {
        return themeParam as Theme;
      }
    } catch (error) {
      console.error("Ошибка при получении темы из URL:", error);
    }

    return "pink";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    try {
      const url = new URL(window.location.href);
      url.searchParams.set("theme", theme);
      window.history.replaceState({}, "", url.toString());
    } catch (error) {
      console.error("Ошибка при обновлении URL:", error);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
