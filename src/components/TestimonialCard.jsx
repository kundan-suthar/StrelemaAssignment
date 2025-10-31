import React from 'react'

const TestimonialCard = ({ testimonial, index, activeIndex, total }) => {
    const getCardStyle = () => {
        const diff = (index - activeIndex + total) % total;

        switch (diff) {
            case 0: // Active card
                return 'transform-none opacity-100 z-30';
            case 1: // Card directly below active
                return 'translate-y-[2.5rem] scale-[0.96] opacity-100 z-20';
            case 2: // Card below that one
                return 'translate-y-[5rem] scale-[0.92] opacity-100 z-10';
            default: // All others are hidden and out of the way
                return 'translate-y-[5rem] scale-[0.92] opacity-0 invisible z-0';
        }
    };

    const isCardActive = index === activeIndex;

    return (
        <div className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${getCardStyle()}`}>
            <div className={`bg-white rounded-xl w-full p-8 pt-16 relative flex flex-col min-h-[260px] transition-shadow duration-500 ${isCardActive ? 'shadow-2xl' : 'shadow-md'}`}>
                <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className={`absolute -top-10 left-10 w-20 h-20 rounded-full border-4 transition-all duration-300 
            ${isCardActive ? 'ring-4 ring-red-400 border-white' : 'border-gray-200'}`}
                />
                <blockquote className="text-para font-heroPara  mb-6 text-sm lg:text-base leading-relaxed grow">
                    “{testimonial.quote}”
                </blockquote>
                <div className="text-left mt-auto">
                    <h4 className="font-bold text-para capitalize text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard
