import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const savedLogin = localStorage.getItem("isLoggedIn");
        if (savedLogin === "true") setIsLoggedIn(true);
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext