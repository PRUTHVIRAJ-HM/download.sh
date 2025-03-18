"use client";
import React from 'react'
import Link from 'next/link'
import bgradient from '@/assets/bgradient.png'
import Image from 'next/image'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Agreement from "@/components/Agreement";

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <div className='relative h-[700px] w-full'>
      {/* Background Image */}
      <Image 
        src={bgradient} 
        alt='background' 
        fill 
        className="object-cover"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full items-center justify-center p-4 text-center">
        <h1 className="text-7xl font-bold text-black">Take Control of <br/> Your Downloads</h1>
        <p className="font-medium text-xl mt-6">Schedule files effortlessly and download them at the perfect time.<br/> Stay organized, save bandwidth, and automate your downloads with ease.</p>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="bg-black text-white font-light mt-6 py-2 px-4 text-xl rounded-full cursor-pointer hover:bg-gray-800 transition-colors"
        >
          Get Started
        </button>
        <p className='mt-4 text-lg underline'>Version 1.2 beta</p>
      </div>

      {/* Dark Overlay when modal is open */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-20" 
          onClick={() => setIsModalOpen(false)}
        />
      )}

      {/* Modal */}
      <div className={`z-30 ${isModalOpen ? 'relative' : 'hidden'}`}>
        <Agreement
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => router.push("/utility")}
        />
      </div>
    </div>
  );
}

export default Body