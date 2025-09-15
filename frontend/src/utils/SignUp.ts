import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
export interface RoleOption {
  key: string;
  label: string;
    description: string;
    icon: React.ElementType;
  benefits?: string[];
}
export const roleOptions: RoleOption[] = [
 {
      key: "volunteer",
      label: "Volunteer",
      description: "Help collect and distribute food to communities in need",
      icon: GroupOutlinedIcon,
    //   color: "text-green-600 bg-green-50 border-green-200",
      benefits: ["Earn impact points", "Join local missions", "Build community connections"]
    },
    {
      key: "donor",
      label: "Donor",
      description: "Share surplus food from your business or organization", 
      icon: FavoriteBorderOutlinedIcon,
    //   color: "text-blue-600 bg-blue-50 border-blue-200",
      benefits: ["Reduce food waste", "Tax benefits", "Community impact tracking"]
    },
    {
      key: "ngo",
      label: "NGO",
      description: "Coordinate food distribution programs in your community",
      icon: CorporateFareOutlinedIcon,
    //   color: "text-purple-600 bg-purple-50 border-purple-200",
      benefits: ["Manage distributions", "Access volunteer network", "Resource coordination"]
    }
];