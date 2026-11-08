import { Settings, LayoutDashboard, Folder, CircleCheck } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "#dashboard", icon: LayoutDashboard },
  { label: "Projects", href: "#projects", icon: Folder },
  { label: "All tasks", href: "#alltasks", icon: CircleCheck },
];

const DesktopSidebar = () => {
  // Example active state (you can hook this up to your router/location path)
  const [activePath, setActivePath] = useState("#dashboard")

  return (
    <aside className="w-60 h-screen bg-sidebar border-r border-subtle flex flex-col justify-between p-3 select-none">
      {/* Top Section: Brand Header */}
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

      {/* Navigation List */}
      <nav className="flex-1 mt-6">
        <ul className="flex flex-col gap-1.5 list-none m-0 p-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePath === item.href;

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setActivePath(item.href)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                      ? "bg-surface text-primary font-semibold shadow-sm"
                      : "text-muted hover:text-main hover:bg-surface-hover"
                    }`}
                >
                  <Icon
                    size={18}
                    className={isActive ? "text-primary" : "text-muted"}
                  />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section: Footer / Settings Area */}
      <footer className="pt-2 border-t border-subtle">
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