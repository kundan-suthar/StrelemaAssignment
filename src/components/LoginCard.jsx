
import { useState } from 'react';
import { Lock, Phone } from 'lucide-react';
import axios from '../api/axios';
import { useAuth } from '../Context/useContext';
import { useNavigate } from 'react-router';
const LOGIN_URL = "/api/auth/login"
const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate()


    const { setAuth } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic here
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({
                    phone: email, password
                }),
                {
                    headers: { 'Content-Type': 'application/json' },

                }
            )
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.token
            const user = response?.data?.user
            setAuth({ user, accessToken })
            setErrorMessage("")
            setEmail("")
            setPassword("")
            navigate("/dash")
        } catch (err) {
            if (!err?.response) {
                setErrorMessage("no response from server")
            }
            else if (err.response?.status == 400) {
                setErrorMessage("missing username or password")
            }
            else if (err.response?.status == 401) {
                setErrorMessage("Unauthorised")
            } else {
                setErrorMessage("Login Failed")
            }

        }
        console.log({ email, password });
    };

    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-left mb-6">
                Login
            </h2>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-600 mb-2"
                    >
                        Phone
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="phone"
                            name="phone"
                            type="phone"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 sm:text-sm transition duration-150 ease-in-out"
                            placeholder="enter phone"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-600 mb-2"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 sm:text-sm transition duration-150 ease-in-out"
                            placeholder="enter password"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-gray-700"
                        >
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a
                            href="#"
                            className="font-medium text-gray-500 hover:text-violet-600 transition duration-150 ease-in-out"
                        >
                            Forgot password?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-transform transform hover:scale-105"
                    >
                        Login Now
                    </button>
                </div>
            </form>
            <p className="mt-8 text-center text-sm text-gray-500">
                Don't have an account?{' '}
                <a href="#" className="font-medium text-gray-800 hover:text-violet-600 transition duration-150 ease-in-out">
                    Sign up
                </a>
            </p>
        </div>
    );
};

export default LoginCard;
