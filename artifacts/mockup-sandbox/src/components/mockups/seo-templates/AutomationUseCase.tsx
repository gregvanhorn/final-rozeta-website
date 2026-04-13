import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// ROZETA LABS — AUTOMATION USE-CASE PAGE TEMPLATE
// Template: /automations/[use-case]
// Sample:   /automations/crm-automation — "CRM Automation for Small Business"
// ─────────────────────────────────────────────────────────────────────────────

const AUTO = {
  slug: "crm-automation",
  name: "CRM Automation",
  keyword: "CRM Automation for Small Business",
  hero_headline: "Your CRM Has Every Lead.\nNone Of Them Are Being Followed Up.",
  hero_sub: "CRM automation isn't about data entry. It's about every lead getting the right message at the right time, automatically — so your team closes deals instead of chasing spreadsheets.",
  before: [
    "Sales rep manually updates contact status after every call",
    "Follow-up reminders fall through the cracks on busy days",
    "No visibility into which leads went cold or why",
    "New leads sit uncontacted for hours or days",
    "Activity data scattered across email, CRM, and sticky notes",
  ],
  after: [
    "Lead status updates automatically after every touchpoint",
    "Timed follow-up sequences trigger without anyone remembering",
    "Cold lead dashboard shows exactly who needs attention",
    "New leads receive a response within 60 seconds, 24/7",
    "Every interaction logged automatically across all channels",
  ],
  steps: [
    { num: "01", trigger: "New Lead Enters CRM", action: "Contact is tagged, segmented by source, and assigned to the right rep automatically", tools: ["HubSpot", "Pipedrive"] },
    { num: "02", trigger: "60-Second Speed-To-Lead", action: "Automated text + email fires within 60 seconds acknowledging the inquiry and setting expectations", tools: ["Zapier", "Twilio"] },
    { num: "03", trigger: "Rep Gets Notified", action: "Assigned rep receives a Slack message with lead context, source, and a one-click call link", tools: ["Slack", "n8n"] },
    { num: "04", trigger: "Follow-Up Sequence Begins", action: "7/14/21/30 day sequence of calls, texts, and emails runs automatically until the lead responds or is marked closed", tools: ["Go High Level"] },
    { num: "05", trigger: "Status Auto-Updates", action: "CRM contact record updates based on email opens, link clicks, and rep notes — no manual logging", tools: ["HubSpot", "Zapier"] },
    { num: "06", trigger: "Cold Lead Alert", action: "Leads with no activity in 14 days surface in a dashboard and trigger a re-engagement message", tools: ["n8n", "Airtable"] },
  ],
  tools: ["HubSpot", "Pipedrive", "Go High Level", "Zapier", "n8n", "Slack", "Twilio", "Airtable"],
  metrics: [
    { num: "12+", label: "Hours Saved Per Week", sub: "Per sales rep on manual CRM updates" },
    { num: "73%", label: "Fewer Leads Lost", sub: "To slow follow-up and no-contact" },
    { num: "$28K", label: "Avg. Revenue Recovered", sub: "From leads that would have gone cold" },
  ],
  industries: [
    { name: "HVAC Companies", link: "/industries/hvac" },
    { name: "Roofing Contractors", link: "/industries/roofing" },
    { name: "Plumbing Businesses", link: "/industries/plumbing" },
    { name: "Property Management", link: "/industries/property-management" },
  ],
  timeline: [
    { phase: "Week 1", label: "Audit & Planning", body: "We map your current CRM setup, identify where leads drop off, and design the automation architecture." },
    { phase: "Week 2", label: "Build & Test", body: "Sequences, triggers, and integrations are built and tested against your real lead data before going live." },
  ],
  faqs: [
    { q: "Which CRMs do you work with?", a: "We build automations for HubSpot, Pipedrive, GoHighLevel, Salesforce, and most other platforms via Zapier or native API connections. If you use a niche CRM, ask us — we've probably worked with it." },
    { q: "Will this replace my sales team?", a: "No. CRM automation handles the mechanical parts — logging, sequencing, reminders — so your team can focus on actual conversations and closing. Human reps still manage relationships; automation just makes sure no ball gets dropped." },
    { q: "How long does implementation take?", a: "Standard CRM automation implementation takes 14 days from kickoff to live. Complex multi-system setups may take 21 days. We'll confirm a timeline in your free audit." },
    { q: "What happens when a lead responds?", a: "The automation detects the response, pauses the sequence, updates the CRM status, and notifies the assigned rep — who can then take over the conversation." },
    { q: "Can we customize the follow-up messages?", a: "Yes. We write or refine every message in your voice and brand before the sequences go live. You approve all content." },
  ],
  cta_headline: "Get This CRM Automation Set Up In Your First Sprint",
  cta_sub: "We'll audit your current CRM setup, identify every drop-off point, and build the sequences that close the gaps — in 14 days.",
};

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────────────────
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
        {["Industries", "Automations", "Pricing"].map(l => (
          <span key={l} style={{ fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>{l}</span>
        ))}
        <button style={{ background: Y, border: "3px solid #000", boxShadow: neo.sm, fontWeight: 800, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", padding: "8px 18px", cursor: "pointer", fontFamily: FONT }}>
          Book Free Audit →
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section style={{ background: "#000", borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px 64px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>Automations</span>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>›</span>
        <div style={{ background: Y, padding: "4px 12px" }}>
          <span style={{ fontWeight: 800, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#000" }}>{AUTO.keyword}</span>
        </div>
      </div>
      <h1 style={{ fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.0, color: "#fff", maxWidth: 820, marginBottom: 28, whiteSpace: "pre-line" }}>
        {AUTO.hero_headline}
      </h1>
      <p style={{ color: "rgba(255,255,255,0.5)", fontWeight: 700, fontSize: 14, lineHeight: 1.75, maxWidth: 560, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 44 }}>
        {AUTO.hero_sub}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
        <button style={{ background: Y, border: "4px solid " + Y, boxShadow: neo.md, fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", padding: "14px 32px", color: "#000", cursor: "pointer", fontFamily: FONT }}>
          Get This Automation Built →
        </button>
        <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>Ready In 14 Days. Month-To-Month.</span>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ background: "#000", display: "inline-block", padding: "6px 14px", marginBottom: 20, boxShadow: neo.sm }}>
          <span style={{ color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Before & After</span>
        </div>
        <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#000" }}>
          Manual CRM vs. Automated CRM.<br />There Is No Competition.
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "4px solid #000", boxShadow: neo.lg }}>
        {/* Without */}
        <div style={{ background: "#111", padding: "36px 36px 40px", borderRight: "4px solid #000" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ background: "rgba(255,255,255,0.08)", padding: "4px 12px" }}>
              <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>Without Rozeta</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {AUTO.before.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <span style={{ color: "rgba(255,80,80,0.8)", fontWeight: 900, fontSize: 18, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>✕</span>
                <p style={{ fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
        {/* With */}
        <div style={{ background: Y, padding: "36px 36px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ background: "#000", padding: "4px 12px" }}>
              <span style={{ color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>With Rozeta</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {AUTO.after.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <span style={{ color: "#000", fontWeight: 900, fontSize: 18, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>✓</span>
                <p style={{ fontWeight: 700, fontSize: 13, color: "#000", lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section style={{ background: "#000", borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ background: Y, display: "inline-block", padding: "6px 14px", marginBottom: 20 }}>
          <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000" }}>How It Works</span>
        </div>
        <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#fff" }}>
          6 Steps. Fully Automated.<br />Zero Manual Intervention.
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {AUTO.steps.map((s, i) => (
          <div key={i} style={{ border: "4px solid rgba(255,255,255,0.1)", borderBottom: i < AUTO.steps.length - 1 ? 0 : "4px solid rgba(255,255,255,0.1)", display: "grid", gridTemplateColumns: "72px 1fr auto", alignItems: "start", padding: "24px 28px", gap: 24, background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent" }}>
            <span style={{ fontWeight: 900, fontSize: 36, color: Y, letterSpacing: "-0.04em", lineHeight: 1, paddingTop: 2 }}>{s.num}</span>
            <div>
              <p style={{ fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>Trigger: {s.trigger}</p>
              <p style={{ fontWeight: 700, fontSize: 14, color: "#fff", lineHeight: 1.6 }}>{s.action}</p>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", maxWidth: 160, justifyContent: "flex-end" }}>
              {s.tools.map(t => (
                <span key={t} style={{ background: "rgba(255,255,255,0.07)", border: "2px solid rgba(255,255,255,0.12)", padding: "3px 10px", fontWeight: 700, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolStackSection() {
  return (
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: FONT, padding: "48px 48px" }}>
      <p style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 20 }}>Platforms We Connect</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {AUTO.tools.map(t => (
          <div key={t} style={{ border: "4px solid #000", background: "#fff", padding: "10px 20px", boxShadow: neo.sm }}>
            <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#000" }}>{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section style={{ background: Y, borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ background: "#000", display: "inline-block", padding: "6px 14px", marginBottom: 20, boxShadow: neo.sm }}>
          <span style={{ color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>The Results</span>
        </div>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#000" }}>
          What Rozeta Clients See<br />After CRM Automation Goes Live.
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
        {AUTO.metrics.map((m, i) => (
          <div key={i} style={{ border: "4px solid #000", borderRight: i < AUTO.metrics.length - 1 ? 0 : "4px solid #000", padding: "36px 32px", background: i % 2 === 0 ? "#000" : Y, boxShadow: neo.sm }}>
            <p style={{ fontWeight: 900, fontSize: 52, letterSpacing: "-0.04em", lineHeight: 1, color: i % 2 === 0 ? Y : "#000", marginBottom: 8 }}>{m.num}</p>
            <p style={{ fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: i % 2 === 0 ? "#fff" : "#000", marginBottom: 6 }}>{m.label}</p>
            <p style={{ fontWeight: 600, fontSize: 12, color: i % 2 === 0 ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)", lineHeight: 1.5 }}>{m.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoIsItForSection() {
  return (
    <section style={{ background: "#fff", borderBottom: "4px solid #000", fontFamily: FONT, padding: "56px 48px" }}>
      <p style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 20 }}>Industries That Use This Automation</p>
      <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
        {AUTO.industries.map((ind, i) => (
          <a key={i} href={ind.link} style={{ border: "4px solid #000", borderRight: i < AUTO.industries.length - 1 ? 0 : "4px solid #000", padding: "16px 28px", background: CREAM, textDecoration: "none", display: "block", boxShadow: neo.sm }}>
            <span style={{ fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "#000" }}>{ind.name} →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: FONT, padding: "64px 48px" }}>
      <p style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 28 }}>Implementation Timeline</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        {AUTO.timeline.map((t, i) => (
          <div key={i} style={{ border: "4px solid #000", borderRight: i === 0 ? 0 : "4px solid #000", padding: "28px 32px", background: i === 0 ? "#000" : Y, boxShadow: neo.sm }}>
            <p style={{ fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", color: i === 0 ? Y : "rgba(0,0,0,0.45)", marginBottom: 10 }}>{t.phase}</p>
            <p style={{ fontWeight: 900, fontSize: 18, textTransform: "uppercase", letterSpacing: "0.04em", color: i === 0 ? "#fff" : "#000", marginBottom: 10 }}>{t.label}</p>
            <p style={{ fontWeight: 600, fontSize: 13, lineHeight: 1.7, color: i === 0 ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.6)" }}>{t.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section style={{ background: "#fff", borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ background: "#000", display: "inline-block", padding: "6px 14px", marginBottom: 20, boxShadow: neo.sm }}>
          <span style={{ color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>Common Questions</span>
        </div>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#000" }}>
          CRM Automation Questions.
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {AUTO.faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} style={{ border: "4px solid #000", borderBottom: i < AUTO.faqs.length - 1 ? 0 : "4px solid #000" }}>
              <button onClick={() => setOpenIndex(isOpen ? null : i)} style={{ width: "100%", border: "none", background: isOpen ? "#000" : CREAM, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px", gap: 20, fontFamily: FONT, textAlign: "left" }}>
                <span style={{ fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", lineHeight: 1.5, color: isOpen ? "#fff" : "#000", flex: 1 }}>{faq.q}</span>
                <div style={{ background: isOpen ? Y : "#000", border: "3px solid " + (isOpen ? "#000" : Y), width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: isOpen ? "#000" : Y, fontWeight: 900, fontSize: 15, lineHeight: 1, fontFamily: "monospace" }}>{isOpen ? "−" : "+"}</span>
                </div>
              </button>
              {isOpen && (
                <div style={{ borderTop: "3px solid rgba(255,255,255,0.08)", padding: "18px 24px 22px", background: "#111" }}>
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
            <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000" }}>CRM Automation — Get Started</span>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#fff", marginBottom: 20 }}>
            {AUTO.cta_headline}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontSize: 13, lineHeight: 1.75, textTransform: "uppercase", letterSpacing: "0.02em", maxWidth: 460 }}>{AUTO.cta_sub}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <button style={{ background: Y, border: "4px solid " + Y, boxShadow: neo.lg, fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", padding: "18px 28px", color: "#000", cursor: "pointer", width: "100%", fontFamily: FONT }}>
            Book A Free Automation Audit →
          </button>
          <p style={{ color: "rgba(255,255,255,0.2)", fontWeight: 700, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", textAlign: "center" }}>14-Day Sprint · Month-To-Month · No Setup Fee</p>
        </div>
      </div>
    </section>
  );
}

export function AutomationUseCase() {
  return (
    <div style={{ minHeight: "100vh", background: CREAM, overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <BeforeAfterSection />
      <HowItWorksSection />
      <ToolStackSection />
      <MetricsSection />
      <WhoIsItForSection />
      <TimelineSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
