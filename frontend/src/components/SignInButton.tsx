import React from "react";
import { Box, Button } from "@mui/material";
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
    <Box>
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
    </Box>
  );
};

export default SignInButton;
