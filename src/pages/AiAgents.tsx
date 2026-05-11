import { Link } from "react-router-dom"
import ThreeBackground from "@/components/ui/three-background"
import { MessageCircle, BarChart3, FileText, TrendingUp, Search, Code2, ArrowRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/LanguageContext"

export default function AiAgents() {
  const { t } = useLanguage()

  const agents = [
    {
      icon: MessageCircle,
      titleKey: "ai.support.title",
      categoryKey: "ai.support.category",
      descKey: "ai.support.desc",
      capabilities: [
        "Natural language understanding",
        "Ticket routing & escalation",
        "FAQ resolution",
        "Multi-language support",
        "Sentiment analysis",
      ],
    },
    {
      icon: BarChart3,
      titleKey: "ai.analytics.title",
      categoryKey: "ai.analytics.category",
      descKey: "ai.analytics.desc",
      capabilities: [
        "SQL & API data integration",
        "Statistical analysis",
        "Automated reporting",
        "Anomaly detection",
        "Trend forecasting",
      ],
    },
    {
      icon: FileText,
      titleKey: "ai.content.title",
      categoryKey: "ai.content.category",
      descKey: "ai.content.desc",
      capabilities: [
        "Brand voice matching",
        "SEO optimization",
        "Multi-format output",
        "Campaign planning",
        "A/B variant generation",
      ],
    },
    {
      icon: TrendingUp,
      titleKey: "ai.sales.title",
      categoryKey: "ai.sales.category",
      descKey: "ai.sales.desc",
      capabilities: [
        "Lead scoring & qualification",
        "Personalized email sequences",
        "CRM integration",
        "Meeting scheduling",
        "Pipeline reporting",
      ],
    },
    {
      icon: Search,
      titleKey: "ai.research.title",
      categoryKey: "ai.research.category",
      descKey: "ai.research.desc",
      capabilities: [
        "Web search & scraping",
        "Source validation",
        "Executive summaries",
        "Competitive analysis",
        "Citation management",
      ],
    },
    {
      icon: Code2,
      titleKey: "ai.code.title",
      categoryKey: "ai.code.category",
      descKey: "ai.code.desc",
      capabilities: [
        "Static analysis",
        "Security scanning",
        "Style enforcement",
        "Documentation checks",
        "Test coverage analysis",
      ],
    },
  ]

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
            <ArrowLeft size={14} /> {t("ai.back")}
          </Link>

          <div className="mb-20 max-w-3xl">
            <p
              className="text-xs font-medium tracking-[0.4em] text-[#FF5722] uppercase mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {t("ai.eyebrow")}
            </p>
            <h1
              className="text-6xl md:text-8xl font-bold text-white leading-none tracking-[-0.04em] mb-6"
              style={{ fontFamily: "'Geist Variable', sans-serif" }}
            >
              {t("ai.heading")}
              <span className="block text-[#8e9192] font-light text-4xl md:text-5xl mt-2 tracking-[-0.02em]">
                {t("ai.subheading")}
              </span>
            </h1>
            <p className="text-[#8e9192] text-xl leading-relaxed">
              {t("ai.intro")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.titleKey}
                className={cn(
                  "group p-8 rounded-lg border transition-all duration-500 cursor-default",
                  "bg-white/[0.03] backdrop-blur-sm border-white/[0.08]",
                  "hover:bg-white/[0.05] hover:border-[#FF5722]/20",
                  "hover:shadow-[0_0_40px_rgba(255,87,34,0.06)]"
                )}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-lg bg-[#FF5722]/10 border border-[#FF5722]/20 flex items-center justify-center group-hover:bg-[#FF5722]/20 transition-colors duration-300">
                    <agent.icon size={20} className="text-[#FF5722]" />
                  </div>
                  <span
                    className="px-2 py-1 text-[10px] font-medium tracking-widest text-[#FF5722]/70 border border-[#FF5722]/15 rounded bg-[#FF5722]/5 uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t(agent.categoryKey)}
                  </span>
                </div>

                <h3
                  className="text-xl font-semibold text-white mb-3 tracking-[-0.01em]"
                  style={{ fontFamily: "'Geist Variable', sans-serif" }}
                >
                  {t(agent.titleKey)}
                </h3>
                <p className="text-[#8e9192] text-sm leading-relaxed mb-6">
                  {t(agent.descKey)}
                </p>

                <ul className="space-y-2 mb-8">
                  {agent.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 text-xs text-[#8e9192]">
                      <span className="w-1 h-1 rounded-full bg-[#FF5722]/50 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 text-sm text-[#FF5722] group-hover:gap-3 transition-all duration-300"
                >
                  {t("ai.discuss")} <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-[#8e9192] mb-6 text-lg">{t("ai.ctaSub")}</p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#FF5722] text-black font-semibold rounded hover:bg-[#FF5722]/90 hover:shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all duration-300 text-sm tracking-wide"
              style={{ fontFamily: "'Geist Variable', sans-serif" }}
            >
              {t("ai.cta")} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
