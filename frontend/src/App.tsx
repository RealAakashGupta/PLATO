import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import theme from './theme';
import SignInDialog from "./components/SignInDialog";
import { Toaster } from 'react-hot-toast';
import AppRouter from './utils/AppRouter';
import {useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [role, setRole] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setDarkMode(savedTheme === 'true');
      document.body.style.backgroundColor =
        savedTheme === 'true' ? theme.dark.background : theme.light.background;
    }
  }, []);

  const handleToggle = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', String(newMode));
      document.body.style.backgroundColor = newMode
        ? theme.dark.background
        : theme.light.background;
      return newMode;
    });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AppRouter
        role={role}
        isAuthenticated={isAuthenticated}
        onRoleSelect={setRole}
        onOpenAuth={() => setIsAuthOpen(true)}
        darkMode={darkMode}
        onToggle={handleToggle}
      />

      {/* Sign In Dialog */}
      <SignInDialog
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuth={authMode}
        setAuth={setAuthMode}
        darkMode={darkMode}
        onSuccess={(user) => {
          setIsAuthOpen(true);
          setUsername(user.username);
          setIsAuthenticated(true);
          setIsAuthOpen(false);
          setRole(user.role);
          console.log(user.role, user.username);
          navigate(`/${user.role}/${user.username}`);
        }}
      />
    </>
  );
}

export default App;
