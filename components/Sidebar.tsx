"use client";

import { useState } from "react";
import ArchivedTaskList from "./ArchivedTaskList";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
        {/* Hamburger Button */}
        <button
            onClick={() => setOpen(true)}
            className="fixed top-4 left-4 rounded bg-gray-800 px-3 py-2 text-white"
        >
            ☰
        </button>

        {/* Dark background */}
        {open && (
            <div
                className="fixed inset-0 bg-black/40"
                onClick={() => setOpen(false)}
            />
        )}

      {/* Sidebar */}
        <div
            className={`fixed top-0 left-0 flex h-full w-80 flex-col bg-white shadow-lg transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
        }`}
        >
        <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-xl font-bold">Archived Tasks</h2>

        <button
            onClick={() => setOpen(false)}
            className="text-2xl"
        >
            ✕
        </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
            <ArchivedTaskList />
        </div>
</div>
        </>
    );
}