export type Priority = "low" | "medium" | "high";
export type Status = "todo" | "in-progress" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  createdAt: string;
}

export const STATUS_CONFIG: Record<Status, { label: string; emoji: string }> = {
  todo: { label: "To Do", emoji: "📋" },
  "in-progress": { label: "In Progress", emoji: "🔄" },
  done: { label: "Done", emoji: "✅" },
};

export const PRIORITY_CONFIG: Record<Priority, { label: string }> = {
  low: { label: "Low" },
  medium: { label: "Medium" },
  high: { label: "High" },
};
