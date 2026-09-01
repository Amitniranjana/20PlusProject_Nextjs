'use client'
import react from "react";
import {useState ,useRef} from 'react'
export default function Setting({data ,setData}) {
  const [len ,setLen]=useState(0);
  const divRef=useRef(null);
const handleProgressBar=(e)=>{
console.log("yes clicked")

const totalx=e.clientX;
const rect=divRef.current.getBoundingClientRect();
const divx=rect.x;
const divWidth=rect.width;

const percentage=(totalx-divx)*100/divWidth;
setLen(percentage);
setData((prev)=>({
  ...prev,setting:{...prev.setting,settingData:len}
}
))


}

  return (
    <div className='progress-container'>
      Setting
      <div ref={divRef} onClick={handleProgressBar} className="progress-bar">

      <div  className='width' style={{width:`${len}%` ,height:"" ,backgroundColor:"red"}}>

      </div>
      {len}
      </div>
    </div>
  );
}
