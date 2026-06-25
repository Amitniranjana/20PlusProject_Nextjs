import React from "react";


import Link from "next/link";

export default function Home() {
  const projects = ["calculator", "camera", "comment","search", "screenrecorder","volume"];
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-800">
        {
          projects.map((pjt, idx) => (
            <Link key={idx}
              className="bg-blue-800 m-1 p-2 rounded-xl text-zinc-950 flex  text-sm"
href={`/${pjt}`}
            >
              {pjt}

            </Link>


          ))
        }
      </h1>
    </div>
  );
}