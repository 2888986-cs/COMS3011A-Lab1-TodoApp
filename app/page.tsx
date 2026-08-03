import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import ArchivedTaskList from "@/components/ArchivedTaskList";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-10">
      <Sidebar />
      <h1 className="mb-8 text-4xl font-bold">
        Todo Application
      </h1>
      <TaskForm />

      <TaskList />
    </main>
  );
}