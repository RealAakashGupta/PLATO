import React from 'react'
import LandingPageNavbar from '../components/LandingPageNavbar'
import { Typography, Box, Button } from '@mui/material';
import SignInButton from '../components/SignInButton';

interface LandingPageProps {
  onOpenAuth: () => void;
}

const getStarted = (onOpenAuth: () => void) => {
  return (
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Box>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", mb: 2 }}>
          Fighting Food Waste,
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", mb: 2 }}>
          Feeding Communities
        </Typography>
      </Box>
      <Box sx={{ mt: 4, maxWidth: 600, margin: "0 auto" }}>
        <Typography variant="h6" component="p" sx={{ color: "#555" }}>
          Connect donors, volunteers, and NGOs to redirect surplus food from
          waste to those who need it most. Together, we can build a sustainable
          future.
        </Typography>
      </Box>

      <Box sx={{ p: 4, display: "flex", justifyContent: "center", gap: 2 }}>
        <SignInButton onOpenAuth={onOpenAuth} signInText="Get Started" />
        <Button
          variant="outlined"
          sx={{
            bgcolor: "#ffff",
            borderColor: "#A7A2A9",
            color: "#6C7075",
            "&:hover": { bgcolor: "#A7A2A9", borderColor: "#ffff", color: "#ffff"},
          }}>
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

const LandingPage: React.FC<LandingPageProps> = ({ onOpenAuth }) =>{
  return (
    <div>
      <LandingPageNavbar onOpenAuth={onOpenAuth} />
          <Box sx={{ textAlign: "center", mt: 8 }}>{getStarted(onOpenAuth)}</Box>
          
    </div>
  );
}

export default LandingPage