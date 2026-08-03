import { describe, expect, test } from "vitest";

type Task = {
    title: string;
    description: string;
    topic: string;
    dueDate: Date;
    status: "TODO" | "IN_PROGRESS" | "COMPLETE";
    archived: boolean;
};

describe("Todo Task Tests", () => {
    test("creates a task with all required fields", () => {
        const task: Task = {
            title: "Software Design Lab",
            description: "Finish Lab 1",
            topic: "Software Design",
            dueDate: new Date("2026-08-10"),
            status: "TODO",
            archived: false,
        };

        expect(task.title).toBe("Software Design Lab");
        expect(task.status).toBe("TODO");
        expect(task.archived).toBe(false);
    });

    test("archives a task", () => {
        const task: Task = {
            title: "AAA",
            description: "Study",
            topic: "Algorithms",
            dueDate: new Date(),
            status: "TODO",
            archived: false,
        };

        task.archived = true;

        expect(task.archived).toBe(true);
    });

    test("detects overdue tasks correctly", () => {
        const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

        const task: Task = {
            title: "OS",
            description: "Assignment",
            topic: "Operating Systems",
            dueDate: yesterday,
            status: "TODO",
            archived: false,
        };

        const overdue =
            task.dueDate < new Date() &&
            task.status !== "COMPLETE";

        expect(overdue).toBe(true);
    });
});