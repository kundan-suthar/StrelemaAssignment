
// eslint-disable-next-line no-unused-vars
const StepItem = ({ Icon, bgColor = 'bg-gray-200', title, description }) => {
    return (
        <li className="group flex items-center  space-x-5">
            <div className={`shrink-0 p-3 rounded-xl shadow-md group-hover:rotate-12 duration-300 ${bgColor}`}>
                <Icon className="" />   {/* style here */}
            </div>
            <div className="text-left">
                <h3 className="font-bold text-para font-heroPara text-lg">{title}</h3>
                <p className="font-heroPara text-para font-normal mt-1">{description}</p>
            </div>
        </li>
    )
}

export default StepItem
