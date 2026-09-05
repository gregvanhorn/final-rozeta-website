import { Navigate, Route, Routes } from "react-router-dom";

import { LandingPage } from "@/components/LandingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/lp" element={<Navigate to="/" replace />} />
      <Route path="/lp/:variant" element={<LandingPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}
