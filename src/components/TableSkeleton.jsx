const TableSkeleton = () => (
    <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded-t-lg mb-4" />
        {[...Array(10)].map((_, i) => (
            <div key={i} className="flex space-x-4 mb-4">
                <div className="h-12 bg-gray-200 rounded-lg w-full" />
            </div>
        ))}
    </div>
);

export default TableSkeleton;