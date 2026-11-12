import { ChevronDown } from "lucide-react";

interface CustomSelectProps  {
 label: string ,
 value: string,
 onChange:  React.Dispatch<React.SetStateAction<string>>,
 options: string[]
}

 const CustomSelect = ({label, value , onChange, options} : CustomSelectProps ) => {
  return (
    <label className="flex flex-col gap-1.5 text-on-surface text-xs font-medium">
      {label}
      <div className="relative flex items-center w-full">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-surface-container-lowest border border-outline-variant px-3 py-2 pr-10 text-on-surface text-[13px] leading-4 tracking-[0.02em] rounded-lg focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-surface text-on-surface">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown size={18} className="absolute right-3 text-on-surface-variant pointer-events-none opacity-70" />
      </div>
    </label>
  );
};

export default CustomSelect;