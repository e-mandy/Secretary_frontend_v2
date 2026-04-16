import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSideBar from "./AppSideBar";
import PathFormater from "./PathFormater";

const AppLayout = () => {
  {
    /** We have to set up the default layout for the app. */
  }
  return (
    <div className="flex relative overflow-x-hidden max-w-screen">
      <SidebarProvider defaultOpen>
        <div className="w-72 fixed left-0 h-screen">
          <AppSideBar />
        </div>
        <div className="md:ml-72 relative w-full min-h-screen">
          <div className="absolute top-0 w-full bg-white h-20">
            <NavBar />
          </div>
          <div className="mt-20 px-6">
            <PathFormater />
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default AppLayout;
