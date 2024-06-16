"use client"
import React, { useState } from 'react'
import { File, Notebook, PanelTopClose, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function SideNav({ closeSideBar }) {
  const menuList = [
    {
      id: 1,
      name: 'Dashboard',
      icon: PanelTopClose,
      path: '/welcome'
    },
    {
      id: 2,
      name: 'Files',
      icon: File,
      path: '/files'
    },
    {
      id: 3,
      name: 'Upload',
      icon: Upload,
      path: '/upload'
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='shadow-sm border-r h-full'>
      <div className='p-5 border-b'>
        <Link href={process.env.NEXT_PUBLIC_BASE_URL}>
          <Image src='/logo.gif' width={150} height={100} />
        </Link>
      </div>
      <div className='flex flex-col float-left'>
        {menuList.map((item, index) => (
          <Link href={item.path} key={index}>
            <button
              key={index}
              className={`flex gap-2 p-4 px-10
                hover:bg-gray-100 
                w-full text-gray-500
                ${activeIndex === index ? 'bg-blue-50 text-primary' : null}`}
              onClick={() => handleClick(index)} // Update activeIndex on click
            >
              <item.icon />
              <h2>{item.name}</h2>
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNav
