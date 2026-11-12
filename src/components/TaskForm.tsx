import { X } from "lucide-react";
import ModernDateInput from "./ModernDateInput";
import { useState } from "react";
import CustomSelect from "./CustomSelect";

interface TaskFormProps {
    onClose: () => void;
}

const TaskForm = ({ onClose }: TaskFormProps) => {
    const [project, setProject] = useState("")
    const [status, setStatus] = useState("")
    const [priority, setPriority] = useState("")
    const [dueDate, setDueDate] = useState("")

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/20 p-4 animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg bg-surface border border-outline-variant rounded-2xl shadow-2xl p-6 text-on-surface">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-outline-variant">
                    <h2 className="text-lg font-semibold">Create New Task</h2>
                    <button
                        onClick={onClose}
                        className="text-on-surface-variant hover:text-on-surface p-1 rounded-lg transition-colors cursor-pointer"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form className="space-y-4 flex flex-col">
                    <label className="flex flex-col gap-1.5 text-on-surface text-xs font-medium">
                        Task Title
                        <input type="text"
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary"
                            placeholder="e.g. Audit Kubernetes cluster ingress rules" required />
                    </label>
                    <label className="flex flex-col gap-1.5 text-on-surface text-xs font-medium">
                        Description
                        <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary resize-none" rows={3} placeholder="Provide context, acceptance criteria and key dependencies..." required>
                        </textarea>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        <CustomSelect
                            label="Project"
                            value={project}
                            onChange={setProject}
                            options={["Core API v2", "Payment Gateway", "Web App"]}
                        />

                        <CustomSelect
                            label="Status"
                            value={status}
                            onChange={setStatus}
                            options={["To Do", "In Progress", "Completed"]}
                        />

                        <CustomSelect
                            label="Priority"
                            value={priority}
                            onChange={setPriority}
                            options={["High", "Medium", "Low"]}
                        />

                        <label className="flex flex-col gap-1.5 text-on-surface text-xs font-medium">
                            Due Date
                            <ModernDateInput value={dueDate} onChange={setDueDate} />
                        </label>
                    </div>
                    <div className="flex justify-end gap-2 border-t border-outline-variant pt-2">
                        <button className="border border-outline-variant px-4 py-2 rounded-lg text-xs hover:bg-card cursor-pointer transition-colors" onClick={onClose}>Cancel</button>
                        <button className="border border-outline-variant px-4 py-2 rounded-lg text-xs bg-primary text-on-primary font-medium duration-150 transition-all hover:opacity-90 active:scale-95 cursor-pointer">Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;