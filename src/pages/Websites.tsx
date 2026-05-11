import { useState } from "react"
import { Link } from "react-router-dom"
import ThreeBackground from "@/components/ui/three-background"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/LanguageContext"

interface MousePos { x: number; y: number }

export default function Websites() {
  const { t } = useLanguage()
  const [hovered, setHovered] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 })

  const websiteTypes = [
    {
      titleKey: "websites.landing.title",
      categoryKey: "websites.landing.category",
      priceKey: "websites.landing.price",
      descKey: "websites.landing.desc",
      image: "/images/websites/landing-page.jpg",
      imageFallback: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=1200&q=80",
      video: "/videos/landing-page.mp4",
      tags: ["Vite", "Tailwind", "SEO", "Analytics"],
    },
    {
      titleKey: "websites.ecom.title",
      categoryKey: "websites.ecom.category",
      priceKey: "websites.ecom.price",
      descKey: "websites.ecom.desc",
      image: "/images/websites/ecommerce.jpg",
      imageFallback: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
      video: "/videos/ecommerce.mp4",
      tags: ["Next.js", "Shopify", "Payments", "SEO"],
    },
    {
      titleKey: "websites.portfolio.title",
      categoryKey: "websites.portfolio.category",
      priceKey: "websites.portfolio.price",
      descKey: "websites.portfolio.desc",
      image: "/images/websites/portfolio.jpg",
      imageFallback: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
      video: "/videos/portfolio.mp4",
      tags: ["React", "GSAP", "Animation", "CMS"],
    },
  ]

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    // Clamp to -1..1, convert visual offset (±14px) to pre-scale coords (÷1.5)
    const cx = Math.max(-1, Math.min(1, nx))
    const cy = Math.max(-1, Math.min(1, ny))
    setMousePos({ x: (cx * 14) / 1.5, y: (cy * 14) / 1.5 })
  }

  function handleMouseLeave() {
    setHovered(null)
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <div className="relative min-h-screen bg-black">
      <ThreeBackground />

      <div className="relative z-10 pt-24 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#8e9192] hover:text-[#FF5722] text-sm transition-colors mb-12"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <ArrowLeft size={14} /> {t("websites.back")}
          </Link>

          <div className="mb-20 max-w-3xl">
            <p
              className="text-xs font-medium tracking-[0.4em] text-[#FF5722] uppercase mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {t("websites.eyebrow")}
            </p>
            <h1
              className="text-6xl md:text-8xl font-bold text-white leading-none tracking-[-0.04em] mb-6"
              style={{ fontFamily: "'Geist Variable', sans-serif" }}
            >
              {t("websites.heading")}
              <span className="block text-[#8e9192] font-light text-4xl md:text-5xl mt-2 tracking-[-0.02em]">
                {t("websites.subheading")}
              </span>
            </h1>
            <p className="text-[#8e9192] text-xl leading-relaxed">
              {t("websites.intro")}
            </p>
          </div>

          {/* Stacked cards */}
          <div className="border-t border-white/[0.08]">
            {websiteTypes.map((site, i) => (
              <div
                key={site.titleKey}
                className={cn(
                  "flex flex-col border-b border-white/[0.08]",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Image / video area — in-place zoom on hover */}
                <div
                  className="relative md:w-[55%] h-72 md:h-[480px] cursor-pointer"
                  style={{ zIndex: hovered === i ? 20 : 1 }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseMove={hovered === i ? handleMouseMove : undefined}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Inner container — scales 1.5× and carries the parallax translate */}
                  <div
                    className="absolute inset-0 rounded-lg overflow-hidden"
                    style={{
                      transform: hovered === i
                        ? `scale(1.5) translate(${mousePos.x}px, ${mousePos.y}px)`
                        : "scale(1) translate(0px, 0px)",
                      transition: "transform 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      transformOrigin: "center",
                    }}
                  >
                    {/* Static image — fades out when video starts */}
                    <img
                      src={site.image}
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).src = site.imageFallback
                      }}
                      alt={t(site.titleKey)}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                      style={{ opacity: hovered === i ? 0 : 1 }}
                    />

                    {/* Video — always mounted for preload, fades in on hover */}
                    <video
                      src={site.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                      style={{ opacity: hovered === i ? 1 : 0 }}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Close hint */}
                    <span
                      className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] text-white/50 tracking-widest uppercase pointer-events-none transition-opacity duration-300"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        opacity: hovered === i ? 1 : 0,
                      }}
                    >
                      {t("websites.closeHint")}
                    </span>
                  </div>
                </div>

                {/* Text area */}
                <div className="md:w-[45%] flex flex-col justify-center p-10 md:p-16">
                  <p
                    className="text-xs font-medium tracking-[0.4em] text-[#FF5722] uppercase mb-4"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t(site.categoryKey)}
                  </p>
                  <h2
                    className="text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] mb-4"
                    style={{ fontFamily: "'Geist Variable', sans-serif" }}
                  >
                    {t(site.titleKey)}
                  </h2>
                  <div className="mb-6">
                    <span
                      className="inline-block px-3 py-1.5 text-[11px] text-[#FF5722] border border-[#FF5722]/30 rounded bg-[#FF5722]/[0.08] tracking-wider"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {t(site.priceKey)}
                    </span>
                  </div>
                  <p className="text-[#8e9192] leading-relaxed mb-8 text-base">
                    {t(site.descKey)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {site.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[10px] text-[#8e9192] border border-white/[0.06] rounded bg-white/[0.02] uppercase tracking-wider"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <Link
                      to="/#contact"
                      className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#FF5722] text-black font-semibold rounded hover:bg-[#FF5722]/90 hover:shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all duration-300 text-sm tracking-wide"
                      style={{ fontFamily: "'Geist Variable', sans-serif" }}
                    >
                      {t("websites.quote")} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
