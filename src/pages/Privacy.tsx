import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import ThreeBackground from "@/components/ui/three-background"

export default function Privacy() {
  return (
    <div className="relative min-h-screen bg-black">
      <ThreeBackground />

      <div className="relative z-10 pt-24 pb-32 px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#8e9192] hover:text-[#FF5722] text-sm transition-colors mb-12"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <p
            className="text-xs font-medium tracking-[0.4em] text-[#FF5722] uppercase mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — Legal
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white leading-none tracking-[-0.04em] mb-4"
            style={{ fontFamily: "'Geist Variable', sans-serif" }}
          >
            Privacy Policy
          </h1>
          <p className="text-[#555] text-sm mb-16" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Last updated: May 2026
          </p>

          <div className="space-y-12 text-[#8e9192] leading-relaxed">

            <Section title="1. Data Controller">
              <p>The data controller for this website is:</p>
              <div className="mt-4 pl-4 border-l border-white/[0.08] space-y-1 text-sm">
                <p className="text-white">Julian Zachar-Fink</p>
                <p>Bolettevej 28</p>
                <p>CVR: 43486489</p>
                <p>
                  Email:{" "}
                  <a href="mailto:julianzacharfink@gmail.com" className="text-[#FF5722] hover:underline">
                    julianzacharfink@gmail.com
                  </a>
                </p>
              </div>
            </Section>

            <Section title="2. What Data We Collect">
              <p>
                When you submit the contact form on this website, we collect the following personal data:
              </p>
              <ul className="mt-4 space-y-2 list-none pl-4 border-l border-white/[0.08] text-sm">
                <li><span className="text-white">Name</span> — to address you in our reply</li>
                <li><span className="text-white">Email address</span> — to respond to your enquiry</li>
                <li><span className="text-white">Message content</span> — to understand your project needs</li>
                <li><span className="text-white">Project type</span> — to route your request correctly</li>
              </ul>
              <p className="mt-4 text-sm">
                We do not collect any data beyond what you voluntarily provide in the contact form.
              </p>
            </Section>

            <Section title="3. How We Use Your Data">
              <p>Your data is used solely to:</p>
              <ul className="mt-4 space-y-2 list-none pl-4 border-l border-white/[0.08] text-sm">
                <li>→ Respond to your enquiry or project request</li>
                <li>→ Follow up on any ongoing conversation related to a project</li>
              </ul>
              <p className="mt-4 text-sm">
                We do not use your data for marketing, profiling, or any automated decision-making. We do not
                sell or share your data with third parties.
              </p>
            </Section>

            <Section title="4. Legal Basis (GDPR)">
              <p className="text-sm">
                Processing is based on <span className="text-white">legitimate interest</span> (GDPR Article
                6(1)(f)) — specifically, responding to your voluntary contact request — and, where applicable,{" "}
                <span className="text-white">your consent</span> given by submitting the form.
              </p>
            </Section>

            <Section title="5. Data Processor — EmailJS">
              <p className="text-sm">
                Contact form submissions are transmitted via{" "}
                <span className="text-white">EmailJS</span> (emailjs.com), a third-party service that
                delivers form data to our inbox. EmailJS processes your data as a data processor on our
                behalf. No form data is stored on their servers beyond the time needed for delivery.
              </p>
              <p className="mt-3 text-sm">
                For more information, see the{" "}
                <a
                  href="https://www.emailjs.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF5722] hover:underline"
                >
                  EmailJS Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section title="6. Cookies">
              <p className="text-sm">
                This website uses a single functional cookie to remember your cookie consent preference.
                No tracking, analytics, or advertising cookies are used.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left py-2 pr-6 text-white font-medium">Cookie</th>
                      <th className="text-left py-2 pr-6 text-white font-medium">Purpose</th>
                      <th className="text-left py-2 text-white font-medium">Expires</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/[0.04]">
                      <td className="py-2 pr-6 font-mono text-xs text-[#FF5722]">cookie_consent</td>
                      <td className="py-2 pr-6">Stores your cookie consent choice</td>
                      <td className="py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="7. Data Retention">
              <p className="text-sm">
                Email enquiries are retained in our inbox for as long as is reasonably necessary to
                complete the business relationship or project discussion. You may request deletion at any
                time by contacting us.
              </p>
            </Section>

            <Section title="8. Your Rights">
              <p className="text-sm">Under GDPR, you have the right to:</p>
              <ul className="mt-4 space-y-2 text-sm pl-4 border-l border-white/[0.08]">
                <li>→ <span className="text-white">Access</span> the personal data we hold about you</li>
                <li>→ <span className="text-white">Rectify</span> inaccurate data</li>
                <li>→ <span className="text-white">Erase</span> your data ("right to be forgotten")</li>
                <li>→ <span className="text-white">Object</span> to processing</li>
                <li>→ <span className="text-white">Lodge a complaint</span> with the Danish Data Protection Agency (Datatilsynet) at{" "}
                  <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-[#FF5722] hover:underline">
                    datatilsynet.dk
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-sm">
                To exercise any of these rights, contact:{" "}
                <a href="mailto:julianzacharfink@gmail.com" className="text-[#FF5722] hover:underline">
                  julianzacharfink@gmail.com
                </a>
              </p>
            </Section>

            <Section title="9. Changes to This Policy">
              <p className="text-sm">
                We may update this policy from time to time. The date at the top of this page reflects the
                most recent revision. Continued use of the site after changes constitutes acceptance of the
                updated policy.
              </p>
            </Section>

          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        className="text-lg font-semibold text-white mb-4 tracking-[-0.01em]"
        style={{ fontFamily: "'Geist Variable', sans-serif" }}
      >
        {title}
      </h2>
      {children}
    </div>
  )
}
