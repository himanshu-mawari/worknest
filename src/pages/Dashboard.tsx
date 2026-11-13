import { dashboardMetrics } from "../data/metricDataset.ts";
import MetricCard from "../components/MetricCard";
import { useState } from "react";
import { taskFilter, recentTasks, getPriorityColor, getStatusColor, getDueDateColor } from "../data/taskDataset.ts";
import { Check, Calendar, Clock, ListFilter, RotateCcw, Plus } from "lucide-react";

const Dashboard = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [tasks, setTasks] = useState(recentTasks);

  const handleChange = (id: number) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const getStatus = (task: typeof tasks[number]) => (task.completed ? "Completed" : task.status);
  const getDueDate = (task: typeof tasks[number]) => (task.completed ? "Completed" : task.dueDate);

  const filteredTasks = tasks.filter(task => currentFilter === "All" ? task : currentFilter === getStatus(task))
  const activeTasks = tasks.filter(t => !t.completed).length

  return (
    <>
      <header>
        <h1 className="text-2xl text-on-surface tracking-tight font-bold">
          Welcome back, Alex
        </h1>
        <p className="text-sm text-on-surface-variant">
          Here is an overview of your active tasks and projects today.
        </p>
      </header>
      <section className="grid grid-cols-4 gap-6  w-full ">
        {dashboardMetrics.map((data) => (
          <MetricCard key={data.title} data={data} />
        ))}
      </section>
      <section className="bg-card rounded-xl  border border-outline-variant">
        <header className=" flex items-center p-4 gap-5">
          <div className="flex items-center gap-3 ">
            <h2 className="text-base font-semibold leading-6  tracking-tighter">
              Recent Tasks
            </h2>
            <span className="text-[11px] text-on-surface-variant px-2.5 py-1 bg-surface-container-high rounded-full font-medium">
              {activeTasks} active
            </span>
          </div>
          <nav aria-label="Task Filters">
            <ul className="bg-surface-container-lowest flex items-center gap-2 rounded-lg p-1 border border-outline-variant">
              {taskFilter.map((filter, index) => (
                <li key={index}>
                  <button
                    className={`rounded-md px-3 py-1 transition-colors text-xs font-medium leading-4 cursor-pointer 
                 ${currentFilter === filter
                        ? "bg-primary text-on-primary"
                        : "text-on-surface-variant hover:text-on-surface"
                      }
                   `}
                    onClick={() => setCurrentFilter(filter)}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <ul>
          {filteredTasks.length !== 0
            ?
            filteredTasks.map(task =>
              <li key={task.id} className="border-t border-outline-variant">
                <article className="flex justify-between items-center px-4 py-3 rounded-b-xl hover:bg-surface-container-high transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className="peer appearance-none border border-outline-variant bg-surface-container-lowest text-primary h-4 w-4 cursor-pointer rounded checked:bg-primary" checked={task.completed} onChange={() => handleChange(task.id)} />
                      <Check size={16} strokeWidth={3} className="absolute w-3 h-3 top-0.5 text-white pointer-events-none hidden peer-checked:block" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className={`text-sm font-normal text-on-surface truncate ${task.completed ? "line-through text-outline" : ""}`}>
                        {task.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <span className="text-tertiary-fixed-dim">{task.category}</span>
                        <span className="text-outline-variant select-none">•</span>
                        <span className={`${getDueDateColor(getDueDate(task))} inline-flex items-center gap-1.5`}>
                          {task.dueDate === "Completed" ? (
                            <Check size={16} strokeWidth={2} />
                          ) : task.dueDate === "Today" ? (
                            <Clock size={16} strokeWidth={2} />
                          ) : (
                            <Calendar size={16} strokeWidth={2} />
                          )}
                          <span>Due: {getDueDate(task)}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-3.5">
                    <span className={`text-sm rounded px-2 py-0.5 font-medium ${getPriorityColor(task.priority)}`}>{task.priority}</span>
                    <span className="inline-flex items-center gap-2 bg-surface-container-highest text-on-surface-variant text-sm px-3 py-1 border border-outline-variant rounded-full">
                      <span className={`w-1.5 h-1.5 rounded-full ${getStatusColor(getStatus(task))}`} />
                      <span>{getStatus(task)}</span>
                    </span>
                  </div>
                </article>
              </li>
            )
            :
            <li>
              <div className="flex flex-col items-center p-4 h-80 justify-center text-center border-t border-outline-variant">
                <div className="bg-surface-container-high border-outline-variant mb-4 relative flex h-14 w-14 items-center justify-center rounded-2xl border shadow-2xl">
                  <div className="bg-primary absolute inset-0 rounded-2xl opacity-10"></div>
                  <span className="relative inline-flex items-center justify-center text-primary">
                    <ListFilter size={24} strokeWidth={2} className="opacity-60" />
                    <span className="absolute w-7 h-0.5 bg-current top-2.5 rotate-45 rounded-full" />
                  </span>
                </div>
                <div className="flex flex-col items-center mb-4">
                  <h3 className="font-semibold text-on-surface mb-1">
                    No tasks match this filter
                  </h3>
                  <p className="text-sm text-on-surface-variant max-w-md">
                    There are currently no tasks matching the selected filter criteria. Try clearing filters or create a new task to get started.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 px-4 py-1.5 transition-colors active:scale-95 border border-outline-variant rounded-lg text-base text-on-surface font-medium cursor-pointer hover:bg-surface-container-high"
                    onClick={() => setCurrentFilter("All")}>
                    <RotateCcw size={16} strokeWidth={3} /> Clear Filters
                  </button>
                  <button className="flex items-center gap-1.5 bg-primary text-on-primary px-4 py-1.5 rounded-lg border border-outline-variant active:scale-95 transition-colors text-base cursor-pointer hover:opacity-90">
                    <Plus size={16} strokeWidth={3} /> Create Task
                  </button>
                </div>
              </div>
            </li>
          }

        </ul>
      </section>
    </>
  );
};
export default Dashboard;
