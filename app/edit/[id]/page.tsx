import { prisma } from "@/lib/prisma";

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

            <form className="space-y-4">

            <input
                defaultValue={task.title}
                className="w-full rounded border p-2"
            />

            <textarea
                defaultValue={task.description}
                className="w-full rounded border p-2"
            />

            <input
                defaultValue={task.topic}
                className="w-full rounded border p-2"
            />

            <input
                type="date"
                defaultValue={task.dueDate.toISOString().split("T")[0]}
                className="w-full rounded border p-2"
            />

            <button
                className="rounded bg-blue-600 px-4 py-2 text-white"
            >
                Save Changes
            </button>

            </form>
        </div>
    );
}