import { Box, Card, Typography } from "@mui/material";
import React from "react";

interface ImpactCardProps {
  header: string;
    currentTheme: any;
    image: string
}
const ImpactCard: React.FC<ImpactCardProps> = ({ header, currentTheme, image }) => {
  return (
    <Box sx={{ px: 10, pt: 4 }}>
      <Card
        sx={{
          my: 2,
          p: 3,
          backgroundColor: currentTheme.background,
          color: currentTheme.text,
          borderRadius: 3,
          border: `1px solid ${currentTheme.text}20`,
        }}>
        <Typography>{header}</Typography>
        <Box
          sx={{
            py: 2,
            width: "100%",
            height: "20rem",
            overflow: "hidden",
            borderRadius: 2, 
          }}>
          <img
            src={image}
            alt={header}
            style={{
              width: "100%",
              height: "100%",
                objectFit: "cover",
              borderRadius: 4,
            }}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default ImpactCard;
