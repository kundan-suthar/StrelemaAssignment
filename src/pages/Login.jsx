import LoginCard from "../components/LoginCard"


const Login = () => {
    return (
        <div className="relative min-h-screen w-full bg-gray-900">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/images/auth.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="relative min-h-screen flex items-center justify-center p-4 z-20">
                <LoginCard />
            </div>
        </div>
    )
}

export default Login
