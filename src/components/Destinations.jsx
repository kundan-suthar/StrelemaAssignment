import { destinations } from "../constants/constants"
import Spiral from "../icons/Spiral";
import DestinationCard from "./DestinationCard"


const Destinations = () => {
    return (
        <section className="py-10">

            <div className="relative mb-20">
                <h2 className='text-para font-semibold font-heroPara text-center text-2xl '>Top Sellings</h2>
                <h1 className='pt-8 font-heroHeading font-semibold text-5xl text-center text-heading'>Top Destinations</h1>

            </div>
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                    {destinations.map((dest) => {
                        const { imageUrl, name, price, duration } = dest;
                        return <DestinationCard key={dest.id} imageUrl={imageUrl} name={name} price={price} duration={duration} />
                    })}
                </div>
                <div className="absolute -right-16 -z-10 top-28 hidden lg:block">
                    <Spiral />
                </div>
            </div>

        </section>
    )
}

export default Destinations
