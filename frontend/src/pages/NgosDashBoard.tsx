import React from 'react'
import DashboardNavbar from '../components/DashboardNavbar';
import { Box, Button, Typography } from '@mui/material';
import Achievement from '../components/Achievement';
import AddIcon from "@mui/icons-material/Add";
import NgoDistribution from '../components/NgoDistribution';

interface NgosDashBoardProps {
  username: string;
  currentTheme: any;
  darkMode: boolean;
  onToggle: () => void;
  urlRole: string;
}
const NgosDashBoard: React.FC<NgosDashBoardProps> = ({
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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ color: currentTheme.text }}>
              Distribution Programs
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                color: "#fff",
                bgcolor: currentTheme.achievement[3],
              }}>
              New Program
            </Button>
          </Box>
          <NgoDistribution currentTheme={currentTheme} urlRole={urlRole} />
          <NgoDistribution currentTheme={currentTheme} urlRole={urlRole} />
        </Box>
        <Box sx={{ px: 5, pt: 2 }}>
          <Typography variant="h5" sx={{ color: currentTheme.text }}>
            Available Donations
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NgosDashBoard