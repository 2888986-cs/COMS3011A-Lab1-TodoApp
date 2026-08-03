type Task = {
    id: number;
    title: string;
    description: string;
    topic: string;
    dueDate: string;
    status: string;
};

export default function TaskCard({ task }: { task: Task }) {
    return (
        <div className="rounded-lg border p-4 shadow">
        <h2 className="text-xl font-bold">{task.title}</h2>

        <p className="mt-2">{task.description}</p>

        <div className="mt-3 text-sm text-gray-600">
            <p>📚 {task.topic}</p>
            <p>📅 {new Date(task.dueDate).toLocaleDateString()}</p>
            <p>✅ {task.status}</p>
        </div>
        </div>
    );
}