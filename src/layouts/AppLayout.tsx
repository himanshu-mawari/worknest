import DesktopSidebar from "../components/DesktopSidebar.tsx";
import Header from "../components/Header.tsx";
import { Outlet } from "react-router";

const homeLayout = () => {
  return (
    <div className="flex min-h-screen bg-canvas">
      <DesktopSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        <main className="flex flex-col flex-1 p-5 gap-4">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default homeLayout;