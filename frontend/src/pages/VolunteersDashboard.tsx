import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import { Box, Typography } from "@mui/material";
import Achievement from "../components/Achievement";
import VolunteersMission from "../components/VolunteersMission";
interface VolunteersDashboardProps {
  username: string;
  currentTheme: any;
  darkMode: boolean;
  onToggle: () => void;
  urlRole: string;
}
const VolunteersDashboard: React.FC<VolunteersDashboardProps> = ({
  username,
  currentTheme,
  darkMode,
  onToggle,
  urlRole,
}) => {
  return (
    <Box>
      <DashboardNavbar
        username={username}
        currentTheme={currentTheme}
        darkMode={darkMode}
        onToggle={onToggle}
        urlRole={urlRole}
      />
      <Box sx={{ px: 5 }}>
        <Achievement currentTheme={currentTheme} urlRole={urlRole} />
        <Box sx={{ px: 5, pt: 2 }}>
          <Typography variant="h5" sx={{ color: currentTheme.text }}>
            Available Missions
          </Typography>
          <VolunteersMission currentTheme={currentTheme} urlRole={urlRole} />
          <VolunteersMission currentTheme={currentTheme} urlRole={urlRole} />
        </Box>
      </Box>
    </Box>
  );
};

export default VolunteersDashboard;
