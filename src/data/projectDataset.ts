import { SquareKanban, List, ChartGantt } from "lucide-react";

export const mockProjects = [
    {
        id: "1",
        title: "Core API v2",
        description: "Next-gen high throughput REST & GraphQL APIs with automated caching and observability.",
        status: "Active",
        totalTasks: 28,
        toDo: 12,
        inProgress: 9,
        done: 7,
        teamAvatars: ["JD", "RK", "JS", "HM"],
        extraMembersCount: 2,
        updatedAt: "Updated 2h ago",
        pinnedRepo: true
    },
    {
        id: "2",
        title: "Web Platform Redesign",
        description: "Unified dashboard experience with modular widget architecture and dark mode tokens.",
        status: "Active",
        totalTasks: 34,
        toDo: 10,
        inProgress: 16,
        done: 8,
        teamAvatars: ["AL", "SC", "MN"],
        updatedAt: "Updated 4h ago",
        pinnedRepo: true
    },
    {
        id: "3",
        title: "Design System & UI Kit",
        description: "Foundational token library, accessible component standards, and React primitives.",
        status: "Active",
        totalTasks: 19,
        toDo: 4,
        inProgress: 5,
        done: 10,
        teamAvatars: ["TL", "EV"],
        extraMembersCount: 1,
        updatedAt: "Updated yesterday",
        pinnedRepo: false
    },
    {
        id: "4",
        title: "Payment Gateway Integration",
        description: "Stripe customer portal upgrade, localized taxes, and automated tiered invoicing.",
        status: "Active",
        totalTasks: 15,
        toDo: 3,
        inProgress: 8,
        done: 4,
        teamAvatars: ["KF", "BV", "DH"],
        updatedAt: "Updated 2d ago",
        pinnedRepo: false
    },
    {
        id: "5",
        title: "Mobile App Companion",
        description: "Lightweight offline-first iOS and Android companion apps for notifications and rapid review.",
        status: "Planning",
        totalTasks: 22,
        toDo: 18,
        inProgress: 4,
        done: 0,
        teamAvatars: ["NF", "ST"],
        updatedAt: "Updated 3d ago",
        pinnedRepo: false
    },
    {
        id: "6",
        title: "Cloud Infrastructure & Telemetry",
        description: "Multi-region Kubernetes deployment, Prometheus monitoring, and log ingestion cluster.",
        status: "Active",
        totalTasks: 14,
        toDo: 2,
        inProgress: 4,
        done: 8,
        teamAvatars: ["GH", "WN", "KL"],
        updatedAt: "Updated 5d ago",
        pinnedRepo: true
    }
];
export const multiView = [
    {
        view: "Kanban board",
        url: ".",
        icon: SquareKanban
    },
    {
        view: "List",
        url: "list",
        icon: List
    },
    {
        view: "Timeline",
        url: "timeline",
        icon: ChartGantt
    }
];
export const projectTasks = [
    {
        id: "task-1",
        title: "Implement rate limiting on /auth endpoint",
        description: "Add Redis token bucket rate limiting to prevent brute force login attempts.",
        priority: "High",
        status: "To Do",
        dueDate: "Oct 29",
        assignee: "AV",
    },
    {
        id: "task-2",
        title: "Database schema migration script for v2.4",
        description: "Add indexing on workspace_members and audit_logs tables.",
        priority: "Medium",
        status: "To Do",
        dueDate: "Nov 02",
        assignee: "MB",
    },
    {
        id: "task-3",
        title: "Update Swagger OpenAPI 3.1 documentation",
        description: "Include response schemas for the new webhook endpoints.",
        priority: "Low",
        status: "To Do",
        dueDate: "Nov 05",
        assignee: "SC",
    },

    {
        id: "task-4",
        title: "Refactor authentication middleware",
        description: "Transition JWT validation to edge runtime worker layer.",
        priority: "High",
        status: "In Progress",
        dueDate: "Tomorrow",
        assignee: "AV",
    },
    {
        id: "task-5",
        title: "GraphQL query depth limit validator",
        description: "Enforce max depth of 8 levels to mitigate nested DOS vulnerabilities.",
        priority: "High",
        status: "In Progress",
        dueDate: "Oct 28",
        assignee: "SC",
    },
    {
        id: "task-6",
        title: "Webhook retry worker queue",
        description: "Implement exponential backoff retry worker with BullMQ.",
        priority: "Medium",
        status: "In Progress",
        dueDate: "Oct 30",
        assignee: "MB",
    },

    {
        id: "task-7",
        title: "Setup OpenTelemetry tracing exporter",
        description: "Export traces to Jaeger collector in Kubernetes cluster.",
        priority: "Medium",
        status: "Completed",
        dueDate: "Completed Oct 22",
        assignee: "AV",
        completed: true,
    },
    {
        id: "task-8",
        title: "Fix CORS preflight headers on API gateway",
        description: "Allow custom header X-Worknest-Tenant in preflight responses.",
        priority: "Low",
        status: "Completed",
        dueDate: "Completed Oct 21",
        assignee: "SC",
        completed: true,
    },
    {
        id: "task-9",
        title: "Docker base image security patch",
        description: "Bump Node.js alpine base image to latest LTS build.",
        priority: "High",
        status: "Completed",
        dueDate: "Completed Oct 20",
        assignee: "MB",
        completed: true,
    },
];