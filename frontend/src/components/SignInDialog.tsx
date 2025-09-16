import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";

import {
  SignInData,
  SignInField,
  defaultSignInData,
  signInFields,
  validateEmail,
  validatePassword,
} from "../utils/SignIn";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../theme";
import SignUpDialog from "./SignUpDialog";

interface SignInDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAuth: "signin" | "signup";
  setAuth: (auth: "signin" | "signup") => void;
  darkMode: boolean;
}

const SingInForm: React.FC<{
  currentTheme: any;
  onAuth: "signin" | "signup";
  setAuth: (auth: "signin" | "signup") => void;
}> = ({ currentTheme, onAuth, setAuth }) => {
  const [formData, setFormData] = useState<SignInData>(defaultSignInData);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(formData.email)) {
      toast.error("Invalid email format");
      return;
    }

    if (!validatePassword(formData.password)) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // Simulate login API
    console.log("Signing in with:", formData);
    toast.success("Login successful!");
  };

  return (
    <Box>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}></Typography>
      <Box>
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
          {/* < className="h-8 w-8 text-green-600" /> */}
          Welcome back!
        </Typography>
        <Typography variant="h6" component="h2">
          Sign in to continue fighting food waste
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 2,
          backgroundColor: currentTheme.background,
          color: currentTheme.text,
        }}>
        {signInFields.map((field: SignInField) => (
          <TextField
            autoFocus
            label={field.label}
            name={field.name}
            type={field.type}
            fullWidth
            margin="normal"
            value={formData[field.name as keyof SignInData]}
            onChange={handleChange}
            InputLabelProps={{ style: { color: currentTheme.text } }}
            sx={{
              input: { color: currentTheme.text }, // text color
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: currentTheme.text, // default border
                },
                "&:hover fieldset": {
                  borderColor: currentTheme.primary, // hover border
                },
                "&.Mui-focused fieldset": {
                  borderColor: currentTheme.primary,
                },
              },
            }}
          />
        ))}
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Box sx={{ my: 2 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              textAlign: "center",
              bgcolor: currentTheme?.primary,
            }}>
            Sign In
          </Button>
        </Box>
        <hr />
        <Typography>New to Plato?</Typography>
        <Button
          variant="text"
          sx={{
            color: currentTheme.primary,
            fontWeight: 600,
            textDecoration: "none",
          }}
          onClick={() => setAuth("signup")}>
          Create an account
        </Button>
      </Box>
    </Box>
  );
};

const SignInDialog: React.FC<SignInDialogProps> = ({
  isOpen,
  onClose,
  onAuth,
  setAuth,
  darkMode,
}) => {
  const currentTheme = darkMode ? theme.dark : theme.light;
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Box
        sx={{
          p: 3,
          backgroundColor: currentTheme.background,
          color: currentTheme.text,
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
            backgroundColor: currentTheme.background,
            color: currentTheme.text,
          }}
          onClick={onClose}>
          <CloseIcon />
        </Box>

        <Box sx={{ my: 2 }}>
          {onAuth === "signin" ? (
            <SingInForm
              currentTheme={currentTheme}
              onAuth={onAuth}
              setAuth={setAuth}
            />
          ) : (
            <SignUpDialog
              currentTheme={currentTheme}
              onAuth={onAuth}
              setAuth={setAuth}
            />
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default SignInDialog;
