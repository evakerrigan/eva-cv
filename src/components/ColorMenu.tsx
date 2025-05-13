import { useTheme } from "../hooks/useTheme";
import { useEffect, useRef } from "react";
import "../styles/colorMenu.css";
import { Theme } from "../context/themeContext";

interface ColorMenuProps {
  isOpen: boolean;
  onClose: () => void;
  vertical?: boolean;
}

export const ColorMenu = ({
  isOpen,
  onClose,
  vertical = false,
}: ColorMenuProps) => {
  const { theme, setTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  const themes = [
    { id: "pink", label: "", color: "#e8a3a8" },
    { id: "silver", label: "", color: "#a0a3aa" },
    { id: "blue", label: "", color: "#b3d4fc" },
    { id: "dark", label: "", color: "#333" },
    { id: "green", label: "", color: "#046c65" },
    { id: "azure", label: "", color: "#22baec" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const themeTab = document.querySelector(".theme-tab");
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !themeTab?.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`color-menu${vertical ? " vertical" : ""}`} ref={menuRef}>
      {themes.map((themeOption, index) => (
        <button
          key={themeOption.id}
          className={`color-button ${theme === themeOption.id ? "active" : ""}`}
          onClick={() => {
            setTheme(themeOption.id as Theme);
            onClose();
          }}
          style={
            vertical
              ? {
                  backgroundColor: themeOption.color,
                  position: "static",
                  margin: "0 0 8px 0",
                }
              : {
                  transform: `translate(calc(50% + ${
                    Math.cos(index * (360 / themes.length) * (Math.PI / 180)) *
                    60
                  }px), calc(50% + ${
                    Math.sin(index * (360 / themes.length) * (Math.PI / 180)) *
                    60
                  }px))`,
                  backgroundColor: themeOption.color,
                }
          }
        >
          {themeOption.label}
        </button>
      ))}
    </div>
  );
};
