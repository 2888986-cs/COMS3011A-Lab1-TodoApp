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

    async function loadTasks() {
        const response = await fetch("/api/tasks");
        const data = await response.json();
        setTasks(data);
    }

    useEffect(() => {
        loadTasks();
    }, []);

    if (tasks.length === 0) {
        return <p className="mt-8 text-gray-500">No tasks yet.</p>;
    }

    return (
        <div className="mt-8 space-y-4">
            {tasks.map((task) => (
                <TaskCard
                key={task.id}
                task={task}
                onArchived={loadTasks}
                />
            ))}
        </div>
    );
}