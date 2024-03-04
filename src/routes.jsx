import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function ApplicationRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      {/* <Route path="/reservations" element={<Reservations />} /> */}
    </Routes>
  )
}

export default ApplicationRoutes