import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/LanguageContext"
import type { Lang } from "@/lib/translations"

export default function Navbar() {
  const location = useLocation()
  const { lang, setLang, t } = useLanguage()

  const navLinks = [
    { label: t("nav.aiAgents"), to: "/ai-agents" },
    { label: t("nav.websites"), to: "/websites" },
    { label: t("nav.about"), to: "/#about" },
    { label: t("nav.contact"), to: "/#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 bg-black/30 backdrop-blur-md border-b border-white/[0.06]">
      <Link to="/" className="flex items-center gap-2">
        <span
          className="text-white font-bold text-lg tracking-wider"
          style={{ fontFamily: "'Geist Variable', sans-serif" }}
        >
          HEIMDALL
        </span>
        <span className="text-[#8e9192] text-sm font-light tracking-widest">DESIGNS</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive =
            link.to.startsWith("/") &&
            !link.to.includes("#") &&
            location.pathname === link.to

          return (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                "text-sm tracking-wide transition-colors duration-200 rainbow-glow",
                isActive ? "text-[#FF5722]" : "text-[#8e9192] hover:text-white"
              )}
            >
              {link.label}
            </Link>
          )
        })}
      </div>

      {/* Language toggle */}
      <div className="flex items-center gap-1 border border-white/[0.1] rounded p-0.5">
        {(["en", "da"] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={cn(
              "px-3 py-1.5 text-xs rounded tracking-wider uppercase transition-all duration-200",
              lang === l
                ? "bg-[#FF5722] text-black font-semibold"
                : "text-[#8e9192] hover:text-white"
            )}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {l}
          </button>
        ))}
      </div>
    </nav>
  )
}
