
import plusGrid from "../assets/plusGrid.png";
import { services } from "../constants/constants";
import ServiceCard from "./ServiceCard";
const Services = () => {
    return (
        <section className="pb-20">

            <div className="relative mb-20">
                <h2 className='text-para font-semibold font-heroPara text-center text-2xl '>CATEGORY</h2>
                <h1 className='pt-8 font-heroHeading font-semibold text-5xl text-center text-heading'>We Offer Best Services</h1>
                <div className="absolute top-0  right-0   z-0">
                    <img src={plusGrid} alt="" />
                </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-y-8 items-center justify-items-center">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        Icon={service.icon}
                        title={service.title}
                        description={service.description}
                        highlighted={service.highlighted}
                    />
                ))}
            </div>

        </section>
    )
}

export default Services
