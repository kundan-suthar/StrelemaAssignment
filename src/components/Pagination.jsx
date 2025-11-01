import React from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';


const Pagination = ({ currentPage, totalPages, onPageChange, itemsPerPage, onItemsPerPageChange, totalRecords }) => {

    const startRecord = (currentPage - 1) * itemsPerPage + 1;
    const endRecord = Math.min(currentPage * itemsPerPage, totalRecords);

    const getPageNumbers = () => {
        const pages = [];
        if (totalPages > 1) pages.push(1);

        // Ellipsis after first page
        if (currentPage > 3) pages.push('...');

        // Pages around current page
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(i);
        }

        // Ellipsis before last page
        if (currentPage < totalPages - 2) pages.push('...');

        // Last page
        if (totalPages > 1 && !pages.includes(totalPages)) pages.push(totalPages);

        return pages;
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between pt-4 mt-4 border-t border-gray-200 text-sm text-gray-600">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span>Showing</span>
                <div className="relative">
                    <select
                        value={itemsPerPage}
                        onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                        className="appearance-none bg-white border border-gray-300 rounded-md py-1.5 pl-3 pr-8 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
            </div>

            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span>Showing {startRecord} to {endRecord} of {totalRecords} records</span>
            </div>

            <div className="flex items-center space-x-1">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-1">
                    {getPageNumbers().map((page, index) =>
                        typeof page === 'number' ? (
                            <button
                                key={index}
                                onClick={() => onPageChange(page)}
                                className={`px-3 py-1.5 rounded-md text-sm font-medium ${currentPage === page
                                    ? 'bg-blue-600 text-white'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ) : (
                            <span key={index} className="px-3 py-1.5">...</span>
                        )
                    )}
                </div>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
