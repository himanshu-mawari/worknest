import HomeLayout from "./layouts/AppLayout.tsx"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom";
import Project from "./pages/Project.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import Dashboard from "./pages/Dashboard.tsx";

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
        path: "/project",
        element: <Project />
      },
      {
        path: "/project/:id",
        element: <ProjectDetail />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
