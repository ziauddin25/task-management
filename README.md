🚀 Smart Task Management Board

A modern and responsive Kanban-style task management application built with React, Vite, Tailwind CSS, and shadcn/ui. Users can create, organize, manage, and track tasks through an intuitive drag-and-drop interface. All task data is stored locally using Local Storage, allowing tasks to persist between browser sessions without requiring a backend.

✨ Features

📋 Task Management

Create new tasks with:

Task Title

Task Description

Priority Category

Task Status <br>
🏷️ Task Categories

Each task can be assigned one of the following priority levels:

🔴 High
🟡 Medium
🟢 Low
📌 Task Status Columns

Tasks are organized into three workflow stages:

📝 To Do
🚧 In Progress
✅ Done
🖱️ Drag & Drop
Move tasks between columns using drag-and-drop.
Easily update task progress by dragging a task from one status column to another.
🗑️ Delete Tasks
Permanently remove tasks with a single click.
💾 Local Storage Persistence
Tasks are automatically saved in the browser's Local Storage.
Data remains available even after refreshing the page or reopening the browser.
🎨 Modern UI
Responsive Kanban board layout.
Clean and intuitive user experience.
Built with reusable UI components from shadcn/ui.
Styled using Tailwind CSS.
🛠️ Tech Stack
Technology	Purpose
React	Frontend Library
Vite	Development & Build Tool
TypeScript	Type Safety
Tailwind CSS	Styling
shadcn/ui	UI Components
Local Storage	Client-side Data Persistence
📂 Workflow
Creating a Task
Click the Add Task button.
A dialog/modal will open.
Enter:
Task Title
Task Description
Select:
Task Priority (High, Medium, Low)
Task Status (To Do, In Progress, Done)
Click Create Task.
The task will be added to the selected column.
Updating Task Status
Drag a task card and drop it into another status column.
The task status updates automatically.
Deleting a Task
Click the Delete button on any task card.
The task will be permanently removed from the board and Local Storage.
📸 Core Functionality

✅ Create Tasks
✅ Delete Tasks
✅ Drag & Drop Tasks
✅ Status Management
✅ Priority Categorization
✅ Local Storage Persistence
✅ Responsive UI

🎯 Project Goal

The goal of this project is to provide a simple yet effective task management experience using a Kanban board approach. It demonstrates state management, drag-and-drop interactions, reusable component architecture, and local data persistence in a modern React application.

🚀 Getting Started
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd smart-task-management

# Install dependencies
npm install

# Start development server
npm run dev
📄 License

This project is open-source and available for learning, personal projects, and portfolio purposes.

Built with ❤️ using React, Vite, Tailwind CSS, shadcn/ui, and Local Storage.