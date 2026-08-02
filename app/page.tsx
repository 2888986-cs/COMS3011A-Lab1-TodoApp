import TaskForm from "@/components/TaskForm";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-10">
      <h1 className="mb-8 text-4xl font-bold">
        Todo Application
      </h1>

      <TaskForm />
    </main>
  );
}