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
        dueDate: "Tomorrow",
        priority: "High",
        status: "In Progress",
        completed: false,
    },
    {
        id: 2,
        title: "Design system icon kit export",
        category: "Design System",
        dueDate: "Oct 28",
        priority: "Medium",
        status: "To Do",
        completed: false,
    },
    {
        id: 3,
        title: "Set up staging environment telemetry",
        category: "Cloud Platform",
        dueDate: "Nov 2",
        priority: "Low",
        status: "To Do",
        completed: false,
    },
    {
        id: 4,
        title: "Audit mobile navigation breakpoints",
        category: "Web App",
        dueDate: "Today",
        priority: "High",
        status: "In Progress",
        completed: false,
    },
    {
        id: 5,
        title: "Implement billing portal checkout",
        category: "Payment Gateway",
        dueDate: "Completed",
        priority: "Medium",
        status: "Completed",
        completed: true,
    },
];

export const taskFilter = ["All", "In Progress", "To Do", "Completed"]

export const getPriorityColor = (status: string) => {
    return status === "High" ? "text-status-high bg-status-high-bg" : status === "Medium" ? "text-status-medium bg-status-medium-bg" : "text-status-low bg-status-low-bg"
}

export const getStatusColor = (status: string) => {
    return status === "In Progress" ? "bg-primary" : status === "To Do" ? "bg-outline " : "bg-status-low"
}

export const getDueDateColor = (dueDate: string, status?: string) => { // Tomorrow 
    if (status === "Completed" || dueDate === "Completed") { // false || false
        return "text-on-surface-variant/60";
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let targetDate = new Date(dueDate); // Invalid date , After if-else it get 13-Nov-2026

    if (dueDate.toLowerCase() === "today") {
        targetDate = today;
    } else if (dueDate.toLowerCase() === "tomorrow") {
        targetDate = new Date(today);
        targetDate.setDate(today.getDate() + 1);
    }

    targetDate.setHours(0, 0, 0, 0); // 12:00am midnight

    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
        return "";
    } else if (diffDays === 0) {
        return "text-error";
    } else {
        return "text-primary";
    }
};


