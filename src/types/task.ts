export type Priority = "low" | "medium" | "high";
export type Status = "todo" | "in-progress" | "done";
import { Clipboard, RefreshCw, Check } from "lucide-react";

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

// export const STATUS_CONFIG: Record<
//   Status,
//   { label: string; icon: typeof Clipboard }
// > = {
//   todo: { label: "To Do", icon: Clipboard },
//   "in-progress": { label: "In Progress", icon: RefreshCw },
//   done: { label: "Done", icon: Check },
// };

export const PRIORITY_CONFIG: Record<Priority, { label: string }> = {
  low: { label: "Low" },
  medium: { label: "Medium" },
  high: { label: "High" },
};
