import { Link, NavLink, useNavigate } from "react-router"
import LanguageDropdown from "./LanguageDropdown"
import { useAuth } from "../hooks/useContext";



const Navigation = () => {
    const { auth, setAuth } = useAuth(); // `auth` can store user/token info
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth(null); // clear auth context
        localStorage.removeItem("auth"); // if you store it in localStorage
        navigate("/login");
    };

    return (
        <nav className=" py-4 flex justify-between items-center">
            {/* <div>
                <Link to={'/'} className="after:content-[url('/images/logo.svg')] after:absolute   after:inset-0  ">
                    <p className="text-3xl font-logo ">Travel.ly</p>
                </Link>
            </div> */}
            <Link to={'/'} className="relative inline-block">
                <h2 className="relative text-4xl font-logo text-gray-900 z-10 
                  after:content-[url('/images/logo.svg')] after:absolute   after:inset-0  ">
                    Travel.ly
                </h2>
            </Link>
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
                {/* If not logged in */}
                {!auth ? (
                    <>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `flex font-nav font-normal text-nav ${isActive ? "text-red-400" : ""
                                }`
                            }
                        >
                            Login
                        </NavLink>

                        <NavLink
                            to="/signup"
                            className={({ isActive }) =>
                                `flex font-nav font-normal text-nav border py-2 px-4 border-nav rounded-sm ${isActive ? "text-red-400" : ""
                                }`
                            }
                        >
                            Sign Up
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink
                            to="/dash"
                            className={({ isActive }) =>
                                `flex font-nav font-normal text-nav ${isActive ? "text-red-400" : ""
                                }`
                            }
                        >
                            Dashboard
                        </NavLink>

                        <button
                            onClick={handleLogout}
                            className="flex font-nav font-normal text-nav border py-2 px-4 border-nav rounded-sm hover:cursor-pointer"
                        >
                            Logout
                        </button>
                    </>
                )}

                <LanguageDropdown />

            </div>
        </nav>
    )
}

export default Navigation
