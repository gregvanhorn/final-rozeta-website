const Y = "hsl(47,100%,50%)";

const leftItems = [
  { label: "Zapier / n8n (tools only, no builds included)", cost: "~$500/mo" },
  { label: "Automation specialist to build & maintain flows", cost: "$5,000–8,000/mo" },
  { label: "12 custom AI agents at consultant rates ($5–15K each)", cost: "$5,000–15,000/mo" },
  { label: "Ongoing monitoring, maintenance & iteration", cost: "$2,000+/mo" },
];

const automations = [
  "Speed-to-lead engine — respond in 60 seconds",
  "Dead estimate reactivation — 7/14/21/30-day sequences",
  "No-show & cancellation recovery",
  "Pipeline follow-up automation",
  "Invoice & collections follow-up",
  "+ every other leak we find in your business",
];

const agents = [
  "Supply Hawk — live supplier cost intelligence",
  "The Margin Autopsy — pre-job profit risk scoring",
  "The Context Engine — queryable institutional memory",
  "The Deal Room — real-time pipeline health scoring",
  "+ 8 more agents built around your specific workflows",
];

const extras = [
  "Setup, configuration & integration",
  "Unlimited maintenance & monitoring",
  "Monthly plain-language performance reports",
  "Direct team access — no account managers",
];

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <rect width="16" height="16" fill="#ef4444" />
      <line x1="4" y1="4" x2="12" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
      <line x1="12" y1="4" x2="4" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
}

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <div
      style={{
        flexShrink: 0,
        marginTop: 2,
        width: 18,
        height: 18,
        background: dark ? "#000" : Y,
        border: "2px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <polyline points="1.5,5 4,7.5 8.5,2" stroke={dark ? Y : "#000"} strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
    </div>
  );
}

function BlockLabel({ text, dark }: { text: string; dark?: boolean }) {
  return (
    <div
      style={{
        display: "inline-block",
        background: dark ? Y : "#000",
        color: dark ? "#000" : Y,
        border: "3px solid #000",
        padding: "4px 12px",
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: 12,
      }}
    >
      {text}
    </div>
  );
}

export function ValueComparison() {
  const shadow = "5px 5px 0px 0px #000";
  const shadowSm = "3px 3px 0px 0px #000";

  return (
    <div
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        background: "hsl(46,100%,96%)",
        minHeight: "100vh",
        padding: "80px 48px",
        color: "#0d0d0d",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* Section header */}
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            background: "#000",
            color: Y,
            border: "4px solid #000",
            padding: "6px 16px",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            boxShadow: shadowSm,
            marginBottom: 20,
          }}
        >
          The Math
        </div>

        <h2
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          What $2,500 a month
          <br />
          actually buys you.
        </h2>

        <p
          style={{
            fontSize: 18,
            fontWeight: 600,
            opacity: 0.55,
            maxWidth: 600,
            lineHeight: 1.55,
            marginBottom: 56,
          }}
        >
          Stack it up against what you'd pay piecing this together yourself — and that's before accounting for the time it takes to manage three vendors and a freelancer.
        </p>

        {/* Two-column comparison */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 0, alignItems: "stretch" }}>

          {/* LEFT — Without Rozeta */}
          <div
            style={{
              background: "#000",
              border: "4px solid #000",
              padding: "40px 36px",
              boxShadow: shadow,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#000",
                border: "3px solid #fff",
                padding: "4px 12px",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 16,
                alignSelf: "flex-start",
              }}
            >
              Without Rozeta
            </div>

            <p
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                marginBottom: 32,
                lineHeight: 1.2,
              }}
            >
              What you'd piece together on your own
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
              {leftItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    background: "rgba(255,255,255,0.04)",
                    border: "2px solid rgba(255,255,255,0.12)",
                    padding: "14px 16px",
                  }}
                >
                  <XIcon />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginTop: 4 }}>
                      {item.cost}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div
              style={{
                marginTop: 28,
                background: "rgba(255,255,255,0.08)",
                border: `3px solid ${Y}`,
                padding: "20px 20px",
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 800, color: Y, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>
                Total equivalent cost
              </p>
              <p style={{ fontSize: 36, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>
                $10,000–20,000+
                <span style={{ fontSize: 18, fontWeight: 700, opacity: 0.6 }}>/mo</span>
              </p>
              <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginTop: 6 }}>
                And it's still cobbled together. Across 3+ vendors. Owned by nobody.
              </p>
            </div>
          </div>

          {/* VS BADGE */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 16px",
              zIndex: 10,
            }}
          >
            <div
              style={{
                background: Y,
                border: "4px solid #000",
                width: 52,
                height: 52,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                boxShadow: "3px 3px 0px 0px #000",
                flexShrink: 0,
              }}
            >
              VS
            </div>
          </div>

          {/* RIGHT — With Rozeta */}
          <div
            style={{
              background: Y,
              border: "4px solid #000",
              padding: "40px 36px",
              boxShadow: shadow,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "#000",
                color: Y,
                border: "3px solid #000",
                padding: "4px 12px",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 16,
                alignSelf: "flex-start",
              }}
            >
              With Rozeta — Level 2
            </div>

            <p
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#000",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                marginBottom: 32,
                lineHeight: 1.2,
              }}
            >
              One team. One bill.
              <br />Everything built for you.
            </p>

            {/* Block 1 — Automations */}
            <div
              style={{
                background: "rgba(0,0,0,0.06)",
                border: "3px solid #000",
                padding: "20px 20px",
                marginBottom: 16,
              }}
            >
              <BlockLabel text="Unlimited Automation Layer — Level 1 + 2" dark />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {automations.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckIcon dark />
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#000", lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 2 — AI Agents */}
            <div
              style={{
                background: "rgba(0,0,0,0.06)",
                border: "3px solid #000",
                padding: "20px 20px",
                marginBottom: 16,
              }}
            >
              <BlockLabel text="12 Custom AI Agents / Year — Level 3" dark />
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {agents.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckIcon dark />
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#000", lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 3 — Everything included */}
            <div
              style={{
                background: "rgba(0,0,0,0.06)",
                border: "3px solid #000",
                padding: "16px 20px",
                marginBottom: 28,
              }}
            >
              <BlockLabel text="Everything included" dark />
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {extras.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckIcon dark />
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#000", lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price callout */}
            <div
              style={{
                background: "#000",
                border: "3px solid #000",
                padding: "20px 20px",
                marginTop: "auto",
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 800, color: Y, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>
                All-in monthly price
              </p>
              <p style={{ fontSize: 36, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>
                $2,500
                <span style={{ fontSize: 18, fontWeight: 700, opacity: 0.6 }}>/mo</span>
              </p>
              <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>
                No setup fee. No lock-in. One team owns all of it.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom callout strip */}
        <div
          style={{
            marginTop: 6,
            background: "#000",
            border: "4px solid #000",
            padding: "28px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            boxShadow: shadow,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 2 }}>
                Without Rozeta
              </p>
              <p style={{ fontSize: 40, fontWeight: 800, color: "rgba(255,255,255,0.35)", letterSpacing: "-0.03em", lineHeight: 1, textDecoration: "line-through" }}>
                $10K–20K+<span style={{ fontSize: 18 }}>/mo</span>
              </p>
            </div>
            <div
              style={{
                background: Y,
                border: "3px solid " + Y,
                color: "#000",
                padding: "6px 14px",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              vs
            </div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, color: Y, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 2 }}>
                With Rozeta Level 2
              </p>
              <p style={{ fontSize: 40, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>
                $2,500<span style={{ fontSize: 18, opacity: 0.6 }}>/mo</span>
              </p>
            </div>
          </div>

          <div style={{ borderLeft: "3px solid rgba(255,255,255,0.15)", paddingLeft: 32, maxWidth: 320 }}>
            <p style={{ fontSize: 20, fontWeight: 800, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
              That's the depth.
              <br />
              <span style={{ color: Y }}>That's the math.</span>
            </p>
            <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.45)", marginTop: 8, lineHeight: 1.5 }}>
              Month-to-month. We earn your business every 30 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
