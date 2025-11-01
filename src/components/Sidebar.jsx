import { useState } from 'react';
import { CalendarCheck, FileSpreadsheet, FileText, LayoutDashboard, Lightbulb, Moon, RefreshCcw, Settings, Sun, Users } from 'lucide-react';
import StrelemaLogo from "../assets/StrelemaLogo.png";
import { Link } from 'react-router';

const NavItem = ({ icon, label, active }) => (
    <a
        href="#"
        className={`flex font-dashBoard items-center px-4 py-2 text-dashDark rounded-tr-lg rounded-br-lg transition-colors duration-200 ${active ? 'bg-sidebarItem text-dashPrimary border-l-4 border-dashPrimary font-semibold' : 'hover:bg-sidebarItem'
            }`}
    >
        <div className="w-6 h-6">{icon}</div>
        <span className="ml-4">{label}</span>
    </a>
);

const Logo = () => (
    <div className="flex items-center space-x-2  px-4">
        <Link to="/" className="p-2 rounded-md mb-3 w-36 h-20 hover:cursor-pointer">
            <img src={StrelemaLogo} alt="strelema logo" className='object-contain w-44 ' />
        </Link>
    </div>
);


const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');
    return (
        <div className="bg-toggleBG rounded-md flex w-full ">
            <button
                onClick={() => setTheme('light')}
                className={`w-1/2 py-2 px-4 rounded-md flex items-center justify-center text-sm font-medium transition-colors hover:cursor-pointer ${theme === 'light' ? 'bg-white text-blue-600 shadow' : 'text-gray-500'
                    }`}
            >
                <Sun className="w-5 h-5 mr-2" />
                Light
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={`w-1/2 py-2 px-4 rounded-md flex items-center justify-center text-sm font-medium transition-colors hover:cursor-pointer ${theme === 'dark' ? 'bg-gray-800 text-white shadow' : 'text-gray-500'
                    }`}
            >
                <Moon className="w-5 h-5 mr-2" />
                Dark
            </button>
        </div>
    );
}



const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
    const navItems = [
        { icon: <LayoutDashboard className="w-full h-full" />, label: 'Dashboard', active: true },
        { icon: <Users className="w-full h-full" />, label: 'All Employees' },
        { icon: <RefreshCcw className="w-full h-full" />, label: 'All Departments' },
        { icon: <CalendarCheck className="w-full h-full" />, label: 'Attendance' },
        { icon: <FileText className="w-full h-full" />, label: 'Leaves' },
        { icon: <FileSpreadsheet className="w-full h-full" />, label: 'Holidays' },
        { icon: <Lightbulb className="w-full h-full" />, label: 'Training' },
        { icon: <Settings className="w-full h-full" />, label: 'Setting' },
    ];

    return (
        <>
            <aside className={`bg-sideBarBG w-64 min-h-screen p-4 flex-col justify-between fixed lg:relative lg:translate-x-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30 flex`}>
                <div>
                    <Logo />
                    <nav className="mt-4 space-y-2">
                        {navItems.map((item, index) => (
                            <NavItem key={index} icon={item.icon} label={item.label} active={item.active} />
                        ))}
                    </nav>
                </div>
                <div className="pb-4">
                    <ThemeToggle />
                </div>
            </aside>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Sidebar;
