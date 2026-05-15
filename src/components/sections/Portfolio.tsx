const projects = [
  {
    id: 1,
    title: "Economy Bot",
    category: "AI Automation",
    tags: ["Python", "AI", "Excel", "Finance"],
    image: "/images/portfolio/spreadsheet.png",
    desc: "Upload your bank statements or financial exports and receive a clean, structured Excel report — automatically categorised, summarised, and ready to use. No manual formatting, no spreadsheet headaches.",
    built: "Built with Python and AI-powered data parsing. The bot reads multiple file formats, reconciles transactions, and outputs a formatted Excel workbook in seconds.",
    cta: "Just send your files — everything else is handled.",
  },
  {
    id: 2,
    title: "Swiss Simple",
    category: "Web Development",
    tags: ["React", "Tailwind", "Typography", "Minimal"],
    image: null,
    video: "/videos/Swiss simple.mp4",
    desc: "A minimalist portfolio website inspired by Swiss design principles — precise typography, clean grid layouts, and zero visual noise. Built to let the work speak for itself.",
    built: "Built with React and Tailwind CSS. Every spacing decision follows an 8pt grid; typography is set with Geist for maximum legibility across devices.",
    cta: "You bring the content — I handle design and delivery.",
  },
  {
    id: 3,
    title: "AI Product Ads",
    category: "AI Marketing",
    tags: ["Midjourney", "ControlNet", "Video AI", "Ads"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    desc: "Send one reference photo of your product — a bag, a shoe, a bottle — and receive a full set of professional marketing visuals: varied model poses, lighting setups, and cinematic backdrops. No photoshoot required.",
    built: "Powered by Midjourney and ControlNet for image generation, with AI video tools for motion ads. Each output is production-ready for social media, print, or digital campaigns.",
    cta: "You provide a reference image — I deliver a full campaign.",
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="py-32 px-8 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p
            className="text-xs font-medium tracking-[0.4em] text-[#FF5722] uppercase mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — Selected Projects
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-[-0.02em]"
            style={{ fontFamily: "'Geist Variable', sans-serif" }}
          >
            Real Work,
            <span className="block text-[#8e9192] font-light">Real Results</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden border border-white/[0.08] bg-white/[0.02] hover:border-[#FF5722]/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,87,34,0.07)] flex flex-col"
            >
              <div className="relative overflow-hidden h-52 flex-shrink-0">
                {"video" in project && project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                ) : (
                  <img
                    src={project.image as string}
                    alt={project.title}
                    loading="lazy"
                    width={600}
                    height={208}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span
                  className="absolute top-4 left-4 px-2.5 py-1 text-[10px] text-[#FF5722] border border-[#FF5722]/30 rounded bg-[#FF5722]/10 backdrop-blur-sm uppercase tracking-wider"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {project.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-xl font-semibold text-white mb-3 tracking-[-0.01em]"
                  style={{ fontFamily: "'Geist Variable', sans-serif" }}
                >
                  {project.title}
                </h3>

                <p className="text-[#8e9192] text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                <p className="text-[#555] text-xs leading-relaxed mb-5 italic">
                  {project.built}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] text-[#8e9192] border border-white/[0.06] rounded bg-white/[0.02] uppercase tracking-wider"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p
                  className="text-[#FF5722] text-xs mt-auto tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  → {project.cta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
