import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import theme from './theme';

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
    <div className="App">
      <LandingPage
        onOpenAuth={() => setIsAuthOpen(true)}
        darkMode={darkMode}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;
