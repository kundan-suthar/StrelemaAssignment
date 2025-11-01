import React, { useEffect, useState } from 'react';

// import { SearchIcon, PlusIcon, FilterIcon, EyeIcon, EditIcon, TrashIcon } from './icons';
import Pagination from './Pagination';
import { Edit, Eye, Filter, Plus, Search, Trash } from 'lucide-react';
import { useAuth } from '../hooks/useContext';
import axios from '../api/axios';
import TableSkeleton from './TableSkeleton';


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
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [totalPages, setTotalPages] = useState(null)
    const { auth } = useAuth()
    const EMP_URL = "/api/employees"



    const fetchEmployees = async () => {
        try {
            setLoading(true);
            setError(null);
            let accessToken = auth.accessToken ? auth.accessToken : localStorage.getItem("accessToken")
            const response = await axios.get(
                `${EMP_URL}?page=${currentPage}&limit=${itemsPerPage}`,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );

            const enhancedResponse = response.data.data.map((item, index) => ({
                id: String(index + 1), // Add sequential id
                name: item.name,
                initials: item.name ? item.name.charAt(0).toUpperCase() : '',
                employeeId: (Math.floor(Math.random() * 900000000) + 100000000).toString(), // random 9-digit ID
                department: item.department,
                designation: item.designation,
                status: item.status
            }));
            setEmployees(enhancedResponse);
            setTotalRecords(response.data.pagination.total);
            setTotalPages(response.data.pagination.pages)
        } catch (err) {

            setError(err.response?.data?.message || 'Failed to fetch employees');
        } finally {
            setLoading(false);
        }
    };



    useEffect(() => {
        fetchEmployees();

    }, [currentPage, itemsPerPage])

    if (loading) return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <TableSkeleton />
        </div>
    );
    if (error) return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center py-10">
                <div className="text-red-500 text-xl mb-2">Error</div>
                <p className="text-gray-600">{error}</p>
                <button
                    onClick={fetchEmployees}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Try Again
                </button>
            </div>
        </div>
    );

    if (!employees.length) return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center py-10">
                <div className="text-gray-500 text-xl mb-2">No Employees Found</div>
                <p className="text-gray-400">Try adding some employees or adjusting your filters</p>
            </div>
        </div>
    );


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
                        {employees.map((employee) => (
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
