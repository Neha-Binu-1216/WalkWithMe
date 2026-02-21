import React from "react";
import SafetyStatus from "../components/ai/SafetyStatus";
import SpeechEmotionToggle from "../components/ai/SpeechEmotionToggle";
import MovementDetectionToggle from "../components/ai/MovementDetectionToggle";

export default function AIGuardPage() {
  return (
    <div className="container mx-auto px-4">
      <h2>AI Guard</h2>
      <SafetyStatus />
      <SpeechEmotionToggle />
      <MovementDetectionToggle />
    </div>
  );
}