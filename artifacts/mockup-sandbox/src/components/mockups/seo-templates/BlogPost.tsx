// ─────────────────────────────────────────────────────────────────────────────
// ROZETA LABS — BLOG POST PAGE TEMPLATE
// Template: /blog/[post-slug]
// Sample:   /blog/home-services-automation — "Home Services Automation: Complete Playbook"
// ─────────────────────────────────────────────────────────────────────────────

const POST = {
  slug: "home-services-automation-playbook",
  title: "Home Services Automation: The Complete Playbook",
  category: "Automation",
  author: "Rozeta Labs",
  date: "March 14, 2025",
  readTime: "11 min read",
  excerpt: "Every home services business has the same problem: they're great at the work and terrible at the follow-up. This playbook walks through every automation a home services SMB should build, in the order that generates the highest ROI.",
  sections: [
    {
      heading: "Why Home Services Businesses Are The Perfect Fit For AI Automation",
      body: "Home services businesses run on repeatable processes. A lead comes in, it gets qualified, an estimate goes out, someone follows up, a job gets scheduled, a tech shows up, an invoice gets sent, and — if you're lucky — a review gets requested. Every one of those steps happens the same way, every time. That predictability is exactly what makes automation so powerful here.",
      subheading: null,
    },
    {
      heading: "The Five Revenue Leaks Every Home Services Business Has",
      body: "Before building any automation, you need to know where the money is going. Based on our work with HVAC companies, roofers, plumbers, and property managers, we see the same five leaks in virtually every business we audit.",
      subheading: null,
    },
    {
      heading: null,
      subheading: "1. The Speed-To-Lead Gap",
      body: "78% of jobs go to the first company that responds. The average home services business takes 47 minutes to respond to a new lead. In a market where the first responder wins, that gap is where jobs go to die. Speed-to-lead automation closes that gap completely — every new inquiry gets an acknowledgment within 60 seconds, even at 11pm on a Sunday.",
    },
    {
      heading: null,
      subheading: "2. The Dead Estimate Problem",
      body: "The average home services company has $40,000–$100,000 in unsigned estimates at any given time. Most of those estimates aren't dead — they're just waiting for a follow-up that never came. A dead estimate reactivation sequence follows up at day 7, 14, 21, and 30 with messages calibrated to re-engage without being pushy. Most clients see 3–8% of their dead estimates convert.",
    },
    {
      heading: null,
      subheading: "3. No-Show and Cancellation Chaos",
      body: "Every no-show costs $200–$500 in wasted dispatch time. Multiply that by 3–5 no-shows per week and you're looking at $30,000–$130,000 in wasted operational costs annually. Automated confirmation sequences, day-before reminders, and immediate reschedule requests when a cancellation comes in eliminate 60–70% of this waste.",
    },
    {
      heading: "The Full Automation Stack For Home Services",
      body: "Based on our work across HVAC, roofing, plumbing, and property management — here is the priority order for building out your automation stack:",
      subheading: null,
      bullets: [
        "Speed-To-Lead Engine — AI-powered response within 60 seconds of any new inquiry",
        "Dead Estimate Reactivation — 7/14/21/30-day sequences on all unsigned proposals",
        "No-Show Recovery — SMS/email confirmation sequences with auto-reschedule",
        "Open Invoice Follow-Up — automated collection sequences for past-due accounts",
        "Review Request Automation — triggered post-job, high-conversion timing",
      ],
    },
  ],
  stat_callout: { label: "Industry Data", stat: "$73K", sub: "Average annual revenue recovered by Rozeta clients in their first year across all five automation types." },
  mid_article_cta: { headline: "Working Through This Manually?", sub: "Let us build these automations for your home services business — in 14 days.", button: "Book A Free Audit →" },
  related_automations: [
    { label: "Speed-To-Lead Engine", link: "/automations/lead-follow-up" },
    { label: "Dead Estimate Reactivation", link: "/automations/crm-automation" },
    { label: "No-Show Recovery Flow", link: "/automations/scheduling-automation" },
  ],
  related_industries: [
    { label: "HVAC Companies", link: "/industries/hvac" },
    { label: "Roofing Contractors", link: "/industries/roofing" },
    { label: "Plumbers", link: "/industries/plumbing" },
  ],
  author_bio: "Rozeta Labs builds AI automation systems for home services businesses. We've helped HVAC, roofing, plumbing, and property management companies recover millions in revenue through speed-to-lead, estimate reactivation, and collections automation — without adding headcount.",
  related_posts: [
    { title: "HVAC Lead Follow-Up: Why 47 Minutes Is Costing You Jobs", category: "HVAC", readTime: "7 min", link: "/blog/hvac-lead-follow-up" },
    { title: "The Dead Estimate Reactivation Playbook: How To Close Jobs You'd Written Off", category: "Sales", readTime: "9 min", link: "/blog/dead-estimate-reactivation" },
    { title: "Zapier vs. n8n vs. Make: Which Automation Tool Is Right For SMBs?", category: "Tools", readTime: "6 min", link: "/blog/zapier-vs-n8n-vs-make" },
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
        {["Blog", "Industries", "Automations"].map(l => (
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
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: FONT, padding: "64px 48px 48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        <span style={{ color: "rgba(0,0,0,0.3)", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>Blog</span>
        <span style={{ color: "rgba(0,0,0,0.2)", fontSize: 11 }}>›</span>
        <div style={{ background: Y, border: "2px solid #000", padding: "4px 10px" }}>
          <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#000" }}>{POST.category}</span>
        </div>
      </div>
      <h1 style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.0, color: "#000", maxWidth: 800, marginBottom: 20 }}>
        {POST.title}
      </h1>
      <p style={{ fontWeight: 600, fontSize: 16, lineHeight: 1.75, color: "rgba(0,0,0,0.5)", maxWidth: 640, marginBottom: 32 }}>
        {POST.excerpt}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 20, borderTop: "3px solid rgba(0,0,0,0.1)", paddingTop: 24, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="2" y="8" width="3" height="8" fill={Y}/><rect x="6" y="5" width="3" height="11" fill={Y}/><rect x="10" y="2" width="3" height="14" fill={Y}/><rect x="14" y="6" width="3" height="10" fill={Y}/></svg>
          </div>
          <span style={{ fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#000" }}>{POST.author}</span>
        </div>
        <span style={{ color: "rgba(0,0,0,0.2)", fontSize: 16 }}>·</span>
        <span style={{ fontWeight: 700, fontSize: 11, color: "rgba(0,0,0,0.45)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{POST.date}</span>
        <span style={{ color: "rgba(0,0,0,0.2)", fontSize: 16 }}>·</span>
        <div style={{ background: "#000", padding: "3px 10px" }}>
          <span style={{ fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: Y }}>{POST.readTime}</span>
        </div>
      </div>
    </section>
  );
}

function HeroTypographicBlock() {
  return (
    <section style={{ background: "#000", borderBottom: "4px solid #000", fontFamily: FONT, padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 220 }}>
      <p style={{ fontWeight: 900, fontSize: "clamp(48px, 7vw, 96px)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.88, color: Y, margin: 0 }}>HOME</p>
      <p style={{ fontWeight: 900, fontSize: "clamp(48px, 7vw, 96px)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.88, color: "#fff", margin: 0 }}>SERVICES</p>
      <p style={{ fontWeight: 900, fontSize: "clamp(48px, 7vw, 96px)", textTransform: "uppercase", letterSpacing: "-0.04em", lineHeight: 0.88, color: "rgba(255,255,255,0.12)", margin: 0 }}>AUTOMATION</p>
      <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ flex: 1, height: 2, background: "rgba(255,255,255,0.08)" }} />
        <span style={{ fontWeight: 700, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>Rozeta Labs · March 2025</span>
        <div style={{ flex: 1, height: 2, background: "rgba(255,255,255,0.08)" }} />
      </div>
    </section>
  );
}

function ArticleBody() {
  const showMidCTA = true;
  return (
    <section style={{ background: "#fff", borderBottom: "4px solid #000", fontFamily: FONT, padding: "64px 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 48, alignItems: "start" }}>
        {/* Main content */}
        <div>
          {POST.sections.map((sec, i) => (
            <div key={i} style={{ marginBottom: 36 }}>
              {sec.heading && (
                <h2 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.15, color: "#000", marginBottom: 16 }}>
                  {sec.heading}
                </h2>
              )}
              {sec.subheading && (
                <h3 style={{ fontSize: "clamp(14px, 2vw, 18px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.3, color: "#000", marginBottom: 12, paddingLeft: 16, borderLeft: "4px solid " + Y }}>
                  {sec.subheading}
                </h3>
              )}
              <p style={{ fontWeight: 500, fontSize: 15, lineHeight: 1.85, color: "rgba(0,0,0,0.65)", marginBottom: sec.bullets ? 16 : 0 }}>{sec.body}</p>
              {sec.bullets && (
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {sec.bullets.map((b: string, j: number) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ marginTop: 4, flexShrink: 0, width: 18, height: 18, background: Y, border: "2px solid #000", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontWeight: 900, fontSize: 10, color: "#000" }}>→</span>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.6, color: "rgba(0,0,0,0.75)" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {/* Inject mid-article CTA after section 2 */}
              {i === 1 && showMidCTA && (
                <div style={{ border: "4px solid #000", background: Y, padding: "20px 24px", margin: "28px 0", boxShadow: neo.md }}>
                  <p style={{ fontWeight: 900, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.04em", color: "#000", marginBottom: 6 }}>{POST.mid_article_cta.headline}</p>
                  <p style={{ fontWeight: 700, fontSize: 13, color: "rgba(0,0,0,0.6)", marginBottom: 16 }}>{POST.mid_article_cta.sub}</p>
                  <button style={{ background: "#000", border: "none", fontFamily: FONT, fontWeight: 800, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", padding: "10px 20px", color: Y, cursor: "pointer" }}>
                    {POST.mid_article_cta.button}
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Stat callout */}
          <div style={{ border: "4px solid #000", background: "#000", padding: "24px 28px", marginBottom: 36, boxShadow: neo.md }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <div style={{ borderRight: "3px solid rgba(255,255,255,0.1)", paddingRight: 20 }}>
                <p style={{ fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.35)", marginBottom: 6 }}>{POST.stat_callout.label}</p>
                <p style={{ fontWeight: 900, fontSize: 52, letterSpacing: "-0.04em", lineHeight: 1, color: Y }}>{POST.stat_callout.stat}</p>
              </div>
              <p style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.6)", maxWidth: 380 }}>{POST.stat_callout.sub}</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ position: "sticky", top: 80, display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Related automations */}
          <div style={{ border: "4px solid #000", background: CREAM, boxShadow: neo.sm }}>
            <div style={{ borderBottom: "4px solid #000", padding: "10px 16px", background: "#000" }}>
              <p style={{ fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.18em", color: Y }}>Related Automations</p>
            </div>
            {POST.related_automations.map((r, i) => (
              <a key={i} href={r.link} style={{ display: "block", padding: "10px 16px", borderBottom: i < POST.related_automations.length - 1 ? "3px solid rgba(0,0,0,0.1)" : "none", textDecoration: "none" }}>
                <span style={{ fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.07em", color: "#000" }}>{r.label} →</span>
              </a>
            ))}
          </div>
          {/* Related industries */}
          <div style={{ border: "4px solid #000", background: CREAM, boxShadow: neo.sm }}>
            <div style={{ borderBottom: "4px solid #000", padding: "10px 16px", background: "#000" }}>
              <p style={{ fontWeight: 800, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.18em", color: Y }}>Related Industries</p>
            </div>
            {POST.related_industries.map((r, i) => (
              <a key={i} href={r.link} style={{ display: "block", padding: "10px 16px", borderBottom: i < POST.related_industries.length - 1 ? "3px solid rgba(0,0,0,0.1)" : "none", textDecoration: "none" }}>
                <span style={{ fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.07em", color: "#000" }}>{r.label} →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorBioSection() {
  return (
    <section style={{ background: CREAM, borderBottom: "4px solid #000", fontFamily: FONT, padding: "40px 48px" }}>
      <div style={{ border: "4px solid #000", background: "#fff", padding: "24px 28px", display: "flex", gap: 20, alignItems: "flex-start", maxWidth: 760, boxShadow: neo.sm }}>
        <div style={{ width: 44, height: 44, background: "#000", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="2" y="8" width="3" height="8" fill={Y}/><rect x="6" y="5" width="3" height="11" fill={Y}/><rect x="10" y="2" width="3" height="14" fill={Y}/><rect x="14" y="6" width="3" height="10" fill={Y}/></svg>
        </div>
        <div>
          <p style={{ fontWeight: 900, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#000", marginBottom: 8 }}>{POST.author}</p>
          <p style={{ fontWeight: 600, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.55)", marginBottom: 12 }}>{POST.author_bio}</p>
          <a href="/blog" style={{ fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "#000", textDecoration: "none" }}>More From Rozeta Labs →</a>
        </div>
      </div>
    </section>
  );
}

function RelatedPostsSection() {
  return (
    <section style={{ background: "#fff", borderBottom: "4px solid #000", fontFamily: FONT, padding: "64px 48px" }}>
      <p style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 28 }}>Related Posts</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
        {POST.related_posts.map((p, i) => (
          <a key={i} href={p.link} style={{ border: "4px solid #000", borderRight: i < POST.related_posts.length - 1 ? 0 : "4px solid #000", padding: "24px 24px", background: i % 2 === 0 ? CREAM : "#fff", textDecoration: "none", display: "block", boxShadow: neo.sm }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 14, alignItems: "center" }}>
              <div style={{ background: "#000", padding: "3px 8px" }}>
                <span style={{ color: Y, fontWeight: 800, fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase" }}>{p.category}</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(0,0,0,0.35)" }}>{p.readTime}</span>
            </div>
            <p style={{ fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.5, color: "#000", marginBottom: 14 }}>{p.title}</p>
            <span style={{ fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)" }}>Read Post →</span>
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
            <span style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000" }}>Stop Automating Manually</span>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, color: "#fff", marginBottom: 20 }}>
            Stop Reading. Start Automating.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontWeight: 700, fontSize: 13, lineHeight: 1.75, textTransform: "uppercase", letterSpacing: "0.02em", maxWidth: 460 }}>
            Book a free audit. We'll find your top revenue leak and show you exactly what we'd build to plug it — in 14 days.
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

export function BlogPost() {
  return (
    <div style={{ minHeight: "100vh", background: CREAM, overflowX: "hidden" }}>
      <Navbar />
      <ArticleHeader />
      <HeroTypographicBlock />
      <ArticleBody />
      <AuthorBioSection />
      <RelatedPostsSection />
      <CTASection />
    </div>
  );
}
