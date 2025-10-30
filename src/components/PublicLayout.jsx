import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
export default function PublicLayout() {
    return (
        <div className="container bg-[url('../assets/Decore.png')] ">
            <Navigation />
            <main>
                <Outlet /> {/* This renders the nested public pages */}
            </main>
        </div>
    );
}
