import { useTheme } from "../hooks/useTheme";
import { useEffect, useRef } from "react";
import "../styles/colorMenu.css";

interface ColorMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ColorMenu = ({ isOpen, onClose }: ColorMenuProps) => {
  const { theme, setTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  const themes = [
    { id: "pink", label: "🌸", color: "#e8a3a8" },
    { id: "silver", label: "✨", color: "#a0a3aa" },
    { id: "blue", label: "🌊", color: "#b3d4fc" },
    { id: "dark", label: "🌑", color: "#333" },
    { id: "green", label: "🌿", color: "#00ff00" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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
    <div className="color-menu" ref={menuRef}>
      {themes.map((themeOption, index) => {
        const angle = index * (360 / (themes.length - 1)) * (Math.PI / 180);
        const radius = 40;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <button
            key={themeOption.id}
            className={`color-button ${
              theme === themeOption.id ? "active" : ""
            }`}
            onClick={() => {
              setTheme(themeOption.id as "pink" | "silver" | "blue");
              onClose();
            }}
            style={{
              transform: `translate(calc(50% + ${x}px), calc(50% + ${y}px))`,
              backgroundColor: themeOption.color,
            }}
          >
            {themeOption.label}
          </button>
        );
      })}
    </div>
  );
};
