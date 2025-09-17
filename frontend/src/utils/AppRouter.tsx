import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import VolunteersDashboard from "../pages/VolunteersDashboard";
import NgosDashBoard from "../pages/NgosDashBoard";
import DonorsDashboard from "../pages/DonorsDashboard";
import { roleRoutes } from "./Routes";
import theme from "../theme";

interface ProtectedRouteProps {
  element: React.ReactElement;
  isAuthenticated: boolean;
  allowedRole?: string;
  currentRole: string | null;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  isAuthenticated,
  allowedRole,
  currentRole,
}) => {
  if (!isAuthenticated) return <Navigate to={roleRoutes.landing} replace />;

  if (allowedRole && currentRole !== allowedRole) {
    return <Navigate to={roleRoutes.landing} replace />;
  }

  return element;
};

const RoleBasedDashboard: React.FC<{
  isAuthenticated: boolean;
  currentRole: string | null;
  currentTheme: any;
  darkMode: boolean;
  onToggle: () => void;
}> = ({ isAuthenticated, currentRole, currentTheme, darkMode, onToggle }) => {
  const { role: urlRole, username } = useParams();

  if (!isAuthenticated) return <Navigate to={roleRoutes.landing} replace />;
  if (!urlRole || !username)
    return <Navigate to={roleRoutes.landing} replace />;

  if (currentRole && currentRole !== urlRole) {
    return <Navigate to={roleRoutes.landing} replace />;
  }

  switch (urlRole) {
    case "donor":
      return (
        <ProtectedRoute
          element={
            <DonorsDashboard
              username={username}
              currentTheme={currentTheme}
              darkMode={darkMode}
              onToggle={onToggle}
              urlRole={urlRole}
            />
          }
          isAuthenticated={isAuthenticated}
          allowedRole="donor"
          currentRole={currentRole}
        />
      );
    case "ngo":
      return (
        <ProtectedRoute
          element={
            <NgosDashBoard
              username={username}
              currentTheme={currentTheme}
              darkMode={darkMode}
              onToggle={onToggle}
              urlRole={urlRole}
            />
          }
          isAuthenticated={isAuthenticated}
          allowedRole="ngo"
          currentRole={currentRole}
        />
      );
    case "volunteer":
      return (
        <ProtectedRoute
          element={
            <VolunteersDashboard
              username={username}
              currentTheme={currentTheme}
              darkMode={darkMode}
              onToggle={onToggle}
              urlRole={urlRole}
            />
          }
          isAuthenticated={isAuthenticated}
          allowedRole="volunteer"
          currentRole={currentRole}
        />
      );
    default:
      return <Navigate to={roleRoutes.landing} replace />;
  }
};

export const AppRouter: React.FC<{
  role: string | null;
  isAuthenticated: boolean;
  onRoleSelect: (role: string) => void;
  onOpenAuth: () => void;
  darkMode: boolean;
  onToggle: () => void;
}> = ({
  role,
  isAuthenticated,
  onRoleSelect,
  onOpenAuth,
  darkMode,
  onToggle,
}) => {
  const currentTheme = darkMode ? theme.dark : theme.light;
  return (
    <Routes>
      {/* Landing page */}
      <Route
        path={roleRoutes.landing}
        element={
          <LandingPage
            onOpenAuth={onOpenAuth}
            darkMode={darkMode}
            onToggle={onToggle}
          />
        }
      />

      {/* Role-based dashboard */}
      <Route
        path="/:role/:username"
        element={
          <RoleBasedDashboard
            isAuthenticated={isAuthenticated}
            currentRole={role}
            currentTheme={currentTheme}
            darkMode={darkMode}
            onToggle={onToggle}
          />
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to={roleRoutes.landing} replace />} />
    </Routes>
  );
};

export default AppRouter;
