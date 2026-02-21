import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContactsPage from "../pages/ContactsPage";
import SOSPage from "../pages/SOSPage";
import CommunityPage from "../pages/CommunityPage";
import AlertsPage from "../pages/AlertsPage";
import MapPage from "../pages/MapPage";
import AIGuardPage from "../pages/AIGuardPage";
import StatsPage from "../pages/StatsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SOSPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/ai" element={<AIGuardPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}