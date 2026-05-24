export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          ADA Compliance for Online Courses
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-Fix Video Transcripts for{" "}
          <span className="text-[#58a6ff]">Accessibility Compliance</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your auto-generated course transcripts. Our AI fixes grammar, punctuation, speaker labels, and formatting to meet ADA standards — then hands you a downloadable compliant file and full accessibility report.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { step: "1", title: "Upload Transcript", desc: "Paste or upload your .txt, .srt, or .vtt transcript file." },
            { step: "2", title: "AI Processes It", desc: "OpenAI fixes grammar, punctuation, speaker IDs, and formatting." },
            { step: "3", title: "Download & Report", desc: "Get your ADA-compliant file plus a detailed accessibility report." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="w-9 h-9 rounded-full bg-[#58a6ff] text-[#0d1117] font-bold flex items-center justify-center mx-auto mb-3 text-sm">{item.step}</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#8b949e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited transcript uploads",
              "AI grammar & punctuation fixes",
              "Speaker identification & labeling",
              "SRT, VTT, and TXT support",
              "Detailed ADA accessibility report",
              "Downloadable compliant files"
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What transcript formats are supported?",
              a: "We support .txt plain text, .srt SubRip, and .vtt WebVTT formats — the most common outputs from auto-captioning tools like YouTube, Zoom, and Otter.ai."
            },
            {
              q: "How does the AI ensure ADA compliance?",
              a: "Our AI corrects grammar, adds proper punctuation, identifies and labels speakers, fixes timing gaps, and formats output to meet WCAG 2.1 and Section 508 captioning guidelines."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Transcript Accessibility Fixer. All rights reserved.
      </footer>
    </main>
  )
}
