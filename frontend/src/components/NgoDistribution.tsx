import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";

interface NgoDistributionProps {
  currentTheme: any;
  urlRole: string;
}
const NgoDistribution: React.FC<NgoDistributionProps> = ({
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
            <CorporateFareOutlinedIcon />
            <Box>Weekly Community Meals</Box>
          </Box>
          <Box
            sx={{
              p: 1,
              px: 2,
              bgcolor: currentTheme.primary,
              borderRadius: 3,
              color: "#fff",
            }}>
            Active
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
        <Box sx={{ pt:3, pb:1, display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Typography variant="body1">150</Typography>
            <Typography variant="body2" sx={{ color: currentTheme.lightText }}>
              Capacity
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">8</Typography>
            <Typography variant="body2" sx={{ color: currentTheme.lightText }}>
              Volunteers
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">2</Typography>
            <Typography variant="body2" sx={{ color: currentTheme.lightText }}>
              Needed
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">2026-01-17</Typography>
            <Typography variant="body2" sx={{ color: currentTheme.lightText }}>
              Next Event
            </Typography>
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
            }}>
            <Button
              variant="outlined"
              sx={{
                color: currentTheme.lightText,
                borderColor: currentTheme.lightText,
              }}>
              Manage
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: currentTheme.lightText,
                borderColor: currentTheme.lightText,
              }}>
              View Reports
            </Button>
            <Button variant="contained" sx={{ color: "#ffff" }}>
              Find Volunteer
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default NgoDistribution;
