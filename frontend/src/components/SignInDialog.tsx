import { Box, Button, Dialog, Typography } from "@mui/material";
import React, { useState } from "react";
import { SignInData } from "../utils/SignIn";
import CloseIcon from "@mui/icons-material/Close";

interface SignInDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAuth: "signin" | "signup";
  setAuth: (auth: "signin" | "signup") => void;
}

const DialogTitle = (onAuth: "signin" | "signup") => {
  return (
    <Box>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {onAuth === "signin" ? (
          <Box>
            <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
              {/* < className="h-8 w-8 text-green-600" /> */}
              Welcome back!
            </Typography>
            <Typography variant="h6" component="h2">
              Sign in to continue fighting food waste
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
              {/* < className="h-8 w-8 text-green-600" /> */}
              Join the movement
            </Typography>
            <Typography variant="h6" component="h2">
              Help us create a world with zero food waste
            </Typography>
          </Box>
        )}
      </Typography>
    </Box>
  );
};

const DialogButton = (onAuth: "signin" | "signup") => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "100%", textAlign: "center" }}>
        {onAuth === "signin" ? "Sign In" : "Sign Up"}
      </Button>
    </Box>
  );
};

const SingUpChangeForm: React.FC<{
  onAuth: "signin" | "signup";
  setAuth: (auth: "signin" | "signup") => void;
}> = ({ onAuth, setAuth }) => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography>New to Plato?</Typography>
      <Button variant="text" onClick={() => setAuth("signup")}>
        Create an account
      </Button>
    </Box>
  );
};

const SingInChangeForm: React.FC<{
  onAuth: "signin" | "signup";
  setAuth: (auth: "signin" | "signup") => void;
}> = ({ onAuth, setAuth }) => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography>Already fighting food waste with us?</Typography>
      <Button variant="text" onClick={() => setAuth("signin")}>
        Sign in instead
      </Button>
    </Box>
  );
};

const SignInDialog: React.FC<SignInDialogProps> = ({
  isOpen,
  onClose,
  onAuth,
  setAuth,
}) => {
  const [formData, setFormData] = useState<SignInData>({
    email: "",
    password: "",
  });
  
  return (
    <Dialog open={isOpen} onChange={onClose}>
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
          }}
          onClick={onClose}>
          <CloseIcon />
        </Box>
        {DialogTitle(onAuth)}

        <Box sx={{ my: 2 }}>{DialogButton(onAuth)}</Box>
        <hr />
        <Box sx={{ my: 2 }}>
          {onAuth === "signin" ? (
            <SingUpChangeForm onAuth={onAuth} setAuth={setAuth} />
          ) : (
            <SingInChangeForm onAuth={onAuth} setAuth={setAuth} />
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default SignInDialog;
