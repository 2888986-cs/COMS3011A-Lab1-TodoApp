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
};

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        async function loadTasks() {
            const response = await fetch("/api/tasks");
            const data = await response.json();
            setTasks(data);
        }

        loadTasks();
    }, []);

    return (
        <div className="mt-8 space-y-4">
            {tasks.length === 0 ? (
                <p>No tasks yet.</p>
            ) : (
            tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))
        )}
        </div>
    );
}