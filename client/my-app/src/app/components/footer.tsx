import React from "react"
import { FaLinkedin, FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 shadow-lg w-full fixed bottom-0 left-0">
      <div className="flex justify-between items-center px-8">
        <span className='text-gray-300'>© 2023 iTask. All rights reserved.</span>
        <ul className="flex gap-8">
          <li className='cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500'>Privacy Policy</li>
          <li className='cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500'>Terms of Service</li>
          <li className='cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500'>Contact Us</li>
        </ul>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-yellow-500 transition-all'>
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-yellow-500 transition-all'>
            <FaYoutube size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-yellow-500 transition-all'>
            <FaInstagram size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-yellow-500 transition-all'>
            <FaTwitter size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-gray-300 hover:text-yellow-500 transition-all'>
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer