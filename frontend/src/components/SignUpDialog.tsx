import React, { useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import {
  defaultSignUpData,
  RoleOption,
  roleOptions,
  SignUpData,
  SignUpField,
  signUpFields,
  validateConfirmPassword,
  validateEmail,
  validatePassword,
} from "../utils/SignUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import toast from "react-hot-toast";
interface SignUpDialogProps {
  currentTheme: any;
  onAuth: "signin" | "signup";
  setAuth: (auth: "signin" | "signup") => void;
}

const SignUpForm: React.FC<{
  currentTheme: any;
  onAuth: "signin" | "signup";
  setAuth: (auth: "signin" | "signup") => void;
}> = ({ currentTheme, onAuth, setAuth }) => {
  const [formData, setFormData] = useState<SignUpData>(defaultSignUpData);
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

    if (!validateConfirmPassword(formData.password, formData.confirmPassword)) {
      toast.error("Password didn't match");
      return;
    }
    // Simulate login API
    console.log("Signing up with:", formData);
    toast.success("Successfully Created!!");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        textAlign: "center",
        mt: 2,
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
      }}>
      {signUpFields.map((field: SignUpField) => (
        <TextField
          autoFocus
          label={field.label}
          name={field.name}
          type={field.type}
          fullWidth
          margin="normal"
          value={formData[field.name as keyof SignUpData]}
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
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};
const ChooseRole: React.FC<{
  currentTheme: any;
  onAuth: "signin" | "signup";
  goNext: () => void;
  setAuth: (auth: "signin" | "signup") => void;
}> = ({ currentTheme, goNext, onAuth, setAuth }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleRoleSelect = (roleKey: string) => {
    setSelectedRole(roleKey);
    setFormData({}); // reset fields on role change
  };

  return (
    <Box>
      <Box sx={{ backgroundColor: currentTheme.background }}>
        <Typography variant="h6" sx={{ pt: 3 }} gutterBottom>
          Choose Your Role
        </Typography>
        {roleOptions.map((role: RoleOption) => {
          const isSelected = selectedRole === role.key;
          return (
            <Box
              key={role.key}
              sx={{
                border: "1px solid",
                borderColor: isSelected
                  ? currentTheme.primary
                  : currentTheme.text,
                borderRadius: "8px",
                p: 2,
                mb: 2,
                backgroundColor: currentTheme.background,
                color: currentTheme.text,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // pushes label left, radio right
              }}
              onClick={() => handleRoleSelect(role.key)}>
              <Box>
                <Box sx={{ display: "flex", mb: 2, justifyContent: "justify" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <role.icon />
                    <Typography variant="h6">{role.label}</Typography>
                  </Box>
                  {isSelected && (
                    <Radio
                      checked={isSelected}
                      sx={{
                        color: currentTheme.text,
                        "&.Mui-checked": {
                          color: currentTheme.primary,
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 18,
                        },
                        textAlign: "start",
                      }}
                    />
                  )}
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: currentTheme.text, opacity: 0.8 }}>
                  {role.description}
                </Typography>
                <List dense disablePadding>
                  {(role.benefits ?? []).map((benefit, index) => (
                    <ListItem key={index} sx={{ px: 0.1 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleIcon
                          sx={{ fontSize: 12, color: currentTheme.primary }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={benefit}
                        primaryTypographyProps={{
                          variant: "body2",
                          fontSize: 12,
                          sx: { opacity: 0.85 },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Box sx={{ my: 2 }}>
          <Button
            onClick={goNext}
            disabled={!selectedRole}
            variant="contained"
            sx={{
              width: "100%",
              textAlign: "center",
              bgcolor: currentTheme?.primary,
              "&.Mui-disabled": {
                bgcolor: currentTheme?.navbarBackground,
                color: currentTheme?.text,
              },
            }}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
const SignUpDialog: React.FC<SignUpDialogProps> = ({
  currentTheme,
  onAuth,
  setAuth,
}) => {
  const [step, setStep] = useState<"role" | "form">("role");

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
      {step === "role" ? (
        <ChooseRole
          currentTheme={currentTheme}
          goNext={() => setStep("form")}
          onAuth={onAuth}
          setAuth={setAuth}
        />
      ) : (
        <SignUpForm
          currentTheme={currentTheme}
          onAuth={onAuth}
          setAuth={setAuth}
        />
      )}

      <Box sx={{ width: "100%", textAlign: "center", pt:2}}>
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

export default SignUpDialog;
