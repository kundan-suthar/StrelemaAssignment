import { Heart, Leaf, Map, Send, UsersRound } from "lucide-react"
import DestinationIcon from "../icons/DesitnationIcon"
import PaymentIcon from "../icons/PaymentIcon"
import TaxiIcon from "../icons/TaxiIcon"
import StepItem from "./StepItem"
import women from "../assets/women.jpg"
import building from "../assets/building.png"
const BookSteps = () => {
    return (
        <section className="py-10 flex ">
            <div className="flex-2">
                <h2 className='text-para font-semibold font-heroPara  text-2xl '>Easy and fast</h2>
                <h1 className='pt-8 font-heroHeading font-semibold text-5xl  text-heading'>Book Your Next trip In 3 Easy Steps</h1>
                <ul className="space-y-8 mt-10 max-w-md mx-auto lg:mx-0">
                    <StepItem
                        Icon={DestinationIcon}
                        bgColor="bg-yellow-400"
                        title="Choose Destination"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
                    />
                    <StepItem
                        Icon={PaymentIcon}
                        bgColor="bg-orange-500"
                        title="Make Payment"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
                    />
                    <StepItem
                        Icon={TaxiIcon}
                        bgColor="bg-cyan-500"
                        title="Reach Airport on Selected Date"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
                    />
                </ul>
            </div>
            <div className="flex-3  relative flex justify-center items-center  mt-12 lg:mt-0">
                <div className="relative w-full max-w-sm">

                    {/* Main Trip Card */}
                    <div className="bg-white p-4 rounded-3xl shadow-2xl shadow-slate-300/40 h-[] w-full">
                        <div className="aspect-w-16 aspect-h-10">
                            <img
                                src={women}
                                className="rounded-2xl w-full h-full object-cover"
                                alt="A woman in a red dress in Santorini, Greece"
                            />
                        </div>
                        <div className="p-2 mt-2">
                            <h4 className="font-bold text-lg text-slate-700">Trip To Greece</h4>
                            <p className="text-slate-500 text-sm mt-1">14-29 June | by Robbin jc</p>
                            <div className="flex space-x-3 my-4">
                                <button className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors">
                                    <Leaf />
                                </button>
                                <button className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors">
                                    <Map />
                                </button>
                                <button className="bg-slate-100 p-3 rounded-full hover:bg-slate-200 transition-colors">
                                    <Send />
                                </button>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div className="flex items-center text-slate-500">
                                    <UsersRound />
                                    <span className="ml-2 font-medium">24 people going</span>
                                </div>
                                <button className="text-indigo-400 hover:text-indigo-500 transition-colors">
                                    <Heart />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Floating Card */}
                    <div className="absolute bg-white p-3 rounded-2xl shadow-2xl shadow-slate-400/50 bottom-24 -right-20 flex items-center space-x-3 w-[270px] transform transition-transform hover:scale-105">
                        <img
                            src={building}
                            className="rounded-full w-12 h-12 object-cover"
                            alt="St. Peter's Basilica, Rome"
                        />
                        <div>
                            <p className="text-slate-400 text-sm font-medium">Ongoing</p>
                            <p className="font-bold text-para">Trip to rome</p>
                            <div className="flex items-center mt-1">
                                <p className="text-indigo-600 text-sm font-bold mr-2">40%</p>
                                <div className="w-full bg-slate-200 rounded-full h-1.5">
                                    <div className="bg-linear-to-r from-indigo-400 to-indigo-600 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`absolute w-80 h-80 top-2 right-5 -z-40  bg-linear-to-r from-cyan-400 to-blue-500  blur-3xl opacity-20 `}>

                </div>
            </div>
        </section>
    )
}

export default BookSteps
