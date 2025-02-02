import React from 'react';

interface ChatHistoryProps {
  messages: string[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  return (
    <div className="w-1/4 h-full bg-gray-200 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Chat History</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className="mb-2 p-2 bg-white rounded shadow">
            {message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;