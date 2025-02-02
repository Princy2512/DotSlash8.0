"use client";

import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { FaMicrophone } from "react-icons/fa";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
const Chatbot = () => {
  const [messages, setMessages] = useState<{ text: string, sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: 'This is a bot response.', sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded shadow-lg w-full max-w-2xl mx-auto flex flex-col flex-grow">
      <div className="h-96 overflow-y-scroll mb-4 p-4 border border-gray-700 rounded flex-grow">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded ${message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-700'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-lg">
  <button className='p-3 bg-gray-900 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out'>
    <FaMicrophone />
  </button>
  <button className='p-3 bg-gray-900 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out ml-2'>
    <BsFillFileEarmarkPdfFill />
  </button>
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className="flex-grow p-3 mx-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Type your message..."
  />
  <button
    onClick={handleSendMessage}
    className="bg-blue-500 p-3 rounded text-white flex items-center justify-center hover:bg-blue-700 transition duration-300 ease-in-out"
  >
    <FaPaperPlane />
  </button>
</div>
    </div>
  );
};

export default Chatbot;