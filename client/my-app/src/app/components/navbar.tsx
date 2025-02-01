"use client";

import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg w-full fixed top-0 left-0 z-10 flex justify-between items-center">
      <div className="flex items-center">
        <span className="font-bold text-2xl text-white">HealthChat</span>
      </div>
      <ul className="flex gap-8 items-center">
        <li className="cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500">
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500">
          <Link href="/chatbot">Chatbot</Link>
        </li>
        <li className="cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500">
          <Link href="/tasks">Your Tasks</Link>
        </li>
        <li className="cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500">
          <Link href="/about">About</Link>
        </li>
        <li className="cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500">
          <FaUserCircle size={24} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;