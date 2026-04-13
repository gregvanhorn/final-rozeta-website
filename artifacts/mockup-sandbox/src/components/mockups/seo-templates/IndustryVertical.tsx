import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// ROZETA LABS — INDUSTRY VERTICAL PAGE TEMPLATE
// Template: /industries/[industry]
// Sample:   /industries/hvac — "AI for HVAC Companies"
// ─────────────────────────────────────────────────────────────────────────────

const INDUSTRY = {
  slug: "hvac",
  name: "HVAC Companies",
  keyword: "AI for HVAC Companies",
  hero_headline: "Your Techs Are On Job Sites.\nYour Estimates Are In A Spreadsheet.",
  hero_sub: "HVAC businesses lose more revenue to slow follow-ups and dead estimates than they ever lose to a competitor. Rozeta builds the AI systems that close those loops automatically — in 14 days.",
  problems: [
    { label: "Slow Lead Response", stat: "78% of jobs go to the first company that responds.", body: "Your dispatcher is juggling calls, texts, and a whiteboard. A new lead calls, goes to voicemail, and books your competitor by 9am. Rozeta's speed-to-lead engine responds in 60 seconds — every time, automatically." },
    { label: "Dead Estimate Pile-Up", stat: "The average HVAC company has $40K+ in unsigned estimates at any given time.", body: "Estimates get sent, customers say 'let me think about it,' and nothing happens. Rozeta's reactivation sequences follow up at 7, 14, 21, and 30 days with messages calibrated to re-engage — without your team lifting a finger." },
    { label: "No-Show & Cancellation Chaos", stat: "No-shows cost HVAC companies an average of $200–$500 per wasted dispatch.", body: "A customer cancels at 8am. The tech is already halfway there. Rozeta's no-show recovery flow sends an immediate reschedule request, fills the slot from your waitlist, and logs the outcome — all automatically." },
    { label: "Invoice & Collections Lag", stat: "30% of HVAC invoices go unpaid past 30 days without a follow-up system.", body: "Completed jobs shouldn't sit in 'unpaid' for weeks. Rozeta's collections automation sends payment reminders at day 3, 7, and 14 — with escalating urgency and a one-click pay link — so your AR cleans itself." },
    { label: "Maintenance Renewal Drop-Off", stat: "Most HVAC companies convert less than 20% of one-time customers to maintenance agreements.", body: "After a repair, most customers disappear. Rozeta's post-service sequence reengages customers at the right interval with maintenance offers, seasonal tune-up reminders, and renewal nudges tailored to their equipment age." },
  ],
  solutions: [
    { num: "01", automation: "Speed-To-Lead Engine", outcome: "Respond to every new lead in under 60 seconds, 24/7 — even overnight.", link: "/automations/lead-follow-up" },
    { num: "02", automation: "Dead Estimate Reactivation", outcome: "Automated 7/14/21/30-day sequences that recover signed jobs from estimates you'd written off.", link: "/automations/crm-automation" },
    { num: "03", automation: "No-Show Recovery Workflow", outcome: "Immediate reschedule requests and waitlist backfill when a customer cancels or no-shows.", link: "/automations/scheduling-automation" },
    { num: "04", automation: "Invoice & Collections Follow-Up", outcome: "Automatic payment reminders that run on a set schedule until the invoice is paid.", link: "/automations/invoice-processing" },
    { num: "05", automation: "Maintenance Renewal Sequences", outcome: "Post-service re-engagement flows that convert one-time customers into recurring maintenance clients.", link: "/automations/customer-onboarding" },
  ],
  case_study: {
    result: "$34K Recovered In 45 Days",
    quote: "We had a pile of dead estimates going back six months. Rozeta set up a reactivation sequence and we recovered $34,000 in signed jobs in the first 45 days. I didn't change anything about how my team works. It just happened.",
    name: "Marcus T.",
    company: "Residential HVAC Contractor — 12 Employees — Philadelphia, PA",
    metrics: [
      { num: "$34K", label: "Revenue Recovered" },
      { num: "45", label: "Days To Results" },
      { num: "0", label: "Extra Headcount" },
    ],
  },
  roi: {
    headline: "What Rozeta Recovers For The Average HVAC Company",
    items: [
      { label: "Dead Estimate Recovery", value: "$15,000–$40,000/yr", note: "Based on average 4% reactivation rate on $800K annual estimate volume" },
      { label: "No-Show Prevention", value: "$8,000–$18,000/yr", note: "Eliminating 60–70% of wasted dispatches at $300 avg. cost per no-show" },
      { label: "Faster Invoice Collection", value: "$5,000–$12,000/yr", note: "Reducing avg. days-to-payment from 28 to 9 days on outstanding AR" },
      { label: "Maintenance Renewals", value: "$12,000–$30,000/yr", note: "Converting an additional 15–25% of repair customers to maintenance agreements" },
    ],
    total: "$40,000–$100,000+/yr",
    price: "$2,500/mo",
  },
  faqs: [
    { q: "How long does it take to set up AI for my HVAC business?", a: "Our standard implementation sprint is 14 days. We start with a revenue leak audit in week one to identify your highest-value automation targets, then build and test the workflows in week two. You go live at the end of the sprint." },
    { q: "Do I need a CRM to use Rozeta?", a: "It helps, but it's not required. We work with whatever systems you already use — ServiceTitan, Jobber, Housecall Pro, even a basic spreadsheet setup. Part of our process is connecting your existing tools so data flows automatically." },
    { q: "Will this work with my dispatching software?", a: "Yes. We integrate with ServiceTitan, Jobber, Housecall Pro, and most other field service platforms through their APIs or via Zapier and n8n. We'll confirm compatibility during your free audit before any work begins." },
    { q: "What if I only want one or two automations to start?", a: "That's fine. We typically start with your highest-ROI opportunity (usually dead estimate recovery or speed-to-lead) and expand from there. You're on a month-to-month retainer — you control the pace." },
    { q: "How is Rozeta different from just using Zapier or an automation tool?", a: "Zapier gives you the plumbing. Rozeta gives you the plumber, the blueprint, and the ongoing maintenance. We build custom workflows trained on your specific business, maintain them as your operation changes, and add new automations every month." },
    { q: "What does it cost?", a: "Our HVAC implementation package starts at $2,500/month. That includes unlimited automation builds, ongoing maintenance, and one custom AI agent build per month. No setup fees. No long-term contracts. Month-to-month." },
    { q: "Can Rozeta help with recruiting or HR for my HVAC company?", a: "Our core focus is revenue recovery and sales operations — lead response, estimate reactivation, collections, and maintenance renewals. We don't build HR or recruiting systems, but we do build anything related to your revenue cycle." },
  ],
  cta_headline: "Book A Free AI Assessment For Your HVAC Company",
  cta_sub: "We'll audit exactly where your HVAC business is losing revenue, show you what we'd build, and give you a realistic recovery estimate — before you spend a dollar.",
};

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const Y = "hsl(47,100%,50%)";
const CREAM = "hsl(46,100%,96%)";
const FONT = "'Space Grotesk', sans-serif";
const neo = { sm: "3px 3px 0px 0px #000", md: "6px 6px 0px 0px #000", lg: "8px 8px 0px 0px #000" };

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────────────────────
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
        <span style={{ fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>Industries</span>
        <span style={{ fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>Automations</span>
        <span style={{ fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>Pricing</span>
        <button style={{ background: Y, border: "3px solid #000", boxShadow: neo.sm, fontWeight: 800, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", padding: "8px 18px", cursor: "pointer", fontFamily: FONT }}>
          Book Free Audit →
        </button>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section style={{ background: "#000", borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px 64px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>Industries</span>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>›</span>
        <div style={{ background: Y, padding: "4px 12px" }}>
          <span style={{ fontWeight: 800, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#000" }}>{INDUSTRY.keyword}</span>
        </div>
      </div>

      <h1 style={{ fontSize: "clamp(38px, 5vw, 68px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.0, color: "#fff", maxWidth: 860, marginBottom: 28, whiteSpace: "pre-line" }}>
        {INDUSTRY.hero_headline}
      </h1>

      <p style={{ color: "rgba(255,255,255,0.5)", fontWeight: 700, fontSize: 15, lineHeight: 1.7, maxWidth: 580, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 44 }}>
        {INDUSTRY.hero_sub}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
        <button style={{ background: Y, border: "4px solid " + Y, boxShadow: neo.md, fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", padding: "14px 32px", color: "#000", cursor: "pointer", fontFamily: FONT }}>
          Book A Free AI Assessment For HVAC →
        </button>
        <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>14-Day Implementation. No Setup Fee.</span>
      </div>

      <div style={{ display: "flex", gap: 0, marginTop: 56, borderTop: "2px solid rgba(255,255,255,0.08)", paddingTop: 32, flexWrap: "wrap" }}>
        {[{ num: "14 Days", label: "To Go Live" }, { num: "$40K+", label: "Avg. Recovered / Year" }, { num: "$0", label: "Setup Fee" }, { num: "Month-To-Month", label: "No Lock-In" }].map((s, i) => (
          <div key={i} style={{ borderRight: i < 3 ? "2px solid rgba(255,255,255,0.08)" : "none", paddingRight: 36, paddingLeft: i > 0 ? 36 : 0, marginBottom: 12 }}>
            <p style={{ color: Y, fontWeight: 900, fontSize: 26, letterSpacing: "-0.02em", lineHeight: 1 }}>{s.num}</p>
            <p style={{ color: "rgba(255,255,255,0.35)", fontWeight: 700, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROBLEMS
// ─────────────────────────────────────────────────────────────────────────────
function ProblemsSection() {
  return (
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ background: "#000", border: "4px solid #000", display: "inline-block", padding: "6px 14px", marginBottom: 20, boxShadow: neo.sm }}>
            <span style={{ color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>Where HVAC Revenue Goes</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.02, color: "#000" }}>
            5 Ways Your HVAC Business<br />Is Leaking Money Right Now.
          </h2>
        </div>
        <p style={{ fontWeight: 700, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", maxWidth: 280, lineHeight: 1.7 }}>
          None of these require hiring more people. They require a system that runs without anyone remembering to run it.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {INDUSTRY.problems.map((p, i) => (
          <div key={i} style={{ border: "4px solid #000", borderBottom: i < INDUSTRY.problems.length - 1 ? 0 : "4px solid #000", background: i % 2 === 0 ? "#fff" : CREAM, display: "grid", gridTemplateColumns: "280px 1fr", boxShadow: neo.sm }}>
            <div style={{ borderRight: "4px solid #000", padding: "28px 28px", display: "flex", flexDirection: "column", gap: 12, background: i % 2 === 0 ? CREAM : "#fff" }}>
              <span style={{ fontWeight: 900, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#000" }}>{p.label}</span>
              <div style={{ background: "#000", padding: "8px 12px", display: "inline-block", alignSelf: "flex-start" }}>
                <span style={{ color: Y, fontWeight: 800, fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase" }}>{p.stat}</span>
              </div>
            </div>
            <div style={{ padding: "28px 36px" }}>
              <p style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.75, color: "rgba(0,0,0,0.65)" }}>{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SOLUTIONS — solution links to /automations/* pages
// ─────────────────────────────────────────────────────────────────────────────
function SolutionsSection() {
  return (
    <section style={{ background: "#000", borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ background: Y, display: "inline-block", padding: "6px 14px", marginBottom: 20 }}>
          <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000" }}>What We Build For HVAC</span>
        </div>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.02, color: "#fff" }}>
          Five Automations. Every<br />Revenue Leak Plugged.
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {INDUSTRY.solutions.map((s, i) => (
          <div key={i} style={{ border: "4px solid rgba(255,255,255,0.1)", borderBottom: i < INDUSTRY.solutions.length - 1 ? 0 : "4px solid rgba(255,255,255,0.1)", display: "grid", gridTemplateColumns: "80px 1fr auto", alignItems: "center", padding: "24px 28px", gap: 24, background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent" }}>
            <span style={{ fontWeight: 900, fontSize: 40, color: Y, letterSpacing: "-0.04em", lineHeight: 1 }}>{s.num}</span>
            <div>
              <p style={{ fontWeight: 800, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.06em", color: "#fff", marginBottom: 6 }}>{s.automation}</p>
              <p style={{ fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{s.outcome}</p>
            </div>
            <a
              href={s.link}
              style={{ background: Y, padding: "6px 14px", whiteSpace: "nowrap", boxShadow: neo.sm, textDecoration: "none", display: "inline-block" }}
            >
              <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#000" }}>View Automation →</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDY
// ─────────────────────────────────────────────────────────────────────────────
function CaseStudySection() {
  const cs = INDUSTRY.case_study;
  return (
    <section style={{ background: Y, borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "4px solid #000", boxShadow: neo.lg }}>
        <div style={{ background: "#000", padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ background: Y, display: "inline-block", padding: "6px 14px", marginBottom: 32 }}>
              <span style={{ fontWeight: 900, fontSize: 14, letterSpacing: "0.04em", textTransform: "uppercase", color: "#000" }}>{cs.result}</span>
            </div>
            <p style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.75, color: "rgba(255,255,255,0.75)", marginBottom: 32 }}>
              "{cs.quote}"
            </p>
          </div>
          <div style={{ borderTop: "2px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
            <p style={{ fontWeight: 800, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em", color: "#fff" }}>{cs.name}</p>
            <p style={{ fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", marginTop: 4 }}>{cs.company}</p>
          </div>
        </div>
        <div style={{ background: Y, padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 0 }}>
          <p style={{ fontWeight: 800, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginBottom: 32 }}>The Numbers</p>
          {cs.metrics.map((m, i) => (
            <div key={i} style={{ borderBottom: i < cs.metrics.length - 1 ? "3px solid rgba(0,0,0,0.12)" : "none", paddingBottom: i < cs.metrics.length - 1 ? 24 : 0, marginBottom: i < cs.metrics.length - 1 ? 24 : 0 }}>
              <p style={{ fontWeight: 900, fontSize: 48, letterSpacing: "-0.04em", lineHeight: 1, color: "#000" }}>{m.num}</p>
              <p style={{ fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(0,0,0,0.5)", marginTop: 4 }}>{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROI CALLOUT
// ─────────────────────────────────────────────────────────────────────────────
function ROISection() {
  const r = INDUSTRY.roi;
  return (
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ background: "#000", border: "4px solid #000", display: "inline-block", padding: "6px 14px", marginBottom: 20, boxShadow: neo.sm }}>
          <span style={{ color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>The ROI For HVAC</span>
        </div>
        <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#000" }}>
          {r.headline}
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginBottom: 0 }}>
        {r.items.map((item, i) => (
          <div key={i} style={{ border: "4px solid #000", borderRight: i % 2 === 0 ? 0 : "4px solid #000", borderBottom: i < 2 ? 0 : "4px solid #000", padding: "28px 32px", background: "#fff", boxShadow: neo.sm }}>
            <p style={{ fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(0,0,0,0.45)", marginBottom: 10 }}>{item.label}</p>
            <p style={{ fontWeight: 900, fontSize: 28, letterSpacing: "-0.02em", color: "#000", marginBottom: 8 }}>{item.value}</p>
            <p style={{ fontWeight: 600, fontSize: 12, lineHeight: 1.6, color: "rgba(0,0,0,0.45)" }}>{item.note}</p>
          </div>
        ))}
      </div>

      <div style={{ border: "4px solid #000", background: "#000", padding: "28px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, boxShadow: neo.md }}>
        <div>
          <p style={{ fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.35)", marginBottom: 8 }}>Total Estimated Annual Recovery</p>
          <p style={{ fontWeight: 900, fontSize: 40, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1 }}>{r.total}</p>
          <p style={{ fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", marginTop: 8 }}>Based on Rozeta client averages for HVAC businesses 5–30 employees</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(255,255,255,0.35)", marginBottom: 8 }}>Rozeta Level 2 Price</p>
          <p style={{ fontWeight: 900, fontSize: 40, letterSpacing: "-0.03em", color: Y, lineHeight: 1 }}>{r.price}</p>
          <p style={{ fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.3)", marginTop: 8 }}>Month-to-month. No setup fee.</p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ — accordion-style with expand/collapse toggle
// ─────────────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section style={{ background: "#fff", borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ background: "#000", display: "inline-block", padding: "6px 14px", marginBottom: 20, boxShadow: neo.sm }}>
          <span style={{ color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>Common Questions</span>
        </div>
        <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#000" }}>
          HVAC Business Owners Ask Us…
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {INDUSTRY.faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} style={{ border: "4px solid #000", borderBottom: i < INDUSTRY.faqs.length - 1 ? 0 : "4px solid #000" }}>
              {/* Accordion header — clickable */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                style={{ width: "100%", border: "none", background: isOpen ? "#000" : CREAM, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 28px", gap: 24, fontFamily: FONT, textAlign: "left" }}
              >
                <span style={{ fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", lineHeight: 1.5, color: isOpen ? "#fff" : "#000", flex: 1 }}>{faq.q}</span>
                <div style={{ background: isOpen ? Y : "#000", border: "3px solid " + (isOpen ? "#000" : Y), width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: isOpen ? "#000" : Y, fontWeight: 900, fontSize: 16, lineHeight: 1, fontFamily: "monospace" }}>{isOpen ? "−" : "+"}</span>
                </div>
              </button>
              {/* Accordion body */}
              {isOpen && (
                <div style={{ borderTop: "3px solid rgba(255,255,255,0.08)", padding: "20px 28px 24px", background: "#111" }}>
                  <p style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.7)" }}>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA
// ─────────────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section style={{ background: "#000", fontFamily: FONT, padding: "80px 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{ background: Y, display: "inline-block", padding: "4px 12px", marginBottom: 24 }}>
            <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000" }}>AI for HVAC Companies — Get Started</span>
          </div>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#fff", marginBottom: 20 }}>
            {INDUSTRY.cta_headline}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontSize: 13, lineHeight: 1.75, textTransform: "uppercase", letterSpacing: "0.02em", maxWidth: 480 }}>
            {INDUSTRY.cta_sub}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <button style={{ background: Y, border: "4px solid " + Y, boxShadow: neo.lg, fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", padding: "18px 28px", color: "#000", cursor: "pointer", width: "100%", fontFamily: FONT }}>
            Book A Free AI Assessment →
          </button>
          <p style={{ color: "rgba(255,255,255,0.2)", fontWeight: 700, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", textAlign: "center" }}>
            14-Day Implementation · Month-To-Month · No Setup Fee
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#000", borderTop: "3px solid rgba(255,255,255,0.08)", fontFamily: FONT, padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <span style={{ color: "rgba(255,255,255,0.2)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>© 2025 Rozeta Labs · rozeta.ai</span>
      <div style={{ display: "flex", gap: 24 }}>
        {["Home Services", "HVAC", "Plumbing", "Roofing"].map(l => (
          <span key={l} style={{ color: "rgba(255,255,255,0.2)", fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>{l}</span>
        ))}
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export function IndustryVertical() {
  return (
    <div style={{ minHeight: "100vh", background: CREAM, overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <CaseStudySection />
      <ROISection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
