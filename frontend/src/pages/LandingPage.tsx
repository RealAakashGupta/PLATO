import React from "react";
import LandingPageNavbar from "../components/LandingPageNavbar";
import {
  Typography,
  Box,
  Button,
  CardHeader,
  CardContent,
  Card,
  Avatar,
} from "@mui/material";
import SignInButton from "../components/SignInButton";
import theme from "../theme";
import { RoleOption, roleOptions } from "../utils/SignUp";
import { FoodWastageInfo, foodWastageInfo } from "../utils/MiscellaneousInfo";

interface LandingPageProps {
  onOpenAuth: () => void;
  darkMode: boolean;
  onToggle: () => void;
}

const GetStarted: React.FC<{ onOpenAuth: () => void; currentTheme: any }> = ({
  onOpenAuth,
  currentTheme,
}) => {
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
        <Typography
          variant="h6"
          component="p"
          sx={{ color: currentTheme.text }}>
          Connect donors, volunteers, and NGOs to redirect surplus food from
          waste to those who need it most. Together, we can build a sustainable
          future.
        </Typography>
      </Box>

      <Box sx={{ p: 4, display: "flex", justifyContent: "center", gap: 2 }}>
        <SignInButton
          onOpenAuth={onOpenAuth}
          signInText="Get Started"
          bgcolor={currentTheme.primaryButton}
          bgHoverColor={currentTheme.primary}
          textColor="#ffff"
        />
        <Button
          variant="outlined"
          sx={{
            bgcolor: currentTheme.background,
            borderColor: currentTheme.text,
            color: currentTheme.text,
            "&:hover": {
              bgcolor: currentTheme.text,
              borderColor: currentTheme.background,
              color: currentTheme.background,
            },
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

const AboutUs: React.FC<{ currentTheme: any }> = ({ currentTheme }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 10,
        py: 10,
        px: 8,
        bgcolor: currentTheme.aboutUsBackground,
      }}>
      <Box>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: 600, color: currentTheme.text_heading }}>
          How Plato Works
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ mt: 2, color: currentTheme.text }}>
          Our platform connects three key groups to create an efficient food
          redistribution network
        </Typography>
        <Box sx={{ pt: 4 }}>
          <RoleTypeCards currentTheme={currentTheme} />
        </Box>
      </Box>
    </Box>
  );
};

const RoleTypeCards: React.FC<{ currentTheme: any }> = ({ currentTheme }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={3} // spacing between cards
      p={4}>
      {roleOptions.map((role: RoleOption) => (
        <Box
          key={role.key}
          flex="1 1 300px" // responsive width
          maxWidth={345}>
          <Card
            sx={{
              textAlign: "center",
              p: 3,
              backgroundColor: currentTheme.background,
              borderRadius: 3,
              boxShadow: 4,
              height: 340,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 8,
              },
            }}>
            <CardHeader
              title={
                <Box sx={{ height: 200 }}>
                  <Avatar
                    sx={{
                      bgcolor: currentTheme.roleBgColors[role.key],
                      width: 64,
                      height: 64,
                      mx: "auto",
                      mb: 2,
                    }}>
                    <role.icon sx={{ width: "45%", height: "45%", color: currentTheme.roleColors[role.key] }} />
                  </Avatar>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: currentTheme.text }}>
                    {role.landingPageLabel}
                  </Typography>
                  <Typography variant="body1" sx={{ color: currentTheme.text }}>
                    {role.landingPageDepsription1}
                  </Typography>
                </Box>
              }
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: currentTheme.text }}>
                {role.landingPageDepsription2}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

const WastageData: React.FC<{ currentTheme: any }> = ({ currentTheme }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={3} // spacing between cards
      p={4}
      my={6}>
      {foodWastageInfo.map((food: FoodWastageInfo, index) => (
        <Box
          key={index}
          flex="1 1 300px" // responsive width
          sx={{
            px: 5,
            textAlign: "center",
          }}>
          <CardHeader
            title={
              <Box>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ color: currentTheme.primary }}>
                  {food.wastageValue}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: currentTheme.lightText }}>
                  {food.wastageInfo}
                </Typography>
              </Box>
            }
          />
        </Box>
      ))}
    </Box>
  );
};

const JoinUsComponent: React.FC<{
  onOpenAuth: () => void;
  currentTheme: any;
}> = ({ onOpenAuth, currentTheme }) => {
  return (
    <Box sx={{ bgcolor: currentTheme.primary, textAlign: "center", p: 10 }}>
      <Typography variant="h4" sx={{ color: "#ffff" }}>
        Ready to Make a Difference?
      </Typography>
      <Typography variant="h5" sx={{ color: "#ffff", py: 2 }}>
        Join our community and help create a world with zero food waste
      </Typography>
      <Box sx={{ pt: 2 }}>
        <SignInButton
          onOpenAuth={onOpenAuth}
          signInText="Join Plato Today"
          bgcolor="#ffff"
          bgHoverColor="#f1f1f1ff"
          textColor="#111"
        />
      </Box>
    </Box>
  );
};

const Footer: React.FC<{ currentTheme: any }> = ({ currentTheme }) => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="body1" sx={{ color: currentTheme.lightText }}>
        {" "}
        &copy; 2025 Plato. Fighting food waste, one meal at a time.
      </Typography>
    </Box>
  );
};
const LandingPage: React.FC<LandingPageProps> = ({
  onOpenAuth,
  darkMode,
  onToggle,
}) => {
  const currentTheme = darkMode ? theme.dark : theme.light;
  return (
    <div>
      <LandingPageNavbar
        onOpenAuth={onOpenAuth}
        darkMode={darkMode}
        onToggle={onToggle}
      />
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <GetStarted onOpenAuth={onOpenAuth} currentTheme={currentTheme} />
      </Box>
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <AboutUs currentTheme={currentTheme} />
      </Box>
      <Box>
        <WastageData currentTheme={currentTheme} />
        <JoinUsComponent onOpenAuth={onOpenAuth} currentTheme={currentTheme} />
        <Footer currentTheme={currentTheme} />
      </Box>
    </div>
  );
};

export default LandingPage;
