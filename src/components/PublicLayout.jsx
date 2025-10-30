import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
export default function PublicLayout() {
    return (
        // <div className="relative px-4  after:content-[''] after:absolute after:right-0  after:bg-[url('/images/Decore.png')] after:bg-no-repeat after:bg-bottom after:bg-contain after:-z-10">
        <div className="bg-[url('/images/Decore.png')] bg-no-repeat  bg-top-right">


            <div className="container  ">
                <Navigation />
                <main>
                    <Outlet /> {/* This renders the nested public pages */}
                </main>
            </div>
        </div>
    );
}
