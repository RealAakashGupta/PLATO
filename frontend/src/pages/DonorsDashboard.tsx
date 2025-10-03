import React from 'react'
import DashboardNavbar from '../components/DashboardNavbar';
import { Box, Button, Typography } from '@mui/material';
import Achievement from '../components/Achievement';
import AddIcon from "@mui/icons-material/Add";
import DonorDonation from '../components/DonorDonation';

interface DonorsDashboardProps {
  username: string;
  currentTheme: any;
  darkMode: boolean;
  onToggle: () => void;
  urlRole: string;
}
const DonorsDashboard: React.FC<DonorsDashboardProps> = ({
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
              Your Donations
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                color: currentTheme.text,
                bgcolor: currentTheme.primary,
              }}>
              New Donation
            </Button>
          </Box>
          <DonorDonation currentTheme={currentTheme} urlRole={urlRole} />
          <DonorDonation currentTheme={currentTheme} urlRole={urlRole} />
        </Box>
      </Box>
    </Box>
  );
};

export default DonorsDashboard