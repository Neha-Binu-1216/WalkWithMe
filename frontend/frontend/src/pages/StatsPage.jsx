import React from "react";
import StatsCard from "../components/stats/StatsCard";
import WeeklyActivityChart from "../components/stats/WeeklyActivityChart";

export default function StatsPage() {
  return (
    <div className="container mx-auto px-4">
      <h2>Safety Statistics</h2>
      <StatsCard />
      <WeeklyActivityChart />
    </div>
  );
}