'use client'

import { useState } from 'react'
import { TriangleAlert, Users, Menu } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-[76px] bg-gradient-to-r from-black to-zinc-900 px-6 py-4 flex justify-between items-center shadow-lg border-b border-white/15 text-white">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6">
          <svg
            width="21"
            height="26"
            viewBox="0 0 21 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M5.29392 10.075V22.75L8.30761 26L8.47052 15.7354L10.1538 16.7917L11.9186 15.7354V26L15.0137 22.75V10.075L10.1538 13.1354L5.29392 10.075Z"
              fill="white"
            />
            <path
              d="M0 3.8147e-06V17.0354L3.39379 20.6916V6.44583L10.0998 10.6709L16.9688 6.44583V20.6916L20.3897 17.0354V3.8147e-06L10.0998 6.44583L0 3.8147e-06Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="text-[16px] font-extrabold font-[Plus_Jakarta_Sans]">MANDLACK</span>
      </div>

      {/* Mobile: Hamburger Icon */}
      <div className="md:hidden">
        <Menu className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* Desktop Tabs */}
      <ul className="hidden md:flex gap-6 text-sm font-medium ml-10">
        <li className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
          <Image src="/Dicon.png" alt="Dashboard Icon" width={12} height={12} className="object-contain" />
          Dashboard
        </li>
        <li className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
          <Image src="/cam.png" alt="Cameras Icon" width={16} height={16} className="object-contain" />
          Cameras
        </li>
        <li className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
            {/* path kept same */}
            <path
              d="M7.52816 11.3333H8.86149L9.06149 10.3333..."
              fill="white"
            />
          </svg>
          Scenes
        </li>
        <li className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
          <TriangleAlert size={16} />
          Incidents
        </li>
        <li className="flex items-center gap-1 hover:text-yellow-400 cursor-pointer">
          <Users size={16} />
          Users
        </li>
      </ul>

      {/* Profile Info */}
      <div className="flex items-center gap-2">
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-8 h-8 rounded-full border-2"
        />
        <div className="text-right text-xs hidden sm:block">
          <p className="font-semibold">Mohammed Aljhas</p>
          <p className="text-gray-400">ajhas@mandlack.com</p>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black border-t border-white/10 md:hidden">
          <ul className="flex flex-col px-6 py-4 gap-3 text-sm font-medium">
            <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <Image src="/Dicon.png" alt="Dashboard Icon" width={12} height={12} />
              Dashboard
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <Image src="/cam.png" alt="Cameras Icon" width={16} height={16} />
              Cameras
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <span>📸</span>
              Scenes
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <TriangleAlert size={16} />
              Incidents
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <Users size={16} />
              Users
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
