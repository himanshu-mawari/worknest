import { Sparkles, ArrowLeft } from 'lucide-react';
import type { LucideIcon } from "lucide-react"
import { useNavigate } from 'react-router';


interface FeaturePlaceholderProps {
    title: string;
    description: string;
    icon: LucideIcon;
    badgeText?: string;
}

const FeaturePlaceholder = ({
    title,
    description,
    icon: Icon,
    badgeText = 'In Roadmap',
}: FeaturePlaceholderProps) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-[420px] w-full rounded-xl border border-dashed border-border bg-card/40 p-8 text-center animate-in fade-in duration-300">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-5">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span>{badgeText}</span>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 mb-4">
                <Icon className="h-7 w-7" />
            </div>

            <h3 className="text-lg font-semibold tracking-tight text-foreground mb-2">
                {title}
            </h3>
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed mb-6">
                {description}
            </p>
            <button
                onClick={() => navigate("/projects/1")}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-[0.98]"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Active View
            </button>

        </div>
    );
};

export default FeaturePlaceholder;