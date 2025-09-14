import React from 'react'
import { Box, Button } from '@mui/material';
interface SignInButtonProps {
  signInText: string;
  onOpenAuth: () => void;
}
const SignInButton: React.FC<SignInButtonProps> = ({
  onOpenAuth,
  signInText,
}) => {
  return (
    <Box>
      <Button
        variant="contained"
        onClick={onOpenAuth}
        sx={{
          bgcolor: "#16a34a",
          "&:hover": { bgcolor: "#15803d" },
        }}>
        {signInText}
      </Button>
    </Box>
  );
};

export default SignInButton