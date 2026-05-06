import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const SHOPIFY_URL = "https://your-shopify-store.myshopify.com/products/private-consultation";

const MARQUEE_ITEMS = [
  "Vedic Jyotish", "Nakshatra Pada Analysis", "Navatara Cycle Timing",
  "Parashari & Jaimini Systems", "Birth Chart Synthesis", "D-9 & D-10 Divisional Charts",
  "Karmic Pattern Mapping", "Triple Sign Triad", "30 Years of Practice",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative min-h-screen md:h-screen flex flex-col md:flex-row md:items-center px-6 md:px-16 max-w-screen-2xl mx-auto pt-[120px] md:pt-20 pb-20 md:pb-0 overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 items-start md:items-center w-full">

            {/* Col 1 — Image */}
            <div className="relative max-w-[280px] md:max-w-none mx-auto md:mx-0 w-full">
              <div className="relative">
                <div className="absolute -inset-2 md:-inset-3 border border-primary/10 rounded-xl pointer-events-none z-0" />
                <div className="absolute -inset-4 md:-inset-6 border border-secondary-container/30 rounded-xl pointer-events-none z-0" />
                <div className="aspect-[3/4] md:max-h-[72vh] rounded-xl overflow-hidden shadow-2xl relative z-10 group" style={{position:'relative'}}>
                  <Image
                    alt="Dr. V. Brahmachari – Vedic Astrologer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX4FAjytnYlrVWmQj8xKdhF7u0JLy9l9Bswa0g8V6z6Qidk7etPp2JfRUtf4Y7i-_eX73rBBGCK2w--XDjmpKJzFdFLuP6rknoUnvISQtOV8taK0WzoW4nSO-2u2JwwUE02my8AuhaLsiUZUg2eFzNcK3V1c4s-_BRaYZFe0wOaVe4CLMWgo2m_WefZZYyqFqtEkz-29ivinfXWwmz_wlAAkG0UYcW94R-OKCt_iy0rDs5Bn-zmCep7CNx374Ru1JX0nQOsEf0pDk"
                    fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    unoptimized
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5">
                    <p className="font-serif italic text-surface text-xs md:text-sm leading-snug">
                      &quot;Fate is the map, but your will is the navigator.&quot;
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 z-20 bg-secondary-container text-on-secondary-container px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Est. 1994</span>
              </div>
            </div>

            {/* Col 2 — Title, Stats, CTAs */}
            <div className="z-10 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-6 md:w-8 h-px bg-secondary-container" />
                <span className="text-[10px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.25em] uppercase text-on-surface-variant">
                  Vedic Mastery · Celestial Guidance
                </span>
              </div>
              <h1 className="text-4xl md:text-[5rem] text-primary font-bold letter-spacing-tight leading-[0.95] mb-6 md:mb-5">
                Dr. V<br />
                <span className="italic font-light">Brahmachari</span>
              </h1>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-6 py-4 md:py-5 border-t border-b border-outline-variant/30">
                {[
                  { n: "30+", label: "Years of\nPractice" },
                  { n: "12K+", label: "Lives\nGuided" },
                  { n: "40+", label: "Countries\nReached" },
                ].map(({ n, label }) => (
                  <div key={n}>
                    <div className="text-xl md:text-3xl font-bold text-primary font-serif">{n}</div>
                    <div className="text-[9px] md:text-xs text-on-surface-variant mt-1 uppercase tracking-widest whitespace-pre-line">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href={SHOPIFY_URL} target="_blank" rel="noopener noreferrer"
                  className="bg-primary text-on-primary px-7 py-4 md:py-3.5 rounded-lg font-bold shadow-xl hover:bg-primary-container transition-all text-center text-sm">
                  Book a Consultation
                </a>
                <a href="#about"
                  className="border border-primary/30 text-primary px-7 py-4 md:py-3.5 rounded-lg font-bold hover:bg-primary/5 transition-colors text-center text-sm">
                  Discover the Method
                </a>
              </div>
            </div>

            {/* Col 3 — Description panel */}
            <div className="hidden md:flex flex-col justify-center gap-6 pl-8 border-l border-outline-variant/30">
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Dr. Brahmachari provides a rare bridge between ancient Vedic mechanics and the complexities of modern existence. His practice is defined by a refusal to offer generic predictions, focusing instead on the precise mathematical intersection of character and cosmic timing.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                By synthesizing the Triple Sign Triad with forensic Nakshatra analysis, he reveals the hidden architecture of your personal destiny. Each session is a deep-dive investigation designed to transform cosmic uncertainty into tactical conviction.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-outline-variant/20">
                {[
                  { icon: "verified", label: "NDA PROTECTED" },
                  { icon: "auto_stories", label: "12-MONTH BLUEPRINT" },
                  { icon: "history", label: "LIFETIME RECORDING" },
                  { icon: "warning", label: "4 SLOTS LEFT" }
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-primary">{icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-primary">{label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── MARQUEE BAND ── */}

        <div className="bg-primary py-4 overflow-hidden select-none">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-6 px-6 text-on-primary/80 text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                <span className="text-secondary-container text-base">✦</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── ABOUT ── */}
        <section id="about" className="bg-surface-container-low py-24 md:py-36 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-8 h-px bg-secondary-container" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-on-surface-variant/50">About the Astrologer</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start mb-20">
              {/* Pull quote */}
              <div className="md:col-span-4">
                <div className="text-6xl text-secondary-container font-serif leading-none mb-4">&ldquo;</div>
                <p className="text-2xl md:text-3xl font-serif italic text-primary/90 leading-snug">
                  The stars do not compel — they reveal the architecture of your deepest possibilities.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-6 h-px bg-secondary-container" />
                  <span className="text-xs uppercase tracking-widest text-on-surface-variant/50">Dr. V. Brahmachari</span>
                </div>
              </div>
              {/* Bio paragraphs */}
              <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {[
                  "Dr. V. Brahmachari is one of India's most sought-after Vedic astrologers, with over 30 years of dedicated practice in Jyotish Shastra. Born into a lineage of Sanskrit scholars in Varanasi, he began his formal study of the Brihat Parashara Hora Shastra at the age of nine under his grandfather's tutelage.",
                  "His methodology is distinctive — blending classical Parashari and Jaimini systems with deep Nakshatra pada analysis and the nine-fold Navatara cycle. This proprietary synthesis maps not just planetary positions, but precise karmic windows governing pivotal decisions around career, relationships, health, and wealth.",
                  "Over his career, Dr. Brahmachari has personally guided over 12,000 clients spanning Fortune 500 executives, film personalities, and spiritual seekers across 40+ countries — each session a private, 90-minute deep dive into actionable celestial intelligence.",
                  "He holds a post-graduate degree in Sanskrit from Banaras Hindu University and has authored two authoritative texts on Nakshatra Jyotish, now used as reference works in Vedic astrological academia across India and the diaspora.",
                ].map((para, i) => (
                  <p key={i} className="text-on-surface-variant leading-relaxed text-sm md:text-base">{para}</p>
                ))}
              </div>
            </div>

            {/* Credential highlights */}
            <div className="gold-line mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "auto_awesome", title: "Triple Sign Triad", sub: "Lagna · Moon · Sun unified analysis" },
                { icon: "key", title: "Nakshatra Padas", sub: "Sub-conscious karmic decoding" },
                { icon: "cyclone", title: "Navatara Cycle", sub: "Nine-star transformation timing" },
                { icon: "school", title: "BHU Sanskrit Scholar", sub: "PG degree · 2 published texts" },
              ].map(({ icon, title, sub }) => (
                <div key={title} className="border border-outline-variant/30 rounded-xl p-6 hover:border-secondary-container/60 hover:bg-surface-container transition-all group">
                  <span className="material-symbols-outlined text-3xl text-primary-container mb-4 block">{icon}</span>
                  <h3 className="font-bold text-primary text-sm mb-1 group-hover:text-primary-container transition-colors">{title}</h3>
                  <p className="text-xs text-on-surface-variant/70 leading-relaxed">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── METHOD ── */}
        <section className="bg-surface-container-low py-24 md:py-36 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-primary/30" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-on-surface-variant/60">The Brahmachari Method</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <h2 className="text-4xl md:text-6xl text-primary max-w-lg leading-tight">
                A System Built on<br /><span className="italic font-light">Ancient Precision</span>
              </h2>
              <p className="text-on-surface-variant max-w-sm text-sm leading-relaxed md:text-right">
                No generic readings. Every session is a forensic examination of your unique cosmic fingerprint using three interlocking analytical layers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20 rounded-xl overflow-hidden">
              {[
                { n: "01", icon: "hub", title: "Triple Sign Triad", body: "A unified analysis of Lagna (physical reality), Moon sign (emotional matrix), and Sun sign (soul purpose) — revealing the exact intersection of character and destiny that generic sun-sign astrology entirely misses." },
                { n: "02", icon: "key", title: "Nakshatra Pada Decoding", body: "Each of the 27 Nakshatras divides into four padas, each carrying distinct sub-frequencies. Dr. Brahmachari reads the precise pada position to unlock sub-conscious behavioral drivers and karmic patterns missed by standard chart readings." },
                { n: "03", icon: "cyclone", title: "Navatara Cycle Timing", body: "The nine-star transformation cycle overlaid on your personal dasha timeline identifies precise windows — down to the lunar fortnight — for wealth expansion, relationship milestones, health interventions, and career pivots." },
              ].map(({ n, icon, title, body }) => (
                <div key={n} className="bg-surface-container-low p-8 md:p-12 relative group hover:bg-surface transition-colors">
                  <div className="text-[5rem] font-serif font-bold text-primary/5 absolute top-4 right-6 leading-none select-none">{n}</div>
                  <span className="material-symbols-outlined text-3xl text-primary-container mb-6 block">{icon}</span>
                  <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRANSFORMATION ── */}
        <section className="py-24 md:py-36 px-6 md:px-16 bg-surface">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-primary/30" />
                <span className="text-xs font-black tracking-[0.25em] uppercase text-on-surface-variant/60">What Changes</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-primary mb-8 leading-tight">
                From Uncertainty<br /><span className="italic font-light">to Radical Clarity</span>
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-12 max-w-md">
                The Brahmachari method doesn&apos;t just predict — it equips. Every session transforms anxiety about the future into tactical conviction in the present moment.
              </p>
              <div className="space-y-8">
                <div className="flex gap-5 items-start p-6 rounded-xl bg-error/5 border border-error/10">
                  <div className="w-10 h-10 rounded-full border border-error/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-error text-lg">close</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">The Fog of Doubt</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">Reacting to life as it happens, feeling misaligned with your true path, making decisions driven by fear or social pressure rather than inner certainty.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start p-6 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-primary text-lg">done_all</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-primary">The Conviction of Code</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">Moving with the cosmic current — knowing exactly when to push, when to pause, and when to leap — fully grounded in your personal birth-right blueprint.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative">
                <Image
                  alt="Celestial clarity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh5--RCRt6sqRtT1NTpBr7KA1qh9Kgrl5zI958kiyv33_KkuWEJot_PiJzCzIl9amIUZM83BQR4nQtt9ImSX8GHnG3JeygtOS8-l3hOJ9-3jvMVzh3_DKy5jX_DizXJjUZZ8ulpOKK-Rc0QghVEZGnBV1xx8nxeDIWMsaZPGJEqiRZj040VWebSyvdBeuDpbhYrry0LQczET6ORHe2H-rsPErEsaJAoOMW3gDlp-MhJyY2768FqghzprOPXYkrk-b8jxmGYEH9Ak8"
                  fill className="object-cover" unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-xl font-serif italic text-surface leading-relaxed">
                    &quot;The session didn&apos;t just tell me what would happen — it told me who I am supposed to be.&quot;
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-widest text-surface/60">— Aryan K., Entrepreneur</p>
                </div>
              </div>
              {/* Side stat */}
              <div className="absolute -right-6 top-1/3 bg-secondary-container text-on-secondary-container px-4 py-6 rounded-xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold font-serif text-center">₹24K</div>
                <div className="text-xs uppercase tracking-widest text-center mt-1 opacity-60">Per Session</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="bg-surface-container-low py-24 md:py-36 px-6 md:px-16">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-8 h-px bg-primary/30" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-on-surface-variant/60">Client Experiences</span>
            </div>
            {/* Featured quote */}
            <div className="bg-primary rounded-2xl p-8 md:p-16 mb-8 relative overflow-hidden">
              <div className="text-[8rem] font-serif leading-none text-secondary-container/20 absolute -top-4 left-8 select-none">&ldquo;</div>
              <p className="text-2xl md:text-4xl font-serif italic text-on-primary leading-snug max-w-4xl relative z-10">
                In 30 years of seeking answers from advisors of every kind, no one has shown me my own life with the clarity and precision that Dr. Brahmachari did in 90 minutes.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-px bg-secondary-container" />
                <div>
                  <div className="font-bold text-on-primary text-sm">Sunita R.</div>
                  <div className="text-xs text-on-primary/50 uppercase tracking-widest">Managing Director, Mumbai</div>
                </div>
              </div>
            </div>
            {/* 3 smaller cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "He identified a karmic wound I had never discussed with anyone — and gave me a timeline for when it would resolve. It did. Exactly then.", name: "Rahul M.", role: "Architect, Bengaluru" },
                { quote: "The Navatara timing was uncanny. I launched my business exactly when he said — and the results have been extraordinary. This isn't superstition, it's strategy.", name: "Ananya K.", role: "Founder, Delhi" },
                { quote: "Three sessions across two years have restructured how I make every major decision. It's the most valuable thing I invest in for myself annually.", name: "Vikram S.", role: "Senior Partner, London" },
              ].map(({ quote, name, role }) => (
                <div key={name} className="bg-surface p-8 rounded-xl border border-outline-variant/20 hover:shadow-lg transition-shadow">
                  <div className="text-3xl text-secondary-container font-serif mb-4 leading-none">&ldquo;</div>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6 italic">{quote}</p>
                  <div className="flex items-center gap-3 border-t border-outline-variant/20 pt-4">
                    <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{name[0]}</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold">{name}</div>
                      <div className="text-xs text-on-surface-variant/60">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOOKING CTA ── */}
        <section className="bg-primary py-24 md:py-36 px-6 md:px-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center">
            <div className="text-[30rem] font-serif text-on-primary leading-none">✦</div>
          </div>
          <div className="max-w-screen-xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-secondary-container" />
                <span className="text-xs font-black tracking-[0.25em] uppercase text-on-primary/50">Exclusive Availability</span>
              </div>
              <h2 className="text-4xl md:text-6xl text-on-primary font-serif mb-6 leading-tight">
                Your Celestial<br /><span className="italic font-light">Blueprint Awaits</span>
              </h2>
              <p className="text-on-primary/60 leading-relaxed max-w-md mb-10">
                Only 4 private slots are available per lunar cycle. Each 90-minute session includes a comprehensive birth chart review, a live deep-dive consultation, and a personalised 12-month digital blueprint delivered post-session.
              </p>
              <div className="flex items-end gap-4 mb-10">
                <div className="text-5xl md:text-6xl font-serif text-secondary-container">₹24,999</div>
                <div className="text-on-primary/40 text-sm pb-2">/ 90-min session</div>
              </div>
              <a
                href={SHOPIFY_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-secondary-container text-on-secondary-container px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all"
              >
                Reserve Your Session →
              </a>
            </div>
            <div className="space-y-4">
              {[
                { icon: "verified", label: "NDA Protected", sub: "Your chart data and session contents remain strictly confidential." },
                { icon: "videocam", label: "HD Recorded Session", sub: "Receive a full recording to revisit insights at any time." },
                { icon: "auto_stories", label: "12-Month Blueprint", sub: "A personalised written report covering key life domains." },
                { icon: "warning", label: "4 Slots Per Lunar Cycle", sub: "Availability is extremely limited. Secure yours before the cycle closes." },
              ].map(({ icon, label, sub }) => (
                <div key={label} className="flex items-start gap-5 p-5 rounded-xl border border-on-primary/10 hover:border-secondary-container/40 hover:bg-on-primary/5 transition-all">
                  <span className="material-symbols-outlined text-secondary-container text-2xl shrink-0 mt-0.5">{icon}</span>
                  <div>
                    <div className="font-bold text-on-primary text-sm">{label}</div>
                    <div className="text-on-primary/50 text-xs mt-0.5 leading-relaxed">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-surface-container-low text-on-surface-variant/50 py-10 px-6 md:px-16 border-t border-outline-variant/20">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-serif italic text-primary/60 text-lg">Astronext Editorial</div>
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest">
            {["Privacy Policy", "Terms of Service", "Contact", "Press Kit"].map((l) => (
              <Link key={l} href="#" className="hover:text-primary transition-colors">{l}</Link>
            ))}
          </div>
          <div className="text-xs uppercase tracking-widest">© 2024 Astronext Editorial</div>
        </div>
      </footer>
    </>
  );
}
