import { dashboardMetrics } from "../data/metricDataset.ts";
import MetricCard from "../components/MetricCard";
import { useState } from "react";
import { taskFilter, recentTasks, getPriorityColor, getStatusColor, getDueDateColor } from "../data/taskDataset.ts";
import { Check, Calendar, Clock } from "lucide-react";

const Dashboard = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [tasks, setTasks] = useState(recentTasks);



  const filteredTasks = tasks.filter(task => currentFilter === "All" ? task : currentFilter === task.status)
  const activeTasks = tasks.filter(t => !t.completed).length

  const handleChange = (id: number) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }
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
      <section className="grid grid-cols-4 gap-6 py-6 w-full ">
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
          {filteredTasks.map(task =>
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
                      <span className={`${getDueDateColor(task.dueDate)} inline-flex items-center gap-1.5`}>
                        {task.dueDate === "Completed" ? (
                          <Check size={16} strokeWidth={2} />
                        ) : task.dueDate === "Today" ? (
                          <Clock size={16} strokeWidth={2} />
                        ) : (
                          <Calendar size={16} strokeWidth={2} />
                        )}
                        <span>Due: {task.dueDate}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-3.5">
                  <span className={`text-sm rounded px-2 py-0.5 font-medium ${getPriorityColor(task.priority)}`}>{task.priority}</span>
                  <span className="inline-flex items-center gap-2 bg-surface-container-highest text-on-surface-variant text-sm px-3 py-1 border border-outline-variant rounded-full">
                    <span className={`w-1.5 h-1.5 rounded-full ${getStatusColor(task.status)}`} />
                    <span>{task.status}</span>
                  </span>
                </div>
              </article>
            </li>
          )
          }
        </ul>
      </section>
    </>
  );
};
export default Dashboard;
