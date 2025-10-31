import { Send } from "lucide-react";

const DestinationCard = ({ imageUrl, name, price, duration }) => {
    return (
        <div className="bg-white  rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group transform hover:-translate-y-2">
            <div className="overflow-hidden h-80">
                <img
                    src={imageUrl}
                    alt={`Image of ${name}`}
                    className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center text-para mb-4">
                    <p className="text-lg font-semibold text-para">{name}</p>
                    <p className="text-lg font-semibold text-para">{price}</p>
                </div>
                <div className="flex items-center space-x-3 text-para">
                    <Send className="w-5 h-5 text-para" />

                    <p className="font-medium text-para">{duration}</p>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;
