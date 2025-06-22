import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-2 border-t">
      <input
        type="text"
        className="flex-1 p-2 border rounded mr-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}
