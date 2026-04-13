import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// ROZETA LABS — COMPARISON PAGE TEMPLATE
// Template: /compare/[option-vs-option]
// Sample:   /compare/ai-agency-vs-in-house — "AI Agency vs. Building In-House"
// ─────────────────────────────────────────────────────────────────────────────

const COMP = {
  slug: "ai-agency-vs-in-house",
  keyword: "AI Agency vs. Building In-House",
  hero_headline: "AI Agency vs.\nBuilding In-House.",
  hero_sub: "Two paths to AI automation. Very different costs, timelines, and outcomes. Here's the honest comparison — including where Rozeta Labs fits.",
  context: "You've decided AI automation is worth pursuing. Now you're weighing two options: hire an agency or build it internally. This page breaks down both honestly — not to sell you, but to help you pick the right path for your business size, budget, and goals.",
  table_rows: [
    { attribute: "Time To First Automation", inhouse: "3–6 months to hire, onboard, and build", agency: "Varies (4–12 weeks)", rozeta: "14 days", highlight: true },
    { attribute: "Monthly Cost", inhouse: "$8,000–$15,000 (1 specialist salary + benefits)", agency: "$5,000–$25,000+", rozeta: "$997–$4,500/mo", highlight: false },
    { attribute: "Setup Cost", inhouse: "$0 (sunk into salary)", agency: "$2,000–$10,000 onboarding fee", rozeta: "$0", highlight: true },
    { attribute: "Maintenance", inhouse: "Ongoing — your team's problem", agency: "Billed separately or capped", rozeta: "Included", highlight: false },
    { attribute: "Lock-In", inhouse: "Employment contract", agency: "6–12 month retainer typical", rozeta: "Month-to-month", highlight: true },
    { attribute: "Industry Expertise", inhouse: "Depends on hire", agency: "Usually generalist", rozeta: "Home services specialist", highlight: false },
    { attribute: "Scalability", inhouse: "Requires additional headcount", agency: "Theoretically scalable", rozeta: "Unlimited builds included", highlight: true },
  ],
  deep_dives: [
    {
      label: "Building In-House",
      pros: ["Full ownership and control of the code and workflows", "Institutional knowledge stays in-house", "Can pivot quickly if priorities change", "No dependency on an external vendor"],
      cons: ["Recruiting is slow — AI talent is expensive and competitive", "Ramp-up takes 3–6 months before you see any output", "You're responsible for maintenance, monitoring, and updates", "If they leave, you lose the institutional knowledge with them"],
      who: "Best for: Companies with 50+ employees, a technical CTO, and multi-year AI roadmap with budget to match.",
    },
    {
      label: "Hiring A Generalist AI Agency",
      pros: ["Immediate access to a team with existing tools and infrastructure", "No recruiting or HR overhead", "Can handle multiple project types simultaneously"],
      cons: ["Most agencies charge 2–5x what in-house would cost at scale", "Generalist agencies lack deep industry knowledge for home services", "Output quality varies significantly — hard to vet before signing", "Setup fees, retainer minimums, and scope creep are common"],
      who: "Best for: One-time project builds or companies that need a wide range of services beyond automation.",
    },
  ],
  decision: [
    { label: "Choose In-House If...", items: ["You have $150K+/yr budget and 6 months to wait", "You need proprietary AI systems no vendor should touch", "You have a technical team lead who can manage the work"] },
    { label: "Choose An AI Agency If...", items: ["You need broad services beyond automation (ads, content, strategy)", "You have a one-time build that doesn't need ongoing maintenance", "Budget isn't the primary constraint and you're okay with generalist output"] },
    { label: "Choose Rozeta If...", items: ["You run a home services business and need results in 14 days", "You want month-to-month flexibility with no setup fees", "You need a specialist who already knows your industry's ops and tools"] },
  ],
  cost_breakdown: [
    { label: "In-House AI Specialist", year1: "$120,000–$180,000", monthly: "$10,000–$15,000", note: "Salary + benefits + recruiting cost. 3–6 months before first output." },
    { label: "Generalist AI Agency", year1: "$60,000–$300,000", monthly: "$5,000–$25,000", note: "Wide range. Retainer + project fees + onboarding. Lock-in common." },
    { label: "Rozeta Labs", year1: "$12,000–$54,000", monthly: "$997–$4,500", note: "All-inclusive. No setup fee. No lock-in. Industry-specific output from week 2." },
  ],
  faqs: [
    { q: "Is Rozeta actually better than hiring in-house for a growing business?", a: "For most home services businesses under 50 employees, yes — primarily because of speed and cost. You get expert-built automations in 14 days for less than one month of an in-house salary. Once you're at 50+ employees with a technical leadership team, in-house starts to make more sense." },
    { q: "Can I switch to in-house later after using Rozeta?", a: "Yes. Everything we build is documented. If you eventually hire in-house, we'll hand off our full system architecture, workflow documentation, and integration setup so your team can take over without starting from scratch." },
    { q: "What if I've already tried an agency and it didn't work?", a: "Most generalist agency failures we've seen come from three things: no industry expertise, scoped deliverables with no ongoing support, and no accountability to your actual revenue metrics. Our engagement is built differently — month-to-month, with ongoing builds and maintenance included." },
    { q: "Does Rozeta compete with my existing marketing or ops agency?", a: "We focus exclusively on revenue automation — lead follow-up, estimate reactivation, collections, maintenance renewals. We don't do ads, content, or branding. Most clients run us alongside their marketing agency without overlap." },
  ],
  cta_headline: "Not Sure Which Path Is Right?\nLet's Figure It Out Together.",
  cta_sub: "We'll look at your business, your current setup, and your goals — and tell you honestly whether Rozeta, in-house, or another agency is the best fit.",
};

const Y = "hsl(47,100%,50%)";
const CREAM = "hsl(46,100%,96%)";
const FONT = "'Space Grotesk', sans-serif";
const neo = { sm: "3px 3px 0px 0px #000", md: "6px 6px 0px 0px #000", lg: "8px 8px 0px 0px #000" };

function Navbar() {
  return (
    <nav style={{ background: "#fff", borderBottom: "4px solid #000", fontFamily: FONT, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 48px", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ background: Y, border: "3px solid #000", boxShadow: neo.sm, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><rect x="2" y="8" width="3" height="8" fill="#000"/><rect x="6" y="5" width="3" height="11" fill="#000"/><rect x="10" y="2" width="3" height="14" fill="#000"/><rect x="14" y="6" width="3" height="10" fill="#000"/></svg>
        </div>
        <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: "0.08em", textTransform: "uppercase" }}>Rozeta Labs</span>
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        {["Compare", "Industries", "Pricing"].map(l => (
          <span key={l} style={{ fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>{l}</span>
        ))}
        <button style={{ background: Y, border: "3px solid #000", boxShadow: neo.sm, fontWeight: 800, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", padding: "8px 18px", cursor: "pointer", fontFamily: FONT }}>
          Book Consultation →
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px 56px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
        <span style={{ color: "rgba(0,0,0,0.3)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>Compare</span>
        <span style={{ color: "rgba(0,0,0,0.2)", fontSize: 11 }}>›</span>
        <div style={{ background: "#000", padding: "4px 12px" }}>
          <span style={{ fontWeight: 800, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: Y }}>{COMP.keyword}</span>
        </div>
      </div>
      <h1 style={{ fontSize: "clamp(38px, 5vw, 68px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.0, color: "#000", maxWidth: 720, marginBottom: 24, whiteSpace: "pre-line" }}>
        {COMP.hero_headline}
      </h1>
      <p style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.7, maxWidth: 580, color: "rgba(0,0,0,0.55)", marginBottom: 0 }}>
        {COMP.hero_sub}
      </p>
    </section>
  );
}

function ContextSection() {
  return (
    <section style={{ background: "#fff", borderBottom: "4px solid #000", fontFamily: FONT, padding: "40px 48px" }}>
      <div style={{ border: "4px solid #000", background: CREAM, padding: "24px 32px", boxShadow: neo.sm, maxWidth: 720 }}>
        <p style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.8, color: "rgba(0,0,0,0.65)" }}>{COMP.context}</p>
      </div>
    </section>
  );
}

function ComparisonTableSection() {
  return (
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ background: "#000", display: "inline-block", padding: "6px 14px", marginBottom: 20, boxShadow: neo.sm }}>
          <span style={{ color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>Side-By-Side Comparison</span>
        </div>
        <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#000" }}>
          The Honest Numbers.
        </h2>
      </div>

      {/* Table header */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", border: "4px solid #000", borderBottom: 0 }}>
        <div style={{ padding: "14px 20px", borderRight: "4px solid #000", background: "#000" }}>
          <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Category</span>
        </div>
        {["In-House", "AI Agency", "Rozeta Labs"].map((h, i) => (
          <div key={h} style={{ padding: "14px 20px", borderRight: i < 2 ? "4px solid #000" : "none", background: i === 2 ? Y : "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontWeight: 900, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: i === 2 ? "#000" : "#fff" }}>{h}</span>
          </div>
        ))}
      </div>

      {/* Table rows */}
      {COMP.table_rows.map((row, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", border: "4px solid #000", borderBottom: i < COMP.table_rows.length - 1 ? 0 : "4px solid #000", background: row.highlight ? "#fff" : CREAM }}>
          <div style={{ padding: "16px 20px", borderRight: "4px solid #000" }}>
            <span style={{ fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#000" }}>{row.attribute}</span>
          </div>
          <div style={{ padding: "16px 20px", borderRight: "4px solid #000" }}>
            <span style={{ fontWeight: 600, fontSize: 12, color: "rgba(0,0,0,0.55)", lineHeight: 1.5 }}>{row.inhouse}</span>
          </div>
          <div style={{ padding: "16px 20px", borderRight: "4px solid #000" }}>
            <span style={{ fontWeight: 600, fontSize: 12, color: "rgba(0,0,0,0.55)", lineHeight: 1.5 }}>{row.agency}</span>
          </div>
          <div style={{ padding: "16px 20px", background: "rgba(255, 200, 0, 0.15)" }}>
            <span style={{ fontWeight: 800, fontSize: 12, color: "#000", lineHeight: 1.5 }}>{row.rozeta}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

function DeepDiveSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ background: "#fff", borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ background: "#000", display: "inline-block", padding: "6px 14px", marginBottom: 20, boxShadow: neo.sm }}>
          <span style={{ color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>Deep Dive</span>
        </div>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#000" }}>The Honest Breakdown.</h2>
      </div>
      {COMP.deep_dives.map((dd, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ border: "4px solid #000", borderBottom: i === 0 ? 0 : "4px solid #000" }}>
            <button onClick={() => setOpen(isOpen ? null : i)} style={{ width: "100%", border: "none", background: isOpen ? "#000" : CREAM, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 28px", fontFamily: FONT, textAlign: "left" }}>
              <span style={{ fontWeight: 900, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.08em", color: isOpen ? "#fff" : "#000" }}>{dd.label}</span>
              <div style={{ background: isOpen ? Y : "#000", border: "3px solid " + (isOpen ? "#000" : Y), width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: isOpen ? "#000" : Y, fontWeight: 900, fontSize: 15, fontFamily: "monospace" }}>{isOpen ? "−" : "+"}</span>
              </div>
            </button>
            {isOpen && (
              <div style={{ background: "#111", borderTop: "3px solid rgba(255,255,255,0.08)", padding: "28px 28px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>Pros</p>
                  {dd.pros.map((p, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                      <span style={{ color: Y, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>✓</span>
                      <p style={{ fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{p}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 14 }}>Cons</p>
                  {dd.cons.map((c, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                      <span style={{ color: "rgba(255,80,80,0.8)", fontWeight: 900, fontSize: 14, flexShrink: 0 }}>✕</span>
                      <p style={{ fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{c}</p>
                    </div>
                  ))}
                </div>
                <div style={{ gridColumn: "1/-1", borderTop: "2px solid rgba(255,255,255,0.08)", paddingTop: 16, marginTop: 4 }}>
                  <p style={{ fontWeight: 700, fontSize: 12, color: Y, letterSpacing: "0.06em" }}>{dd.who}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

function DecisionSection() {
  return (
    <section style={{ background: "#000", borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ background: Y, display: "inline-block", padding: "6px 14px", marginBottom: 20 }}>
          <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000" }}>Decision Framework</span>
        </div>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#fff" }}>
          How To Choose.
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
        {COMP.decision.map((d, i) => (
          <div key={i} style={{ border: "4px solid rgba(255,255,255,0.12)", borderRight: i < 2 ? 0 : "4px solid rgba(255,255,255,0.12)", padding: "28px 28px", background: i === 2 ? Y : "rgba(255,255,255,0.03)" }}>
            <p style={{ fontWeight: 900, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: i === 2 ? "#000" : "#fff", marginBottom: 20 }}>{d.label}</p>
            {d.items.map((item, j) => (
              <div key={j} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                <span style={{ color: i === 2 ? "#000" : Y, fontWeight: 900, fontSize: 14, flexShrink: 0 }}>→</span>
                <p style={{ fontWeight: 600, fontSize: 13, color: i === 2 ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function CostBreakdownSection() {
  return (
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ background: "#000", display: "inline-block", padding: "6px 14px", marginBottom: 20, boxShadow: neo.sm }}>
          <span style={{ color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>Real Cost Analysis</span>
        </div>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000" }}>
          Total Cost Of Ownership.
        </h2>
      </div>
      {COMP.cost_breakdown.map((c, i) => (
        <div key={i} style={{ border: "4px solid #000", borderBottom: i < COMP.cost_breakdown.length - 1 ? 0 : "4px solid #000", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", background: i === 2 ? "#000" : "#fff", boxShadow: neo.sm }}>
          <div style={{ borderRight: "4px solid #000", padding: "24px 28px" }}>
            <p style={{ fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em", color: i === 2 ? Y : "#000", marginBottom: 6 }}>{c.label}</p>
            <p style={{ fontWeight: 600, fontSize: 12, lineHeight: 1.6, color: i === 2 ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)" }}>{c.note}</p>
          </div>
          <div style={{ borderRight: "4px solid #000", padding: "24px 20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.16em", color: i === 2 ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)", marginBottom: 6 }}>Year 1 Total</p>
            <p style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.02em", color: i === 2 ? "#fff" : "#000" }}>{c.year1}</p>
          </div>
          <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.16em", color: i === 2 ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)", marginBottom: 6 }}>Monthly</p>
            <p style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.02em", color: i === 2 ? Y : "#000" }}>{c.monthly}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section style={{ background: "#fff", borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ background: "#000", display: "inline-block", padding: "6px 14px", marginBottom: 20, boxShadow: neo.sm }}>
          <span style={{ color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>FAQ</span>
        </div>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", color: "#000" }}>Honest Answers.</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {COMP.faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} style={{ border: "4px solid #000", borderBottom: i < COMP.faqs.length - 1 ? 0 : "4px solid #000" }}>
              <button onClick={() => setOpenIndex(isOpen ? null : i)} style={{ width: "100%", border: "none", background: isOpen ? "#000" : CREAM, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", gap: 20, fontFamily: FONT, textAlign: "left" }}>
                <span style={{ fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.5, color: isOpen ? "#fff" : "#000", flex: 1 }}>{faq.q}</span>
                <div style={{ background: isOpen ? Y : "#000", border: "3px solid " + (isOpen ? "#000" : Y), width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: isOpen ? "#000" : Y, fontWeight: 900, fontSize: 15, fontFamily: "monospace" }}>{isOpen ? "−" : "+"}</span>
                </div>
              </button>
              {isOpen && (
                <div style={{ background: "#111", borderTop: "3px solid rgba(255,255,255,0.08)", padding: "18px 24px 22px" }}>
                  <p style={{ fontWeight: 600, fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.7)" }}>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ background: "#000", fontFamily: FONT, padding: "80px 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{ background: Y, display: "inline-block", padding: "4px 12px", marginBottom: 24 }}>
            <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000" }}>Free Consultation</span>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#fff", marginBottom: 20, whiteSpace: "pre-line" }}>
            {COMP.cta_headline}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontSize: 13, lineHeight: 1.75, textTransform: "uppercase", letterSpacing: "0.02em", maxWidth: 460 }}>{COMP.cta_sub}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <button style={{ background: Y, border: "4px solid " + Y, boxShadow: neo.lg, fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", padding: "18px 28px", color: "#000", cursor: "pointer", width: "100%", fontFamily: FONT }}>
            Schedule A Free Consultation →
          </button>
          <p style={{ color: "rgba(255,255,255,0.2)", fontWeight: 700, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", textAlign: "center" }}>No Pitch. Just Honest Advice.</p>
        </div>
      </div>
    </section>
  );
}

export function ComparisonPage() {
  return (
    <div style={{ minHeight: "100vh", background: CREAM, overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <ContextSection />
      <ComparisonTableSection />
      <DeepDiveSection />
      <DecisionSection />
      <CostBreakdownSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
