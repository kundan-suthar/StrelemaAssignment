import BookSteps from "../components/BookSteps"
import Destinations from "../components/Destinations"
import HeroSection from "../components/HeroSection"
import Navigation from "../components/Navigation"
import Services from "../components/Services"


const Public = () => {
    return (
        <div className="w-full h-[3000px] ">
            <HeroSection />
            <Services />
            <Destinations />
            <BookSteps />
        </div>
    )
}

export default Public
