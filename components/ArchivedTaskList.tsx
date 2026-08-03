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

export default function ArchivedTaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);

    async function loadTasks() {
        const response = await fetch("/api/tasks?archived=true");
        const data = await response.json();
        setTasks(data);
    }

    useEffect(() => {
        loadTasks();
    }, []);

    if (tasks.length === 0) {
        return <p className="text-gray-500">No archived tasks.</p>;
    }

    return (
        <div className="space-y-4">
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