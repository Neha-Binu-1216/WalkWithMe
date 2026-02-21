import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

export default function AlertFilterTabs() {
  return (
    <Tabs aria-label="Alert options">
      <Tab key="all" title="All Alerts" />
      <Tab key="urgent" title="Urgent" />
      <Tab key="warning" title="Warning" />
    </Tabs>
  );
}