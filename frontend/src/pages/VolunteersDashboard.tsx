import React from 'react'
import DashboardNavbar from '../components/DashboardNavbar';
import { Box } from '@mui/material';

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
    </Box>
  );
};

export default VolunteersDashboard