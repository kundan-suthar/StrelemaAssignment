import { Link, NavLink } from "react-router"
import LanguageDropdown from "./LanguageDropdown"



const Navigation = () => {
    return (
        <nav className="my-4 py-2 flex justify-between items-center">
            <div>
                <Link to={'/'}>
                    <p className="text-3xl font-logo">Travel.ly</p>
                </Link>
            </div>
            <div className="flex gap-14">
                <NavLink
                    to="/dest"
                    className={({ isActive }) =>
                        ` flex font-nav font-normal text-nav ${isActive
                            ? "text-red-400 "
                            : ""
                        }`
                    }
                >
                    Destinations
                </NavLink>

                <NavLink
                    to="/hotels"
                    className={({ isActive }) =>
                        ` flex font-nav font-normal text-nav ${isActive
                            ? "text-red-400 "
                            : ""
                        }`
                    }
                >
                    Hotels
                </NavLink>


                <NavLink
                    to="/flights"
                    className={({ isActive }) =>
                        ` flex font-nav font-normal text-nav ${isActive
                            ? "text-red-400 "
                            : ""
                        }`
                    }
                >
                    Flights
                </NavLink>

                <NavLink
                    to="/bookings"
                    className={({ isActive }) =>
                        ` flex font-nav font-normal text-nav ${isActive
                            ? "text-red-400 "
                            : ""
                        }`
                    }
                >
                    Bookings
                </NavLink>

            </div>
            <div className="flex items-center gap-12">
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        ` flex font-nav font-normal text-nav ${isActive
                            ? "text-red-400 "
                            : ""
                        }`
                    }
                >
                    Login
                </NavLink>
                <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                        ` flex font-nav font-normal text-nav border py-2 px-4 border-nav rounded-sm ${isActive
                            ? "text-red-400 "
                            : ""
                        }`
                    }
                >
                    Sign Up
                </NavLink>

                <LanguageDropdown />

            </div>
        </nav>
    )
}

export default Navigation
