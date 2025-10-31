
// eslint-disable-next-line no-unused-vars
const ServiceCard = ({ Icon, title, description, highlighted = false }) => {
    const cardClasses = highlighted
        ? 'bg-white rounded-3xl shadow-2xl transform lg:scale-105'
        : 'bg-transparent';

    return (
        <div className="relative  z-10">
            <div
                className={`group shadow-sm rounded-2xl  flex flex-col items-center p-6 text-center w-64 h-80 transition-shadow duration-300 hover:shadow-2xl hover:bg-white hover:rounded-3xl ${cardClasses}`}
            >
                <div className="relative mb-6 shrink-0 h-24 flex items-center justify-center">
                    <Icon />
                </div>

                <h3 className="font-poppins font-semibold text-xl text-custom-heading mb-3">
                    {title}
                </h3>

                <p className="font-poppins text-custom-text">{description}</p>

                {/* 👇 Appears only when hovered */}

                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-8 -left-8 w-24 h-24 bg-custom-highlight rounded-tl-3xl rounded-br-xl -z-20"></div>

            </div>
        </div>
    );
};

export default ServiceCard;
