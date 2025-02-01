"use client";

import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Chatbot from "./components/Chatbot";

export default function Home() {
  const [chatStarted, setChatStarted] = useState(false);

  const handleGetStartedClick = () => {
    setChatStarted(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/path/to/your/image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar />
      {!chatStarted && (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-extrabold mb-4 text-center">Welcome to HealthCare Chat</h1>
          <p className="text-2xl mb-8 text-center">Your health is our priority. Get personalized health advice now!</p>
          <button onClick={handleGetStartedClick} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">Get Started</button>
        </div>
      )}
      {chatStarted && (
        <main className="flex-grow flex flex-col items-center justify-center p-8 w-full">
          <div className="w-full max-w-3xl bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <Chatbot />
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
}