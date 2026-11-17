import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
  label?: string; 
  value: string;
  onChange: (value: string) => void;
  options: string[];
  projectDetail?: boolean
}

const CustomSelect = ({ label, value, onChange, options, projectDetail }: CustomSelectProps) => {
  return (
    <div className={label ? "flex flex-col gap-1.5 text-on-surface text-xs font-medium" : "flex items-center"}>
      {label && <>{label}</>}
      
      <div className="relative flex items-center w-full">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={!label ? "Filter projects" : undefined}
          className={`${
            projectDetail ? 
            "h-7 px-3 flex items-center justify-between gap-2 text-[11px] leading-none font-medium text-on-surface whitespace-nowrap border border-[#1F242D] bg-[#101318] hover:border-[#262C38] rounded-md" : 
            "text-[13px] leading-4 tracking-[0.02em] border border-outline-variant bg-surface-container-lowest "
          }
             w-full px-3 py-2 pr-10 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer ${!label ? "text-on-surface-variant hover:text-on-surface" : "text-on-surface"}`}
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-surface text-on-surface ">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown size={18} className="absolute right-3 text-on-surface-variant pointer-events-none opacity-70" />
      </div>
    </div>
  );
};

export default CustomSelect