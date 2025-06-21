import { useState } from 'react';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ]);

  const sendMessage = async (text) => {
    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);

    const res = await fetch('http://localhost:3001/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: text }),
    });

    const data = await res.json();
    setMessages([...newMessages, { sender: 'bot', text: data.reply }]);
  };

  return (
    <div className="flex flex-col w-full max-w-2xl h-[80vh] border rounded-xl bg-white shadow-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <ChatInput onSend={sendMessage} />
    </div>
  );
}
