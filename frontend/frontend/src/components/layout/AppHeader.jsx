import AppRoutes from "./routes/AppRoutes";
import AppHeader from "./components/layout/AppHeader";
import BottomNavigation from "./components/layout/BottomNavigation";

export default function App() {
  return (
    <>
      <AppHeader />
      <AppRoutes />
      <BottomNavigation />
    </>
  );
}