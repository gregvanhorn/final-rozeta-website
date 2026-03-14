import { useState, useEffect, useRef } from "react";
import { Zap, ArrowRight, Code2, Sparkles, Radio, ChevronRight, X, Menu, ExternalLink } from "lucide-react";

const USE_CASES = [
  {
    id: "financial-news",
    label: "Financial News",
    description: "Track earnings reports and market-moving news across major publications in real-time.",
    query: "site:(reuters.com OR bloomberg.com OR wsj.com OR ft.com) AND title:tesla AND page_category:\"financial news\"",
    events: [
      {
        title: "Tesla Reports Record Q4 Deliveries, Beating Wall Street Estimates",
        url: "https://reuters.com/business/autos/tesla-record-q4-deliveries",
        summary: "+ Tesla delivered 495,570 vehicles in Q4, exceeding analyst expectations of 473,000",
      },
      {
        title: "Tesla Energy Division Revenue Doubles Year-Over-Year",
        url: "https://bloomberg.com/news/articles/tesla-energy-revenue",
        summary: "+ Energy generation and storage revenue reached $3.2B, up 100% from prior year",
      },
      {
        title: "Tesla Expands Supercharger Network to 60,000 Stations Globally",
        url: "https://wsj.com/business/autos/tesla-supercharger-expansion",
        summary: "+ Supercharger network now covers 60,000 stations across 45 countries",
      },
      {
        title: "Tesla Autonomous Driving Unit Secures Regulatory Approval in EU",
        url: "https://ft.com/content/tesla-autonomous-eu-approval",
        summary: "+ Full Self-Driving technology approved for limited deployment in Germany and France",
      },
    ],
  },
  {
    id: "tech-acquisitions",
    label: "Tech Acquisitions",
    description: "Monitor acquisition news on TechCrunch to stay ahead of industry moves.",
    query: "site:techcrunch.com AND added:acquisition",
    events: [
      {
        title: "Google Cloud Acquires AI Security Firm Wiz",
        url: "https://techcrunch.com/2026/02/google-acquires-wiz",
        summary: "+ Google completed its largest acquisition ever, purchasing Wiz for $32B",
      },
      {
        title: "Databricks Completes $1.6B Acquisition of Tabular",
        url: "https://techcrunch.com/2026/02/databricks-tabular-deal",
        summary: "+ Databricks acquired the Apache Iceberg creators to bolster open lakehouse",
      },
      {
        title: "Salesforce Acquires Informatica in $8B Deal",
        url: "https://techcrunch.com/2026/03/salesforce-informatica",
        summary: "+ Salesforce revived its acquisition bid for data management giant Informatica",
      },
    ],
  },
  {
    id: "reddit-mentions",
    label: "Reddit Mentions",
    description: "Watch Reddit for real-time Tesla community discussions and user reviews.",
    query: "site:reddit.com AND title:tesla AND page_category:\"artificial intelligence\"",
    events: [
      {
        title: "Tesla Unveils Next-Gen Robotaxi Fleet at Austin Event",
        url: "https://nytimes.com/2026/03/tesla-robotaxi-fleet",
        summary: "+ Tesla revealed a fleet of 50 autonomous robotaxis at its Austin gigafactory",
      },
      {
        title: "Tesla FSD v13 Real-World Test: Coast to Coast",
        url: "https://reddit.com/r/teslamotors/comments/fsd-v13-test",
        summary: "+ Just completed a coast-to-coast drive on FSD v13 with zero interventions",
      },
      {
        title: "Tesla Model 2 First Drive: The $25K Game Changer",
        url: "https://motortrend.com/reviews/tesla-model-2-first-drive",
        summary: "+ The new Tesla Model 2 starts at $24,990 and delivers 280 miles of range",
      },
    ],
  },
  {
    id: "sec-filings",
    label: "SEC Filings",
    description: "Track Tesla SEC filings and regulatory documents automatically.",
    query: "site:sec.gov AND title:tesla AND publish_time:[2026-01-01 TO 2026-03-01]",
    events: [
      {
        title: "Tesla Inc. Form 10-K Annual Report Filing",
        url: "https://sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=tsla",
        summary: "+ Annual report shows total revenue of $112.8B, up 28% year-over-year",
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
    icon: <Zap className="h-6 w-6" />,
    title: "Instant SSE Streaming",
    description: "Receive updates in milliseconds via Server-Sent Events. No polling, no delays — changes arrive the moment we detect them.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Lucene Query Language",
    description: "Use the same query language powering Elasticsearch. Site filters, phrase matching, boolean operators, date ranges, and more.",
  },
  {
    icon: <Radio className="h-6 w-6" />,
    title: "Real-Time Crawling",
    description: "Our crawler continuously indexes the web. When a matching page appears or changes, you're notified within seconds.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "ML-Classified Content",
    description: "Use page_category: filters powered by machine learning to target specific content types across any website.",
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
              <Zap className="h-5 w-5 fill-black stroke-black stroke-[3px]" />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Firehose</span>
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
            className="md:hidden border-2 border-black p-1"
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
              <span className="relative inline-block">Real-time</span>{" "}
              <span className="relative inline-block text-stroke">web</span>
            </span>
            <span className="mt-2 block text-5xl leading-[0.9] font-bold tracking-tighter uppercase sm:text-7xl lg:text-8xl">
              <span className="relative inline-block -rotate-1 border-4 border-black bg-[hsl(47,100%,50%)] px-4 shadow-neo-md">
                data streaming
              </span>
            </span>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xl leading-relaxed font-bold sm:text-2xl">
            Define rules. Get notified the instant a matching web page changes.{" "}
            <span className="inline-block border-b-4 border-black">
              Powered by Lucene queries + SSE.
            </span>
          </p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href="#signup"
              className="group animate-neo-pulse inline-flex h-16 items-center justify-center gap-2 border-4 border-black bg-[hsl(47,100%,50%)] px-10 text-lg font-bold tracking-wide uppercase shadow-neo-md transition-all duration-100 hover:bg-yellow-400 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            >
              Start Streaming Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-center text-sm font-bold tracking-wide uppercase opacity-60">
              Free during beta. No credit card required.
            </p>
          </div>
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
            Live Demo
          </div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-white sm:text-5xl lg:text-6xl">
            Watch data{" "}
            <span className="ml-3 inline-block border-4 border-white bg-[hsl(47,100%,50%)] px-3 text-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.8)]">
              stream in
            </span>
          </h2>
          <p className="mt-4 text-xl font-bold text-white/60">
            Select a use case and watch live events arrive in real-time
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
                SSE Stream — tap:{useCase.id}
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
          How It Works
        </div>
        <h2 className="text-4xl font-bold tracking-tighter uppercase sm:text-5xl lg:text-6xl">
          Built for{" "}
          <span className="inline-block border-4 border-black bg-[hsl(47,100%,50%)] px-3 shadow-neo-sm">
            developers
          </span>
        </h2>
        <p className="mt-4 text-xl font-bold opacity-60">
          Simple to integrate. Powerful enough for production.
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
            Get Started Free
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
              <Zap className="h-5 w-5 fill-black stroke-black stroke-[3px]" />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Firehose</span>
          </a>

          <div className="flex flex-col items-center gap-2 sm:items-end">
            <p className="text-sm font-bold tracking-wide">
              Firehose is a product of Ahrefs Pte. Ltd.
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
