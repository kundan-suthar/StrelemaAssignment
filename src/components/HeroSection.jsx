
import { Play } from "lucide-react";
import heroImage from "../assets/heroImage.png";

const HeroSection = () => {
    return (
        <main className='py-10 flex'>
            <div className='flex-1 py-24'>
                <h2 className='font-heroPara font-semibold text-2xl text-heroSubHeading'>Best Destinations around the world</h2>
                <h1 className='text-5xl pt-8 font-heroHeading font-semibold text-heading'>Travel,
                    <span className="relative px-4  after:content-[''] after:absolute after:bottom-2.5 after:inset-0 after:bg-[url('/images/heroDecor.png')] after:bg-no-repeat after:bg-bottom after:bg-contain after:-z-10">
                        enjoy
                    </span><br />


                    {/* <span className="relative bg-[url('/images/heroDecor.png')] bg-no-repeat  bg-contain bg-bottom">
                        enjoy
                    </span><br /> */}
                    and live a new  <br />
                    and full life</h1>

                <p className="font-heroPara pt-8 text-para ">
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                </p>
                <div className="flex gap-10  pt-8 ">
                    <button className="px-4 py-2 rounded-md bg-btn hover:cursor-pointer font-heroPara text-gray-50 hover:bg-gray-50 hover:text-btn border-2 border-btn transition duration-300">
                        Find out more
                    </button>

                    <button
                        className="flex gap-4 items-center justify-center hover:cursor-pointer group transition-all duration-300 ease-in-out"
                    >
                        <Play
                            className="border-2 text-white fill-white border-playBtn bg-playBtn rounded-full p-3 size-[50px] 
               transition-transform duration-300 ease-in-out group-hover:rotate-90 group-hover:scale-110 group-hover:shadow-[0_0_10px_#00d4ff]"
                        />
                        <p className="text-para font-heroPara font-semibold transition-all duration-300 ease-in-out group-hover:text-playBtn group-hover:translate-x-1">
                            Play Demo
                        </p>
                    </button>

                </div>
            </div>
            <div className="flex-2">
                <img src={heroImage} alt="" />
            </div>
        </main>
    )
}

export default HeroSection
