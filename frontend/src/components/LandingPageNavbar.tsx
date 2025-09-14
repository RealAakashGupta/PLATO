import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import SignInButton from "./SignInButton";
import DarkModeToggle from "./DarkModeToggle";
import theme from "../theme";

interface LandingPageNavbarProps {
  onOpenAuth: () => void;
  darkMode: boolean;
  onToggle: () => void;
}

const LandingPageNavbar: React.FC<LandingPageNavbarProps> = ({
  onOpenAuth,
  darkMode,
  onToggle
}) => {

  const currentTheme = darkMode ? theme.dark : theme.light;

  return (
    <Box sx={{
      backgroundColor: currentTheme.background,
      color: currentTheme.text
    }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: currentTheme.navbarBackground,
          flexDirection: "row",
        }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", color: currentTheme.primary }}>
          {/* < className="h-8 w-8 text-green-600" /> */}
          Plato
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <DarkModeToggle mode={darkMode ? "dark" : "light"} onToggle={onToggle} />
          <SignInButton onOpenAuth={onOpenAuth} signInText="Sign In" />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPageNavbar;
