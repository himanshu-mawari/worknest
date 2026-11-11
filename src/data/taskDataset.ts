export interface TaskItem {
    id: number;
    title: string;
    category: string;
    dueDate: string;
    priority: "High" | "Medium" | "Low";
    status: "In Progress" | "To Do" | "Completed";
    completed: boolean;
}

export const recentTasks: TaskItem[] = [
    {
        id: 1,
        title: "Refactor authentication middleware",
        category: "Core API v2",
        dueDate: "Due: Tomorrow",
        priority: "High",
        status: "In Progress",
        completed: false,
    },
    {
        id: 2,
        title: "Design system icon kit export",
        category: "Design System",
        dueDate: "Due: Oct 28",
        priority: "Medium",
        status: "To Do",
        completed: false,
    },
    {
        id: 3,
        title: "Set up staging environment telemetry",
        category: "Cloud Platform",
        dueDate: "Due: Nov 2",
        priority: "Low",
        status: "To Do",
        completed: false,
    },
    {
        id: 4,
        title: "Audit mobile navigation breakpoints",
        category: "Web App",
        dueDate: "Due: Today",
        priority: "High",
        status: "In Progress",
        completed: false,
    },
    {
        id: 5,
        title: "Implement billing portal checkout",
        category: "Payment Gateway",
        dueDate: "Due: Completed",
        priority: "Medium",
        status: "Completed",
        completed: true,
    },
];

export const taskFilter = ["All", "In Progress", "To Do", "Completed"]

export const getStatusColor = (status: string) => {
    return status === "High" ? "text-status-high bg-status-high-bg" : status === "Medium" ? "text-status-medium bg-status-medium-bg" : "text-status-low bg-status-low-bg"
}