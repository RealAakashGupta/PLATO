import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface LandingPageNavbarProps {
  onOpenAuth: () => void;
}

const LandingPageNavbar: React.FC<LandingPageNavbarProps> = ({
  onOpenAuth,
}) => {
  return (
    <div className="min-h-screen bg-background">
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

        <Button
          variant="contained"
          onClick={onOpenAuth}
          sx={{
            bgcolor: "#16a34a",
            "&:hover": { bgcolor: "#15803d" },
          }}>
          Sign In
        </Button>
      </Box>
    </div>
  );
};

export default LandingPageNavbar;
