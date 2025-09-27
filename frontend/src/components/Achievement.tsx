import { Box, Card, CardHeader, Typography } from '@mui/material';
import React from 'react'
import { DonorAchievementInfo, donorAchievementInfo, NgoAchievementInfo, ngoAchievementInfo, VolunteerAchievementInfo, volunteerAchievementInfo } from '../utils/MiscellaneousInfo';

interface AchievementProps {
  currentTheme: any;
  urlRole: string;
}

const Achievement: React.FC<AchievementProps> = ({
  currentTheme,
  urlRole
}) => {
  let info: VolunteerAchievementInfo[] | DonorAchievementInfo[] | NgoAchievementInfo[] = [];

  switch (urlRole) {
    case "volunteer":
      info = volunteerAchievementInfo;
      break;
    case "donor":
      info = donorAchievementInfo;
      break;
    case "ngo":
      info = ngoAchievementInfo;
      break;
  }

  return (
    <Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={3}
        p={4}>
        {info.map((role, index: number) => (
          <Box
            key={index}
            flex="1 1 10px"
            sx={{
              flexDirection: { md: "row" , sm: "column"},
            }}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                backgroundColor: currentTheme.background,
                borderRadius: 3,
                border: `1px solid ${currentTheme.text}20`,
              }}>
              <CardHeader
                title={
                  <Box>
                    <Box
                      sx={{
                        bgcolor: currentTheme.roleBgColors[index],
                        width: 64,
                        height: 64,
                        mx: "auto",
                      }}>
                      <role.icon
                        sx={{
                          width: "70%",
                          height: "70%",
                          color: currentTheme.achievement[index],
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: currentTheme.text }}>
                      {role.values}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: currentTheme.lightText }}>
                      {role.info}
                    </Typography>
                  </Box>
                }
              />
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Achievement;