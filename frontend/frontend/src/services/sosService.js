import { supabase } from "./supabaseClient";

export async function triggerSOS() {
  const { data, error } = await supabase
    .from("sos_alerts")
    .insert([
      {
        latitude: 12.9716,
        longitude: 77.5946,
        status: "active"
      }
    ]);

  if (error) {
    console.error("SOS Error:", error.message);
    alert("Failed to send SOS");
  } else {
    alert("🚨 SOS Sent Successfully!");
  }
}