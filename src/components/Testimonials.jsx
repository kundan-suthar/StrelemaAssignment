import React, { useCallback, useState } from 'react'
import { TESTIMONIALS_DATA } from '../constants/constants';
import TestimonialCard from './TestimonialCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Testimonials = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const testimonials = TESTIMONIALS_DATA;

    const handleNext = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, [testimonials.length]);

    const handlePrev = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center py-20">

            <div className="text-center lg:text-left relative z-10">
                <p className="text-para font-heroPara font-semibold tracking-wider mb-2">TESTIMONIALS</p>
                <h1 className="text-4xl md:text-5xl font-heroHeading font-bold  text-heading mb-8 leading-tight">
                    What People Say<br />About Us.
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-[#0F2137] scale-125' : 'bg-gray-300'}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-start">
                <div className="relative h-[380px] w-full max-w-md">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                            activeIndex={activeIndex}
                            total={testimonials.length}
                        />
                    ))}
                </div>

                <div className="absolute right-0 lg:right-[-20px] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
                    <button
                        onClick={handlePrev}
                        className="p-2 rounded-full text-gray-400 bg-white shadow-md hover:bg-gray-100 hover:text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Previous testimonial"
                    >
                        <ChevronUp className="w-5 h-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-2 rounded-full text-gray-400 bg-white shadow-md hover:bg-gray-100 hover:text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Next testimonial"
                    >
                        <ChevronDown className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
