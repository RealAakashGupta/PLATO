import { Box, Button, Typography } from "@mui/material";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { roleOptions } from "../utils/SignUp";
import { useNavigate } from "react-router-dom";


interface DashboardNavbarProps {
  username: string;
  currentTheme: any;
  darkMode: boolean;
  onToggle: () => void;
  urlRole: string;
}

const DashboardNav: React.FC<DashboardNavbarProps> = ({
  username,
  currentTheme,
  darkMode,
  onToggle,
  urlRole,
}) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate("/");
  };
  return (
    <Box>
      {" "}
      <Box
        sx={{
          display: "flex",
          pt: 4,
          px: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, color: currentTheme.text }}>
            Welcome back, {username}!
          </Typography>
          <Typography variant="body1" sx={{ color: currentTheme.lightText }}>
            {
              roleOptions.find((option) => option.key === urlRole)
                ?.dashboardContent
            }
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ px: 2 }}>
            <DarkModeToggle
              mode={darkMode ? "dark" : "light"}
              onToggle={onToggle}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: currentTheme.primary,
              color: "#ffff",
              borderColor: currentTheme.text,
            }}
            onClick={handleSignOut}>
            Sign Out
          </Button>
        </Box>
      </Box>
      <Box sx={{ pt: 2, px: 5, color: currentTheme.lightText }}>
        <hr />
      </Box>
    </Box>
  );
};
const DashboardNavbar: React.FC<DashboardNavbarProps> = ({
  username,
  currentTheme,
  darkMode,
  onToggle,
  urlRole,
}) => {
  return (
    <Box>
      <DashboardNav
        username={username}
        currentTheme={currentTheme}
        darkMode={darkMode}
        onToggle={onToggle}
        urlRole={urlRole}
      />
    </Box>
  );
};

export default DashboardNavbar;
