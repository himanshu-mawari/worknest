import { SquareText, CircleEllipsis, CircleCheck, AlertCircle, CheckCheck, Clock, TriangleExclamationPoint, MoveUp } from "lucide-react";

export const dashboardMetrics = [
  {
    title: "Total Tasks",
    value: "42",
    trendSign: MoveUp,
    trend: "+4 this week",
    trendType: "primary",
    iconName: SquareText,
  },
  {
    title: "In Progress",
    value: "18",
    trendSign: Clock,
    trend: "On schedule",
    trendType: "neutral",
    iconName: CircleEllipsis,
  },
  {
    title: "Completed",
    value: "21",
    trendSign: CheckCheck,
    trend: "91% completion rate",
    trendType: "status-low",
    iconName: CircleCheck,
  },
  {
    title: "Overdue / Attention",
    value: "3",
    trendSign: TriangleExclamationPoint,
    trend: "Action required",
    trendType: "status-high",
    iconName: AlertCircle,
  },
];

export const trendColorMap: Record<string, string> = {
  primary: "text-primary",
  neutral: "text-muted",
  "status-low": "text-status-low",
  "status-high": "text-status-high",
};