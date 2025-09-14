import React from 'react';
import { useState } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';

function App() {
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);
  return (
    <div className="App">
      <>
        <LandingPage onOpenAuth={() => setIsAuthOpen(true)} />
      </>
    </div>
  );
}

export default App;
