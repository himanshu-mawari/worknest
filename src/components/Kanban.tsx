import { useOutletContext } from "react-router";
import { Plus, Calendar, Ellipsis } from "lucide-react";

interface TasksProps {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  dueDate: string;
  assignee: string;
}

interface OutletContetProps {
  tasks: TasksProps[];
}

const Kanban = () => {
  const { tasks } = useOutletContext<OutletContetProps>();
  const columns = ["To Do", "In Progress", "Completed"];

  return (
    <div className="grid grid-cols-3 gap-4 mx-auto h-full max-w-7xl min-w-4xl">
      {columns.map((column) => {
        const columnTasks = tasks.filter((task) => task.status === column);
        return (
          <section className="">
            <header className="flex items-center justify-between p-3 bg-[#151920]/60 border-b border-[#1F242D] rounded-xl">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex h-2 w-2 rounded-full ${column === "To Do" ? "bg-[#9299A5]" : column === "In Progress" ? "bg-primary" : "bg-status-low"}`}
                ></span>
                <h2 className="text-on-surface text-base leading-4 tracking-[-0.005em] font-semibold">
                  {column}
                </h2>
                <span
                  className={`border rounded-full text-[11px] bg-[#181D26] leading-3.5 tracking-[0.003em] font-medium px-2 py-0.5 inline-flex justify-center items-center ${column === "To Do" ? "text-[#9299A5] border-[#262C38]" : column === "In Progress" ? "text-primary border-primary/30" : "text-status-low border-status-low/30"}`}
                >
                  3
                </span>
              </div>
              <button className="text-outline hover:text-on-surface rounded p-1 transition-colors hover:bg-[#1F242D]">
                <Plus size={16} strokeWidth={2} />
              </button>
            </header>
            <ul
              className="flex flex-col flex-1 gap-3 overflow-y-auto p-3"
            >
              {columnTasks.map((task) => {
                return (
                  <li>
                    <article className="group cursor-pointer rounded-xl border border-[#1F242D] bg-[#151920] p-3.5 shadow-sm transition-all duration-150 hover:border-[#262C38]">
                      <div className="flex justify-between items-center">
                        <span className={`text-[11px] leading-3.5 tracking-[0.003em] font-medium  px-2.5 py-0.5 whitespace-nowrap inline-flex rounded border ${task.priority === "High" ? "text-[#FF6B6B] border-[#FF6B6B]/20 bg-[rgba(255,107,107,0.12)]" : task.priority === "Medium" ? "text-[#FFB84D]  border-[#FFB84D]/20 bg-[rgba(255,184,77,0.12)]" : "text-[#4CD9A4] border-[#4CD9A4]/20 bg-[rgba(76,217,164,0.12)] "}`}>{task.priority}</span>
                        <button className="text-outline hover:text-on-surface p-0.5 opacity-0 transition-opacity group-hover:opacity-100">
                          <Ellipsis size={14} strokeWidth={2} />
                        </button> </div>
                      <div className="flex flex-col mt-2">
                        <h3 className="text-[14px] tracking-normal text-on-surface group-hover:text-primary mb-1.5 leading-snug transition-colors">{task.title}</h3>
                        <p className="text-[13px] text-outline/80 mb-3 line-clamp-2">{task.description}</p>
                      </div>
                      <footer className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} strokeWidth={2} />
                          <span className="text-xs   leading-3.5 tracking-[-0.005em] ">{task.dueDate}</span>
                        </div>
                        <div className="text-on-secondary flex h-6 w-6 items-center justify-center rounded-full bg-[#2535b4] text-[10px] font-semibold
                        ">{task.assignee}</div>
                      </footer>
                    </article>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
};
export default Kanban;
