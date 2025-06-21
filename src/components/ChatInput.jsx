import { useState } from 'react';

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <div className="border-t px-4 py-2 flex items-center">
      <textarea
        className="flex-1 resize-none border rounded p-2 mr-2"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={1}
        onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
      />
      <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-1 rounded">Send</button>
    </div>
  );
}
