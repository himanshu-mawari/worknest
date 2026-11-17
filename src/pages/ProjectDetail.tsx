import { ChevronRight, UserPlus, ListSortDescending, Search } from "lucide-react"
import { Link, NavLink } from "react-router"
import CustomSelect from "../components/CustomSelect";
import { useState } from "react";
import { multiView } from "../data/projectDataset";
import { Outlet } from "react-router";
import {projectTasks} from "../data/projectDataset";

const ProjectDetail = () => {
  const [priority, setPriority] = useState("All Priorities")
  const [assign, setAssign] = useState("All Assigned");
  const [tasks, setTasks] = useState(projectTasks);

  const teamMembers = ["AV", "SC", "MB", "HM", "JS", "VB", "KM"];

  return (
    <div className="flex-1 flex flex-col">
      <div className="-mx-5 -my-5 p-2 px-5 border-b border-[#1F242D] pb-3 bg-[#101318]">
        <header className="flex flex-col gap-3 pb-3">
          <div>
            <nav>
              <ol className="flex items-center gap-2 text-xs font-medium leading-3.5 tracking-[0.03em]">
                <li>
                  <Link
                    to="/projects"
                    className="text-outline hover:text-on-surface transition-colors"
                  >
                    Projects
                  </Link>
                </li>

                <li aria-hidden="true" className="text-outline flex items-center">
                  <ChevronRight size={14} strokeWidth={2} />
                </li>

                <li>
                  <span className="font-semibold text-on-surface tracking-tight">
                    Core API v2
                  </span>
                </li>
              </ol>
            </nav>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-on-surface leading-8 tracking-[-0.015em]">Core API v2</h1>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block"></span>
                Active
              </span>
              <span className="text-[11px] leading-3.5 tracking-[0.03em] px-2 py-0.5 rounded text-outline font-medium bg-[#181D26]">28 total tasks</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {teamMembers.slice(0, 4).map((member, index) => (
                  <div key={index} className={`flex justify-center items-center h-7 w-7 rounded-full ring-2 ring-[#101318] font-medium text-[10px] ${index === 0 ? "bg-[#282a2d] text-primary" : index === 1 ? "bg-secondary-container text-on-secondary" : index === 2 ? "bg-surface-bright text-on-surface" : "bg-[#1F242D] text-outline"}`}>
                    {index >= 3 ? `+${teamMembers.length - 3}` : member}
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-1.5 text-on-surface-variant border border-[#262C38] rounded-md hover:bg-[#151920] cursor-pointer px-2 py-0.5">
                <UserPlus size={14} strokeWidth={2} />Invite
              </button>
            </div>
          </div>
        </header>

        <section className="flex justify-between items-center mt-1 pt-1 border-t border-[#1F242D]/40">
          <nav className="flex gap-1.5">
            {multiView.map(view => {
              const Icon = view.icon;
              return (
                <NavLink
                  to={view.url}
                  end
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded flex items-center gap-1.5 text-xs leading-3.5 tracking-[0.02em] font-medium transition-colors ${isActive
                      ? "bg-[#181D26] text-primary border border-[#262C38]"
                      : "text-on-surface-variant border border-transparent hover:text-on-surface hover:bg-[#151920]"
                    }`
                  }
                >
                  <Icon size={16} strokeWidth={2} />
                  {view.view}
                </NavLink>)
            }
            )}


          </nav>

          <div className="flex items-center gap-2">
            <div className="relative flex items-center w-56">
              <Search size={14} className="absolute left-2 text-outline pointer-events-none" />
              <input
                type="search"
                placeholder="Filter tasks..."
                aria-label="Filter tasks"
                className="w-full h-7 py-1.5 pl-7 pr-2 border border-[#1F242D] bg-[#101318] rounded-md text-[13px] leading-4.5 tracking-[0.005em] text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-0 transition-colors"
              />
            </div>
            <div className="flex items-center gap-2">
              <CustomSelect
                value={priority}
                onChange={setPriority}
                projectDetail={true}
                options={["All Priorities", "High", "Medium", "Low"]}
              />
              <CustomSelect
                value={assign}
                onChange={setAssign}
                projectDetail={true}
                options={["All Assigned", "Assigned to Me", "Alex Vance", "Sarah Chen"]}
              />
              <button className="rounded-md border border-[#1F242D] bg-[#101318] text-outline hover:text-on-surface px-2 hover:border-[#262C38] text-[11px] leading-3.5 tracking-[0.002em] font-medium h-7 flex items-center gap-1.5 cursor-pointer">
                <ListSortDescending size={16} strokeWidth={3} />Sort
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="flex-1 mt-8">
        <Outlet context={{tasks}}/>
      </div>
    </div>
  )
}
export default ProjectDetail