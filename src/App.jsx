import { Routes, Route } from "react-router";
import { Suspense, lazy } from "react";

// Lazy imports (code splitting)
const Layout = lazy(() => import("./components/Layout"));
const PublicLayout = lazy(() => import("./components/PublicLayout"));
const Public = lazy(() => import("./pages/Public"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const DashBoard = lazy(() => import("./pages/DashBoard"));
const Destinations = lazy(() => import("./pages/placeholders/Destinations"));
const Hotels = lazy(() => import("./pages/placeholders/Hotels"));
const Flights = lazy(() => import("./pages/placeholders/Flights"));
const Bookings = lazy(() => import("./pages/placeholders/Bookings"));


const Loader = () => (
  <div className="flex items-center justify-center h-screen text-lg font-semibold">
    Loading...
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          <Route element={<PublicLayout />}>
            <Route index element={<Public />} />
            <Route path="dest" element={<Destinations />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="flights" element={<Flights />} />
            <Route path="bookings" element={<Bookings />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          {/* Protected routes */}
          <Route path="dash" element={<DashBoard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
