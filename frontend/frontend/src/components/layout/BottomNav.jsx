import { useState } from "react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t">
      <div className="flex justify-around p-4">
        <a href="/">Home</a>
        <a href="/contacts">Contacts</a>
        <a href="/community">Community</a>
        <a href="/alerts">Alerts</a>
        <a href="/map">Map</a>
        <a href="/ai">AI Guard</a>
        <a href="/stats">Stats</a>
      </div>
    </nav>
  );
}