import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Day from "./pages/Day.jsx";
import ParticleField from "./components/ParticleField.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ParticleField />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/day/:dayNumber" element={<Day />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
