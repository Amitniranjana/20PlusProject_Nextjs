'use client'

import React, { useRef } from "react";

const LiveScreenshot = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startRec = async (_event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Unable to access camera');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen '>LiveScreenshot
      <div className="h-3/4 flex w-auto flex-col justify-center items bg-center ">
        <video autoPlay ref={videoRef} className="bg-slate-50 h-1/2 w1/2 "></video>
        <button
          className='bg-gradient-to-r from-green-800 to-blue-700 rounded-full px-8 py-3 font-semibold transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-700 active:translate-y-0 focus:ring-4 m-3 '
          onClick={startRec}
        >
          start
        </button>
      </div>
    </div>
  )
}

export default LiveScreenshot