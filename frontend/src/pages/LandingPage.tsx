import React from 'react'
import LandingPageNavbar from '../components/LandingPageNavbar'
import { Typography, Box, Button } from '@mui/material';
import SignInButton from '../components/SignInButton';
import theme from '../theme';

interface LandingPageProps {
  onOpenAuth: () => void;
  darkMode: boolean;
  onToggle: () => void;
}

const GetStarted: React.FC<{ onOpenAuth: () => void; darkMode: boolean }> = ({ onOpenAuth, darkMode }) => {
  const currentTheme = darkMode ? theme.dark : theme.light;
  return (
    <Box sx={{ textAlign: "center", mt: 8, color: currentTheme.text }}>
      <Box>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", mb: 2, color: currentTheme.primary }}>
          Fighting Food Waste,
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", mb: 2, color: currentTheme.primary }}>
          Feeding Communities
        </Typography>
      </Box>
      <Box sx={{ mt: 4, maxWidth: 600, margin: "0 auto" }}>
        <Typography variant="h6" component="p" sx={{ color: currentTheme.text }}>
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
            bgcolor: currentTheme.background,
            borderColor: currentTheme.text,
            color: currentTheme.text,
            "&:hover": { bgcolor: currentTheme.text, borderColor: currentTheme.background, color: currentTheme.background },
          }}>
          Learn More
        </Button>
      </Box>
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Box
          component="img"
          src="/assets/hungry-child.webp"
          alt=""
          loading="lazy"
          sx={{
            width: "100%",
            maxWidth: "750px",
            borderRadius: 4,
            boxShadow: 3,
            display: "block",
            margin: "0 auto",
          }}
        />
      </Box>
    </Box>
  );
};

const AboutUs: React.FC<{ darkMode : boolean }> = ({ darkMode }) => {
  const currentTheme = darkMode ? theme.dark : theme.light;
  return (
    <Box sx = {{ textAlign:"center", mt:8, py: 8, px: 8, bgcolor: currentTheme.aboutUsBackground }} >
      <Box>
        <Typography variant="h3" component="h2" sx={{fontWeight: 600, color: currentTheme.text_heading}}>
          How Plato Works
        </Typography>
        <Typography variant="h6" component="p" sx={{ mt: 2, color: currentTheme.text }}>
          Our platform connects three key groups to create an efficient food redistribution network
        </Typography>
      </Box>
    </Box>
  )
}

const LandingPage: React.FC<LandingPageProps> = ({ onOpenAuth, darkMode, onToggle }) => {
  return (
    <div>
      <LandingPageNavbar onOpenAuth={onOpenAuth} darkMode={darkMode} onToggle={onToggle} />
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <GetStarted onOpenAuth={onOpenAuth} darkMode={darkMode} />
      </Box>
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <AboutUs darkMode={darkMode} />
      </Box>
    </div>
  );
}

export default LandingPage