import React, { useEffect, useState } from "react";
import CommunityStats from "../components/community/CommunityStats";
import AlertCard from "../components/community/AlertCard";
import NearbyMembers from "../components/community/NearbyMembers";
import { getCommunityAlerts } from "../services/communityService";

export default function CommunityPage() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getCommunityAlerts();
      setAlerts(data || []);
    }
    load();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2>Community Safe Zone</h2>
      <CommunityStats />
      {alerts.map((alert) => (
        <AlertCard key={alert.id} alert={alert} />
      ))}
      <NearbyMembers />
    </div>
  );
}