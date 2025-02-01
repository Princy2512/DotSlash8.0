import React from 'react';
import Navbar from '../components/navbar';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center px-4 text-white">
      
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg mb-4 text-center max-w-2xl">
        Welcome to <span className="font-semibold">HealthChat</span>! We are committed to providing the best health-related information and services.
      </p>
      <p className="text-lg mb-6 text-center max-w-2xl">
        Our mission is to connect individuals with reliable health resources, offering real-time consultations and advice from certified health professionals. Whether you're seeking guidance on common health concerns or need urgent medical help, we’re here to assist you.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Why Choose HealthChat?</h2>
      <ul className="text-lg space-y-2 text-gray-300">
        <li>✔ Certified medical professionals available 24/7</li>
        <li>✔ Instant messaging for quick consultations</li>
        <li>✔ Comprehensive health tips and wellness advice</li>
        <li>✔ Secure and confidential communication</li>
      </ul>
      <p className="text-lg mt-6 text-center max-w-2xl">
        Your health is our top priority. Thank you for choosing <span className="font-semibold">HealthChat</span> as your trusted health companion.
      </p>
    </div>
  );
}

export default AboutUs;
