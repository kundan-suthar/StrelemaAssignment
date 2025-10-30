import { Routes, Route } from "react-router"
import Layout from "./components/Layout"
import Public from "./pages/Public"
import Login from "./pages/Login"
import DashBoard from "./pages/DashBoard"

function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}

        <Route path="dash" element={<DashBoard />} />

      </Route>
    </Routes>
  )
}

export default App
