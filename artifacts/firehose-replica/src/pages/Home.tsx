import { useState, useEffect, useRef } from "react";
import { Bot, ArrowRight, Code2, Sparkles, Radio, ChevronRight, X, Menu, ExternalLink, Zap, Brain } from "lucide-react";

const USE_CASES = [
  {
    id: "step-1",
    label: "Step 1 — Find the Leaks",
    description: "We audit your pipeline, response times, estimate follow-up, and retention process to identify exactly where revenue is walking out the door.",
    query: "audit: pipeline AND response_times AND estimate_follow_up AND retention",
    events: [
      {
        title: "Pipeline audit complete",
        url: "",
        summary: "+ Identified revenue gaps in lead response, estimate follow-up, and retention",
      },
      {
        title: "Dollar figure attached to every leak",
        url: "",
        summary: "+ $0 left vague — every gap gets a real number assigned to it",
      },
      {
        title: "Full revenue leak report delivered",
        url: "",
        summary: "+ Clear picture of exactly where money is walking out the door",
      },
    ],
  },
  {
    id: "step-2",
    label: "Step 2 — Build the Systems",
    description: "We custom-build the five Revenue Recovery systems for your specific business — your CRM, your workflow, your team. Nothing templated. Live in 14 days.",
    query: "build: CRM AND workflow AND team_systems AND timeline:14_days",
    events: [
      {
        title: "Custom systems scoped to your business",
        url: "",
        summary: "+ No templates — built around your CRM, workflow, and team structure",
      },
      {
        title: "All five recovery systems configured",
        url: "",
        summary: "+ Lead response, estimate follow-up, no-show recovery, reactivation, reviews",
      },
      {
        title: "Live in 14 days",
        url: "",
        summary: "+ Full buildout and handoff completed within two weeks of kickoff",
      },
    ],
  },
  {
    id: "step-3",
    label: "Step 3 — Plug the Leaks",
    description: "The systems go live. Leads get responded to in 60 seconds. Dead estimates get worked. No-shows get recovered. You stop losing money you were already earning.",
    query: "deploy: lead_response:60s AND estimate_recovery AND no_show_followup",
    events: [
      {
        title: "Leads responded to within 60 seconds",
        url: "",
        summary: "+ Automated response fires the moment a new lead hits your pipeline",
      },
      {
        title: "Dead estimates reactivated",
        url: "",
        summary: "+ Follow-up sequences re-engage quotes that went cold",
      },
      {
        title: "No-shows recovered automatically",
        url: "",
        summary: "+ Missed appointments trigger instant rebooking sequences",
      },
    ],
  },
  {
    id: "step-4",
    label: "Step 4 — Measure the Recovery",
    description: "Every system is tracked. Every month you get a plain-language report showing exactly what each system recovered — jobs booked, estimates closed, customers reactivated, reviews captured.",
    query: "report: jobs_booked AND estimates_closed AND customers_reactivated AND reviews",
    events: [
      {
        title: "Monthly plain-language report delivered",
        url: "",
        summary: "+ No dashboards to learn — just a clear summary of what was recovered",
      },
      {
        title: "Jobs booked and estimates closed tracked",
        url: "",
        summary: "+ Every recovered dollar attributed to the system that captured it",
      },
      {
        title: "Customer reactivations and reviews logged",
        url: "",
        summary: "+ Full visibility into retention and reputation recovery each month",
      },
    ],
  },
  {
    id: "step-5",
    label: "Step 5 — Optimize and Expand",
    description: "Once the first layer is running, we go deeper. New leaks get identified. New systems get built. The engagement compounds and the business gets harder to disrupt every month.",
    query: "optimize: new_leaks AND expand_systems AND compound_growth",
    events: [
      {
        title: "New leaks identified as business evolves",
        url: "",
        summary: "+ Ongoing audits surface new revenue gaps as your operations grow",
      },
      {
        title: "New systems built on top of existing layer",
        url: "",
        summary: "+ Each phase compounds on the last — coverage deepens every month",
      },
      {
        title: "Business becomes harder to disrupt",
        url: "",
        summary: "+ Systematized operations create resilience competitors can't match",
      },
    ],
  },
];

const QUERY_EXAMPLES = [
  { query: 'site:reuters.com AND title:tesla', label: "Target specific sites" },
  { query: 'page_category:"artificial intelligence"', label: "ML-classified content" },
  { query: 'publish_time:[2026-01-01 TO 2026-03-01]', label: "Time-range filtering" },
  { query: 'title:"breaking news" AND added:acquisition', label: "Compound queries" },
  { query: 'site:(nytimes.com OR wsj.com)', label: "Multi-site queries" },
  { query: 'NOT site:reddit.com AND title:bitcoin', label: "Exclusion filters" },
  { query: '"machine learning" OR "deep learning"', label: "Phrase matching" },
  { query: 'page_language:en AND domain_type:news', label: "Language & type filters" },
];

const FEATURES = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Price Hawk",
    description: "Monitors what you're actually paying per unit across suppliers over time and alerts you when prices have quietly crept up. Most owners don't realize they're getting slowly bled until it's already cost them thousands.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Close Rate Whisperer",
    description: "Analyzes your estimate pipeline by job type, zip code, ticket size, and season to tell you exactly where you're underpriced and where you're losing deals you shouldn't. If you're closing 90% of bids in a category, you're leaving money on the table — this agent finds it.",
  },
  {
    icon: <Radio className="h-6 w-6" />,
    title: "Ghost Hunter",
    description: "Scans your customer database and scores past clients by reactivation probability based on service history, time since last job, and seasonal patterns. Turns a dead list into a warm pipeline without spending a dollar on ads.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Storm Chaser",
    description: "Monitors weather events and local permit filings to surface demand surges before your competitors even know they're coming. By the time everyone else is scrambling for storm leads, you're already booked.",
  },
];

function renderQueryHighlighted(query: string) {
  const parts: { text: string; type: "keyword" | "quote" | "paren" | "plain" }[] = [];
  let i = 0;
  while (i < query.length) {
    if (query[i] === " ") {
      parts.push({ text: " ", type: "plain" });
      i++;
      continue;
    }
    const rest = query.slice(i);
    const kwMatch = rest.match(/^(AND|OR|NOT|TO)\b/);
    if (kwMatch) {
      parts.push({ text: kwMatch[1], type: "keyword" });
      i += kwMatch[1].length;
      continue;
    }
    if (query[i] === '"') {
      let j = i + 1;
      while (j < query.length && query[j] !== '"') j++;
      parts.push({ text: query.slice(i, j + 1), type: "quote" });
      i = j + 1;
      continue;
    }
    if (query[i] === "(" || query[i] === ")") {
      parts.push({ text: query[i], type: "paren" });
      i++;
      continue;
    }
    let j = i;
    while (j < query.length && query[j] !== " " && query[j] !== '"' && query[j] !== "(" && query[j] !== ")") j++;
    parts.push({ text: query.slice(i, j), type: "plain" });
    i = j;
  }
  return parts;
}

function useStreamAnimation(count: number, seed: number) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    let current = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      current++;
      if (current <= count) {
        setVisibleCount(current);
        setTimeout(tick, 400);
      }
    };
    setTimeout(tick, 200);
    return () => { cancelled = true; };
  }, [count, seed]);

  return visibleCount;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "Use Cases", href: "#use-cases" },
    { label: "Docs", href: "#docs" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-black bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] shadow-[3px_3px_0px_0px_#000]">
              <Bot className="h-5 w-5 stroke-black stroke-[2.5px]" />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Rozeta Labs</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-bold tracking-wide uppercase hover:underline decoration-2 underline-offset-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#login"
              className="text-sm font-bold tracking-wide uppercase"
            >
              Log in
            </a>
            <a
              href="#signup"
              className="inline-flex items-center gap-1 border-4 border-black bg-[hsl(47,100%,50%)] px-4 py-2 text-sm font-bold tracking-wide uppercase shadow-neo-sm transition-all duration-100 hover:bg-yellow-400 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden border-4 border-black bg-white p-2 shadow-neo-sm transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t-4 border-black bg-white md:hidden">
          <div className="flex flex-col gap-0 px-6 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b-2 border-black py-3 text-sm font-bold tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
            <a href="#login" onClick={() => setOpen(false)} className="border-b-2 border-black py-3 text-sm font-bold tracking-wide uppercase">
              Log in
            </a>
            <a href="#signup" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center gap-1 border-4 border-black bg-[hsl(47,100%,50%)] px-4 py-3 text-sm font-bold tracking-wide uppercase shadow-neo-sm">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-black bg-[hsl(46,100%,96%)]">
      {/* Grid background */}
      <div className="bg-grid-neo absolute inset-0 opacity-50" />

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 h-20 w-20 border-4 border-black bg-[hsl(47,100%,50%)] opacity-30" />
        <div className="absolute top-1/4 left-[25%] h-16 w-16 rotate-12 border-4 border-black bg-[hsl(46,50%,88%)] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col items-center">
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="block text-5xl leading-[0.9] font-bold tracking-tighter uppercase sm:text-7xl lg:text-8xl">
              <span className="relative inline-block">Scale Your SMB</span>
            </span>
            <span className="mt-2 block text-5xl leading-[0.9] font-bold tracking-tighter uppercase sm:text-7xl lg:text-8xl">
              <span className="relative inline-block -rotate-1 border-4 border-black bg-[hsl(47,100%,50%)] px-4 shadow-neo-md">
                with AI
              </span>
            </span>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xl leading-relaxed font-bold sm:text-2xl">
            Running your business manually is losing you money. Recover lost revenue with our proven AI and automation systems.{" "}
            <span className="inline-block border-b-4 border-black">
              Guaranteed.
            </span>
          </p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href="#signup"
              className="group animate-neo-pulse inline-flex h-16 items-center justify-center gap-2 border-4 border-black bg-[hsl(47,100%,50%)] px-10 text-lg font-bold tracking-wide uppercase shadow-neo-md transition-all duration-100 hover:bg-yellow-400 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-center text-sm font-bold tracking-wide uppercase opacity-60">
              If we don't deliver, you don't pay. Simple as that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const levels = [
    {
      level: "Level 1",
      title: "Automation",
      iconBg: "bg-[hsl(0,85%,70%)]",
      icon: <Zap className="h-7 w-7 stroke-black stroke-[2px]" />,
      body: "Your business runs on manual processes right now. Someone has to remember to follow up. Someone has to send the confirmation. Someone has to chase the estimate. Level 1 replaces all of that with rules-based systems — when a lead comes in, this happens. When an estimate goes unanswered for 7 days, this fires. No human required.",
      callout: "This is where we start with every client because the wins are fast, the ROI is immediate, and you feel the difference within the first 30 days.",
    },
    {
      level: "Level 2",
      title: "Intelligent Automation",
      iconBg: "bg-[hsl(260,60%,75%)]",
      icon: <Brain className="h-7 w-7 stroke-black stroke-[2px]" />,
      body: "Level 1 systems follow rules. Level 2 systems make judgments. Instead of sending the same follow-up to every cold estimate, the system reads the job type, the dollar amount, and the customer's last response — and writes a message that's actually relevant to that specific person. Instead of a generic confirmation text, the system knows it's a repeat customer and references their last job.",
      callout: "This is where AI enters the workflow and where the results start to compound.",
    },
    {
      level: "Level 3",
      title: "Autonomous Operations",
      iconBg: "bg-[hsl(47,100%,50%)]",
      icon: <Bot className="h-7 w-7 stroke-black stroke-[2px]" />,
      body: "This is where your business stops reacting and starts running ahead of problems. AI agents monitor your pipeline, flag anomalies, identify opportunities, and take action without being asked. Your dispatcher doesn't build the schedule — the system drafts it. Your estimator doesn't start from scratch — the system builds the first version from the job photos. Your owner doesn't pull the weekly report — it's in his inbox every Monday morning before he wakes up.",
      callout: "This is the version of your business that runs without you in it.",
    },
  ];

  return (
    <section className="relative border-b-4 border-black bg-[hsl(47,100%,50%)]">
      <div className="bg-halftone absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">

        {/* Header */}
        <div className="mb-4 inline-block border-4 border-black bg-white px-4 py-2 text-sm font-bold tracking-widest uppercase shadow-neo-sm">
          How It Works
        </div>
        <h2 className="text-5xl font-bold tracking-tighter uppercase sm:text-6xl lg:text-7xl">
          Not all automation{" "}
          <span className="inline-block -rotate-1 border-4 border-black bg-[hsl(0,85%,70%)] px-3 shadow-neo-md">
            is created equal
          </span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg font-bold leading-relaxed opacity-80">
          Most businesses are stuck at Level 1. The best ones are moving to Level 3. Here's the difference.
        </p>

        {/* Level cards */}
        <div className="mt-12 flex flex-col gap-5">
          {levels.map((level, i) => (
            <div
              key={i}
              className="border-4 border-black bg-white p-6 shadow-neo-md transition-all duration-200 hover:-translate-y-1 hover:shadow-neo-lg"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className={`inline-flex h-14 w-14 shrink-0 items-center justify-center border-4 border-black ${level.iconBg} shadow-neo-sm`}>
                  {level.icon}
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase opacity-50">{level.level}</p>
                  <h3 className="text-xl font-bold tracking-tight uppercase">{level.title}</h3>
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed font-bold opacity-60">{level.body}</p>
              <p className="mt-4 border-l-4 border-black pl-4 text-sm font-bold leading-relaxed">
                {level.callout}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-8 border-4 border-black bg-white p-6 shadow-neo-md">
          <p className="text-base font-bold leading-relaxed">
            We start every engagement at Level 1. Not because it's easy — because it's where you see money come back fast enough to trust the process.{" "}
            <span className="border-b-4 border-black">Level 2 and Level 3 are where we go once that trust is built.</span>
          </p>
        </div>

      </div>
    </section>
  );
}

function StreamDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [queryCycle, setQueryCycle] = useState(0);
  const useCase = USE_CASES[activeIndex];
  const visibleCount = useStreamAnimation(useCase.events.length, queryCycle);

  const handleTab = (idx: number) => {
    setActiveIndex(idx);
    setQueryCycle((c) => c + 1);
  };

  return (
    <section id="use-cases" className="relative border-b-4 border-black bg-[hsl(210,100%,56%)]">
      <div className="bg-halftone absolute inset-0 opacity-5" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Section header */}
        <div className="mb-12">
          <div className="mb-4 inline-block border-4 border-black bg-white px-4 py-2 text-sm font-bold tracking-widest uppercase shadow-neo-sm">
            Level One
          </div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-white sm:text-5xl lg:text-6xl">
            Our proven{" "}
            <span className="ml-3 inline-block border-4 border-white bg-[hsl(47,100%,50%)] px-3 text-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.8)]">
              revenue recovery
            </span>
            {" "}system
          </h2>
          <p className="mt-4 text-xl font-bold text-white/60">
            Select a step to see exactly what happens and what gets recovered
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          {/* Left: Use case selector */}
          <div className="flex flex-col gap-3">
            {USE_CASES.map((uc, i) => (
              <button
                key={uc.id}
                onClick={() => handleTab(i)}
                className={`group border-4 border-black p-5 text-left transition-all duration-100 ${
                  activeIndex === i
                    ? "bg-[hsl(47,100%,50%)] shadow-neo-md translate-x-[-2px] translate-y-[-2px]"
                    : "bg-white hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-neo-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold tracking-tight uppercase">
                    {uc.label}
                  </span>
                  {activeIndex === i && <ChevronRight className="h-4 w-4" />}
                </div>
                <p className="mt-1 text-sm font-bold opacity-60 leading-relaxed">
                  {uc.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right: Stream output */}
          <div className="border-4 border-black bg-black shadow-neo-md">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b-4 border-black bg-[hsl(0,0%,15%)] px-4 py-3">
              <div className="h-3 w-3 border-2 border-black bg-red-500" />
              <div className="h-3 w-3 border-2 border-black bg-yellow-400" />
              <div className="h-3 w-3 border-2 border-black bg-green-400" />
              <span className="ml-2 text-xs font-bold text-white/50 uppercase tracking-widest">
                Rozeta Labs — {useCase.id}
              </span>
            </div>

            {/* Query display */}
            <div className="border-b-4 border-white/10 bg-[hsl(0,0%,10%)] px-4 py-3">
              <div className="mb-1 text-xs font-bold text-white/40 uppercase tracking-widest">Query</div>
              <div className="font-mono text-sm leading-relaxed break-all">
                {renderQueryHighlighted(useCase.query).map((part, i) => (
                  <span
                    key={i}
                    className={
                      part.type === "keyword"
                        ? "font-bold text-[hsl(47,100%,50%)]"
                        : part.type === "quote"
                        ? "text-green-400"
                        : part.type === "paren"
                        ? "text-[hsl(210,100%,70%)]"
                        : "text-white"
                    }
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Events */}
            <div className="divide-y divide-white/10 min-h-[280px]">
              {useCase.events.slice(0, visibleCount).map((event, i) => (
                <div
                  key={i}
                  className="animate-stream-in px-4 py-4"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-2 w-2 shrink-0 border-2 border-[hsl(47,100%,50%)] bg-[hsl(47,100%,50%)]" />
                    <div>
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-1 text-sm font-bold text-white hover:underline decoration-yellow-400"
                      >
                        {event.title}
                        <ExternalLink className="mt-0.5 h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100" />
                      </a>
                      <p className="mt-1 font-mono text-xs text-green-400">{event.summary}</p>
                      <p className="mt-1 font-mono text-xs text-white/30 truncate">{event.url}</p>
                    </div>
                  </div>
                </div>
              ))}

              {visibleCount < useCase.events.length && (
                <div className="flex items-center gap-2 px-4 py-3">
                  <div className="h-2 w-2 animate-pulse border-2 border-[hsl(47,100%,50%)] bg-[hsl(47,100%,50%)]" />
                  <span className="font-mono text-xs text-white/40">Waiting for events...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QueryExamples() {
  return (
    <section className="relative border-b-4 border-black bg-black">
      <div className="bg-dots-neo absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl font-bold tracking-tighter text-white uppercase sm:text-5xl lg:text-6xl">
          Surgical{" "}
          <span className="ml-3 inline-block border-4 border-white bg-[hsl(46,50%,88%)] px-3 text-black shadow-[6px_6px_0px_0px_#fff]">
            precision
          </span>
        </h2>
        <p className="mt-4 text-xl font-bold text-white/60">
          Lucene query syntax gives you surgical precision
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {QUERY_EXAMPLES.map((ex, i) => (
            <div
              key={i}
              className="border-2 border-white/20 bg-white/5 p-4 transition-all duration-200 hover:border-white/40 hover:bg-white/10"
            >
              <code className="block font-mono text-sm leading-relaxed break-words text-[hsl(47,100%,50%)]">
                {ex.query}
              </code>
              <p className="mt-2 text-xs font-bold tracking-wide text-white/50 uppercase">
                {ex.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="relative border-b-4 border-black bg-[hsl(46,100%,96%)]">
      <div className="bg-grid-neo absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-4 inline-block border-4 border-black bg-white px-4 py-2 text-sm font-bold tracking-widest uppercase shadow-neo-sm">
          Level Two
        </div>
        <h2 className="text-4xl font-bold tracking-tighter uppercase sm:text-5xl lg:text-6xl">
          Custom Built{" "}
          <span className="inline-block border-4 border-black bg-[hsl(47,100%,50%)] px-3 shadow-neo-sm">
            AI Agents
          </span>
        </h2>
        <p className="mt-4 text-xl font-bold opacity-60">
          Built for specific business needs. See examples below.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group border-4 border-black bg-white p-8 shadow-neo-md transition-all duration-200 hover:-translate-y-2 hover:shadow-neo-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] shadow-neo-sm">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold tracking-tight uppercase">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed font-bold opacity-60">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeExample() {
  const code = `const eventSource = new EventSource(
  'https://firehose.com/stream?key=YOUR_KEY&tap=my-tap'
);

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('New page:', data.url);
  console.log('Title:', data.title);
  console.log('Changed:', data.changed_at);
};`;

  return (
    <section className="relative border-b-4 border-black bg-[hsl(210,100%,56%)]">
      <div className="bg-halftone absolute inset-0 opacity-5" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-block border-4 border-black bg-white px-4 py-2 text-sm font-bold tracking-widest uppercase shadow-neo-sm">
              Integration
            </div>
            <h2 className="text-4xl font-bold tracking-tighter uppercase text-white sm:text-5xl">
              Three lines of{" "}
              <span className="border-b-4 border-[hsl(47,100%,50%)]">code</span>
            </h2>
            <p className="mt-4 text-xl font-bold text-white/70">
              Connect to your tap's SSE endpoint. Receive structured JSON events as pages are crawled.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {["Create a tap with your Lucene query", "Get your API key", "Connect via EventSource", "Handle events in real-time"].map((step, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border-4 border-white bg-[hsl(47,100%,50%)] text-xs font-bold text-black shadow-[2px_2px_0_0_#fff]">
                    {i + 1}
                  </span>
                  <span className="font-bold text-white">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code block */}
          <div className="border-4 border-black bg-black shadow-neo-lg">
            <div className="flex items-center gap-2 border-b-4 border-black bg-[hsl(0,0%,15%)] px-4 py-3">
              <div className="h-3 w-3 border-2 border-black bg-red-500" />
              <div className="h-3 w-3 border-2 border-black bg-yellow-400" />
              <div className="h-3 w-3 border-2 border-black bg-green-400" />
              <span className="ml-2 text-xs font-bold text-white/50 uppercase tracking-widest">
                JavaScript
              </span>
            </div>
            <pre className="overflow-x-auto p-6 text-sm leading-relaxed">
              <code className="font-mono">
                {code.split("\n").map((line, i) => (
                  <div key={i}>
                    {line
                      .split(/(const|new EventSource|onmessage|JSON\.parse|console\.log|'[^']+'|`[^`]+`)/g)
                      .map((part, j) => {
                        if (/^(const|new EventSource|onmessage|JSON\.parse|console\.log)$/.test(part))
                          return <span key={j} className="text-[hsl(47,100%,50%)]">{part}</span>;
                        if (/^('|`)/.test(part))
                          return <span key={j} className="text-green-400">{part}</span>;
                        return <span key={j} className="text-white/80">{part}</span>;
                      })}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function AISection() {
  return (
    <section className="relative border-b-4 border-black bg-[hsl(46,50%,88%)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="border-4 border-black bg-white p-6 shadow-neo-md sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center border-4 border-black bg-[hsl(46,50%,88%)] shadow-neo-sm">
              <Sparkles className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold tracking-tight uppercase sm:text-3xl">
                Let AI set it up for you
              </h3>
              <p className="mt-2 text-base leading-relaxed font-bold opacity-70">
                Create a key, install the Firehose skill in your AI assistant, and share your key. It can set up taps, rules, and streaming from a single prompt.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#get-key"
                className="inline-flex items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] px-5 py-3 text-sm font-bold tracking-wide uppercase shadow-neo-sm transition-all duration-100 hover:bg-yellow-400 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                Get API Key
              </a>
              <a
                href="#docs"
                className="inline-flex items-center justify-center border-4 border-black bg-white px-5 py-3 text-sm font-bold tracking-wide uppercase shadow-neo-sm transition-all duration-100 hover:bg-gray-50 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                View Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative border-b-4 border-black bg-black">
      <div className="bg-dots-neo absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tighter text-white uppercase sm:text-5xl lg:text-6xl">
          Start streaming{" "}
          <span className="mx-3 inline-block border-4 border-white bg-[hsl(47,100%,50%)] px-3 text-black shadow-[6px_6px_0px_0px_#fff]">
            today
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-xl font-bold text-white/70">
          Sign up for free and start streaming web data in minutes.
        </p>
        <div className="mt-12">
          <a
            href="#signup"
            className="group animate-neo-pulse inline-flex items-center gap-3 border-4 border-white bg-[hsl(47,100%,50%)] px-10 py-5 text-xl font-bold tracking-wide text-black uppercase shadow-[8px_8px_0px_0px_#fff] transition-all duration-100 hover:bg-yellow-400 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
          >
            Get Started Now
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-b-4 border-black bg-[hsl(46,50%,88%)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] shadow-[3px_3px_0px_0px_#000]">
              <Bot className="h-5 w-5 stroke-black stroke-[2.5px]" />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Rozeta Labs</span>
          </a>

          <div className="flex flex-col items-center gap-2 sm:items-end">
            <p className="text-sm font-bold tracking-wide">
              Rozeta Labs
            </p>
            <div className="flex items-center gap-4">
              {["Privacy", "Terms", "Docs", "Status"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-bold tracking-wide uppercase underline decoration-2 underline-offset-2 hover:bg-[hsl(47,100%,50%)]/30"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(46,100%,96%)] font-sans text-[hsl(0,0%,5%)]">
      <Navbar />
      <Hero />
      <WhySection />
      <StreamDemo />
      <QueryExamples />
      <Features />
      <CodeExample />
      <AISection />
      <CTA />
      <Footer />
    </div>
  );
}
