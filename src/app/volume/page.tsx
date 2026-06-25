'use client'
import React, { useRef, useState } from 'react'

const Volume = () => {
    const [calWidth, setCalWidth] = useState(0);
    const divRef = useRef<HTMLDivElement | null>(null);
    const handleMouseClick = ((e: React.MouseEvent) => {
        if (divRef.current) {
            const divRectangle = divRef.current.getBoundingClientRect();
            const divRecDistOrigin = divRectangle.left;
            const clickDistOrigin = e.clientX;
            const calWdth = clickDistOrigin - divRecDistOrigin;
            const totalRectWidth = divRectangle.width;
            const percentWidth = (calWdth * 100) / totalRectWidth;
            setCalWidth(percentWidth);

        }
    })


    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center'>Volume : {Math.round(calWidth,)}

            <div className='bg-blue-700 h-11 w-72 '
            onClick={handleMouseClick}
            ref={divRef}>
                <div className='bg-zinc-50 h-full trans'

                    style={{ width: `${calWidth}%` }}>

                </div>
            </div>
        </div>

    )
}

export default Volume