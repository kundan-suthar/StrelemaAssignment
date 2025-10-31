import { Facebook, Instagram, Play, Twitter } from "lucide-react";
import InstaIcon from "../icons/InstaIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import GooglePlayIcon from "../icons/GooglePlayIcon";
import AppleStoreIcon from "../icons/AppleStoreIcon";

const FooterLink = ({ href, children }) => (
    <li>
        <a href={href} className="text-para font-heroPara hover:text-gray-800 transition-colors duration-300">
            {children}
        </a>
    </li>
);

const FooterSection = ({ title, children }) => (
    <div>
        <h3 className="text-xl font-heroPara font-bold text-gray-900 mb-6">{title}</h3>
        <ul className="space-y-4">
            {children}
        </ul>
    </div>
);
const Footer = () => {
    return (
        <footer className="w-full">
            <div className="relative max-w-7xl mx-auto">
                <div className="relative bg-white pt-16 pb-12 px-8 md:px-16 overflow-hidden">


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 lg:gap-x-8">

                        {/* Brand Info */}
                        <div className="lg:col-span-4">
                            <div className="relative inline-block after:content-[url('/logo.svg')] after:absolute after:-top-3 after:-right-5 after:w-8 after:h-8 after:opacity-80">
                                <h2 className="text-4xl font-extrabold text-gray-900 relative z-10">Travello</h2>
                            </div>
                            <p className="mt-4 text-para font-semibold text-sm max-w-xs">
                                Book your trip in minute, get full Control for much longer.
                            </p>
                        </div>

                        {/* Links */}
                        <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
                            <FooterSection title="Company">
                                <FooterLink href="#">About</FooterLink>
                                <FooterLink href="#">Careers</FooterLink>
                                <FooterLink href="#">Mobile</FooterLink>
                            </FooterSection>
                            <FooterSection title="Contact">
                                <FooterLink href="#">Help/FAQ</FooterLink>
                                <FooterLink href="#">Press</FooterLink>
                                <FooterLink href="#">Affiliates</FooterLink>
                            </FooterSection>
                            <FooterSection title="More">
                                <FooterLink href="#">Airlinefees</FooterLink>
                                <FooterLink href="#">Airline</FooterLink>
                                <FooterLink href="#">Low fare tips</FooterLink>
                            </FooterSection>
                        </div>

                        {/* Social and App */}
                        <div className="lg:col-span-3">
                            <div className="flex items-center space-x-4">
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                                    <FacebookIcon />
                                </a>
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-shadow">
                                    <InstaIcon />
                                </a>
                                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                                    <TwitterIcon />
                                </a>
                            </div>
                            <p className="my-6 text-lg font-heroPara font-semibold text-para">Discover our app</p>
                            <div className="flex flex-col sm:flex-row  items-start gap-4">
                                <a href="#" className="inline-block transition-transform hover:scale-105">
                                    <GooglePlayIcon />
                                </a>
                                <a href="#" className="inline-block transition-transform hover:scale-105">
                                    <AppleStoreIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
