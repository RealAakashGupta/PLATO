import React from "react";
import { Box, Typography } from "@mui/material";
import SignInButton from "./SignInButton";
import DarkModeToggle from "./DarkModeToggle";

interface LandingPageNavbarProps {
  onOpenAuth: () => void;
}

const LandingPageNavbar: React.FC<LandingPageNavbarProps> = ({
  onOpenAuth,
}) => {
  return (
    <Box sx={{ backgroundColor: "#ffff" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#f5f5f5",
          flexDirection: "row",
        }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", color: "#15803d" }}>
          {/* < className="h-8 w-8 text-green-600" /> */}
          Plato
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <DarkModeToggle mode="light" onToggle={() => {}} />
          <SignInButton onOpenAuth={onOpenAuth} signInText="Sign In" />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPageNavbar;
