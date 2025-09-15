import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
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
    benefits: [
      "Earn impact points",
      "Join local missions",
      "Build community connections",
    ],
  },
  {
    key: "donor",
    label: "Donor",
    description: "Share surplus food from your business or organization",
    icon: FavoriteBorderOutlinedIcon,
    //   color: "text-blue-600 bg-blue-50 border-blue-200",
    benefits: [
      "Reduce food waste",
      "Tax benefits",
      "Community impact tracking",
    ],
  },
  {
    key: "ngo",
    label: "NGO",
    description: "Coordinate food distribution programs in your community",
    icon: CorporateFareOutlinedIcon,
    //   color: "text-purple-600 bg-purple-50 border-purple-200",
    benefits: [
      "Manage distributions",
      "Access volunteer network",
      "Resource coordination",
    ],
  },
];

export type UserRole = "donor" | "volunteer" | "ngo";
export interface SignUpData {
  role: UserRole;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const defaultSignUpData: SignUpData = {
  role: "volunteer",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};

export const signUp = async (data: SignUpData): Promise<boolean> => {
  if (!validateEmail(data.email)) {
    throw new Error("Invalid email format");
  }

  if (!validatePassword(data.password)) {
    throw new Error("Password must be at least 6 characters");
  }

  if (!validateConfirmPassword(data.password, data.confirmPassword)) {
    throw new Error("Passwords do not match");
  }

  console.log("Signing up with:", data);
  return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
};
