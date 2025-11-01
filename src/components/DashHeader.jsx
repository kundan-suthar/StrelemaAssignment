import { Bell, ChevronDown, Menu, Search } from 'lucide-react'
import { useState } from 'react';
import { useAuth } from '../hooks/useContext';

const DashHeader = ({ setSidebarOpen }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { setAuth, setIsLoggedIn } = useAuth();

    const handleLogout = () => {
        setAuth({}); // Clear auth context
        setIsLoggedIn(false); // Update logged-in state
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("accessToken");
        // Redirect to login page if needed
    };
    return (
        <header className="bg-white p-4 md:px-6 shadow-sm flex items-center justify-between">
            <div className="flex items-center">
                <button onClick={() => setSidebarOpen(true)} className="text-dashDark  mr-4 lg:hidden">
                    <Menu className="h-6 w-6" />
                </button>
                <div>
                    <h1 className="text-xl md:text-2xl font-bold font-dashBoard text-dashDark">All Employees</h1>
                    <p className="text-sm text-dashLight font-dashBoard font-normal">All Employee Information</p>
                </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-6">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dashDark " />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 font-dashBoard text-dashLights pr-4 py-3 w-48 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <button className="relative text-dashDark p-3 rounded-md bg-gray-100 hover:cursor-pointer">
                    <Bell className="w-6 h-6" />

                </button>

                <div className="flex rounded-md p-1 mr-7 items-center space-x-3 border border-dashLight hover:cursor-pointer ">
                    <img
                        src="https://picsum.photos/seed/faisal/40/40"
                        alt="User avatar"
                        className="w-8 h-8 rounded-md"
                    />
                    <div>
                        <p className="font-semibold text-gray-800 text-sm">Faisal Patani</p>
                        <p className="text-xs text-gray-500">HR Manager</p>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700 hover:cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <ChevronDown className={`w-5 h-5 ${dropdownOpen ? "rotate-180" : ""}  duration-300  `} />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 top-16  mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                            <button
                                onClick={handleLogout}
                                className="block w-full rounded-md text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default DashHeader
