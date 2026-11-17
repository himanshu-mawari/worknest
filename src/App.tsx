import HomeLayout from "./layouts/AppLayout.tsx"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom";
import Project from "./pages/Project.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Kanban from "./components/Kanban.tsx";
import List from "./components/List.tsx";
import Timeline from "./components/Timeline.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "projects",
        children: [
          { index: true, element: <Project /> },
          {
            path: ":id",
            element: <ProjectDetail />,
            children: [
              {
                index: true,
                element: <Kanban />
              },
              {
                path: "list",
                element: <List />
              },
              {
                path: "timeline",
                element: <Timeline />
              }
            ]
          }]
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
