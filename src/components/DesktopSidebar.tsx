import { Settings, LayoutDashboard, Folder, SlidersHorizontal } from "lucide-react";
import { NavLink } from "react-router";
import { mockProjects } from "../data/projectDataset";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Projects", href: "/projects", icon: Folder },
];

const DesktopSidebar = () => {
  const pinnedProjects = mockProjects.filter(project => project.pinnedRepo);
  
  return (
    <aside className="w-60 h-screen bg-sidebar border-r border-outline-variant flex flex-col justify-between p-3 select-none">
      <div>
        <div className="flex flex-col items-start gap-1 px-2 pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 160 40"
            width="130"
            height="40"
            fill="none"
          >
            <rect
              x="2"
              y="6"
              width="28"
              height="28"
              rx="8"
              fill="var(--color-surface)"
              stroke="var(--color-interactive)"
              strokeWidth="1.5"
            />
            <path
              d="M9 14L16 26L23 14"
              stroke="var(--color-primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="16" cy="18" r="2.5" fill="var(--color-primary)" />
            <text
              x="38"
              y="26"
              fill="var(--color-main)"
              fontFamily="var(--font-sans)"
              fontSize="18"
              fontWeight="700"
              letterSpacing="-0.03em"
            >
              Worknest
            </text>
          </svg>
          <p className="text-sm text-muted font-medium tracking-wide">
            Enterprise Workspace
          </p>
        </div>

        <nav className="mt-5">
          <ul className="flex flex-col gap-1 list-none m-0 p-0">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.label} >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors 
                  ${isActive
                        ? "bg-surface-container-high border-l-2  text-primary font-semibold shadow-sm"
                        : "text-muted hover:text-main hover:bg-surface-hover"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          size={18}
                          className={`${isActive ? "text-primary" : "text-muted"}`}
                        />
                        <span>{item.label}</span>
                      </>
                    )
                    }
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col gap-1 border-t border-outline-variant/30 mt-8 px-1 pt-2">
          <div className="flex items-center justify-between ">
            <span className="text-[11px] font-medium leading-3.5 text-outline px-1 mb-1 uppercase tracking-[0.03em]">
              Pinned Repos
            </span>
            <SlidersHorizontal size={14} strokeWidth={3} className="text-outline" />
          </div>
          <ul className="flex flex-col gap-1" >
            {pinnedProjects.map((project) => (
              <li key={project.id}>
                <NavLink
                  to={`/projects/${project.id}`}
                  className={({ isActive }) => `flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-surface-hover ${isActive ? "bg-surface-container-high text-primary border-l-2 rounded-lg" : "text-outline"}`}
                >
                  {({ isActive }) => (
                    <>
                      <span className={`inline-block w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${isActive ? "bg-primary" : "bg-outline"}`}></span>
                      <span className="truncate text-xs  leading-3.5 tracking-[0.03em] font-medium">{project.title}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="pt-2 border-t border-outline-variant">
        <a
          href="#settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-main hover:bg-surface-hover transition-colors"
        >
          <Settings size={20} />
          <span>Workspace Settings</span>
        </a>
      </footer>
    </aside>
  );
};

export default DesktopSidebar;