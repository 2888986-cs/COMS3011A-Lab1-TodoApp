import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
    const archived =
    request.nextUrl.searchParams.get("archived") === "true";

    const sort =
    request.nextUrl.searchParams.get("sort") || "dueDate";

    const tasks = await prisma.task.findMany({
        where: {
            archived,
        },
        orderBy: {
            [sort]: "asc",
        },
    });

    return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const task = await prisma.task.create({
        data: {
            title: body.title,
            description: body.description,
            dueDate: new Date(body.dueDate),
            topic: body.topic,
            status: body.status ?? "TODO",
        },
    });

    return NextResponse.json(task, { status: 201 });
}