import React from 'react';
import { useState } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import theme from './theme';

function App() {
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = darkMode
      ? theme.light.background
      : theme.dark.background;
  };

  return (
    <div className="App">
      <>
        <LandingPage onOpenAuth={() => setIsAuthOpen(true)} darkMode={darkMode} onToggle={handleToggle} />
      </>
    </div>
  );
}

export default App;
