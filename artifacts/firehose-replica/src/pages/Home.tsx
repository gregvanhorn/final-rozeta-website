import { useState, useEffect, useRef, useCallback } from "react";
import { Bot, ArrowRight, Code2, Sparkles, Radio, ChevronRight, X, Menu, Zap, Brain } from "lucide-react";

const ROTATING_WORDS = [
  "Home Service", "Franchise", "Private Equity",
  "Service", "Real Estate", "Health & Wellness",
];

const USE_CASES = [
  {
    id: "system-01",
    label: "System 01 — 60-Second Response Engine",
    description: "Kills speed-to-lead failure. The moment a lead hits any channel, an instant personalized SMS and email fires to the prospect, the right person internally gets notified, and everything logs in the CRM — all within 60 seconds. Responding in under 60 seconds vs 5 minutes increases close rate by 400%.",
  },
  {
    id: "system-02",
    label: "System 02 — Dead Estimate Reactivation",
    description: "Kills the estimate graveyard. Every open quote older than 7 days gets enrolled in a timed follow-up sequence — casual check-in at day 7, value-add at day 14, urgency trigger at day 21, final ask at day 30. Most clients recover 3–8 jobs in the first 30 days from quotes that were already written.",
  },
  {
    id: "system-03",
    label: "System 03 — No-Show Recovery Protocol",
    description: "Kills no-show and cancellation bleed. Confirmation and reminder sequences fire at 48h, 24h, and 2h before every appointment. If a customer no-shows, an immediate recovery SMS offers the next available slot and triggers a 3-touch re-engagement sequence. Most operators recover 30–40% of no-shows that previously just disappeared.",
  },
  {
    id: "system-04",
    label: "System 04 — Owner Liberation System",
    description: "Kills the owner-as-bottleneck problem. We map every recurring decision the owner makes, automate the high-frequency ones with decision trees, deploy a company-trained AI assistant for staff questions, and replace status check-ins with automated daily briefings. Most owners remove themselves from 50–70% of day-to-day decisions within 90 days.",
  },
  {
    id: "system-05",
    label: "System 05 — Repeat Revenue Reactivation",
    description: "Kills zero retention. Three sub-systems run together: post-job review capture sequences, a referral ask protocol for satisfied customers, and AI-personalized seasonal reactivation campaigns for every past customer segmented by job type and service date. Your completed job list becomes a recurring revenue asset.",
  },
];

const PROCESS_STEPS = [
  {
    id: "step-1",
    label: "Step 1 — Find the Leaks",
    description: "We audit your pipeline, response times, estimate follow-up, and retention process to identify exactly where revenue is walking out the door. Every gap gets a dollar figure — nothing left vague.",
  },
  {
    id: "step-2",
    label: "Step 2 — Build the Systems",
    description: "We custom-build the five Revenue Recovery systems for your specific business — your CRM, your workflow, your team. Nothing templated. Live in 14 days.",
  },
  {
    id: "step-3",
    label: "Step 3 — Plug the Leaks",
    description: "The systems go live. Leads get responded to in 60 seconds. Dead estimates get worked. No-shows get recovered. You stop losing money you were already earning.",
  },
  {
    id: "step-4",
    label: "Step 4 — Measure the Recovery",
    description: "Every system is tracked. Every month you get a plain-language report showing exactly what each system recovered — jobs booked, estimates closed, customers reactivated, reviews captured.",
  },
  {
    id: "step-5",
    label: "Step 5 — Optimize and Expand",
    description: "Once the first layer is running, we go deeper. New leaks get identified. New systems get built. The engagement compounds and the business gets harder to disrupt every month.",
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
            <div className="rozeta-logo-icon flex h-9 w-9 items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] shadow-[3px_3px_0px_0px_#000]">
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                {/* Outer diamond */}
                <polygon points="10,1 19,10 10,19 1,10" fill="black" />
                {/* Inner diamond cutout — yellow shows through */}
                <polygon points="10,5 15,10 10,15 5,10" fill="hsl(47,100%,50%)" />
              </svg>
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
  const [displayText, setDisplayText] = useState(ROTATING_WORDS[0]);
  const displayTextRef = useRef(ROTATING_WORDS[0]);
  const wordIndexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateDisplay = useCallback((text: string) => {
    displayTextRef.current = text;
    setDisplayText(text);
  }, []);

  const typewriteTo = useCallback((targetWord: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    const typeStep = (i: number) => {
      if (i >= targetWord.length) { timerRef.current = null; return; }
      updateDisplay(targetWord.slice(0, i + 1));
      timerRef.current = setTimeout(() => typeStep(i + 1), 65);
    };

    const deleteStep = () => {
      const current = displayTextRef.current;
      if (current.length === 0) { typeStep(0); return; }
      updateDisplay(current.slice(0, -1));
      if (current.length > 1) {
        timerRef.current = setTimeout(deleteStep, 40);
      } else {
        // Last char just cleared — call typeStep synchronously so React 18
        // batches both state updates into one render, preventing an empty frame
        typeStep(0);
      }
    };

    deleteStep();
  }, [updateDisplay]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (wordIndexRef.current + 1) % ROTATING_WORDS.length;
      wordIndexRef.current = nextIndex;
      typewriteTo(ROTATING_WORDS[nextIndex]);
    }, 3500);
    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [typewriteTo]);

  return (
    <section className="relative overflow-hidden border-b-4 border-black bg-[hsl(46,100%,96%)]">
      {/* Grid background */}
      <div className="bg-grid-neo absolute inset-0 opacity-50" />

      {/* Decorative shapes — only visible on wider screens */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 h-20 w-20 border-4 border-black bg-[hsl(47,100%,50%)] opacity-30 hidden sm:block" />
        <div className="absolute top-1/4 left-[25%] h-16 w-16 rotate-12 border-4 border-black bg-[hsl(46,50%,88%)] opacity-30 hidden sm:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col items-center">
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="block text-5xl leading-[0.9] font-bold tracking-tighter uppercase sm:text-7xl lg:text-8xl">
              Your
            </span>
            <span className="mt-4 block text-5xl leading-[0.9] font-bold tracking-tighter uppercase sm:text-7xl lg:text-8xl">
              {displayText}<span className="typewriter-cursor" aria-hidden="true" />
            </span>
            <span className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-5xl leading-[0.9] font-bold tracking-tighter uppercase sm:text-7xl lg:text-8xl">
              <span>Business Is Missing</span>
              <span className="relative inline-block -rotate-1 border-4 border-black bg-[hsl(47,100%,50%)] px-4 shadow-neo-md">
                An AI Team
              </span>
            </span>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xl leading-relaxed font-bold sm:text-2xl">
            We're the AI transformation team you've been looking for. Without the full-time hire. We go cross-org, kill the manual processes, and ship your first workflow within 14 days.
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
      callout: "This is low-hanging fruit that can be identified and tackled quickly. Your first automation is usually live within the first 7 days of engagement.",
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
          A Quick Lesson
        </div>
        <h2 className="text-5xl font-bold tracking-tighter uppercase sm:text-6xl lg:text-7xl">
          Not all automation{" "}
          <span className="inline-block -rotate-1 border-4 border-black bg-[hsl(0,85%,70%)] px-3 shadow-neo-md">
            is created equal
          </span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg font-bold leading-relaxed opacity-80">
          Most businesses are stuck at Level 1. The best ones are moving to Level 3.
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


      </div>
    </section>
  );
}

function StreamDemo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTab = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <section id="use-cases" className="relative border-b-4 border-black bg-[hsl(210,100%,56%)]">
      <div className="bg-halftone absolute inset-0 opacity-5" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Section header */}
        <div className="mb-12">
          <div className="mb-4 inline-block border-4 border-black bg-white px-4 py-2 text-sm font-bold tracking-widest uppercase shadow-neo-sm">
            How It Works: Step One
          </div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-white sm:text-5xl lg:text-6xl">
            Our proven{" "}
            <span className="ml-3 inline-block border-4 border-white bg-[hsl(47,100%,50%)] px-3 text-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.8)]">
              revenue recovery
            </span>
            {" "}system
          </h2>
          <p className="mt-4 text-xl font-bold text-white/60">
            We tackle the lowest-hanging fruit first by identifying immediate ways to recover revenue with Level 1 automations.
          </p>
        </div>

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

function OurProcess() {
  return (
    <section className="relative border-b-4 border-black bg-[hsl(46,100%,96%)]">
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <div className="mb-4 inline-block border-4 border-black bg-[hsl(47,100%,50%)] px-4 py-2 text-sm font-bold tracking-widest uppercase shadow-neo-sm">
            Our Process
          </div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase sm:text-5xl lg:text-6xl">
            How we work{" "}
            <span className="inline-block border-b-4 border-black">with you</span>
          </h2>
          <p className="mt-4 text-xl font-bold opacity-60">
            From audit to compounding results — five steps, 14 days to live.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.id}
              className="flex gap-6 border-4 border-black bg-white p-6 shadow-neo-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] text-sm font-bold shadow-[3px_3px_0_0_#000]">
                {i + 1}
              </div>
              <div>
                <h3 className="text-base font-bold tracking-tight uppercase">
                  {step.label}
                </h3>
                <p className="mt-1 text-sm font-bold opacity-60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
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
            <div className="rozeta-logo-icon flex h-10 w-10 items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] shadow-[3px_3px_0px_0px_#000]">
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                <polygon points="10,1 19,10 10,19 1,10" fill="black" />
                <polygon points="10,5 15,10 10,15 5,10" fill="hsl(47,100%,50%)" />
              </svg>
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
    <div className="min-h-screen overflow-x-hidden bg-[hsl(46,100%,96%)] font-sans text-[hsl(0,0%,5%)]">
      <Navbar />
      <Hero />
      <WhySection />
      <StreamDemo />
      <QueryExamples />
      <Features />
      <CodeExample />
      <OurProcess />
      <AISection />
      <CTA />
      <Footer />
    </div>
  );
}
