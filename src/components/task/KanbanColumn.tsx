import { useState } from "react";
import { Task, Status, STATUS_CONFIG } from "@/types/task";
import { TaskCard } from "./TaskCard";
import { cn } from "@/lib/utils";

interface KanbanColumnProps {
  status: Status;
  tasks: Task[];
  onDelete: (id: string) => void;
  onDrop: (taskId: string, status: Status) => void;
  onDragStart: (e: React.DragEvent, taskId: string) => void;
}

export function KanbanColumn({
  status,
  tasks,
  onDelete,
  onDrop,
  onDragStart,
}: KanbanColumnProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const config = STATUS_CONFIG[status];

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const taskId = e.dataTransfer.getData("taskId");
    if (taskId) onDrop(taskId, status);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "flex flex-col rounded-xl bg-column p-3 min-h-[300px] transition-all duration-200",
        isDragOver && "ring-2 ring-accent/50 bg-accent/5"
      )}
    >
      <div className="flex items-center gap-2 mb-3 px-1">
        <span className="text-base">{config.emoji}</span>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-column-header">
          {config.label}
        </h3>
        <span className="ml-auto text-xs font-medium text-muted-foreground bg-secondary rounded-full px-2 py-0.5">
          {tasks.length}
        </span>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onDragStart={onDragStart}
          />
        ))}
        {tasks.length === 0 && (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-xs text-muted-foreground/50">
              {isDragOver ? "Drop here" : "No tasks"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
