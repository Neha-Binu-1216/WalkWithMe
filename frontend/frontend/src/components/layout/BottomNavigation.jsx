import { Link } from "react-router-dom";

export default function BottomNavigation() {
  return (
    <div className="bottom-nav">
      <Link to="/">SOS</Link>
      <Link to="/map">Map</Link>
      <Link to="/ai">AI Guard</Link>
      <Link to="/stats">Stats</Link>
    </div>
  );
}