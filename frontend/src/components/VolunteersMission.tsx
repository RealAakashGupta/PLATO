import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
interface VolunteersMissionProps {
  currentTheme: any;
  urlRole: string;
}
const VolunteersMission: React.FC<VolunteersMissionProps> = ({
  currentTheme,
  urlRole,
}) => {
  return (
    <Card
      sx={{
        textAlign: "center",
        my: 2,
        p: 3,
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
        borderRadius: 3,
        border: `1px solid ${currentTheme.text}20`,
      }}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
            <VolunteerActivismOutlinedIcon />
            <Box>Fresh Produce Pickup</Box>
          </Box>
          <Box
            sx={{ p: 1, px:2, bgcolor: "#fa1e1eff", borderRadius: 3, color: "#fff" }}>
            High Priority
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 2,
            color: currentTheme.lightText,
          }}>
          <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 1 }}>
            <LocationOnOutlinedIcon />
            <Box>Location</Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 1 }}>
            <AccessTimeOutlinedIcon />
            <Box>2:00 PM - 4:00 PM</Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: currentTheme.lightText,
            py: 2,
          }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              textAlign: "left",
              color: currentTheme.lightText,
              flexDirection: "column",
            }}>
            <Typography>50kg mixed vegetables</Typography>
            <Typography>Reward: 25 points</Typography>
          </Box>
          <Button variant="contained" sx={{bgcolor: currentTheme.primary, my:1}}> Accept Mission</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default VolunteersMission;
