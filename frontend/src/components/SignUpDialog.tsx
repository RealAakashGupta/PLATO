import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

interface SignUpDialogProps {
  currentTheme: any;
  onAuth: "signin" | "signup";
  setAuth: (auth: "signin" | "signup") => void;
}
const SingUpForm: React.FC<{
  currentTheme: any;
  onAuth: "signin" | "signup";
  setAuth: (auth: "signin" | "signup") => void;
}> = ({ currentTheme, onAuth, setAuth }) => {
  return (
    <Box>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}></Typography>
      <Box>
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
          {/* < className="h-8 w-8 text-green-600" /> */}
          Join the movement
        </Typography>
        <Typography variant="h6" component="h2">
          Help us create a world with zero food waste
        </Typography>
      </Box>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Box sx={{ my: 2 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              textAlign: "center",
              bgcolor: currentTheme?.primary,
            }}>
            Sign Up
          </Button>
        </Box>
        <hr />
        <Typography>Already fighting food waste with us?</Typography>
        <Button
          variant="text"
          sx={{
            color: currentTheme.primary,
            fontWeight: 600,
            textDecoration: "none",
          }}
          onClick={() => setAuth("signin")}>
          Sign in instead
        </Button>
      </Box>
    </Box>
  );
};
const SignUpDialog: React.FC<SignUpDialogProps> = ({
  currentTheme,
  onAuth,
  setAuth,
}) => {
  return (
    <Box>
      <SingUpForm
        currentTheme={currentTheme}
        onAuth={onAuth}
        setAuth={setAuth}
      />
    </Box>
  );
};

export default SignUpDialog;
