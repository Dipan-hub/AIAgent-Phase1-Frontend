import { useState } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const sendPrompt = async () => {
    const res = await fetch('http://localhost:3001/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} className="w-full p-2 border" rows={4}/>
      <button onClick={sendPrompt} className="bg-blue-600 text-white px-4 py-2 mt-2">Send</button>
      <p className="mt-4 bg-gray-100 p-2">{response}</p>
    </div>
  );
}

export default App;
