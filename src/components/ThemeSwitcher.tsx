import { useState } from "react";
import { ColorMenu } from "./ColorMenu";
import "../styles/themeSwitcher.css";

export function ThemeSwitcher() {
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);

  return (
    <div className="theme-tab-container">
      <div className="theme-tab" onClick={() => setIsColorMenuOpen((v) => !v)}>
        <div className="theme-tab-icon"></div>
      </div>
      <ColorMenu
        isOpen={isColorMenuOpen}
        onClose={() => setIsColorMenuOpen(false)}
        vertical
      />
    </div>
  );
}
