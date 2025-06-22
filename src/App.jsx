import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import { sendPrompt } from './services/api';

function App() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hi! Ask me anything." }
  ]);

  const handleSend = async (text) => {
    const userMessage = { from: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    const reply = await sendPrompt(text);
    setMessages((prev) => [...prev, { from: "ai", text: reply }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md flex flex-col overflow-hidden">
        <ChatWindow messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;
