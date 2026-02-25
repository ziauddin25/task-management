import { Status } from "@/types/task";
import { KanbanColumn } from "./KanbanColumn";
import { useTasks } from "@/hooks/useTasks";
import { TaskFilters } from "./TaskFilters";
import { AddTaskDialog } from "./AddTaskDialog";
import { LayoutGrid } from "lucide-react";

const COLUMNS: Status[] = ["todo", "in-progress", "done"];

export function KanbanBoard() {
  const {
    allTasks,
    addTask,
    deleteTask,
    moveTask,
    getTasksByStatus,
    filterPriority,
    setFilterPriority,
    searchQuery,
    setSearchQuery,
  } = useTasks();

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          {/* <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <LayoutGrid className="h-4 w-4 text-primary-foreground" />
          </div> */}
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            Task Management 
          </h1>
        </div>
        <p className="text-sm text-muted-foreground ml-11">
          {allTasks.length} task{allTasks.length !== 1 ? "s" : ""} total
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <TaskFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterPriority={filterPriority}
          onFilterChange={setFilterPriority}
        />
        <AddTaskDialog onAdd={addTask} />
      </div>

      {/* Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {COLUMNS.map((status) => (
          <KanbanColumn
            key={status}
            status={status}
            tasks={getTasksByStatus(status)}
            onDelete={deleteTask}
            onDrop={moveTask}
            onDragStart={handleDragStart}
          />
        ))}
      </div>
    </div>
  );
}
