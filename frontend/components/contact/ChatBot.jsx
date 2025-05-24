import React, { useState } from 'react';

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const send = () => {
    if (input.trim()) {
      setMessages([...messages, { from: 'user', text: input }]);
      setInput('');
    }
  };

  return (
    <div className="p-4 border rounded">
      <div className="h-40 overflow-y-auto mb-2 text-sm">
        {messages.map((m, i) => (
          <p key={i} className="text-gray-700">{m.text}</p>
        ))}
      </div>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={send} className="bg-blue-600 text-white px-3 py-1 rounded">
        Send
      </button>
    </div>
  );
}
