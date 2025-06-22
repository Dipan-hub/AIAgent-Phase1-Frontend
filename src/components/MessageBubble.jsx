export default function MessageBubble({ from, text }) {
  const isUser = from === 'user';
  return (
    <div className={`mb-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`p-3 rounded-lg text-white ${isUser ? 'bg-blue-500' : 'bg-gray-700'}`}>
        {text}
      </div>
    </div>
  );
}
