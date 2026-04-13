const Y = "hsl(47,100%,50%)";
const CREAM = "hsl(46,100%,96%)";
const neo = { sm: "3px 3px 0px 0px #000", md: "6px 6px 0px 0px #000", lg: "8px 8px 0px 0px #000" };
const TARGET_KEYWORD = "AI in small businesses";

const PAGE = {
  hero_headline: "Your Small Business Finally Has Access To An AI Team.",
  hero_subtext:
    "Most AI tools for small businesses hand you a dashboard and walk away. Rozeta hands you a team — custom agents trained on your specific workflows, plugging the specific revenue leaks in your specific operation. Live in 14 days.",
  benefits: [
    {
      tag: "The Problem With Generic AI",
      heading: "AI Built For Enterprise Doesn't Fix A Plumbing Company's Friday No-Shows.",
      body: "Every AI platform says they work for small businesses. What they mean is they haven't blocked you from signing up. The tools are built for IT departments, not owner-operators. Rozeta starts with an audit of your actual revenue leaks — missed follow-ups, slow lead response, dead estimates — then builds agents that close those specific gaps. We don't hand you a tool. We build you a system.",
    },
    {
      tag: "What Actually Gets Fixed",
      heading: "The Money You're Losing Isn't A Technology Problem. It's A Consistency Problem.",
      body: "Small businesses don't lose revenue because they lack software. They lose it because no one sent the follow-up email, the estimate sat in someone's inbox for three weeks, or the no-show never got rescheduled. Rozeta's automation layer runs every one of those workflows on autopilot — speed-to-lead in 60 seconds, dead estimate reactivation sequences, no-show recovery, collections follow-up. All of it, without anyone remembering to do it.",
    },
    {
      tag: "What You Get",
      heading: "One Team. One Bill. Every Revenue Leak Plugged.",
      body: "Stitching together Zapier, a freelance automation consultant, and three AI subscriptions costs $9,000–$20,000 a month and still requires someone to manage it. Rozeta replaces all of it: custom AI agents, unlimited automation, ongoing maintenance, and a team that owns the results — for one fixed monthly retainer. Month-to-month. No lock-in. We earn your business every 30 days.",
    },
  ],
  testimonials: [
    { quote: "We recovered $34,000 in dead estimates in the first 45 days. The reactivation sequences just run. I genuinely don't think about it.", name: "Marcus T.", company: "HVAC Contractor — 12 Employees", result: "$34K Recovered" },
    { quote: "Three people were managing follow-ups manually. Now it's zero people. Our close rate went up 18% and nobody changed what they were doing.", name: "Diana R.", company: "Residential Plumbing Co. — 8 Employees", result: "18% Close Rate Lift" },
    { quote: "I was skeptical that 'AI' would do anything useful for a landscaping business. We went live in 11 days and collected $12K in overdue invoices in week two.", name: "Chris V.", company: "Commercial Landscaping — 24 Employees", result: "$12K Collected Week 2" },
  ],
  cta_headline: "Find Out Exactly Where Your Business Is Leaking Revenue.",
  cta_sub: "We do a free revenue leak audit before you spend a dollar. You'll see exactly what we'd build, what it would recover, and what it costs. No pitch decks. No demos. Just the math.",
  cta_button: "Book Your Free Revenue Audit →",
  cta_note: "14-Day Implementation. Month-To-Month. No Setup Fee.",
};

function Navbar() {
  return (
    <nav style={{ background: "#fff", borderBottom: "4px solid #000", fontFamily: "'Space Grotesk', sans-serif", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 64px", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ background: Y, border: "3px solid #000", boxShadow: neo.sm, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="2" y="8" width="3" height="8" fill="#000"/><rect x="6" y="5" width="3" height="11" fill="#000"/><rect x="10" y="2" width="3" height="14" fill="#000"/><rect x="14" y="6" width="3" height="10" fill="#000"/></svg>
        </div>
        <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: "0.08em", textTransform: "uppercase" }}>Rozeta Labs</span>
      </div>
      <button style={{ background: Y, border: "3px solid #000", boxShadow: neo.sm, fontWeight: 800, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", padding: "8px 20px", cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif" }}>
        Book Free Audit →
      </button>
    </nav>
  );
}

function HeroSection() {
  return (
    <section style={{ background: "#000", borderBottom: "4px solid #000", fontFamily: "'Space Grotesk', sans-serif", padding: "80px 64px 64px" }}>
      <div style={{ background: Y, display: "inline-block", padding: "4px 12px", marginBottom: 24 }}>
        <span style={{ fontWeight: 800, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000" }}>{TARGET_KEYWORD}</span>
      </div>
      <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.02, color: "#fff", maxWidth: 820, marginBottom: 28 }}>
        {PAGE.hero_headline}
      </h1>
      <p style={{ color: "rgba(255,255,255,0.55)", fontWeight: 700, fontSize: 16, lineHeight: 1.65, maxWidth: 600, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 40 }}>
        {PAGE.hero_subtext}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
        <button style={{ background: Y, border: "4px solid " + Y, boxShadow: neo.md, fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", padding: "14px 32px", color: "#000", cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif" }}>
          {PAGE.cta_button}
        </button>
        <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>Free Audit. No Pitch Deck.</span>
      </div>
      <div style={{ display: "flex", gap: 0, marginTop: 56, borderTop: "2px solid rgba(255,255,255,0.1)", paddingTop: 32, flexWrap: "wrap" }}>
        {[{ num: "14 Days", label: "To Go Live" }, { num: "$0", label: "Setup Fee" }, { num: "Month-To-Month", label: "No Lock-In" }, { num: "12 Agents", label: "Built Per Year" }].map((s, i) => (
          <div key={i} style={{ borderRight: i < 3 ? "2px solid rgba(255,255,255,0.1)" : "none", paddingRight: 40, paddingLeft: i > 0 ? 40 : 0, marginBottom: 16 }}>
            <p style={{ color: Y, fontWeight: 900, fontSize: 28, letterSpacing: "-0.02em", lineHeight: 1 }}>{s.num}</p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: "'Space Grotesk', sans-serif", padding: "80px 64px" }}>
      <div style={{ background: "#000", border: "4px solid #000", display: "inline-block", marginBottom: 48, boxShadow: neo.sm, padding: "8px 16px" }}>
        <span style={{ color: Y, fontWeight: 800, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Why Rozeta Works For {TARGET_KEYWORD.replace(/^\w/, c => c.toUpperCase())}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>

        {/* ── BLOCK 01 — CREAM ── */}
        <div style={{ border: "4px solid #000", borderBottom: 0, background: CREAM, boxShadow: neo.md, display: "grid", gridTemplateColumns: "1fr 2fr" }}>
          <div style={{ borderRight: "4px solid #000", padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontSize: 80, fontWeight: 900, color: "rgba(0,0,0,0.07)", lineHeight: 1, letterSpacing: "-0.04em" }}>01</span>
            <span style={{ background: "#000", color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", padding: "5px 10px", display: "inline-block", alignSelf: "flex-start", marginTop: 24 }}>
              {PAGE.benefits[0].tag}
            </span>
          </div>
          <div style={{ padding: "40px 40px 40px 48px" }}>
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.08, color: "#000", marginBottom: 20 }}>
              {PAGE.benefits[0].heading}
            </h2>
            <p style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.75, color: "rgba(0,0,0,0.58)", letterSpacing: "0.01em" }}>
              {PAGE.benefits[0].body}
            </p>
          </div>
        </div>

        {/* ── BLOCK 02 — YELLOW ── */}
        <div style={{ border: "4px solid #000", borderBottom: 0, background: Y, boxShadow: neo.md, display: "grid", gridTemplateColumns: "1fr 2fr" }}>
          <div style={{ borderRight: "4px solid #000", padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontSize: 80, fontWeight: 900, color: "rgba(0,0,0,0.1)", lineHeight: 1, letterSpacing: "-0.04em" }}>02</span>
            <span style={{ background: "#000", color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", padding: "5px 10px", display: "inline-block", alignSelf: "flex-start", marginTop: 24 }}>
              {PAGE.benefits[1].tag}
            </span>
          </div>
          <div style={{ padding: "40px 40px 40px 48px" }}>
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.08, color: "#000", marginBottom: 20 }}>
              {PAGE.benefits[1].heading}
            </h2>
            <p style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.75, color: "rgba(0,0,0,0.65)", letterSpacing: "0.01em" }}>
              {PAGE.benefits[1].body}
            </p>
          </div>
        </div>

        {/* ── BLOCK 03 — BLACK ── */}
        <div style={{ border: "4px solid #000", background: "#000", boxShadow: neo.md, display: "grid", gridTemplateColumns: "1fr 2fr" }}>
          <div style={{ borderRight: "4px solid #000", padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontSize: 80, fontWeight: 900, color: Y, lineHeight: 1, letterSpacing: "-0.04em" }}>03</span>
            <span style={{ background: Y, color: "#000", fontWeight: 800, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", padding: "5px 10px", display: "inline-block", alignSelf: "flex-start", marginTop: 24 }}>
              {PAGE.benefits[2].tag}
            </span>
          </div>
          <div style={{ padding: "40px 40px 40px 48px" }}>
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.08, color: "#fff", marginBottom: 20 }}>
              {PAGE.benefits[2].heading}
            </h2>
            <p style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.55)", letterSpacing: "0.01em" }}>
              {PAGE.benefits[2].body}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section style={{ background: Y, borderBottom: "4px solid #000", fontFamily: "'Space Grotesk', sans-serif", padding: "80px 64px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.02, color: "#000" }}>Real Results.<br />Real Businesses.</h2>
        <p style={{ fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", maxWidth: 260 }}>Home Service Businesses Using Rozeta To Recover Revenue They Were Already Earning.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
        {PAGE.testimonials.map((t, i) => (
          <div key={i} style={{ border: "4px solid #000", borderRight: i < 2 ? 0 : "4px solid #000", background: "#000", padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: neo.md }}>
            <div style={{ background: Y, fontWeight: 900, fontSize: 18, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#000", padding: "6px 14px", display: "inline-block", marginBottom: 20, alignSelf: "flex-start" }}>{t.result}</div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: 13, lineHeight: 1.75, flexGrow: 1, marginBottom: 24 }}>"{t.quote}"</p>
            <div style={{ borderTop: "2px solid rgba(255,255,255,0.1)", paddingTop: 16 }}>
              <p style={{ color: "#fff", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em" }}>{t.name}</p>
              <p style={{ color: "rgba(255,255,255,0.35)", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 3 }}>{t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ background: "#000", fontFamily: "'Space Grotesk', sans-serif", padding: "80px 64px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{ background: Y, display: "inline-block", padding: "4px 12px", marginBottom: 24 }}>
            <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000" }}>{TARGET_KEYWORD} — Get Started</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#fff", marginBottom: 20 }}>{PAGE.cta_headline}</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontWeight: 700, fontSize: 14, lineHeight: 1.7, textTransform: "uppercase", letterSpacing: "0.02em", maxWidth: 500 }}>{PAGE.cta_sub}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <button style={{ background: Y, border: "4px solid " + Y, boxShadow: neo.lg, fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", padding: "18px 32px", color: "#000", cursor: "pointer", width: "100%", fontFamily: "'Space Grotesk', sans-serif" }}>
            {PAGE.cta_button}
          </button>
          <p style={{ color: "rgba(255,255,255,0.25)", fontWeight: 700, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", textAlign: "center" }}>{PAGE.cta_note}</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#000", borderTop: "4px solid rgba(255,255,255,0.1)", fontFamily: "'Space Grotesk', sans-serif", padding: "24px 64px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <span style={{ color: "rgba(255,255,255,0.25)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>© 2025 Rozeta Labs. All Rights Reserved.</span>
      <span style={{ color: "rgba(255,255,255,0.15)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>Privacy · Terms</span>
    </footer>
  );
}

export function AiSmallBusinessV2() {
  return (
    <div style={{ minHeight: "100vh", background: CREAM, overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </div>
  );
}
