import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import GasMeterOutlinedIcon from "@mui/icons-material/GasMeterOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
export interface FoodWastageInfo{
    wastageValue: string;
    wastageInfo: string;
}

export const foodWastageInfo: FoodWastageInfo[] = [
  {
    wastageValue: "1.05B",
    wastageInfo: "Tons of food wasted globally each year",
  },
  {
    wastageValue: "720M",
    wastageInfo: "People facing food insecurity worldwide",
  },
  {
    wastageValue: "30%",
    wastageInfo: "Of food produced is lost or wasted",
  },
];

export interface VolunteerAchievementInfo{
  icon: React.ElementType;
  values: string;
  info: string;
}

export const volunteerAchievementInfo: VolunteerAchievementInfo[] = [
  {
    icon: VolunteerActivismOutlinedIcon,
    values: "47",
    info: "Missions",
  },
  {
    icon: LocalShippingOutlinedIcon,
    values: "342kg",
    info: "Food Saved",
  },
  {
    icon: StarBorderPurple500OutlinedIcon,
    values: "1250",
    info: "Points",
  },
  {
    icon: EmojiEventsOutlinedIcon,
    values: "Manisa",
    info: "Current Rank",
  },
];

export interface DonorAchievementInfo {
  icon: React.ElementType;
  values: string;
  info: string;
}

export const donorAchievementInfo: DonorAchievementInfo[] = [
  {
    icon: VolunteerActivismOutlinedIcon,
    values: "23s",
    info: "Donation",
  },
  {
    icon: TaskAltOutlinedIcon,
    values: "342kg",
    info: "Food Saved",
  },
  {
    icon: CalendarTodayOutlinedIcon,
    values: "915",
    info: "Meals Fed",
  },
  {
    icon: GasMeterOutlinedIcon,
    values: "1.2t",
    info: "CO2 Saved",
  },
];

export interface NgoAchievementInfo {
  icon: React.ElementType;
  values: string;
  info: string;
}

export const ngoAchievementInfo: NgoAchievementInfo[] = [
  {
    icon: CorporateFareOutlinedIcon,
    values: "8",
    info: "Programs",
  },
  {
    icon: GroupsOutlinedIcon,
    values: "24",
    info: "Volunteers",
  },
  {
    icon: FavoriteBorderOutlinedIcon,
    values: "156",
    info: "Family Served",
  },
  {
    icon: LunchDiningOutlinedIcon,
    values: "2341",
    info: "Meals Distributed",
  },
];