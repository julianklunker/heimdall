import { AtSign, Code2, Share2 } from "lucide-react"
import { Link } from "react-router-dom"
import { useLanguage } from "@/lib/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/[0.06] py-12 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span
              className="text-white font-bold text-base tracking-wider"
              style={{ fontFamily: "'Geist Variable', sans-serif" }}
            >
              HEIMDALL
            </span>
            <span className="text-[#8e9192] text-xs font-light tracking-widest">DESIGNS</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-[#8e9192] text-sm">{t("footer.copy")}</p>
            <p
              className="text-[#555] text-xs"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              CVR: 43486489
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="X / Twitter" className="text-[#8e9192] hover:text-[#FF5722] transition-colors">
              <AtSign size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/julian-zachar-fink-5574672b9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#8e9192] hover:text-[#FF5722] transition-colors"
            >
              <Share2 size={16} />
            </a>
            <a href="#" aria-label="GitHub" className="text-[#8e9192] hover:text-[#FF5722] transition-colors">
              <Code2 size={16} />
            </a>
          </div>
        </div>

        {/* Legal row */}
        <div className="border-t border-white/[0.04] pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-[#444] text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Julian Zachar-Fink · Bolettevej 28
          </p>
          <Link
            to="/privacy"
            className="text-[#444] hover:text-[#8e9192] text-xs transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
