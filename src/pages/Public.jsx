import BookSteps from "../components/BookSteps"
import ClientsMarquee from "../components/ClientsMarquee"
import Destinations from "../components/Destinations"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Newsletter from "../components/Newsletter"
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
            <ClientsMarquee />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Public
