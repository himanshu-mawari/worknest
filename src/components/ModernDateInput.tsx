import React, { useState } from "react";
import { Calendar } from "lucide-react";

interface ModernDateInputProps {
    value?: string;
    onChange?: (value: string) => void;
}

const ModernDateInput = ({ value = "", onChange }: ModernDateInputProps) => {
    const [dateVal, setDateVal] = useState(value);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let raw = e.target.value.replace(/\D/g, "");

        if (raw.length > 8) raw = raw.slice(0, 8);

        let formatted = "";
        if (raw.length > 0) {
            formatted = raw.slice(0, 2); // Month / Day part 1
        }
        if (raw.length >= 3) {
            formatted += " / " + raw.slice(2, 4); // Day / Month part 2
        }
        if (raw.length >= 5) {
            formatted += " / " + raw.slice(4, 8); // Year
        }

        setDateVal(formatted);
        if (onChange) onChange(formatted);
    };

    return (
        <div className="flex flex-col gap-1.5 w-full">
            <div className="relative flex items-center w-full">
                <input
                    type="text"
                    placeholder="MM / DD / YYYY"
                    value={dateVal}
                    onChange={handleInputChange}
                    maxLength={14}
                    className="w-full py-2 pl-3 pr-10 text-sm bg-canvas border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary font-mono tracking-wider"
                />
                <Calendar size={18} className="absolute right-3 text-on-surface-variant pointer-events-none opacity-70" />
            </div>
        </div>
    );
};

export default ModernDateInput;