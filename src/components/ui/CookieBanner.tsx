import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem("cookie_consent", "accepted")
    setVisible(false)
  }

  function decline() {
    localStorage.setItem("cookie_consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-6 py-5 bg-[#0d0d0d] border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      style={{ fontFamily: "'Geist Variable', sans-serif" }}
    >
      <p className="text-[#8e9192] text-sm leading-relaxed max-w-2xl">
        This site uses a cookie to remember your consent preference. No tracking or advertising cookies are used.{" "}
        <Link to="/privacy" className="text-[#FF5722] hover:underline">
          Privacy Policy
        </Link>
      </p>

      <div className="flex items-center gap-3 flex-shrink-0">
        <button
          onClick={decline}
          className="px-4 py-2 text-xs text-[#8e9192] border border-white/[0.1] rounded hover:text-white hover:border-white/20 transition-all duration-200 uppercase tracking-wider"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="px-4 py-2 text-xs bg-[#FF5722] text-black font-semibold rounded hover:bg-[#FF5722]/90 transition-all duration-200 uppercase tracking-wider"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Accept
        </button>
      </div>
    </div>
  )
}
