import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";

interface DonationAvailableProps {
  currentTheme: any;
  urlRole: string;
}
const DonationAvailable: React.FC<DonationAvailableProps> = ({
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
            <LunchDiningOutlinedIcon sx={{ color: currentTheme.primary }} />
            <Box>Fresh Market Co.</Box>
          </Box>
          <Box
            sx={{
              p: 1,
              px: 2,
              bgcolor: currentTheme.achievement[3],
              borderRadius: 3,
              color: "#fff",
            }}>
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
            pt: 1,
            pb: 1,
            display: "flex",
            justifyContent: "space-around",
          }}></Box>
        <Box>
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
              <Typography>25kg mixed vegetables</Typography>
              <Typography>Need Assignment</Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                color: "#ffff",
                bgcolor: currentTheme.achievement[1],
                my: 1,
              }}>
              Assign Volunteer
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default DonationAvailable;
