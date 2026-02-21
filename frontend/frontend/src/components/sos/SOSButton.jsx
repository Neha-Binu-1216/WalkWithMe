import React from "react";
import { Button } from "@nextui-org/react";

export default function SOSButton() {
  const handleSOS = () => {
    alert("SOS Emergency Alert Sent!");
  };

  return (
    <Button color="danger" size="lg" onClick={handleSOS} className="mt-4">
      Press for Emergency SOS
    </Button>
  );
}