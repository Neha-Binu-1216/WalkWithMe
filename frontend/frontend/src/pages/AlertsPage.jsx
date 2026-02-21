import React, { useEffect, useState } from "react";
import NotificationCard from "../components/alerts/NotificationCard";
import AlertFilterTabs from "../components/alerts/AlertFilterTabs";
import { getNotifications } from "../services/alertService";

export default function AlertsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getNotifications();
      setNotifications(data || []);
    }
    load();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2>Alerts</h2>
      <AlertFilterTabs />
      {notifications.map((n) => (
        <NotificationCard key={n.id} notification={n} />
      ))}
    </div>
  );
}