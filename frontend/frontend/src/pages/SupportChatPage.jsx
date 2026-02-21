import React, { useState } from "react";
import { Container, Input, Button } from "@nextui-org/react";
import { getAIResponse } from "../services/aiService";

export default function SupportChat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    const response = await getAIResponse(message);
    setChat([...chat, { user: message, bot: response }]);
    setMessage("");
  };

  return (
    <Container>
      <h2>AI Support Chat</h2>

      {chat.map((c, i) => (
        <div key={i}>
          <p><strong>You:</strong> {c.user}</p>
          <p><strong>AI:</strong> {c.bot}</p>
        </div>
      ))}

      <Input
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <Button onClick={sendMessage}>Send</Button>
    </Container>
  );
}