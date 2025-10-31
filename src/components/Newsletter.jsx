import { Mail, Send } from "lucide-react";
import { useState } from "react";
import newsLetterSpiral1 from "../assets/newsLetterSpiral1.png"

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Thank you for subscribing, ${email}!`);
            setEmail('');
        }
    };
    return (
        <div className="relative w-full max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-8 ">


            {/* Main card */}
            <div className="relative bg-[#f9f6fd]  p-8 sm:p-16  text-center rounded-[100px_1rem_1rem_1rem]  ">
                {/* Send Icon Button */}
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-linear-to-tl from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center transform rotate-30 shadow-lg">
                    <Send className="w-6 h-6 text-white transform -rotate-12 -translate-x-0.5" />
                </div>




                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center ">
                    <img src={newsLetterSpiral1} alt="spiral" className="absolute  -left-28" />
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#5E6282] max-w-lg mx-auto mb-10 leading-snug">
                        Subscribe to get information, latest news and other interesting offers about Jadoo
                    </h2>

                    <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <div className="relative grow w-full">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500">
                                <Mail className="w-5 h-5" />
                            </span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                required
                                aria-label="Your email"
                                className="w-full h-16 pl-14 pr-6 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 placeholder-gray-500 shadow-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-10 h-16 bg-linear-to-b from-[#FF946D] to-[#FF7D68] text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:from-[#ff8a5f] hover:to-[#ff705a] transition-all duration-300 ease-in-out transform hover:-translate-y-1 whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default Newsletter
