import React from 'react'
export const Header = () => {
  return (
    <header class="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-lg "> <div class="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 ">
    <h1 class="text-2xl font-bold">My Portfolio</h1>
    <nav>
      <ul class="flex space-x-6">
        <li><a href="#hero" class="hover:text-blue-500">Home</a></li>
        <li><a href="#about" class="hover:text-blue-500">About</a></li>
        <li><a href="#projects" class="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" class="hover:text-blue-500">Contact</a></li>
        <button class="bg-yellow-600 rounded-2xl p-[0.5vw] hover:text-blue-500">Resume ▶</button>
      </ul>
    </nav>
  </div>
</header>
  )
}

