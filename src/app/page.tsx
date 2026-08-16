"use client";

import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    name: "calculator",
    path: "/calculator",
    description: "A simple calculator for performing quick arithmetic and tracking recent results.",
  },
  {
    name: "camera",
    path: "/camera",
    description: "Access the device camera and display a real-time webcam feed directly in the browser.",
  },
  {
    name: "comment",
    path: "/comment",
    description: "A comment interface for creating and managing user feedback and discussions.",
  },
  {
    name: "search",
    path: "/search",
    description: "A searchable project list that filters items as you type to find a specific tool quickly.",
  },
  {
    name: "screenrecorder",
    path: "/screenrecorder",
    description: "Record screen activity and manage media capture for demos and tutorials.",
  },
  {
    name: "volume",
    path: "/volume",
    description: "Control and visualize audio volume levels with a lightweight interactive UI.",
  },
  {
    name: "livescreenshot",
    path: "/livescreenshot",
    description: "Open the live camera stream and capture a real-time screenshot from the running video feed.",
  },
  {
    name: "multitenantform",
    path: "/multitenantform",
    description: "A step-by-step multi-section form that lets users move through profile, interests, and settings tabs.",
  },
  {
    name: "webrtc",
    path: "/webrtc",
    description: "A WebRTC demo for starting a local camera stream and establishing a peer-to-peer call flow.",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-400">Projects</p>
          <h1 className="text-4xl font-bold text-white">20Plus Project Collection</h1>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const isActive = selectedProject.name === project.name;

              return (
                <Link
                  key={project.name}
                  href={project.path}
                  onMouseEnter={() => setSelectedProject(project)}
                  onFocus={() => setSelectedProject(project)}
                  className={`rounded-2xl border p-4 text-left transition-all duration-200 ${
                    isActive
                      ? "border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                      : "border-slate-700 bg-slate-900 hover:border-slate-500 hover:bg-slate-800"
                  }`}
                >
                  <div className="mb-2 text-lg font-semibold capitalize text-white">{project.name}</div>
                  <div className="text-sm text-slate-300">Open project</div>
                </Link>
              );
            })}
          </div>

          <aside className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-xl shadow-slate-950/30">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-400">Selected project</p>
            <h2 className="mb-4 text-2xl font-bold capitalize text-white">{selectedProject.name}</h2>
            <p className="mb-6 text-sm leading-7 text-slate-300">{selectedProject.description}</p>

            <Link
              href={selectedProject.path}
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400"
            >
              Go to {selectedProject.name}
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}