import { useState } from "react";
import "./Header.css";

interface HeaderProps {
  title: string;
  version: number;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

const Header = ({ title, version, isPlaying, setIsPlaying }: HeaderProps) => {
  const [menuPrinted, setMenuPrinted] = useState(false);

  const handleClick = () => {
    setMenuPrinted(!menuPrinted);
    setIsPlaying(!isPlaying);
  }

  return (
    <header onClick={handleClick}>
      <h1 className="animate__animated animate__bounce">
        {menuPrinted ? `${title}... and rarely do we hate it!` : title}
      </h1>
      <h4>Version: {version}</h4>
    </header>
  );
};

export default Header;