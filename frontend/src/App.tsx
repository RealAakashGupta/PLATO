import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import theme from './theme';
import SignInDialog from "./components/SignInDialog";
import { Toaster } from 'react-hot-toast';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

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
      <LandingPage
        onOpenAuth={() => setIsAuthOpen(true)}
        darkMode={darkMode}
        onToggle={handleToggle}
      />
      <SignInDialog
        isOpen={isAuthOpen}
        onClose={() => {
          setIsAuthOpen(false);
        }}
        setAuth={setAuthMode}
        onAuth={authMode}
        darkMode={darkMode}
      />
    </>
  );
}

export default App;
