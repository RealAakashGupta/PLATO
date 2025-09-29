import React from "react";
import { Button } from "@mui/material";
interface SignInButtonProps {
  signInText: string;
  onOpenAuth: () => void;
  bgcolor: string;
  bgHoverColor: string;
    textColor: string;
}
const SignInButton: React.FC<SignInButtonProps> = ({
  onOpenAuth,
  signInText,
  bgcolor,
  bgHoverColor,
  textColor,
}) => {
  return (
      <Button
        variant="contained"
        onClick={onOpenAuth}
        sx={{
          bgcolor: bgcolor,
          "&:hover": { bgcolor: bgHoverColor },
          color: textColor,
        }}>
        {signInText}
      </Button>
  );
};

export default SignInButton;
