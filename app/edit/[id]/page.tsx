type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditPage({ params }: Props) {
    const { id } = await params;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">
                Edit Task {id}
            </h1>
        </div>
    );
}