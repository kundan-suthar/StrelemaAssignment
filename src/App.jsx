import { Routes, Route } from "react-router"
import Layout from "./components/Layout"
import Public from "./pages/Public"
import Login from "./pages/Login"
import DashBoard from "./pages/DashBoard"
import Destinations from "./pages/placeholders/Destinations"
import PublicLayout from "./components/PublicLayout"
import Hotels from "./pages/placeholders/Hotels"
import Flights from "./pages/placeholders/Flights"
import Bookings from "./pages/placeholders/Bookings"
import Signup from "./pages/Signup"

function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}

        <Route element={<PublicLayout />}>
          <Route index element={<Public />} />
          <Route path="dest" element={<Destinations />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="flights" element={<Flights />} />
          <Route path="bookings" element={<Bookings />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />


        {/* protected routes */}

        <Route path="dash" element={<DashBoard />} />

      </Route>
    </Routes>
  )
}

export default App
