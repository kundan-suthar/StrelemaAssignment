import BookSteps from "../components/BookSteps"
import Destinations from "../components/Destinations"
import HeroSection from "../components/HeroSection"
import Navigation from "../components/Navigation"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"


const Public = () => {
    return (
        <div className="w-full h-[3000px] ">
            <HeroSection />
            <Services />
            <Destinations />
            <BookSteps />
            <Testimonials />
        </div>
    )
}

export default Public
