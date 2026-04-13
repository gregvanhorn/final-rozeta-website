import type { ReactNode } from "react";

const YELLOW = "hsl(47,100%,50%)";

const leftItems = [
  { label: "Zapier / N8N (Tools Only, No Builds Included)", cost: "~$500/Mo" },
  { label: "Automation Specialist To Build & Maintain Flows", cost: "$5,000–8,000/Mo" },
  { label: "12 Custom AI Agents At Consultant Rates ($5–15K Each)", cost: "$5,000–15,000/Mo" },
  { label: "Ongoing Monitoring, Maintenance & Iteration", cost: "$2,000+/Mo" },
];

const automations = [
  "Speed-To-Lead Engine — Respond In 60 Seconds",
  "Dead Estimate Reactivation — 7/14/21/30-Day Sequences",
  "No-Show & Cancellation Recovery",
  "Pipeline Follow-Up Automation",
  "Invoice & Collections Follow-Up",
  "+ Every Other Leak We Find In Your Business",
];

const agents = [
  "Supply Hawk — Live Supplier Cost Intelligence",
  "The Margin Autopsy — Pre-Job Profit Risk Scoring",
  "The Context Engine — Queryable Institutional Memory",
  "The Deal Room — Real-Time Pipeline Health Scoring",
  "+ 8 More Agents Built Around Your Specific Workflows",
];

const extras = [
  "Setup, Configuration & Integration",
  "Unlimited Maintenance & Monitoring",
  "Monthly Plain-Language Performance Reports",
  "Direct Team Access — No Account Managers",
];

function XMark() {
  return (
    <div className="mt-0.5 flex-shrink-0 flex h-5 w-5 items-center justify-center border-2 border-black bg-red-500">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <line x1="2" y1="2" x2="8" y2="8" stroke="white" strokeWidth="2" strokeLinecap="square" />
        <line x1="8" y1="2" x2="2" y2="8" stroke="white" strokeWidth="2" strokeLinecap="square" />
      </svg>
    </div>
  );
}

function CheckMark({ onDark }: { onDark?: boolean }) {
  return (
    <div
      className={`mt-0.5 flex-shrink-0 flex h-5 w-5 items-center justify-center border-2 border-black ${onDark ? "bg-black" : "bg-[hsl(47,100%,50%)]"}`}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <polyline
          points="1.5,5 4,7.5 8.5,2"
          stroke={onDark ? YELLOW : "#000"}
          strokeWidth="2.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
}

function BlockTag({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return (
    <div
      className={`mb-3 inline-block border-2 border-black px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest ${onDark ? "bg-[hsl(47,100%,50%)] text-black" : "bg-black text-[hsl(47,100%,50%)]"}`}
    >
      {children}
    </div>
  );
}

export function ValueComparison() {
  return (
    <section
      className="min-h-screen bg-[hsl(46,100%,96%)] px-8 py-20"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <div
          className="mb-5 inline-block border-4 border-black bg-black px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)]"
          style={{ boxShadow: "3px 3px 0px 0px #000" }}
        >
          The Math
        </div>

        {/* Headline */}
        <h2 className="text-6xl font-extrabold uppercase tracking-tighter leading-[1.02] lg:text-7xl">
          What $2,500 A Month
          <br />
          Actually Buys You.
        </h2>

        {/* Subtext */}
        <p className="mb-14 mt-4 max-w-xl text-base font-bold uppercase tracking-wide leading-relaxed opacity-50">
          Stack It Up Against What You'd Pay Piecing This Together Yourself — Before Accounting For The Time It Takes To Manage Three Vendors And A Freelancer.
        </p>

        {/* Main comparison — left | VS | right */}
        <div className="grid items-stretch gap-0" style={{ gridTemplateColumns: "1fr auto 1fr" }}>

          {/* LEFT — Without Rozeta */}
          <div
            className="flex flex-col border-4 border-black bg-black p-10"
            style={{ boxShadow: "6px 6px 0px 0px rgba(0,0,0,0.3)" }}
          >
            <div className="mb-4 inline-block self-start border-2 border-white bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-black">
              Without Rozeta
            </div>

            <p className="mb-8 text-xl font-extrabold uppercase tracking-tight text-white leading-snug">
              What You'd Piece Together
              <br />On Your Own
            </p>

            <div className="flex flex-1 flex-col gap-3">
              {leftItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border-2 border-white/10 bg-white/5 p-4"
                >
                  <XMark />
                  <div>
                    <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-white/55 leading-snug">
                      {item.label}
                    </p>
                    <p className="text-lg font-extrabold uppercase tracking-tighter text-white">
                      {item.cost}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total callout */}
            <div className="mt-6 border-4 border-[hsl(47,100%,50%)] bg-white/5 p-5">
              <p className="mb-1 text-[10px] font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)]">
                Total Equivalent Cost
              </p>
              <p className="text-4xl font-extrabold uppercase tracking-tighter text-white leading-none">
                $10,000–20,000+<span className="text-xl opacity-60">/Mo</span>
              </p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-white/40">
                And It's Still Cobbled Together. Across 3+ Vendors. Owned By Nobody.
              </p>
            </div>
          </div>

          {/* VS BADGE */}
          <div className="flex items-center justify-center px-5">
            <div
              className="flex h-14 w-14 flex-shrink-0 items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] text-sm font-extrabold uppercase tracking-widest"
              style={{ boxShadow: "3px 3px 0px 0px #000" }}
            >
              VS
            </div>
          </div>

          {/* RIGHT — With Rozeta */}
          <div
            className="flex flex-col border-4 border-black bg-[hsl(47,100%,50%)] p-10"
            style={{ boxShadow: "6px 6px 0px 0px rgba(0,0,0,0.3)" }}
          >
            <div className="mb-4 inline-block self-start border-2 border-black bg-black px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)]">
              With Rozeta — Level 2
            </div>

            <p className="mb-8 text-xl font-extrabold uppercase tracking-tight text-black leading-snug">
              One Team. One Bill.
              <br />Everything Built For You.
            </p>

            {/* Block 1 — Automation Layer */}
            <div className="mb-4 border-4 border-black bg-black/10 p-5">
              <BlockTag onDark>Unlimited Automation Layer — Level 1 + 2</BlockTag>
              <div className="flex flex-col gap-2">
                {automations.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckMark onDark />
                    <span className="text-[11px] font-bold uppercase tracking-wide text-black leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 2 — AI Agents */}
            <div className="mb-4 border-4 border-black bg-black/10 p-5">
              <BlockTag onDark>12 Custom AI Agents / Year — Level 3</BlockTag>
              <div className="flex flex-col gap-2">
                {agents.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckMark onDark />
                    <span className="text-[11px] font-bold uppercase tracking-wide text-black leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 3 — Everything included */}
            <div className="mb-6 border-4 border-black bg-black/10 p-5">
              <BlockTag onDark>Everything Included</BlockTag>
              <div className="flex flex-col gap-2">
                {extras.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckMark onDark />
                    <span className="text-[11px] font-bold uppercase tracking-wide text-black leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price callout */}
            <div className="mt-auto border-4 border-black bg-black p-5">
              <p className="mb-1 text-[10px] font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)]">
                All-In Monthly Price
              </p>
              <p className="text-4xl font-extrabold uppercase tracking-tighter text-white leading-none">
                $2,500<span className="text-xl opacity-60">/Mo</span>
              </p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-white/50">
                No Setup Fee. No Lock-In. One Team Owns All Of It.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom callout strip */}
        <div
          className="mt-1.5 flex items-center justify-between gap-8 border-4 border-black bg-black px-10 py-7"
          style={{ boxShadow: "6px 6px 0px 0px rgba(0,0,0,0.3)" }}
        >
          <div className="flex items-baseline gap-8">
            <div>
              <p className="mb-1 text-[10px] font-extrabold uppercase tracking-widest text-white/40">
                Without Rozeta
              </p>
              <p className="text-4xl font-extrabold uppercase tracking-tighter text-white/30 line-through leading-none">
                $10K–20K+<span className="text-xl">/Mo</span>
              </p>
            </div>

            <div className="border-2 border-[hsl(47,100%,50%)] bg-[hsl(47,100%,50%)] px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-black">
              VS
            </div>

            <div>
              <p className="mb-1 text-[10px] font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)]">
                With Rozeta Level 2
              </p>
              <p className="text-4xl font-extrabold uppercase tracking-tighter text-white leading-none">
                $2,500<span className="text-xl opacity-60">/Mo</span>
              </p>
            </div>
          </div>

          <div className="max-w-xs border-l-4 border-white/20 pl-8">
            <p className="text-xl font-extrabold uppercase tracking-tight text-white leading-snug">
              That's The Depth.
              <br />
              <span className="text-[hsl(47,100%,50%)]">That's The Math.</span>
            </p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-white/40">
              Month-To-Month. We Earn Your Business Every 30 Days.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
