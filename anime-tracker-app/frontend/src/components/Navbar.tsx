// src/components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()

  // Function to check if a link is the current active route
  const isActive = (path: string) => pathname === path ? 'text-green-300' : 'text-gray-300'

  let [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className={`hover:text-gray-400 ${isActive('/')}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/discover" className={`hover:text-gray-400 ${isActive('/anime')}`}>
            Discover
          </Link>
        </li>
        <li>
          <Link href="/trending" className={`hover:text-gray-400 ${isActive('/trending')}`}>
            Trending
          </Link>
        </li>
        {loggedIn &&
          <li onClick={() => {setLoggedIn(false)}}>
            <Link href="/profile" className={`hover:text-gray-400 ${isActive('/profile')}`}>
              Profile
            </Link>
          </li>
        }
        {!loggedIn &&
        <>
          <li onClick={() => {setLoggedIn(true)}}>
            <Link href="/auth/login" className={`hover:text-gray-400 ${isActive('/profile')}`}>
              Login
            </Link>
          </li>
          <li onClick={() => {setLoggedIn(true)}}>
            <Link href="/auth/signup" className={`hover:text-gray-400 ${isActive('/profile')}`}>
              Signup
            </Link>
          </li>
        </>
        }
      </ul>
    </nav>
  )
}

export default Navbar