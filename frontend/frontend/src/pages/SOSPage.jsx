import React from "react";
import SOSButton from "../components/sos/SOSButton";
import EmergencyStatus from "../components/sos/EmergencyStatus";
import ShareLocation from "../components/sos/ShareLocation";

export default function SOSPage() {
  return (
    <div className="container mx-auto px-4">
      <h2>Emergency SOS</h2>
      <SOSButton />
      <EmergencyStatus />
      <ShareLocation />
    </div>
  );
}