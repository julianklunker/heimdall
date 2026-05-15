import { ShaderAnimation } from "@/components/ui/shader-animation"
import { useLanguage } from "@/lib/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#000000_90%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p
          className="text-xs font-medium tracking-[0.4em] text-[#FF5722] uppercase mb-10"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {t("hero.eyebrow")}
        </p>

        <h1
          className="text-[clamp(3rem,11vw,7.5rem)] font-bold text-white leading-none tracking-[-0.04em]"
          style={{ fontFamily: "'Geist Variable', sans-serif" }}
        >
          JULIAN'S
          <span
            className="block text-[clamp(1.5rem,5vw,4rem)] font-light text-[#8e9192] tracking-[0.3em] mt-2"
            style={{ fontFamily: "'Geist Variable', sans-serif" }}
          >
            WEB SERVICE
          </span>
        </h1>

        <p className="text-[#8e9192] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-10 mb-12">
          {t("hero.tagline")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#work"
            className="px-8 py-3.5 bg-[#FF5722] text-black font-semibold rounded hover:bg-[#FF5722]/90 hover:shadow-[0_0_20px_rgba(255,87,34,0.35)] transition-all duration-300 tracking-wide text-sm"
            style={{ fontFamily: "'Geist Variable', sans-serif" }}
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/20 text-white font-medium rounded hover:bg-white/5 transition-all duration-300 tracking-wide text-sm"
          >
            {t("hero.cta2")}
          </a>
        </div>
      </div>

      {/* Bottom fade into black */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8e9192] z-10">
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {t("hero.scroll")}
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#8e9192] to-transparent" />
      </div>
    </section>
  )
}
