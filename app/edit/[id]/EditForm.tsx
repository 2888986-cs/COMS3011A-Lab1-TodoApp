"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Task = {
    id: number;
    title: string;
    description: string;
    topic: string;
    dueDate: string;
    status: string;
};

export default function EditForm({ task }: { task: Task }) {
    const router = useRouter();

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [topic, setTopic] = useState(task.topic);
    const [dueDate, setDueDate] = useState(task.dueDate);
    const [status, setStatus] = useState(task.status);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

    const response = await fetch(`/api/tasks/${task.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            description,
            topic,
            dueDate,
            status,
        }),
    });

    if (response.ok) {
        router.push("/");
        router.refresh();
    } else {
        alert("Failed to update task.");
    }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded border p-2"
            />

        <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded border p-2"
        />

        <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full rounded border p-2"
        />

        <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full rounded border p-2"
        />

        <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded border p-2"
        >
            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">IN PROGRESS</option>
            <option value="COMPLETE">COMPLETE</option>
        </select>

        <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white"
        >
            Save Changes
        </button>
        </form>
    );
}