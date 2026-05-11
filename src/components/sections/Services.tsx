import { Globe, Bot, Wand2, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/LanguageContext"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Globe,
      titleKey: "services.web.title",
      descKey: "services.web.desc",
      tags: ["React", "Next.js", "TypeScript", "Tailwind"],
      href: "/websites",
    },
    {
      icon: Bot,
      titleKey: "services.ai.title",
      descKey: "services.ai.desc",
      tags: ["LLMs", "Automation", "APIs", "Workflows"],
      href: "/ai-agents",
    },
    {
      icon: Wand2,
      titleKey: "services.marketing.title",
      descKey: "services.marketing.desc",
      tags: ["Midjourney", "Stable Diffusion", "Video AI", "Ads"],
      href: "/#contact",
    },
  ]

  return (
    <section id="services" className="py-32 px-8 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p
            className="text-xs font-medium tracking-[0.4em] text-[#FF5722] uppercase mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {t("services.eyebrow")}
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-[-0.02em]"
            style={{ fontFamily: "'Geist Variable', sans-serif" }}
          >
            {t("services.heading")}
            <span className="block text-[#8e9192] font-light">{t("services.subheading")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.titleKey}
              to={service.href}
              className={cn(
                "group p-10 rounded-lg border transition-all duration-500 cursor-pointer block",
                "bg-white/[0.03] backdrop-blur-xl border-white/[0.08]",
                "hover:bg-white/[0.05] hover:border-[#FF5722]/20",
                "hover:shadow-[0_0_50px_rgba(255,87,34,0.06)]"
              )}
            >
              <div className="mb-8">
                <div className="w-11 h-11 rounded-lg bg-[#FF5722]/10 border border-[#FF5722]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF5722]/20 transition-colors duration-300">
                  <service.icon size={20} className="text-[#FF5722]" />
                </div>
                <h3
                  className="text-2xl font-semibold text-white mb-4 tracking-[-0.01em]"
                  style={{ fontFamily: "'Geist Variable', sans-serif" }}
                >
                  {t(service.titleKey)}
                </h3>
                <p className="text-[#8e9192] leading-relaxed">{t(service.descKey)}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] text-[#8e9192] border border-white/[0.08] rounded bg-white/[0.03] uppercase tracking-wider"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="flex items-center gap-2 text-sm text-[#FF5722] group-hover:gap-3 transition-all duration-300">
                {t("services.learnMore")} <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
