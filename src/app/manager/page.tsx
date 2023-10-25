'use client'

import { routers } from '@/routers'
import Link from 'next/link'
import React from 'react'

const Manager = () => {
  return (
    <div>
      <Link href='/'>Home</Link>
      <p>hello Manager</p>
      <nav>
        <ul>
          {routers.map((menu, idx) => (
            <li key={idx}>
              <Link href={menu.href}>
                <p className='menu-item bg-teal-400 p-4 text-black'>
                  {menu.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
export default Manager
