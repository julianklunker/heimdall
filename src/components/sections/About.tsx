import { Share2 } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"

const techStack = [
  "React", "TypeScript", "Next.js", "Tailwind CSS",
  "Node.js", "Python", "Supabase", "Vite", "Framer Motion", "AI APIs",
]

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-32 px-8 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs font-medium tracking-[0.4em] text-[#FF5722] uppercase mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {t("about.eyebrow")}
            </p>
            <h2
              className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8 tracking-[-0.02em]"
              style={{ fontFamily: "'Geist Variable', sans-serif" }}
            >
              {t("about.heading")}
              <br />
              <span className="text-[#8e9192] font-light">{t("about.subheading")}</span>
            </h2>
            <p className="text-[#8e9192] text-lg leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-[#8e9192] leading-relaxed mb-8">
              {t("about.p2")}
            </p>

            {/* Tech stack */}
            <div className="mb-10">
              <p
                className="text-[10px] text-[#FF5722] uppercase tracking-[0.3em] mb-3"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t("about.tech")}
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] text-[#8e9192] border border-white/[0.08] rounded bg-white/[0.03] uppercase tracking-wider"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/julian-zachar-fink-5574672b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#FF5722]/40 text-[#FF5722] text-sm rounded hover:bg-[#FF5722]/10 transition-all duration-300 mb-12"
              style={{ fontFamily: "'Geist Variable', sans-serif" }}
            >
              <Share2 size={14} />
              {t("about.linkedin")}
            </a>

            <div className="grid grid-cols-3 gap-8 border-t border-white/[0.08] pt-8">
              {(["about.stat1", "about.stat2", "about.stat3"] as const).map((key) => (
                <div key={key}>
                  <div
                    className="text-[#FF5722] text-sm font-semibold mb-1 tracking-wide"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    ●
                  </div>
                  <div
                    className="text-white text-base font-semibold tracking-[-0.01em] mb-0.5"
                    style={{ fontFamily: "'Geist Variable', sans-serif" }}
                  >
                    {t(key)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#FF5722]/5 rounded-2xl blur-3xl pointer-events-none" />
            <div className="relative rounded-lg overflow-hidden border border-white/[0.08]">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
                alt="Developer workspace with monitor displaying code"
                width={800}
                height={500}
                loading="lazy"
                className="w-full h-[500px] object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

              {/* Floating info card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/70 backdrop-blur-md border border-white/[0.08] rounded-lg">
                <p
                  className="text-[10px] text-[#FF5722] uppercase tracking-[0.3em] mb-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Available for new projects
                </p>
                <p className="text-white text-sm font-medium" style={{ fontFamily: "'Geist Variable', sans-serif" }}>
                  Julian Zachar-Fink — Copenhagen, Denmark
                </p>
                <p className="text-[#8e9192] text-xs mt-0.5">CVR: 43486489</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
