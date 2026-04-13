import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// ROZETA LABS — PILLAR GUIDE PAGE TEMPLATE
// Template: /guides/[guide-name]
// Sample:   /guides/ai-implementation-roadmap
// ─────────────────────────────────────────────────────────────────────────────

const GUIDE = {
  slug: "ai-implementation-roadmap",
  title: "The Complete AI Implementation Roadmap For SMBs",
  abstract: "A step-by-step framework for identifying where AI automation belongs in your business, what to build first, and how to measure results — written for business owners, not engineers.",
  author: "Rozeta Labs",
  date: "March 2025",
  readTime: "18 min read",
  category: "AI Strategy",
  toc: [
    { num: "01", label: "Is Your Business Ready for AI Automation?" },
    { num: "02", label: "The Revenue Leak Audit: Finding Your Highest-ROI Target" },
    { num: "03", label: "The Five Automation Priorities for Home Services" },
    { num: "04", label: "Tool Stack: What You Actually Need (And What You Don't)" },
    { num: "05", label: "Implementation: The 14-Day Sprint Framework" },
    { num: "06", label: "Measuring What Matters: AI Automation Metrics" },
    { num: "07", label: "Scaling From One Automation to a Full System" },
  ],
  sections: [
    {
      num: "01",
      heading: "Is Your Business Ready for AI Automation?",
      body: [
        "AI automation doesn't require a tech team. It doesn't require six months of planning. And it doesn't require a budget that only enterprise companies can access. But it does require one thing: a business that runs on repeatable processes.",
        "The best businesses for AI automation have a few things in common. They have consistent lead flow — people reaching out regularly through the same channels. They have a defined sales process — even if it's informal. And they have at least one operation that runs the same way every time, even if someone on the team is doing it manually right now.",
      ],
      callout: { type: "insight", text: "If you can describe your follow-up process in 3 sentences, you can automate it. If you can't describe it at all, that's step one." },
    },
    {
      num: "02",
      heading: "The Revenue Leak Audit: Finding Your Highest-ROI Target",
      body: [
        "Before you build anything, you need to know where you're losing money. Most SMBs focus on acquisition — getting more leads — when the bigger opportunity is in the conversion and retention gap. The leads you already have are your lowest-cost revenue.",
        "A revenue leak audit looks at three buckets: speed-to-lead (how fast new inquiries get a response), estimate conversion (how many estimates actually close), and customer retention (how many one-time customers become repeat customers or maintenance clients).",
      ],
      callout: { type: "stat", text: "The average home services SMB has $40,000–$100,000 in recoverable revenue sitting in unresponded leads, dead estimates, and lapsed customers." },
    },
    {
      num: "03",
      heading: "The Five Automation Priorities for Home Services",
      body: [
        "Not all automations are equal. Based on client data across HVAC, roofing, plumbing, and property management businesses, we've identified five automation types that deliver the highest consistent ROI — in this order.",
        "Speed-to-lead (respond within 60 seconds, 24/7). Dead estimate reactivation (follow up at 7/14/21/30 days). No-show recovery (immediate reschedule requests). Invoice and collections follow-up (day 3/7/14 payment reminders). Maintenance renewal sequences (post-service re-engagement).",
      ],
      callout: { type: "insight", text: "Most businesses start with speed-to-lead. It's the fastest to build, requires the fewest integrations, and delivers measurable results within weeks." },
    },
    {
      num: "04",
      heading: "Tool Stack: What You Actually Need (And What You Don't)",
      body: [
        "The AI tool landscape is overwhelming. New platforms launch weekly. Most of them are solutions looking for a problem. For home services automation, you need four categories of tools — and nothing else.",
        "A CRM or field service platform (ServiceTitan, Jobber, HubSpot, Pipedrive). An automation layer (Zapier, n8n, or Make). A communication platform (Twilio for SMS, your existing email provider). And optionally, an AI conversation layer (Go High Level, or a custom GPT integration).",
      ],
      callout: { type: "stat", text: "The average Rozeta client has 3–4 tools already. We connect them — we don't add more complexity." },
    },
    {
      num: "05",
      heading: "Implementation: The 14-Day Sprint Framework",
      body: [
        "The right implementation approach isn't a six-month project plan. It's a 14-day sprint focused on your single highest-ROI automation target. Week one is discovery and architecture: audit your current setup, map the automation logic, and confirm your tool integrations. Week two is build and test: build the workflows, run them against your real lead data, review the results, and go live.",
        "After the sprint, you review week-one metrics, identify the next highest-value target, and run the next sprint. This compound approach — one automation per sprint — builds a full system in 90 days without overwhelming your team.",
      ],
      callout: { type: "insight", text: "Start with one automation. Run it for 30 days. Measure the result. Then build the next one. Compounding beats perfecting." },
    },
    {
      num: "06",
      heading: "Measuring What Matters: AI Automation Metrics",
      body: [
        "Most teams measure the wrong things when evaluating automation. Workflow runs, messages sent, and automation triggers are activity metrics — not outcome metrics. The only numbers that matter are: speed-to-lead response time, estimate conversion rate, invoice average-days-to-payment, and revenue recovered from reactivation sequences.",
        "Set a baseline before you launch any automation. Measure at 30 days. Compare. That's your ROI calculation — and it's usually the number that justifies the next automation investment.",
      ],
      callout: { type: "stat", text: "Rozeta clients typically see measurable ROI within the first 14–30 days of their first automation going live." },
    },
  ],
  related_guides: [
    { title: "How To Calculate The ROI Of Business Automation", link: "/guides/automation-roi-calculator", time: "12 min" },
    { title: "AI Readiness Assessment: Is Your SMB Ready?", link: "/guides/ai-readiness-assessment", time: "8 min" },
    { title: "The Home Services Automation Playbook", link: "/guides/home-services-automation-playbook", time: "22 min" },
  ],
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
        {["Guides", "Industries", "Automations"].map(l => (
          <span key={l} style={{ fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5 }}>{l}</span>
        ))}
        <button style={{ background: Y, border: "3px solid #000", boxShadow: neo.sm, fontWeight: 800, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", padding: "8px 18px", cursor: "pointer", fontFamily: FONT }}>
          Book Free Audit →
        </button>
      </div>
    </nav>
  );
}

function ArticleHeader() {
  return (
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px 48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
        <span style={{ color: "rgba(0,0,0,0.3)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>Guides</span>
        <span style={{ color: "rgba(0,0,0,0.2)", fontSize: 11 }}>›</span>
        <div style={{ background: "#000", padding: "4px 12px" }}>
          <span style={{ fontWeight: 800, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: Y }}>{GUIDE.category}</span>
        </div>
      </div>
      <h1 style={{ fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.0, color: "#000", maxWidth: 820, marginBottom: 24 }}>
        {GUIDE.title}
      </h1>
      <p style={{ fontWeight: 600, fontSize: 16, lineHeight: 1.75, maxWidth: 640, color: "rgba(0,0,0,0.55)", marginBottom: 32 }}>
        {GUIDE.abstract}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 24, borderTop: "3px solid rgba(0,0,0,0.1)", paddingTop: 24, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><rect x="2" y="8" width="3" height="8" fill={Y}/><rect x="6" y="5" width="3" height="11" fill={Y}/><rect x="10" y="2" width="3" height="14" fill={Y}/><rect x="14" y="6" width="3" height="10" fill={Y}/></svg>
          </div>
          <div>
            <p style={{ fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#000" }}>{GUIDE.author}</p>
            <p style={{ fontWeight: 600, fontSize: 11, color: "rgba(0,0,0,0.4)" }}>Rozeta Labs Research Team</p>
          </div>
        </div>
        <div style={{ width: 1, height: 32, background: "rgba(0,0,0,0.15)" }} />
        <span style={{ fontWeight: 700, fontSize: 12, color: "rgba(0,0,0,0.45)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{GUIDE.date}</span>
        <div style={{ width: 1, height: 32, background: "rgba(0,0,0,0.15)" }} />
        <div style={{ background: "#000", padding: "4px 12px" }}>
          <span style={{ fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: Y }}>{GUIDE.readTime}</span>
        </div>
      </div>
    </section>
  );
}

function TOCSection() {
  return (
    <section style={{ background: "#000", borderBottom: "4px solid #000", fontFamily: FONT, padding: "40px 48px" }}>
      <p style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Table Of Contents</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {GUIDE.toc.map((item, i) => (
          <a key={i} href={`#section-${item.num}`} style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 0", borderBottom: i < GUIDE.toc.length - 1 ? "2px solid rgba(255,255,255,0.07)" : "none", textDecoration: "none" }}>
            <span style={{ fontWeight: 900, fontSize: 13, color: Y, letterSpacing: "0.04em", minWidth: 28 }}>{item.num}</span>
            <span style={{ fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
            <span style={{ color: "rgba(255,255,255,0.2)", marginLeft: "auto" }}>→</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function GuideBodySection() {
  return (
    <section style={{ background: "#fff", borderBottom: "4px solid #000", fontFamily: FONT, padding: "72px 48px" }}>
      <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 64 }}>
        {GUIDE.sections.map((sec, i) => (
          <div key={i} id={`section-${sec.num}`}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ background: "#000", padding: "4px 10px" }}>
                <span style={{ fontWeight: 900, fontSize: 11, letterSpacing: "0.2em", color: Y }}>{sec.num}</span>
              </div>
              <div style={{ flex: 1, height: 2, background: "rgba(0,0,0,0.08)" }} />
            </div>
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.1, color: "#000", marginBottom: 20 }}>
              {sec.heading}
            </h2>
            {sec.body.map((para, j) => (
              <p key={j} style={{ fontWeight: 500, fontSize: 15, lineHeight: 1.85, color: "rgba(0,0,0,0.65)", marginBottom: 16 }}>{para}</p>
            ))}
            {/* Callout block */}
            <div style={{ border: "4px solid #000", background: sec.callout.type === "stat" ? "#000" : Y, padding: "20px 24px", marginTop: 24, boxShadow: neo.md }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ background: sec.callout.type === "stat" ? Y : "#000", padding: "3px 8px", flexShrink: 0 }}>
                  <span style={{ fontWeight: 900, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: sec.callout.type === "stat" ? "#000" : Y }}>
                    {sec.callout.type === "stat" ? "Key Stat" : "Key Insight"}
                  </span>
                </div>
                <p style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.65, color: sec.callout.type === "stat" ? "rgba(255,255,255,0.85)" : "#000" }}>
                  {sec.callout.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LeadCaptureSection() {
  return (
    <section style={{ background: "#000", borderBottom: "4px solid #000", fontFamily: FONT, padding: "64px 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <div style={{ background: Y, display: "inline-block", padding: "4px 12px", marginBottom: 20 }}>
            <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000" }}>Free Download</span>
          </div>
          <h2 style={{ fontSize: "clamp(22px, 2.5vw, 34px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.1, color: "#fff", marginBottom: 16 }}>
            Get The Full Implementation Checklist As A PDF.
          </h2>
          <p style={{ fontWeight: 600, fontSize: 13, lineHeight: 1.75, color: "rgba(255,255,255,0.45)" }}>
            Every step in this guide, condensed into a printable checklist you can hand to your team. Free. No spam.
          </p>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input
              placeholder="Your work email address"
              readOnly
              style={{ border: "4px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)", padding: "14px 18px", fontFamily: FONT, fontWeight: 700, fontSize: 13, color: "#fff", outline: "none", letterSpacing: "0.02em" }}
            />
            <button style={{ background: Y, border: "4px solid " + Y, boxShadow: neo.md, fontWeight: 800, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", padding: "14px 20px", color: "#000", cursor: "pointer", fontFamily: FONT }}>
              Send Me The Checklist →
            </button>
          </div>
          <p style={{ fontWeight: 700, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginTop: 12 }}>
            No spam. Unsubscribe any time.
          </p>
        </div>
      </div>
    </section>
  );
}

function RelatedGuidesSection() {
  return (
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: FONT, padding: "64px 48px" }}>
      <p style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 28 }}>Related Guides</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
        {GUIDE.related_guides.map((g, i) => (
          <a key={i} href={g.link} style={{ border: "4px solid #000", borderRight: i < GUIDE.related_guides.length - 1 ? 0 : "4px solid #000", padding: "24px 24px", background: "#fff", textDecoration: "none", display: "block", boxShadow: neo.sm }}>
            <div style={{ background: "#000", display: "inline-block", padding: "3px 8px", marginBottom: 14 }}>
              <span style={{ color: Y, fontWeight: 800, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" }}>{g.time}</span>
            </div>
            <p style={{ fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.5, color: "#000", marginBottom: 12 }}>{g.title}</p>
            <span style={{ fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)" }}>Read Guide →</span>
          </a>
        ))}
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
            <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000" }}>Stop Reading. Start Automating.</span>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#fff", marginBottom: 20 }}>
            Ready To Stop Reading And Start Implementing?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontSize: 13, lineHeight: 1.75, textTransform: "uppercase", letterSpacing: "0.02em", maxWidth: 460 }}>
            Book a free AI audit. We'll identify your top automation opportunity and show you exactly what we'd build — in 14 days.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <button style={{ background: Y, border: "4px solid " + Y, boxShadow: neo.lg, fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", padding: "18px 28px", color: "#000", cursor: "pointer", width: "100%", fontFamily: FONT }}>
            Book Your Free Audit →
          </button>
          <p style={{ color: "rgba(255,255,255,0.2)", fontWeight: 700, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", textAlign: "center" }}>14-Day Sprint · Month-To-Month · No Setup Fee</p>
        </div>
      </div>
    </section>
  );
}

export function PillarGuide() {
  return (
    <div style={{ minHeight: "100vh", background: CREAM, overflowX: "hidden" }}>
      <Navbar />
      <ArticleHeader />
      <TOCSection />
      <GuideBodySection />
      <LeadCaptureSection />
      <RelatedGuidesSection />
      <CTASection />
    </div>
  );
}
