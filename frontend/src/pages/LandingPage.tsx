import React from 'react'
import LandingPageNavbar from '../components/LandingPageNavbar'

interface LandingPageProps {
  onOpenAuth: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onOpenAuth }) =>{
  return (
    <div> <LandingPageNavbar onOpenAuth={onOpenAuth} /></div>
  )
}

export default LandingPage