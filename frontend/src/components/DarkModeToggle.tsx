import React from 'react'
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SunnyIcon from "@mui/icons-material/Sunny";


interface DarkModeToggleProps {
  mode: "light" | "dark";
  onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ mode, onToggle }) => {
  return (
    <IconButton onClick={onToggle} color="inherit">
      {mode === "light" ? <DarkModeIcon /> : <SunnyIcon />}
    </IconButton>
  );
};

export default DarkModeToggle