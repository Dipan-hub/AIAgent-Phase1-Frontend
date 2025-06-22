import MessageBubble from './MessageBubble';

export default function ChatWindow({ messages }) {
  return (
    <div className="flex-1 p-4 overflow-y-auto h-[80vh]">
      {messages.map((msg, i) => (
        <MessageBubble key={i} from={msg.from} text={msg.text} />
      ))}
    </div>
  );
}
