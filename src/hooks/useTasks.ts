import { useState, useEffect, useCallback } from "react";
import { Task, Status, Priority } from "@/types/task";

const STORAGE_KEY = "taskflow-tasks";

const loadTasks = (): Task[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : getDefaultTasks();
  } catch {
    return getDefaultTasks();
  }
};

const getDefaultTasks = (): Task[] => [
  {
    id: "1",
    title: "Design system setup",
    description: "Define colors, typography, and spacing tokens",
    priority: "high",
    status: "done",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Build kanban board",
    description: "Create draggable columns and task cards",
    priority: "high",
    status: "in-progress",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Add task filtering",
    description: "Filter tasks by priority and search query",
    priority: "medium",
    status: "todo",
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Write documentation",
    description: "Document component APIs and usage patterns",
    priority: "low",
    status: "todo",
    createdAt: new Date().toISOString(),
  },
];

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks);
  const [filterPriority, setFilterPriority] = useState<Priority | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((task: Omit<Task, "id" | "createdAt">) => {
    const newTask: Task = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, newTask]);
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const moveTask = useCallback((taskId: string, newStatus: Status) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchesPriority =
      filterPriority === "all" || task.priority === filterPriority;
    const matchesSearch =
      searchQuery === "" ||
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPriority && matchesSearch;
  });

  const getTasksByStatus = useCallback(
    (status: Status) => filteredTasks.filter((t) => t.status === status),
    [filteredTasks]
  );

  return {
    tasks: filteredTasks,
    allTasks: tasks,
    addTask,
    updateTask,
    deleteTask,
    moveTask,
    getTasksByStatus,
    filterPriority,
    setFilterPriority,
    searchQuery,
    setSearchQuery,
  };
}
