#  Worknest

> An enterprise-grade workspace and task management dashboard built to master TypeScript patterns, scalable React architecture, and modern UI/UX design systems.

---

## 🚀 About the Project

**Worknest** is a modern project management workspace designed to bridge clean product UI with robust type-safe engineering. Built with a focus on **mastering TypeScript with React**, the project prioritizes strict prop contracts, clean component composition, and reusable UI abstractions over repetitive boilerplate.

---

## 🧰 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | React (Vite) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Routing** | React Router  |
| **Icons** | Lucide React |

---

## ✨ Key Features

* **Kanban Task Workspace:** Interactive board view for organizing and tracking sprint tasks across workflow stages.
* **Reusable `FeaturePlaceholder` Pattern:** A DRY, type-safe UI component that dynamically renders planned roadmap views (`List`, `Timeline`) with custom icons, status badges, and one-click navigation back to the board.
* **Nested Route Layouts:** Shared project layout architecture using React Router's `<Outlet />` context to pass workspace state cleanly across views.
* **Theme-Ready UI:** Built with semantic CSS variables (`bg-card`, `text-foreground`, `border-border`) for seamless dark and light mode consistency.

---

## 📂 Project Structure

```text
worknest/
├── src/
│   ├── components/         # Reusable UI primitives (FeaturePlaceholder, etc.)
│   ├── layouts/            # Nested route layouts with <Outlet/> context
│   ├── pages/              # Route views (Kanban, List, Timeline)
│   ├── types/              # Shared TypeScript interfaces and types
│   ├── App.tsx             # Route definitions and app shell
│   └── main.tsx            # Entry point
├── index.html
├── package.json
└── tsconfig.json
```

---

## 🛠️ Getting Started

### Prerequisites
* **Node.js** (v18 or higher)
* **npm** or **pnpm**

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/worknest.git](https://github.com/your-username/worknest.git)
   cd worknest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

---

## 🎯 Key Takeaways & Learnings

* **Idiomatic React + TypeScript:** Typing component props, optional vs. required fields, and third-party component types (`LucideIcon`) without relying on `any`.
* **Component Composition:** Abstracting repetitive UI states into a single configurable component instead of duplicating markup across multiple route files.
* **React Router Patterns:** Structuring parent-child routes with `<Outlet />` and handling programmatic navigation cleanly inside leaf components.

