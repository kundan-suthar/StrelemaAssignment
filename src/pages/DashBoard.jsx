import { useState } from "react";
import Sidebar from "../components/Sidebar";

const DashBoard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen bg-[#F7F8FA]">
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* <Header setSidebarOpen={setSidebarOpen} /> */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F7F8FA] p-4 md:p-6 lg:p-8">
                    {/* <EmployeeTable /> */}
                </main>
            </div>
        </div>
    )
}

export default DashBoard
