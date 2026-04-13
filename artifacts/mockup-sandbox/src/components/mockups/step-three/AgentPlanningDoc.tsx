export function AgentPlanningDoc() {
  const industries = [
    { rank: 1, name: "Home Services", note: "HVAC, roofing, plumbing, pest control, landscaping", why: "Highest volume, most manual ops, fastest ROI" },
    { rank: 2, name: "Franchise / Multi-Location", note: "Cleaning, fitness, food, auto repair", why: "One solution scales across every unit" },
    { rank: 3, name: "Health & Wellness", note: "MedSpa, dental, chiro, PT, gyms", why: "High appointment value, massive dormant-client problem" },
    { rank: 4, name: "Real Estate / Property Mgmt", note: "", why: "High-ticket, extremely lead-heavy, almost no automation" },
    { rank: 5, name: "Professional Services", note: "Consulting, legal, accounting, agencies", why: "High ACV - proposal follow-up and billing are chronic pain" },
    { rank: 6, name: "Private Equity / Portfolio Co.", note: "", why: "Cross-vertical buyer, wants operational improvement at scale" },
  ];

  const agents = [
    { rank: 1, name: "60-Second Lead Response Agent", dept: "Sales", desc: "Fires personalized SMS + email the moment a lead hits any channel, routes to the right rep, logs in CRM." },
    { rank: 2, name: "Dead Quote Reactivation Agent", dept: "Sales", desc: "Monitors all open estimates past X days, fires timed follow-up sequences automatically." },
    { rank: 3, name: "No-Show Recovery Agent", dept: "Operations", desc: "Detects missed appointments, fires rescheduling sequences within minutes before the slot goes cold." },
    { rank: 4, name: "Churn Prediction Agent", dept: "Customer Success", desc: "Monitors engagement signals, flags at-risk accounts before they leave, triggers retention campaigns." },
    { rank: 5, name: "Invoice Follow-Up Agent", dept: "Finance", desc: "Monitors AR aging, sends progressive follow-up sequences for every outstanding invoice." },
    { rank: 6, name: "Supply Hawk ★ KEEP", dept: "Finance / Ops", desc: "Tracks per-unit supplier costs over time, fires alerts when prices quietly drift upward." },
    { rank: 7, name: "Intake Qualification Agent", dept: "Sales", desc: "Asks qualifying questions via SMS/email when a lead comes in, scores them, routes to the right rep or tier." },
    { rank: 8, name: "Staff Performance Monitor", dept: "Sales / Ops", desc: "Tracks rep activity - call volume, follow-up rate, close rate - and surfaces coaching opportunities." },
    { rank: 9, name: "Membership Renewal Agent", dept: "Revenue", desc: "Monitors subscription/membership expiry, fires personalized renewal campaigns before lapse." },
    { rank: 10, name: "Review Request Agent", dept: "Marketing", desc: "After a completed job or appointment, automatically requests a review on the right platform at the right moment." },
    { rank: 11, name: "Onboarding Concierge Agent", dept: "Operations", desc: "Automates document collection, kickoff scheduling, and intro communications for every new client." },
    { rank: 12, name: "Job Completion Billing Agent", dept: "Finance / Field", desc: "Detects when a job is marked complete, triggers invoice creation and delivery automatically." },
    { rank: 13, name: "Referral Campaign Agent", dept: "Marketing", desc: "Identifies your happiest clients and triggers an automated referral ask at the optimal moment." },
    { rank: 14, name: "Competitive Intelligence Agent", dept: "Strategy", desc: "Monitors competitor pricing, reviews, and job postings - surfaces a weekly digest to leadership." },
    { rank: 15, name: "Content Distribution Agent", dept: "Marketing", desc: "Takes one piece of content and redistributes it across every channel in the right format automatically." },
  ];

  const cards = [
    {
      name: "Supply Hawk",
      industry: "HOME SERVICES",
      industryColor: "bg-orange-100 text-orange-800",
      desc: "Keep the name, rewrite the copy to be sharper and Rozeta Labs-branded. Monitors per-unit supplier costs over time, fires alerts when prices quietly drift upward.",
    },
    {
      name: "Membership Renewal Agent",
      industry: "HEALTH & WELLNESS",
      industryColor: "bg-pink-100 text-pink-800",
      desc: "Most practices have 20–40% of their revenue sitting in a client list no one is following up with. This agent scans your database daily, flags anyone dormant past a set threshold, and fires a personalized reactivation sequence across SMS and email - automatically, without anyone on your team touching it.",
    },
    {
      name: "Intake Qualification Agent",
      industry: "REAL ESTATE",
      industryColor: "bg-blue-100 text-blue-800",
      desc: "The moment a buyer, seller, or tenant inquiry lands - regardless of channel - this agent asks the right qualifying questions, scores the lead, and routes it to the right person with full context already attached. No more chasing cold leads your team already touched once and forgot.",
    },
    {
      name: "Staff Performance Monitor",
      industry: "PROFESSIONAL SERVICES",
      industryColor: "bg-purple-100 text-purple-800",
      desc: "Tracks every rep, every proposal, every follow-up cycle - and surfaces exactly where deals are stalling, who's underperforming, and what the gap is between your best closer and everyone else. Weekly digests delivered automatically, no manual reporting required.",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <div className="mx-auto max-w-5xl">

        {/* Title */}
        <div className="mb-2 inline-block border-4 border-black bg-[hsl(47,100%,50%)] px-4 py-2 text-xs font-bold tracking-widest uppercase" style={{ boxShadow: "3px 3px 0 #000" }}>
          Step Three Planning Doc
        </div>
        <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight">Custom AI Agents</h1>
        <p className="mt-1 text-sm text-gray-500 font-medium">Rozeta Labs · How It Works: Step Three</p>

        <hr className="my-8 border-t-4 border-black" />

        {/* Section 1: Industries */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold uppercase tracking-widest border-b-4 border-black pb-2">Industries - Stack Ranked</h2>
          <div className="overflow-hidden border-4 border-black">
            {industries.map((ind, i) => (
              <div key={i} className={`flex items-start gap-4 p-4 border-b-2 border-black last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] text-sm font-bold" style={{ boxShadow: "2px 2px 0 #000" }}>
                  {ind.rank}
                </span>
                <div className="flex-1">
                  <p className="font-bold uppercase text-sm">{ind.name}{ind.note && <span className="font-normal normal-case text-gray-500 ml-2">({ind.note})</span>}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{ind.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: 15 Agents */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold uppercase tracking-widest border-b-4 border-black pb-2">15 Custom AI Agent Ideas - Stack Ranked</h2>
          <div className="overflow-hidden border-4 border-black">
            {agents.map((agent, i) => (
              <div key={i} className={`flex items-start gap-4 p-4 border-b-2 border-black last:border-b-0 ${agent.name.includes("★") ? "bg-[hsl(47,100%,50%)]" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center border-4 border-black text-sm font-bold ${agent.name.includes("★") ? "bg-black text-[hsl(47,100%,50%)]" : "bg-[hsl(47,100%,50%)]"}`} style={{ boxShadow: "2px 2px 0 #000" }}>
                  {agent.rank}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <p className="font-bold text-sm uppercase">{agent.name.replace(" ★ KEEP", "")}</p>
                    {agent.name.includes("★") && (
                      <span className="border-2 border-black bg-black text-[hsl(47,100%,50%)] text-xs font-bold px-2 py-0.5 uppercase tracking-wider">★ Keep</span>
                    )}
                    <span className="border-2 border-black bg-white text-xs font-bold px-2 py-0.5 uppercase tracking-wider text-gray-600">{agent.dept}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{agent.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 4 Cards for Step Three */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold uppercase tracking-widest border-b-4 border-black pb-2">Proposed 4 Cards for Step Three</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((card, i) => (
              <div key={i} className="border-4 border-black p-6 bg-white" style={{ boxShadow: "5px 5px 0 #000" }}>
                <span className={`inline-block border-2 border-black text-xs font-bold px-2 py-0.5 uppercase tracking-widest mb-3 ${card.industryColor}`}>
                  {card.industry}
                </span>
                <h3 className="text-base font-bold uppercase tracking-tight mb-3">{card.name}</h3>
                <div className="h-px bg-black mb-3" />
                <p className="text-xs leading-relaxed text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-xs text-gray-400 text-center pb-8">Rozeta Labs · Internal Planning · Step Three Build Out</p>
      </div>
    </div>
  );
}
