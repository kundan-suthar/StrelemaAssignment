import React, { useState } from 'react';

// import { SearchIcon, PlusIcon, FilterIcon, EyeIcon, EditIcon, TrashIcon } from './icons';
import Pagination from './Pagination';
import { Edit, Eye, Filter, Plus, Search, Trash } from 'lucide-react';

const mockEmployees = [
    { id: '1', name: 'Priyanka Raut', initials: 'P', employeeId: '345321231', department: 'Design', designation: 'UI/UX Designer', status: 'Permanent' },
    { id: '2', name: 'Saurabh Patil', initials: 'S', employeeId: '987890345', department: 'Developement', designation: 'PHP Developer', status: 'Permanent' },
    { id: '3', name: 'Violet Cowan', avatarUrl: 'https://picsum.photos/seed/violet/40/40', initials: 'VC', employeeId: '453367122', department: 'Sales', designation: 'Sales Manager', status: 'Permanent' },
    { id: '4', name: 'Aadesh Rathod', avatarUrl: 'https://picsum.photos/seed/aadesh/40/40', initials: 'AR', employeeId: '345321231', department: 'Sales', designation: 'BDM', status: 'Permanent' },
    { id: '5', name: 'Pratham Patne', avatarUrl: 'https://picsum.photos/seed/pratham/40/40', initials: 'PP', employeeId: '453677881', department: 'Design', designation: 'Design Lead', status: 'Permanent' },
    { id: '6', name: 'Rushi Raut', avatarUrl: 'https://picsum.photos/seed/rushi/40/40', initials: 'RR', employeeId: '009918765', department: 'Developement', designation: 'Python Developer', status: 'Permanent' },
    { id: '7', name: 'Om Shinde', avatarUrl: 'https://picsum.photos/seed/om/40/40', initials: 'OS', employeeId: '238870122', department: 'Developement', designation: 'Sr. UI Developer', status: 'Permanent' },
    { id: '8', name: 'Sakshi Rayte', avatarUrl: 'https://picsum.photos/seed/sakshi/40/40', initials: 'SR', employeeId: '124335111', department: 'PM', designation: 'Project Manager', status: 'Permanent' },
    { id: '9', name: 'Tushita Salunkhe', avatarUrl: 'https://picsum.photos/seed/tushita/40/40', initials: 'TS', employeeId: '435540099', department: 'HR', designation: 'HR Executive', status: 'Permanent' },
    { id: '10', name: 'Mayuri Rane', avatarUrl: 'https://picsum.photos/seed/mayuri/40/40', initials: 'MR', employeeId: '009812890', department: 'Developement', designation: 'React JS Developer', status: 'Permanent' },
    { id: '11', name: 'Suraj Pawar', avatarUrl: 'https://picsum.photos/seed/suraj/40/40', initials: 'SP', employeeId: '671190345', department: 'Developement', designation: 'Node JS', status: 'Permanent' },
    { id: '12', name: 'Shivam Jagtap', avatarUrl: 'https://picsum.photos/seed/shivam/40/40', initials: 'SJ', employeeId: '091233412', department: 'BA', designation: 'Business Analyst', status: 'Permanent' },
];

// This helper component is defined outside EmployeeTable to prevent re-creation on every render.
const EmployeeRow = ({ employee }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="py-3 px-6 text-left whitespace-nowrap">
            <div className="flex items-center">
                {employee.avatarUrl ? (
                    <img className="w-8 h-8 rounded-full mr-3" src={employee.avatarUrl} alt={employee.name} />
                ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-gray-500 font-semibold">
                        {employee.initials}
                    </div>
                )}
                <span className="font-medium font-dashBoard text-gray-700">{employee.name}</span>
            </div>
        </td>
        <td className="py-3 px-6 text-left text-gray-600">{employee.employeeId}</td>
        <td className="py-3 px-6 text-left text-gray-600">{employee.department}</td>
        <td className="py-3 px-6 text-left text-gray-600">{employee.designation}</td>
        <td className="py-3 px-6 text-left text-gray-600">--</td>
        <td className="py-3 px-6 text-left">
            <span className={`px-3 py-1 text-xs rounded-full font-medium ${employee.status === 'Permanent' ? 'bg-purple-100 text-purple-600' : 'bg-yellow-100 text-yellow-600'}`}>
                {employee.status}
            </span>
        </td>
        <td className="py-3 px-6 text-center">
            <div className="flex item-center justify-center space-x-3">
                <button className="w-6 h-6 text-gray-500 hover:text-blue-500">
                    <Eye className="w-5 h-5" />
                </button>
                <button className="w-6 h-6 text-gray-500 hover:text-green-500">
                    <Edit className="w-5 h-5" />
                </button>
                <button className="w-6 h-6 text-gray-500 hover:text-red-500">
                    <Trash className="w-5 h-5" />
                </button>
            </div>
        </td>
    </tr>
);


const EmployeeTable = () => {
    const [employees] = useState(mockEmployees);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const totalRecords = employees.length;
    const totalPages = Math.ceil(totalRecords / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
                <div className="w-full md:w-auto relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="flex items-center space-x-3 w-full md:w-auto">
                    <button
                        className="w-full md:w-auto flex items-center justify-center 
                            bg-linear-to-r from-[#0A255F] to-[#2F539E] 
                            hover:from-[#0c2d78] hover:to-[#3a61b7]
                            text-white font-semibold py-2 px-4 rounded-lg 
                            transition-all duration-300 ease-in-out"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        Add New Employee
                    </button>
                    <button className="w-full md:w-auto flex items-center justify-center border border-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                        <Filter className="w-5 h-5 mr-2" />
                        Filter
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-gray-50 text-gray-500 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Employee Name</th>
                            <th className="py-3 px-6 text-left">Employee ID</th>
                            <th className="py-3 px-6 text-left">Department</th>
                            <th className="py-3 px-6 text-left">Designation</th>
                            <th className="py-3 px-6 text-left">Adddddd</th>
                            <th className="py-3 px-6 text-left">Status</th>
                            <th className="py-3 px-6 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {currentItems.map((employee) => (
                            <EmployeeRow key={employee.id} employee={employee} />
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={setItemsPerPage}
                totalRecords={totalRecords}
            />
        </div>
    );
};

export default EmployeeTable;
