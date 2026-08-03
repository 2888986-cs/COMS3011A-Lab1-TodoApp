"use client";

import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

type Task = {
    id: number;
    title: string;
    description: string;
    topic: string;
    dueDate: string;
    status: string;
    archived: boolean;
};

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [sort, setSort] = useState("dueDate");

    async function loadTasks() {
        const response = await fetch(`/api/tasks?sort=${sort}`);
        const data = await response.json();
        setTasks(data);
    }

    useEffect(() => {
        loadTasks();
    }, [sort]);

    if (tasks.length === 0) {
        return <p className="mt-8 text-gray-500">No tasks yet.</p>;
    }

    return (
        <>
            <div className="mb-4">
                <label className="mr-2 font-semibold">
                    Sort by:
                </label>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="rounded border p-2"
                >
                    <option value="dueDate">Due Date</option>
                    <option value="topic">Topic</option>
                    <option value="status">Status</option>
                </select>
            </div>

            <div className="mt-8 space-y-4">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onArchived={loadTasks}
                    />
                ))}
            </div>
        </>
    );
}