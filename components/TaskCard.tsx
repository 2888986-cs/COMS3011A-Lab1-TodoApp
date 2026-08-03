"use client";

type Task = {
    id: number;
    title: string;
    description: string;
    topic: string;
    dueDate: string;
    status: string;
};

export default function TaskCard({
    task,
    onArchived,
}: {
    task: Task;
    onArchived: () => void;
}) {
    async function archiveTask() {
        const response = await fetch(`/api/tasks/${task.id}`, {
            method: "PATCH",
        });

        if (response.ok) {
            onArchived();
        } else {
            alert("Failed to archive task.");
        }
    }

    return (
        <div className="rounded-lg border p-4 shadow">
            <h2 className="text-xl font-bold">{task.title}</h2>

            <p>{task.description}</p>

            <p>📚 {task.topic}</p>

            <p>📅 {new Date(task.dueDate).toLocaleDateString()}</p>

            <p>✅ {task.status}</p>

        <div className="mt-4 flex gap-2">
            <button className="rounded bg-yellow-500 px-4 py-2 text-white">
            Edit
            </button>

            <button
                onClick={archiveTask}
                className="rounded bg-red-600 px-4 py-2 text-white"
            >
            Archive
            </button>
        </div>
        </div>
    );
}
