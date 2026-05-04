import Image from "next/image";
import Link from "next/link";
import BookingSection from "@/components/BookingSection";

export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#fbfbe2]/80 backdrop-blur-md shadow-[0_8px_32px_0_rgba(27,29,14,0.04)]">
        <div className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-serif font-bold text-[#2e0052] tracking-tighter">
            Aetheris Astrology
          </div>
          <div className="hidden md:flex space-x-12 items-center">
            <Link
              className="text-[#2e0052] font-bold border-b border-[#2e0052]/20 pb-1 font-['Manrope'] text-xs tracking-[0.1em] uppercase"
              href="#"
            >
              Horoscopes
            </Link>
            <Link
              className="text-[#2e0052]/60 font-medium hover:text-[#4b0082] transition-colors duration-300 font-['Manrope'] text-xs tracking-[0.1em] uppercase"
              href="#"
            >
              Birth Chart
            </Link>
            <Link
              className="text-[#2e0052]/60 font-medium hover:text-[#4b0082] transition-colors duration-300 font-['Manrope'] text-xs tracking-[0.1em] uppercase"
              href="#"
            >
              Readings
            </Link>
            <Link
              className="text-[#2e0052]/60 font-medium hover:text-[#4b0082] transition-colors duration-300 font-['Manrope'] text-xs tracking-[0.1em] uppercase"
              href="#"
            >
              Journal
            </Link>
          </div>
          <Link href="#booking-calendar" className="bg-primary text-on-primary px-6 py-2.5 rounded-md text-xs font-bold tracking-widest uppercase active:scale-95 transition-transform duration-200 inline-block">
            Consult the Stars
          </Link>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-12 max-w-screen-2xl mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
            <div className="md:col-span-7 z-10">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant mb-6 block">
                Vedic Mastery & Celestial Guidance
              </span>
              <h1 className="text-6xl md:text-8xl text-primary font-bold mb-8 letter-spacing-tight leading-[1.1]">
                Dr. V <br />
                <span className="italic font-normal">Brahmachari</span>
              </h1>
              <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-12">
                Navigating the cosmic blueprint of your destiny through 30 years of deep Navatara wisdom and birth chart synthesis.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="#booking-calendar" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all inline-block text-center">
                  Book Consultation
                </Link>
                <Link href="#booking-calendar" className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-bold border border-secondary/20 hover:bg-secondary-fixed transition-colors inline-block text-center">
                  Check Availability
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-2xl relative group">
                <Image
                  alt="Portrait of Dr. Brahmachari"
                  className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX4FAjytnYlrVWmQj8xKdhF7u0JLy9l9Bswa0g8V6z6Qidk7etPp2JfRUtf4Y7i-_eX73rBBGCK2w--XDjmpKJzFdFLuP6rknoUnvISQtOV8taK0WzoW4nSO-2u2JwwUE02my8AuhaLsiUZUg2eFzNcK3V1c4s-_BRaYZFe0wOaVe4CLMWgo2m_WefZZYyqFqtEkz-29ivinfXWwmz_wlAAkG0UYcW94R-OKCt_iy0rDs5Bn-zmCep7CNx374Ru1JX0nQOsEf0pDk"
                  width={800}
                  height={1000}
                  unoptimized
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 shadow-2xl rounded-lg max-w-[240px] curator-overlap">
                <p className="font-serif italic text-primary text-lg leading-snug">
                  &quot;Fate is the map, but your will is the navigator.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop: The Trinity */}
        <section className="bg-surface-container-low py-32 px-12">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl text-primary mb-4">
                The Trinity of Celestial Mastery
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Transcending standard predictive astrology with a proprietary synthesis of ancient Vedic mechanics and modern psychological resonance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="space-y-6">
                <span className="material-symbols-outlined text-4xl text-primary-container">
                  auto_awesome
                </span>
                <h3 className="text-2xl font-bold">Triple Super Power</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  A unique triad analysis encompassing Lagna, Moon, and Sun signs to find the exact intersection of character and destiny.
                </p>
              </div>
              <div className="space-y-6">
                <span className="material-symbols-outlined text-4xl text-primary-container">
                  key
                </span>
                <h3 className="text-2xl font-bold">Code Secrets</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Unlocking the hidden Nakshatra padas that dictate sub-conscious behaviors and karmic patterns often missed by generic charts.
                </p>
              </div>
              <div className="space-y-6">
                <span className="material-symbols-outlined text-4xl text-primary-container">
                  cyclone
                </span>
                <h3 className="text-2xl font-bold">Navatara Cycle</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Strategic timing through the nine-star transformation cycle, identifying precise windows for wealth, health, and expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-32 px-12">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-5xl text-primary mb-6">Expert Consultations</h2>
                <p className="text-on-surface-variant">
                  Each session is a private, 90-minute deep dive designed to provide actionable intelligence for your life&apos;s most critical junctures.
                </p>
              </div>
              <div className="hidden md:block h-px bg-outline-variant w-full max-w-[200px] mb-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Kundli Analysis */}
              <div className="bg-surface-container p-8 rounded-xl hover:bg-surface-container-high transition-colors group">
                <div className="h-48 mb-8 overflow-hidden rounded-lg">
                  <Image
                    alt="Vedic Chart"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW5MsAPaORRVUqsoR0TUh5yWkU2yKgx3WKeymvTcRFGVFBlSjRUiQV_H7mBSDld0mdYX7-M-m8Bos2eTe8QPXpsS7l1SKnmhdhDpNgx81qjifn1YG1J4Gj4FZiHUMGCPBw_uAmSwUHowrSufNVCmE8byUfBhZdrvbvZwjh1v9gV_nrFcN4h73UwP9acQzXbl7dPH7pcYRdryTSHWGp7Xb_UkwlVgeOvMCDSYcGIzKCc0PZA-wSlKZ-q8Zd-dQZVrrZhK-4oRRwpow"
                    width={400}
                    height={400}
                    unoptimized
                  />
                </div>
                <h4 className="text-xl font-bold mb-4">Kundli Analysis</h4>
                <p className="text-sm text-on-surface-variant mb-6">
                  Full natal chart review including D-9 and D-10 charts for foundational clarity.
                </p>
                <button className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              {/* Career & Finance */}
              <div className="bg-surface-container p-8 rounded-xl hover:bg-surface-container-high transition-colors group">
                <div className="h-48 mb-8 overflow-hidden rounded-lg">
                  <Image
                    alt="Prosperity"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYWyCVWiX36f7WQFbsxWq0iPhlQCpaPFuYgB93z7uvGj-u6wqLodKl7HIu4crviDWJ6kxr9YT5iU8Cj9jE1ScWlbTLZlrez3LY0Yukpo2U1_uAMe5rYY6JEuL5qunXpBg3se5wLnjIxov9uFc_U-H6TIBEXwFHuw0z7yT7m5Z64JgCf5vQGmAbAX8bq5yEeIYc3ybMpzag8Xo4UWnukHPEYdOynzWgwcFmKyDAODxiVbZu6nXEIBSwYitieB-_gl3i4Jlpn7sGTi4"
                    width={400}
                    height={400}
                    unoptimized
                  />
                </div>
                <h4 className="text-xl font-bold mb-4">Career & Finance</h4>
                <p className="text-sm text-on-surface-variant mb-6">
                  Strategic forecasting for business growth, investment timing, and career transitions.
                </p>
                <button className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              {/* Relationships */}
              <div className="bg-surface-container p-8 rounded-xl hover:bg-surface-container-high transition-colors group">
                <div className="h-48 mb-8 overflow-hidden rounded-lg">
                  <Image
                    alt="Connection"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiCg-zNKj_3OR3K-NOvGCRRhMJglIMJ75udFLj96MSBXUBX8ZPgfEatdqRQL0E2CUAuqsOSb902FBWNoJCzzSTvplJQh_ndqU-WXxy7AiQ6_IjH9J8a30TMg1Spe3p4xl-HXVVCxo5nqSbP3wZAHYVNB1zLvvMVCwYU02Pkqd8CEl0APYfWZdn0qH_9GiwjDXcgpR9zqja_HoZIvt_GOgN3xrt2l2AvlSTJasoeSmvqpzb23ZmNCLSmxL9P6_1zadM0ZNKaCKPyMM"
                    width={400}
                    height={400}
                    unoptimized
                  />
                </div>
                <h4 className="text-xl font-bold mb-4">Relationships</h4>
                <p className="text-sm text-on-surface-variant mb-6">
                  Synastry analysis and Ashtakoota matching for deeper soul connections.
                </p>
                <button className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              {/* Mastery Plans */}
              <div className="bg-surface-container p-8 rounded-xl hover:bg-surface-container-high transition-colors group">
                <div className="h-48 mb-8 overflow-hidden rounded-lg">
                  <Image
                    alt="Mastery"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFPNbR2MfBge_bkhhs6fP2taDLHWmuWv7Wl8twpxDK8rXDelJmLi7knlpALxm3Vd4ZAQItSSE0wX33hIxN-ujo9VWLeF_e1jLAnpfP0MlpO_aQ63RxGlrXeJGmEwmQOWGRJJ1korohxU45KS1JhpE5DN6pB6MPk_8pm918IZBMgGICQ4_U8zq8khZBlfWP0AwnpndSvKHIlRWch88gNbazA1md1sJ0a4wSpVkS5MNk2e-B9jwtTO3nCHqERQG1rnrmB0cxO8N3aAQ"
                    width={400}
                    height={400}
                    unoptimized
                  />
                </div>
                <h4 className="text-xl font-bold mb-4">Mastery Plans</h4>
                <p className="text-sm text-on-surface-variant mb-6">
                  A 6-month continuous guidance package for holistic life realignment.
                </p>
                <button className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation: Before vs After */}
        <section className="py-32 px-12 bg-on-background text-surface">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl mb-8 leading-tight">
                From Uncertainty <br />
                to Radical Clarity.
              </h2>
              <p className="text-surface/70 text-lg leading-relaxed mb-12">
                The Brahmachari method doesn&apos;t just predict; it equips. We transform anxiety about the future into tactical conviction in the present.
              </p>
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-surface/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-error">close</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">The Fog of Doubt</h4>
                    <p className="text-surface/60">
                      Reacting to life as it happens, feeling misaligned with your path, and making decisions based on fear or social pressure.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary-container">done_all</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-secondary-container">
                      The Conviction of Code
                    </h4>
                    <p className="text-surface/60">
                      Moving with the cosmic current, knowing exactly when to push and when to pause, grounded in your birth-right blueprint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface-container-lowest/5 rounded-full absolute -top-12 -right-12 w-full h-full animate-pulse"></div>
              <div className="aspect-[4/5] bg-surface-container-lowest/10 rounded-xl relative overflow-hidden backdrop-blur-3xl border border-surface/10">
                <Image
                  alt="Transformation"
                  className="w-full h-full object-cover mix-blend-overlay opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh5--RCRt6sqRtT1NTpBr7KA1qh9Kgrl5zI958kiyv33_KkuWEJot_PiJzCzIl9amIUZM83BQR4nQtt9ImSX8GHnG3JeygtOS8-l3hOJ9-3jvMVzh3_DKy5jX_DizXJjUZZ8ulpOKK-Rc0QghVEZGnBV1xx8nxeDIWMsaZPGJEqiRZj040VWebSyvdBeuDpbhYrry0LQczET6ORHe2H-rsPErEsaJAoOMW3gDlp-MhJyY2768FqghzprOPXYkrk-b8jxmGYEH9Ak8"
                  width={600}
                  height={800}
                  unoptimized
                />
                <div className="absolute inset-0 flex flex-col justify-end p-12">
                  <p className="text-2xl font-serif leading-relaxed italic">
                    &quot;The session didn&apos;t just tell me what would happen; it told me who I am supposed to be.&quot;
                  </p>
                  <p className="mt-4 uppercase tracking-widest text-xs font-bold opacity-60">
                    — Aryan K., Entrepreneur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Pricing */}
        <section className="py-32 px-12 bg-surface">
          <div className="max-w-screen-md mx-auto text-center">
            <div className="inline-block bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-[0.6rem] uppercase tracking-[0.2em] font-bold mb-8">
              Exclusive Availability
            </div>
            <h2 className="text-5xl text-primary mb-6 italic">The Private Consultation</h2>
            <div className="text-7xl font-serif text-primary mb-6">₹24,999</div>
            <p className="text-on-surface-variant text-lg mb-12">
              Only 4 private slots available per lunar cycle. This is a comprehensive 90-minute session with Dr. Brahmachari, followed by a personalized 12-month digital blueprint.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-left mb-16">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="text-sm font-medium">NDA Protected</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">videocam</span>
                <span className="text-sm font-medium">Recorded Session</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">auto_stories</span>
                <span className="text-sm font-medium">Custom Report</span>
              </div>
            </div>
            <div className="bg-surface-container-high p-4 rounded-lg inline-flex items-center gap-4 animate-bounce">
              <span className="material-symbols-outlined text-error">error</span>
              <span className="text-xs font-bold uppercase tracking-widest">
                Next slot: Friday, Oct 24th - Only 1 Left
              </span>
            </div>
          </div>
        </section>

        <BookingSection />
      </main>

      {/* Footer */}
      <footer className="bg-[#f5f5dc] dark:bg-[#15170a] w-full mt-24">
        <div className="flex flex-col items-center justify-center py-16 px-8 space-y-8">
          <div className="text-xl font-serif italic text-[#2e0052] dark:text-[#fbfbe2]">
            Aetheris Editorial
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              className="font-['Manrope'] text-[0.6875rem] tracking-[0.1em] uppercase text-[#2e0052]/50 dark:text-[#cec3d3]/50 hover:text-[#4b0082] transition-all"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="font-['Manrope'] text-[0.6875rem] tracking-[0.1em] uppercase text-[#2e0052]/50 dark:text-[#cec3d3]/50 hover:text-[#4b0082] transition-all"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="font-['Manrope'] text-[0.6875rem] tracking-[0.1em] uppercase text-[#2e0052]/50 dark:text-[#cec3d3]/50 hover:text-[#4b0082] transition-all"
              href="#"
            >
              Contact
            </Link>
            <Link
              className="font-['Manrope'] text-[0.6875rem] tracking-[0.1em] uppercase text-[#2e0052]/50 dark:text-[#cec3d3]/50 hover:text-[#4b0082] transition-all"
              href="#"
            >
              Press Kit
            </Link>
          </div>
          <div className="font-['Manrope'] text-[0.6875rem] tracking-[0.1em] uppercase text-[#2e0052]/50 dark:text-[#cec3d3]/50">
            © 2024 Aetheris Editorial. Crafted for the cosmic-minded.
          </div>
        </div>
      </footer>
    </>
  );
}
