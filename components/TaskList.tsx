import TaskCard from "./TaskCard";
import { prisma } from "@/lib/prisma";

export default async function TaskList() {
    const tasks = await prisma.task.findMany({
        where: {
            archived: false,
        },
        orderBy: {
            dueDate: "asc",
        },
    });

    if (tasks.length === 0) {
        return (
            <p className="mt-8 text-gray-500">
                No tasks yet.
            </p>
        );
    }

    return (
        <div className="mt-8 space-y-4">
        {tasks.map((task) => (
            <TaskCard key={task.id} task={{ ...task, dueDate: task.dueDate.toISOString() }} />
        ))}
        </div>
    );
}