import { useState, useEffect, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { Send, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"

const inputClass =
  "w-full bg-white/[0.04] border border-white/[0.08] rounded px-4 py-3 text-white placeholder-[#444748] focus:outline-none focus:border-[#FF5722]/50 focus:shadow-[0_0_0_1px_rgba(255,87,34,0.2)] transition-all text-sm"

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Website",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 4000)
      return () => clearTimeout(timer)
    }
  }, [status])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
      setFormData({ name: "", email: "", projectType: "Website", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-32 px-8 bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-xs font-medium tracking-[0.4em] text-[#FF5722] uppercase mb-4"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {t("contact.eyebrow")}
        </p>
        <h2
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-[-0.03em]"
          style={{ fontFamily: "'Geist Variable', sans-serif" }}
        >
          {t("contact.heading1")}
          <span className="block text-[#8e9192] font-light">{t("contact.heading2")}</span>
        </h2>
        <p className="text-[#8e9192] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          {t("contact.subtext")}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="rounded-lg p-[1px] bg-gradient-to-b from-[#FF5722]/15 to-white/[0.04]">
            <div className="bg-[#0a0a0a] rounded-lg p-8 space-y-4 text-left">

              {status === "success" && (
                <div className="rounded px-4 py-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                  {t("contact.success")}
                </div>
              )}
              {status === "error" && (
                <div className="rounded px-4 py-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {t("contact.error")}
                </div>
              )}

              <input
                type="text"
                placeholder={t("contact.name")}
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                className={inputClass}
                style={{ fontFamily: "'Geist Variable', sans-serif" }}
                required
              />
              <input
                type="email"
                placeholder={t("contact.email")}
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                className={inputClass}
                style={{ fontFamily: "'Geist Variable', sans-serif" }}
                required
              />

              {/* Styled select */}
              <div className="relative">
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData((p) => ({ ...p, projectType: e.target.value }))}
                  className="w-full appearance-none bg-[#0d0d0d] border border-white/[0.08] rounded px-4 py-3 text-white focus:outline-none focus:border-[#FF5722]/50 focus:shadow-[0_0_0_1px_rgba(255,87,34,0.2)] transition-all text-sm pr-10 cursor-pointer"
                  style={{ fontFamily: "'Geist Variable', sans-serif" }}
                >
                  <option value="Website" className="bg-[#0d0d0d] text-white">
                    {t("contact.option.website")}
                  </option>
                  <option value="AI Automation" className="bg-[#0d0d0d] text-white">
                    {t("contact.option.ai")}
                  </option>
                  <option value="AI Marketing" className="bg-[#0d0d0d] text-white">
                    {t("contact.option.marketing")}
                  </option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8e9192] pointer-events-none"
                />
              </div>

              <textarea
                placeholder={t("contact.message")}
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                rows={5}
                className={`${inputClass} resize-none`}
                style={{ fontFamily: "'Geist Variable', sans-serif" }}
                required
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-3 px-8 py-3.5 bg-[#FF5722] text-black font-semibold rounded hover:bg-[#FF5722]/90 hover:shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all duration-300 group text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Geist Variable', sans-serif" }}
              >
                {status === "sending" ? t("contact.sending") : t("contact.send")}
                {status !== "sending" && (
                  <Send size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
