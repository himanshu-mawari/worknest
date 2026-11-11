import type { LucideIcon } from "lucide-react"
import { trendColorMap } from "../data/metricDataset"

type MetricCardProps = {
    data: {
        title: string;
        value: string;
        trendSign: LucideIcon,
        trend: string;
        trendType: string;
        iconName: LucideIcon;
    }
}

const MetricCard = ({ data }: MetricCardProps) => {
    const Icon = data.iconName;
    const Trend = data.trendSign
    const trendClass = trendColorMap[data.trendType] || "text-muted"
    return (
        <article className="flex flex-col border border-outline-variant bg-card p-4 gap-2.5 rounded-card transition-all duration-200 hover:border-primary hover:bg-surface-hover cursor-pointer group">
            <header className="flex justify-between items-center">
                <h2 className="text-xs text-on-surface-variant font-medium">{data.title}</h2>
                <Icon size={16} className="text-icon transition-colors group-hover:text-primary" />
            </header>
            <div className="flex flex-col gap-1.5">
                <span className={`${data.trend === "Action required" ? trendClass : ""} text-4xl text-on-surface font-medium leading-none`}>
                    {data.value}
                </span>
                <div className={`flex items-center gap-1.5 ${trendClass}`}>
                    <Trend size={13} />
                    <p className="text-xs font-medium">{data.trend}</p>
                </div>
            </div>
        </article>
    )
}
export default MetricCard