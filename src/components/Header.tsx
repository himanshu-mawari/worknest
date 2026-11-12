import { Search, Bell, CircleQuestionMark, Plus } from "lucide-react"
import TaskForm from "./TaskForm"
import { useState } from "react";

const Header = () => {
  const [isFormActive, setIsFormActive] = useState(false)
  return (
    <header className="flex justify-between bg-surface border-b border-outline-variant py-2 px-5">
      <search className="w-full max-w-sm">
        <form className="relative flex items-start gap-2 ">
          <Search size={16} className="absolute top-2 left-2" />
          <input
            type="search"
            placeholder="Search tasks, specs, tickets..."
            className="
            w-full 
            py-1.5 pl-9 pr-4 
            text-sm 
            bg-canvas border border-outline-variant rounded-md 
            text-main placeholder:text-muted
            focus:outline-none focus:ring-1 focus:ring-primary
             "
          />
        </form>
      </search>
      <nav className="flex items-center gap-3 mr-4">
        <div className="flex items-center gap-1 px-2 border-r border-outline-variant">
          <button type="button" className="text-icon p-1.5 rounded-lg hover:bg-surface-hover cursor-pointer transition-colors">
            <Bell size={17} strokeWidth={2.5} />
          </button>
          <button type="button" className="text-icon p-1.5 rounded-lg hover:bg-surface-hover cursor-pointer transition-colors">
            <CircleQuestionMark size={17} strokeWidth={2.5} />
          </button>
        </div>

        <button type="button" className="flex items-center gap-1.5 bg-primary text-on-primary px-4 py-1.5 text-xs font-medium leading-4 tracking-[0.002em] rounded-btn transition-all duration-150 hover:bg-primary-hover active:scale-[0.98] cursor-pointer"
          onClick={() => setIsFormActive(true)}>
          <Plus size={16} strokeWidth={2.5} />
          <span>Create Task</span>
        </button>

        <div className="flex items-center pl-1">
          <div className="flex justify-center items-center rounded-full w-8 h-8 bg-avatar text-primary text-xs font-medium border border-outline-variant transition-colors">
            HM
          </div>
        </div>
      </nav>
      {isFormActive && <TaskForm onClose={() => setIsFormActive(false)} />}
    </header>
  )
}
export default Header