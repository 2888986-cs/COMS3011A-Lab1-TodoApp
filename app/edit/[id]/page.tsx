import { prisma } from "@/lib/prisma";
import EditForm from "./EditForm";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditPage({ params }: Props) {
    const { id } = await params;

    const task = await prisma.task.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!task) {
        return <h1>Task not found.</h1>;
    }

    return (
        <div className="mx-auto mt-10 max-w-xl">
            <h1 className="mb-6 text-3xl font-bold">Edit Task</h1>

            <EditForm
                task={{
                    id: task.id,
                    title: task.title,
                    description: task.description,
                    topic: task.topic,
                    dueDate: task.dueDate.toISOString().split("T")[0],
                    status: task.status,
                }}
            />
        </div>
    );
}