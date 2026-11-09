import { Search, Bell, CircleQuestionMark } from "lucide-react"
const Header = () => {
  return (
    <header className="flex justify-between border-b border-subtle py-2 px-5">
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
            bg-canvas border border-subtle rounded-md 
            text-main placeholder:text-muted
            focus:outline-none focus:ring-1 focus:ring-primary
             "
          />
        </form>
      </search>
      <nav className="flex gap-4 mr-4">
        <button type="button" className="text-muted"><Bell size={17} strokeWidth={3} /></button>
        <button type="button" className="text-muted"><CircleQuestionMark size={17} strokeWidth={3} /></button>
        <button type="button">
          <div className="flex justify-center items-center rounded-full w-9 h-9 text-primary text-sm border-2 border-subtle">
            HM
          </div>
        </button>
      </nav>

    </header>
  )
}
export default Header