import React from "react"

const navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg w-full fixed top-0 left-0">
      <div className="flex justify-between items-center px-8">
        <span className='font-bold text-2xl text-white'>iTask</span>
        <ul className="flex gap-8">
          <li className='cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500'>Home</li>
          <li className='cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500'>Your Tasks</li>
          <li className='cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500'>About</li>
          <li className='cursor-pointer hover:font-bold transition-all text-gray-300 hover:text-yellow-500'>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default navbar