
import DashNavbar from "../components/DashNavbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {

  return (
    <main className="h-full w-full my-2">
      <div className="flex container mx-auto">
        <div className="w-1/4 border-r border-slate-300 p-2 h-screen">
          <DashNavbar />
        </div>

        <div className="container mx-auto">
          {/* <h1 className="text-2xl md:text-3xl py-3 font-semibold text-center">
            Welcome to the dashboard
          </h1> */}
          <div className="overflow-auto h-screen inset-7 hide-scrollbar p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
