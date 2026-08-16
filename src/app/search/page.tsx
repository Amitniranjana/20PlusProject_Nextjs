"use client";

import { useMemo, useState } from "react";

const items = [
  "calculator",
  "camera",
  "comment",
  "screenrecorder",
  "volume",
  "webrtc",
  "livescreenshot",
  "multitenantform",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return items;

    return items.filter((item) => item.toLowerCase().includes(term));
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-900 p-8 text-white">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-6 text-3xl font-bold">Search</h1>

        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects..."
          className="mb-6 w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500"
        />

        <ul className="space-y-3">
          {filteredItems.map((item) => (
            <li key={item} className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>

        {!filteredItems.length && (
          <p className="mt-4 text-slate-400">No matching projects found.</p>
        )}
      </div>
    </main>
  );
}
