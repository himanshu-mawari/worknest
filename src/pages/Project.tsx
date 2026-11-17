import { Plus } from "lucide-react"
import CustomSelect from "../components/CustomSelect"
import { useState } from "react"
import { ListFilter } from "lucide-react"
import { mockProjects } from "../data/projectDataset"
import { Link } from "react-router"

const Project = () => {
  const [status, setStatus] = useState("All Statuses")
  const [order, setOrder] = useState("Recently Updated")

  const getLoadingPercentage = (project: typeof mockProjects[number]) => {
    if (!project.totalTasks) return "0%";

    const percentage = (project.done / project.totalTasks) * 100;
    return `${Math.floor(percentage)}%`;
  }

  return (
    <>
      <header className="flex items-center justify-between ">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl text-on-surface font-semibold tracking-tight">Project</h1>
          <p className="text-sm text-outline">Manage your active workspaces, repositories, and deliverables.</p>
        </div>
        <div >
          <button className="flex items-center gap-1.5 bg-primary text-on-primary text-sm font-medium px-3 py-1.5  rounded-lg"> <Plus size={16} strokeWidth={2.5} />New Project</button>
        </div>
      </header>
      <search>
        <form className="flex gap-4 border border-outline-variant p-2 rounded-lg">
          <label htmlFor="project-search" className="sr-only">Filter projects</label>
          <div className="relative flex-1 w-full bg-surface-container-lowest border border-outline-variant rounded-lg transition-colors duration-150 ">
            <input
              className="text-[13px] w-full py-1.5 pr-3 pl-8 text-on-surface placeholder:text-outline focus:outline-none rounded-lg focus:ring-1 focus:ring-primary"
              type="search"
              placeholder="Filter projects by title or tech stack..."
            />
            <ListFilter size={16} strokeWidth={3} className="absolute top-2 left-2 text-outline" />
          </div>
          <div className="flex items-center gap-1.5">
            <label htmlFor="status-filter" className="sr-only">Status</label>
            <CustomSelect
              value={status}
              onChange={setStatus}
              options={["All Statuses", "Active", "Archived"]}
            />
            <label htmlFor="sort-order" className="sr-only">Sort by</label>
            <CustomSelect value={order} onChange={setOrder} options={["Recently Updated", "Most Tasks", "Alphabetical"]} />
          </div>
        </form>
      </search>
      <section className="grid grid-cols-3 gap-4">
        {
          mockProjects.map(project =>
            <Link to={`/projects/${project.id}`} className="group bg-surface p-4 border border-outline-variant hover:border-outline cursor-pointer rounded-xl transition-all duration-150">
              <article key={project.id} className="">
                <header className="flex justify-between items-center gap-2">
                  <h2 className="text-base font-semibold text-on-surface group-hover:text-primary transition-colors duration-150">{project.title}</h2>
                  <span className="text-xs border border-outline-variant bg-surface-container-high rounded-md font-medium px-2 py-1 text-primary">{project.status}</span>
                </header>
                <p className="text-sm text-outline my-3">{project.description}</p>
                <div className="border-b border-outline-variant pb-1.5">
                  <div className="flex justify-between">
                    <span className="text-xs font-medium">{project.totalTasks} tasks</span>
                    <span className="text-xs text-outline font-medium">{project.toDo} To Do · {project.inProgress} In Progress · {project.done} Done</span>
                  </div>
                  <div className="w-full border border-outline-variant  rounded-full h-1.5 my-1.5">
                    <div className={`bg-primary  h-full rounded-full transition-colors duration-150`}
                      style={{ width: `${getLoadingPercentage(project)}` }}></div>
                  </div>
                </div>
                <footer className="flex justify-between items-center pt-3">
                  <ul aria-label="Team members" className="flex items-center -space-x-2">
                    {project.teamAvatars.slice(0, 3).map((avatar, index) => (
                      <li
                        key={index}
                        className={`w-6 h-6 flex items-center justify-center ${index % 2 === 0 ? "bg-surface-container-high" : "bg-card"} text-on-surface text-[10px] font-medium border border-outline-variant rounded-full`}
                      >
                        {index >= 2 ? `+${project.teamAvatars.length - 2}` : avatar}
                      </li>
                    ))}
                  </ul>
                  <time dateTime="2026-11-13T09:52:00" className="text-xs text-outline font-medium">{project.updatedAt}</time>
                </footer>
              </article>
            </Link>
          )}
      </section>
    </>
  )
}
export default Project