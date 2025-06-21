import { useState } from 'react';

export default function InputBox({ onSend }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="flex items-center border-t pt-2">
      <textarea
        rows={1}
        className="flex-1 resize-none p-2 border rounded-lg mr-2"
        placeholder="Type your message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
      />
      <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Send
      </button>
    </div>
  );
}
