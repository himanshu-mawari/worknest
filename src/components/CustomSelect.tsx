import { ChevronDown } from "lucide-react";

interface CustomSelectProps {
  label?: string; // Made optional with '?'
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const CustomSelect = ({ label, value, onChange, options }: CustomSelectProps) => {
  return (
    <div className={label ? "flex flex-col gap-1.5 text-on-surface text-xs font-medium" : "flex items-center"}>
      {label && <>{label}</>}
      
      <div className="relative flex items-center w-full">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={!label ? "Filter projects" : undefined}
          className={`w-full bg-surface-container-lowest border border-outline-variant px-3 py-2 pr-10 text-[13px] leading-4 tracking-[0.02em] rounded-lg focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer ${!label ? "text-on-surface-variant hover:text-on-surface" : "text-on-surface"}`}
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