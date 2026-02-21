import { useEffect, useState } from "react";

export default function useLocationTracker() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const watcher = navigator.geolocation.watchPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return location;
}