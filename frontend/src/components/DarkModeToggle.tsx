import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SunnyIcon from "@mui/icons-material/Sunny";

interface DarkModeToggleProps {
  mode: "light" | "dark";
  onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ mode, onToggle }) => {
  return (
    <Tooltip
      title={mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}>
      <IconButton onClick={onToggle} color="inherit">
        {mode === "light" ? (
          <DarkModeIcon />
        ) : (
          <SunnyIcon sx={{ color: "#ffff" }} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeToggle;
