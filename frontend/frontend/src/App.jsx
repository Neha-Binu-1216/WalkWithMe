import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import BottomNav from "./components/layout/BottomNav";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <BottomNav />
    </div>
  );
}

export default App;