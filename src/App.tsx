import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CookieBanner from "@/components/ui/CookieBanner"
import Home from "@/pages/Home"
import AiAgents from "@/pages/AiAgents"
import Websites from "@/pages/Websites"
import Privacy from "@/pages/Privacy"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-agents" element={<AiAgents />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  )
}
