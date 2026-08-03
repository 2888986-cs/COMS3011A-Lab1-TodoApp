import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await request.json();

    const task = await prisma.task.update({
        where: {
            id: Number(id),
        },
        data: {
            title: body.title,
            description: body.description,
            topic: body.topic,
            dueDate: new Date(body.dueDate),
            status: body.status,
        },
    });

    return NextResponse.json(task);
}

export async function PATCH(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    const task = await prisma.task.update({
        where: {
            id: Number(id),
        },
        data: {
            archived: true,
        },
    });

    return NextResponse.json(task);
}