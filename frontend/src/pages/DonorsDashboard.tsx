import React from 'react'
import DashboardNavbar from '../components/DashboardNavbar';
import { Box } from '@mui/material';

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
    </Box>
  );
};

export default DonorsDashboard