import { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import { Bot, ArrowRight, Code2, Sparkles, Radio, ChevronRight, Zap, Brain, Crown, TrendingUp, Truck, HardHat, Headphones, Megaphone, DollarSign, Check, Puzzle, Target, Rocket } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const ROTATING_WORDS = [
  "Home Service", "Franchise", "Private Equity",
  "Real Estate", "Health & Wellness",
  "Consulting", "Accounting", "Professional Service",
];

const USE_CASES = [
  {
    id: "system-01",
    label: "System 01 - 60-Second Response Engine",
    description: "Kills speed-to-lead failure. The moment a lead hits any channel, an instant personalized SMS and email fires to the prospect, the right person internally gets notified, and everything logs in the CRM - all within 60 seconds. Responding in under 60 seconds vs 5 minutes increases close rate by 400%.",
  },
  {
    id: "system-02",
    label: "System 02 - Dead Estimate Reactivation",
    description: "Kills the estimate graveyard. Every open quote older than 7 days gets enrolled in a timed follow-up sequence - casual check-in at day 7, value-add at day 14, urgency trigger at day 21, final ask at day 30. Most clients recover 3–8 jobs in the first 30 days from quotes that were already written.",
  },
  {
    id: "system-03",
    label: "System 03 - No-Show Recovery Protocol",
    description: "Kills no-show and cancellation bleed. Confirmation and reminder sequences fire at 48h, 24h, and 2h before every appointment. If a customer no-shows, an immediate recovery SMS offers the next available slot and triggers a 3-touch re-engagement sequence. Most operators recover 30–40% of no-shows that previously just disappeared.",
  },
  {
    id: "system-04",
    label: "System 04 - Owner Liberation System",
    description: "Kills the owner-as-bottleneck problem. We map every recurring decision the owner makes, automate the high-frequency ones with decision trees, deploy a company-trained AI assistant for staff questions, and replace status check-ins with automated daily briefings. Most owners remove themselves from 50–70% of day-to-day decisions within 90 days.",
  },
  {
    id: "system-05",
    label: "System 05 - Repeat Revenue Reactivation",
    description: "Kills zero retention. Three sub-systems run together: post-job review capture sequences, a referral ask protocol for satisfied customers, and AI-personalized seasonal reactivation campaigns for every past customer segmented by job type and service date. Your completed job list becomes a recurring revenue asset.",
  },
];

const PROCESS_STEPS = [
  {
    id: "step-1",
    label: "Step 1 - Find the Leaks",
    description: "We audit your pipeline, response times, estimate follow-up, and retention process to identify exactly where revenue is walking out the door. Every gap gets a dollar figure - nothing left vague.",
  },
  {
    id: "step-2",
    label: "Step 2 - Build the Systems",
    description: "We custom-build the five Revenue Recovery systems for your specific business - your CRM, your workflow, your team. Nothing templated. Live in 14 days.",
  },
  {
    id: "step-3",
    label: "Step 3 - Plug the Leaks",
    description: "The systems go live. Leads get responded to in 60 seconds. Dead estimates get worked. No-shows get recovered. You stop losing money you were already earning.",
  },
  {
    id: "step-4",
    label: "Step 4 - Measure the Recovery",
    description: "Every system is tracked. Every month you get a plain-language report showing exactly what each system recovered - jobs booked, estimates closed, customers reactivated, reviews captured.",
  },
  {
    id: "step-5",
    label: "Step 5 - Optimize and Expand",
    description: "Once the first layer is running, we go deeper. New leaks get identified. New systems get built. The engagement compounds and the business gets harder to disrupt every month.",
  },
];

const DEPARTMENTS = [
  {
    icon: <Crown className="h-6 w-6" />,
    name: "Owner / Leadership",
    blurb: "Where is your time actually going? We audit how decisions flow through your organization and map every place where a system should be doing the work instead of you.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    name: "Sales / Estimating",
    blurb: "Are your reps being measured on speed-to-follow-up, close rate, or conversion by lead source? How fast are proposals going out, and what percentage go cold with zero follow-up? We audit the full sales process - from first contact to signed deal - and find every place where a lead stops moving forward.",
  },
  {
    icon: <Truck className="h-6 w-6" />,
    name: "Operations",
    blurb: "Where are your internal workflows breaking down? We dig into the approval bottlenecks, cross-department handoffs, and manual processes that slow your operation down - regardless of what your business actually delivers.",
  },
  {
    icon: <HardHat className="h-6 w-6" />,
    name: "Field / Crew Dispatch",
    blurb: "What are your people on the ground missing, and what are they capturing that never makes it back to the office? We build the data loops that connect the field to ops to billing in real time - so nothing falls through the gap between \"job done\" and \"money collected.\"",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    name: "Customer Service",
    blurb: "What are your team members answering manually every single day? We identify the repeat questions, the dropped follow-ups, and the slow response cycles - then automate what's routine and escalate what actually needs a human.",
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    name: "Marketing / Lead Gen / Go-To-Market",
    blurb: "We look at every channel, every follow-up gap, and every nurture sequence - then build the systems that attract, capture, and convert without your team manually working every lead.",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    name: "Finance / Billing",
    blurb: "Where is revenue slipping through the cracks? We look at what's invoiced late, what's never invoiced at all, and what's stuck in collections - then build the follow-up systems that recover what's already been earned.",
  },
];

const FEATURES = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    industry: "HOME SERVICES",
    title: "Supply Hawk",
    description: "Most owners don't realize their supplier costs have quietly crept up until it's already cost them thousands. Supply Hawk maintains a live database of every invoice from every supplier - normalized across formats - and fires an alert the moment a line item drifts upward. When you're about to place a supply order, it tells you exactly where to buy each item to hit the lowest total cost.",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    industry: "HOME SERVICES",
    title: "The Margin Autopsy",
    description: "This agent builds a profit fingerprint for every job type, crew, lead source, and geography over time. It's not just \"what did this job make.\" It answers: which combinations of variables predict margin erosion before the job starts. Owner gets a pre-job risk score on every estimate above a certain size. That's predictive, not retrospective.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    industry: "CONSULTING",
    title: "The Context Engine",
    description: "Every time a key employee leaves, a business loses years of undocumented knowledge — client quirks, vendor negotiations, why decisions were made. This agent continuously ingests call recordings, emails, SOPs, and CRM notes across the entire business and builds a queryable knowledge base. Anyone on the team can ask \"what did we agree with this client last spring?\" and get an answer in seconds.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    industry: "PROFESSIONAL SERVICES",
    title: "The Deal Room",
    description: "Your CRM shows deal stage. This agent shows deal health. It cross-references email response latency, meeting attendance, proposal open rates, stakeholder engagement patterns, and competitor mention signals — and builds a real-time probability score for every open opportunity. It flags deals that look active but are actually dying, and surfaces the specific friction point.",
  },
];


function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="/get-started"
      className={`fixed bottom-5 right-5 z-50 sm:hidden flex items-center gap-2 border-4 border-black bg-[hsl(47,100%,50%)] px-5 py-3 text-sm font-bold tracking-wide uppercase shadow-[4px_4px_0px_0px_#000] transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      }`}
    >
      Get Started
      <ArrowRight className="h-4 w-4" />
    </a>
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
        // Last char just cleared - call typeStep synchronously so React 18
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

      {/* Decorative shapes - only visible on wider screens */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 h-20 w-20 border-4 border-black bg-[hsl(47,100%,50%)] opacity-30 hidden sm:block" />
        <div className="absolute top-1/4 left-[25%] h-16 w-16 rotate-12 border-4 border-black bg-[hsl(46,50%,88%)] opacity-30 hidden sm:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-12">
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

          <p className="mx-auto mt-10 max-w-2xl lg:max-w-5xl text-center text-xl leading-relaxed font-bold sm:text-2xl">
            We're the AI transformation team your SMB has been looking for. We go cross-org, kill the manual processes, and ship your first workflow within 14 days.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href="/get-started"
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
      body: "Your business runs on manual processes right now. Someone has to remember to follow up. Someone has to send the confirmation. Someone has to chase the estimate. Level 1 replaces all of that with rules-based systems - when a lead comes in, this happens. When an estimate goes unanswered for 7 days, this fires. No human required.",
      callout: "This is low-hanging fruit that can be identified and tackled quickly. Your first automation is usually live within the first 7 days of engagement.",
    },
    {
      level: "Level 2",
      title: "Intelligent Automation",
      iconBg: "bg-[hsl(260,60%,75%)]",
      icon: <Brain className="h-7 w-7 stroke-black stroke-[2px]" />,
      body: "Level 1 systems follow rules. Level 2 systems make judgments. Instead of sending the same follow-up to every cold estimate, the system reads the job type, the dollar amount, and the customer's last response - and writes a message that's actually relevant to that specific person. Instead of a generic confirmation text, the system knows it's a repeat customer and references their last job.",
      callout: "This is where AI enters the workflow and where the results start to compound.",
    },
    {
      level: "Level 3",
      title: "Autonomous Operations",
      iconBg: "bg-[hsl(47,100%,50%)]",
      icon: <Bot className="h-7 w-7 stroke-black stroke-[2px]" />,
      body: "This is where your business stops reacting and starts running ahead of problems. AI agents monitor your pipeline, flag anomalies, identify opportunities, and take action without being asked. Your dispatcher doesn't build the schedule - the system drafts it. Your estimator doesn't start from scratch - the system builds the first version from the job photos. Your owner doesn't pull the weekly report - it's in his inbox every Monday morning before he wakes up.",
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
            We tackle the lowest-hanging fruit first by identifying immediate ways to recover revenue using Level 1 and 2 automations.
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

function EmbedOrg() {
  return (
    <section className="relative border-b-4 border-black bg-black">
      <div className="bg-dots-neo absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24">

        {/* Badge */}
        <div className="mb-6 inline-block border-4 border-white bg-black px-4 py-2 text-sm font-bold tracking-widest text-white uppercase shadow-[3px_3px_0px_0px_rgba(255,255,255,0.4)]">
          How It Works: Step Two
        </div>

        {/* Header */}
        <h2 className="text-5xl font-bold tracking-tighter text-white uppercase sm:text-6xl lg:text-7xl">
          We embed{" "}
          <span className="inline-block border-4 border-black bg-[hsl(47,100%,50%)] px-3 text-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.5)]">
            into your org
          </span>
        </h2>

        {/* Subheader */}
        <p className="mt-5 max-w-2xl text-lg font-bold leading-relaxed text-white/60">
          We sit alongside the owner and every department head - not to observe, but to dig. We're looking for every bottleneck, broken handoff, and manual process that's costing you money.
        </p>

        {/* Department grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map((dept, i) => (
            <div
              key={i}
              className="border-4 border-white bg-black p-6 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.15)] transition-colors hover:bg-white/5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border-4 border-white bg-[hsl(47,100%,50%)] text-black">
                  {dept.icon}
                </div>
                <span className="text-sm font-bold tracking-widest text-white uppercase">
                  {dept.name}
                </span>
              </div>
              <div className="mb-4 h-px bg-white/20" />
              <p className="mb-1 text-xs font-bold tracking-widest text-[hsl(47,100%,50%)] uppercase">
                What we look for:
              </p>
              <p className="text-sm font-medium leading-relaxed text-white/70">
                {dept.blurb}
              </p>
            </div>
          ))}

          {/* Closing CTA card */}
          <div className="border-4 border-[hsl(47,100%,50%)] bg-[hsl(47,100%,50%)] p-6 shadow-[5px_5px_0px_0px_rgba(255,200,0,0.3)] sm:col-span-2 lg:col-span-3">
            <p className="text-xl font-bold uppercase text-black">
              Nothing is off-limits.
            </p>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-black/70">
              Most consultants talk to the owner and call it a day. We go cross-org - every team, every workflow, every repetitive process - until we have a complete picture of what's costing you money and what we can build to stop the bleeding. That's what makes our systems stick.
            </p>
          </div>
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
          How It Works: Step Three
        </div>
        <h2 className="text-4xl font-bold tracking-tighter uppercase sm:text-5xl lg:text-6xl">
          Custom Built{" "}
          <span className="inline-block border-4 border-black bg-[hsl(47,100%,50%)] px-3 shadow-neo-sm">
            AI Agents
          </span>
        </h2>
        <p className="mt-4 text-xl font-bold opacity-60">
          Once we know what's broken, we build agents that fix it. These aren't Zaps - they process unstructured data, recognize patterns across thousands of data points, and make decisions no rule-based tool can replicate.
        </p>

        <p className="mt-8 border-l-4 border-black pl-4 text-sm font-bold italic tracking-wide opacity-50">
          These are real agents we've built. Yours will be designed around your business.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group border-4 border-black bg-white p-8 shadow-neo-md transition-all duration-200 hover:-translate-y-2 hover:shadow-neo-lg"
            >
              <div className="mb-4 inline-block border-4 border-black bg-black px-3 py-1 text-xs font-bold tracking-widest text-[hsl(47,100%,50%)] uppercase">
                {f.industry}
              </div>
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

function OurProcess() {
  return (
    <section id="how-it-works" className="relative border-b-4 border-black bg-[hsl(46,100%,96%)]">
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
            From audit to compounding results - five steps, 14 days to live.
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


function CTA() {
  return (
    <section className="relative border-b-4 border-black bg-black">
      <div className="bg-dots-neo absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tighter text-white uppercase sm:text-5xl lg:text-6xl">
          Transform Your Business{" "}
          <span className="mx-3 inline-block border-4 border-white bg-[hsl(47,100%,50%)] px-3 text-black shadow-[6px_6px_0px_0px_#fff]">
            Today
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-xl font-bold text-white/70">
          Your first automation goes live in 14 days - or you don't pay a cent.
        </p>
        <div className="mt-12">
          <a
            href="/get-started"
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


function ProblemSection() {
  const problems = [
    {
      icon: <Puzzle className="h-7 w-7 stroke-black stroke-[2px]" />,
      iconBg: "bg-[hsl(47,100%,50%)]",
      headline: "You don't know what you don't know.",
      body: "AI is moving fast and the gap between what you're doing now and what's possible is growing - but you don't have time to map it. You need someone who can walk into your operation, see what you can't see, and tell you exactly where AI creates leverage. That person doesn't exist on your team.",
    },
    {
      icon: <Target className="h-7 w-7 stroke-black stroke-[2px]" />,
      iconBg: "bg-[hsl(0,85%,70%)]",
      headline: "The market is full of AI companies that don't understand your business.",
      body: "You've seen the pitches - agencies selling generic automations, consultants who've never run a P&L, dev shops that can build anything but don't know what to build. The problem isn't finding someone who knows AI. It's finding someone who knows AI and understands how a small business actually operates. That barely exists.",
    },
    {
      icon: <Rocket className="h-7 w-7 stroke-black stroke-[2px]" />,
      iconBg: "bg-[hsl(260,60%,75%)]",
      headline: "You're leaving transformation on the table because there's no one to own it.",
      body: "There's no one in your org whose job it is to figure out what to build and actually build it. You're not going to hire a full-time AI person, and you're not going to hand your operation to an agency that's never been inside a business like yours. So it sits - quarter after quarter, because nobody owns it.",
    },
  ];

  return (
    <section className="border-b-4 border-black bg-[hsl(210,100%,56%)] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 inline-block border-4 border-black bg-white px-4 py-2 text-sm font-bold tracking-widest uppercase shadow-neo-sm">
          Sound Familiar?
        </div>
        <h2 className="text-5xl font-bold tracking-tighter uppercase text-white sm:text-6xl lg:text-7xl">
          You know AI is the{" "}
          <span className="inline-block -rotate-1 border-4 border-black bg-[hsl(0,85%,70%)] px-3 text-black shadow-neo-md">
            next growth lever.
          </span>{" "}
          But you don't know where to start.
        </h2>
        <p className="mt-5 max-w-2xl text-lg font-bold leading-relaxed text-white/70">
          You're running a real operation. You've got the team, the revenue, the systems. But AI transformation keeps landing on the backburner - because you don't have time to figure out what's possible, what's worth building, or who can actually do it inside your business.
        </p>

        <div className="mt-14 flex flex-col gap-5">
          {problems.map((p) => (
            <div
              key={p.headline}
              className="border-4 border-black bg-[hsl(46,100%,96%)] p-6 shadow-neo-md"
            >
              <div className="flex items-start gap-5">
                <div className={`inline-flex h-14 w-14 shrink-0 items-center justify-center border-4 border-black ${p.iconBg} shadow-neo-sm`}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight uppercase">{p.headline}</h3>
                  <p className="mt-2 text-sm leading-relaxed font-bold opacity-60">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingModel() {
  const tier1 = [
    "Unlimited Level 1 and Level 2 automations",
    "3 custom AI agent buildouts per year",
    "Revenue recovery stack built in month one: speed-to-lead engine, dead proposal reactivation, open pipeline follow-up sequences",
    "Initial operations intake - we map your highest-cost manual processes before we build anything",
    "First automation live within 7 days, guaranteed",
    "Unlimited maintenance and monitoring of deployed automations",
    "Access to Rozeta community and team training library",
    "Additional buildouts available at discounted project rate",
  ];

  const tier2 = [
    "Everything in Level 1, plus...",
    "12 custom AI agent buildouts per year",
    "Prioritized SLAs - faster response times",
    "Additional Level 3 implementations available at discounted project rate",
  ];

  const tier3SharedFeatures = [
    "Dedicated implementation engineer on the account",
    "First-priority SLAs across all active projects",
    "Custom training and SOPs delivered to your team",
  ];

  const checkIcon = (stroke: string) => (
    <div className={`mt-0.5 flex-shrink-0 border-2 border-black bg-black p-0.5`}>
      <Check className={`h-4 w-4 ${stroke} stroke-[3px]`} />
    </div>
  );

  const yellowCheck = checkIcon("stroke-[hsl(47,100%,50%)]");
  const blackCheck = (
    <div className="mt-0.5 flex-shrink-0 border-2 border-black bg-[hsl(47,100%,50%)] p-0.5">
      <Check className="h-4 w-4 stroke-black stroke-[3px]" />
    </div>
  );

  return (
    <section id="pricing" className="border-b-4 border-black bg-[hsl(46,100%,96%)] px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 inline-block border-4 border-black bg-black px-4 py-2 text-sm font-bold tracking-widest uppercase text-[hsl(47,100%,50%)] shadow-neo-sm">
          Pricing
        </div>
        <h2 className="text-5xl font-bold tracking-tighter uppercase sm:text-6xl lg:text-7xl">
          Your SMB's Dedicated
          <br />
          AI Team
        </h2>
        <p className="mt-5 max-w-2xl text-lg font-bold leading-relaxed opacity-60">
          One monthly rate gives you a full implementation team working inside your business - building automations, deploying agents, and expanding your systems every month. No piecemeal. No gaps. No overhead.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 items-start">

          {/* Level 1 — Foundation */}
          <div className="relative flex flex-col border-4 border-black bg-white p-8 shadow-neo-lg">
            <div className="mb-2 inline-block border-4 border-black bg-black px-3 py-1 text-xs font-bold uppercase tracking-widest text-[hsl(47,100%,50%)]">
              Level 1 - Foundation
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-extrabold tracking-tighter leading-none">$997</span>
              <span className="mb-2 text-lg font-bold uppercase">/month</span>
            </div>
            <p className="mt-1 text-sm font-bold opacity-60">+ $1,500 one-time setup fee</p>
            <p className="mt-3 text-sm font-bold opacity-70">Your first real automations. Proven fast.</p>
            <div className="mt-6 space-y-3 flex-1">
              {tier1.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  {yellowCheck}
                  <span className="text-sm font-bold leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t-4 border-black pt-5">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Annual option</p>
              <p className="mt-1 text-sm font-bold">$9,970/year - save ~$1,000. No setup fee.</p>
            </div>
          </div>

          {/* Level 2 — Intelligence */}
          <div className="relative flex flex-col border-4 border-black bg-[hsl(47,100%,50%)] p-8 shadow-neo-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap border-4 border-black bg-[hsl(0,85%,70%)] px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-neo-sm">
              Most Popular
            </div>
            <div className="mb-2 inline-block border-4 border-black bg-black px-3 py-1 text-xs font-bold uppercase tracking-widest text-[hsl(47,100%,50%)]">
              Level 2 - Intelligence
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-extrabold tracking-tighter leading-none">$2,500</span>
              <span className="mb-2 text-lg font-bold uppercase">/month</span>
            </div>
            <p className="mt-1 text-sm font-bold opacity-40">No setup fee.</p>
            <p className="mt-3 text-sm font-bold opacity-70">Everything in Level 1, plus AI agents built for you.</p>
            <div className="mt-6 space-y-3 flex-1">
              {tier2.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  {yellowCheck}
                  <span className="text-sm font-bold leading-snug opacity-80">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t-4 border-black pt-5">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Annual option</p>
              <p className="mt-1 text-sm font-bold">$27,000/year - save ~$3,000. No setup fee.</p>
            </div>
          </div>

          {/* Level 3 — Custom */}
          <div className="relative flex flex-col border-4 border-black bg-black p-8 shadow-neo-lg">
            <div className="mb-2 inline-block border-4 border-[hsl(47,100%,50%)] bg-[hsl(47,100%,50%)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-black">
              Level 3 — Custom
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-extrabold tracking-tighter leading-none text-[hsl(47,100%,50%)]">Custom</span>
              <span className="mb-2 text-lg font-bold uppercase text-[hsl(47,100%,50%)]">pricing</span>
            </div>
            <p className="mt-3 text-sm font-bold text-white/70">One-off project, short-term contract, or additional custom solutions. We scope it to fit.</p>

            <div className="mt-6 flex-1 space-y-4">
              <div className="border-2 border-white/20 p-4">
                <p className="mb-1 text-xs font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)]">A La Carte Build-Outs</p>
                <p className="text-sm font-bold leading-snug text-white/70">Individual automation or AI agent builds quoted per project. No ongoing commitment required. Pay for exactly what you need.</p>
              </div>
              <div className="border-2 border-white/20 p-4">
                <p className="mb-1 text-xs font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)]">Short-Term Contract Engagements</p>
                <p className="text-sm font-bold leading-snug text-white/70">Fixed-scope work with a defined start and end. Ideal for implementation sprints, system migrations, or one-time infrastructure builds.</p>
              </div>

              <div className="space-y-3 pt-2">
                {tier3SharedFeatures.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  {blackCheck}
                  <span className="text-sm font-bold leading-snug text-white">{item}</span>
                </div>
              ))}
              </div>
            </div>
            <div className="mt-8 border-t-4 border-[hsl(47,100%,50%)] pt-5">
              <p className="text-sm font-bold italic text-white/50">Every Level 3 engagement starts with a scoping call. No pressure, no boilerplate quote.</p>
            </div>
          </div>

        </div>

        <div className="mt-8 border-4 border-black bg-black px-6 py-4 shadow-neo-sm">
          <p className="text-center text-sm font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)]">
            Month-to-month. No long-term lock-in. We earn your business every 30 days.
          </p>
        </div>
      </div>
    </section>
  );
}

const vcLeftItems = [
  { label: "Zapier / Make / N8N (Tools Only, No Builds Included)", cost: "$200–$500/mo" },
  { label: "Automation Specialist To Build & Maintain Flows", cost: "$2,000–$8,000/mo" },
  { label: "12 Custom AI Agents At Consultant Rates ($5–15K Each)", cost: "$5,000–15,000/mo" },
  { label: "Ongoing Monitoring, Maintenance & Iteration", cost: "$2,000+/mo" },
];

const vcAutomations = [
  "Speed-To-Lead Engine — Respond In 60 Seconds",
  "Dead Estimate Reactivation — 7/14/21/30-Day Sequences",
  "No-Show & Cancellation Recovery",
  "Pipeline Follow-Up Automation",
  "Invoice & Collections Follow-Up",
  "+ Every Other Leak We Find In Your Business",
];

const vcAgents = [
  "Supply Hawk — Live Supplier Cost Intelligence (Example)",
  "The Margin Autopsy — Pre-Job Profit Risk Scoring (Example)",
  "The Context Engine — Queryable Institutional Memory (Example)",
  "The Deal Room — Real-Time Pipeline Health Scoring (Example)",
  "+ 8 More Agents Built Around Your Specific Workflows",
];

const vcExtras = [
  "Setup, Configuration & Integration",
  "Unlimited Maintenance & Monitoring",
  "Monthly Plain-Language Performance Reports",
  "Direct Team Access — No Account Managers",
];

function VCXMark() {
  return (
    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center border-2 border-black bg-red-500">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <line x1="2" y1="2" x2="8" y2="8" stroke="white" strokeWidth="2" strokeLinecap="square" />
        <line x1="8" y1="2" x2="2" y2="8" stroke="white" strokeWidth="2" strokeLinecap="square" />
      </svg>
    </div>
  );
}

function VCCheckMark({ onDark }: { onDark?: boolean }) {
  return (
    <div
      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center border-2 border-black ${onDark ? "bg-black" : "bg-[hsl(47,100%,50%)]"}`}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <polyline
          points="1.5,5 4,7.5 8.5,2"
          stroke={onDark ? "hsl(47,100%,50%)" : "#000"}
          strokeWidth="2.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  );
}

function VCBlockTag({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return (
    <div
      className={`mb-3 inline-block border-2 border-black px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest ${onDark ? "bg-[hsl(47,100%,50%)] text-black" : "bg-black text-[hsl(47,100%,50%)]"}`}
    >
      {children}
    </div>
  );
}

function VCLeftPanel() {
  return (
    <div className="flex flex-col border-4 border-black bg-black p-6 shadow-neo-md lg:p-10">
      <div className="mb-4 inline-block self-start border-2 border-white bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-black">
        Without Rozeta
      </div>
      <p className="mb-6 text-xl font-extrabold uppercase tracking-tight text-white leading-snug">
        What You'd Piece Together
        <br />On Your Own
      </p>
      <div className="flex flex-1 flex-col gap-2 lg:gap-3">
        {vcLeftItems.map((item, i) => (
          <div key={i} className="flex items-start gap-3 border-2 border-white/10 bg-white/5 p-3 lg:p-4">
            <VCXMark />
            <div>
              <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-white/55 leading-snug">
                {item.label}
              </p>
              <p className="text-base font-extrabold uppercase tracking-tighter text-white lg:text-lg">
                {item.cost}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 border-4 border-[hsl(47,100%,50%)] bg-white/5 p-4 lg:mt-6 lg:p-5">
        <p className="mb-1 text-[10px] font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)]">
          Total Equivalent Cost
        </p>
        <p className="text-3xl font-extrabold uppercase tracking-tighter text-white leading-none lg:text-4xl">
          $9,000–20,000+<span className="text-lg opacity-60 lg:text-xl">/mo</span>
        </p>
        <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-white/40">
          And It's Still Cobbled Together. Across 3+ Vendors. Owned By Nobody.
        </p>
      </div>
    </div>
  );
}

function VCRightPanel() {
  return (
    <div className="flex flex-col border-4 border-black bg-[hsl(47,100%,50%)] p-6 shadow-neo-md lg:p-10">
      <div className="mb-4 inline-block self-start border-2 border-black bg-black px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)]">
        With Rozeta — Level 2
      </div>
      <p className="mb-6 text-xl font-extrabold uppercase tracking-tight text-black leading-snug">
        One Team. One Bill.
        <br />Everything Built For You.
      </p>
      <div className="mb-3 border-4 border-black bg-black/10 p-4 lg:mb-4 lg:p-5">
        <VCBlockTag onDark>Unlimited Automation Layer — Level 1 + 2</VCBlockTag>
        <div className="flex flex-col gap-2">
          {vcAutomations.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <VCCheckMark onDark />
              <span className="text-[11px] font-bold uppercase tracking-wide text-black leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-3 border-4 border-black bg-black/10 p-4 lg:mb-4 lg:p-5">
        <VCBlockTag onDark>12 Custom AI Agents / Year — Level 3</VCBlockTag>
        <div className="flex flex-col gap-2">
          {vcAgents.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <VCCheckMark onDark />
              <span className="text-[11px] font-bold uppercase tracking-wide text-black leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-5 border-4 border-black bg-black/10 p-4 lg:mb-6 lg:p-5">
        <VCBlockTag onDark>Everything Included</VCBlockTag>
        <div className="flex flex-col gap-2">
          {vcExtras.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <VCCheckMark onDark />
              <span className="text-[11px] font-bold uppercase tracking-wide text-black leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto border-4 border-black bg-black p-4 lg:p-5">
        <p className="mb-1 text-[10px] font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)]">
          All-In Monthly Price
        </p>
        <p className="text-3xl font-extrabold uppercase tracking-tighter text-white leading-none lg:text-4xl">
          $2,500<span className="text-lg opacity-60 lg:text-xl">/mo</span>
        </p>
        <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-white/50">
          No Setup Fee. No Lock-In. One Team Owns All Of It.
        </p>
      </div>
    </div>
  );
}

function ValueComparison() {
  const [activeTab, setActiveTab] = useState<"without" | "with">("with");

  return (
    <section className="border-b-4 border-black bg-[hsl(46,100%,96%)] px-6 py-16 sm:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <div className="mb-5 inline-block border-4 border-black bg-black px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)] shadow-neo-sm">
          The Math
        </div>

        {/* Headline */}
        <h2 className="text-5xl font-extrabold uppercase tracking-tighter leading-[1.02] sm:text-6xl lg:text-7xl">
          What $2,500 A Month
          <br />
          Actually Buys You.
        </h2>

        {/* Subtext */}
        <p className="mb-10 mt-4 max-w-xl text-base font-bold uppercase tracking-wide leading-relaxed opacity-50 lg:mb-14">
          Stack It Up Against What You'd Pay Piecing This Together Yourself — Before Accounting For The Time It Takes To Manage Three Vendors And A Freelancer.
        </p>

        {/* ── MOBILE: tab toggle ── */}
        <div className="lg:hidden">
          {/* Tab bar */}
          <div className="mb-0 grid grid-cols-2 border-4 border-black shadow-neo-sm">
            <button
              onClick={() => setActiveTab("without")}
              className={`py-3 text-xs font-extrabold uppercase tracking-widest transition-colors ${
                activeTab === "without"
                  ? "bg-black text-[hsl(47,100%,50%)]"
                  : "bg-white text-black/50"
              }`}
            >
              ✕ Without Rozeta
            </button>
            <button
              onClick={() => setActiveTab("with")}
              className={`py-3 text-xs font-extrabold uppercase tracking-widest transition-colors ${
                activeTab === "with"
                  ? "bg-[hsl(47,100%,50%)] text-black"
                  : "bg-white text-black/50"
              }`}
            >
              ✓ With Rozeta
            </button>
          </div>

          {/* Active panel */}
          {activeTab === "without" ? <VCLeftPanel /> : <VCRightPanel />}

          {/* Mobile bottom strip */}
          <div className="mt-1.5 border-4 border-black bg-black p-5 shadow-neo-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-white/40 mb-1">Without Rozeta</p>
                <p className="text-2xl font-extrabold uppercase tracking-tighter text-white/30 line-through leading-none">
                  $9K–20K+<span className="text-base">/mo</span>
                </p>
              </div>
              <div className="border-2 border-[hsl(47,100%,50%)] bg-[hsl(47,100%,50%)] px-2 py-1 text-xs font-extrabold uppercase tracking-widest text-black flex-shrink-0">
                VS
              </div>
              <div className="flex-1 text-right">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)] mb-1">With Rozeta</p>
                <p className="text-2xl font-extrabold uppercase tracking-tighter text-white leading-none">
                  $2,500<span className="text-base opacity-60">/mo</span>
                </p>
              </div>
            </div>
            <div className="border-t-2 border-white/10 pt-4">
              <p className="text-base font-extrabold uppercase tracking-tight text-white leading-snug">
                That's The Depth.{" "}
                <span className="text-[hsl(47,100%,50%)]">That's The Math.</span>
              </p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-white/40">
                Month-To-Month. We Earn Your Business Every 30 Days.
              </p>
            </div>
          </div>
        </div>

        {/* ── DESKTOP: side-by-side grid ── */}
        <div className="hidden lg:grid lg:items-stretch lg:gap-0" style={{ gridTemplateColumns: "1fr auto 1fr" }}>
          <VCLeftPanel />
          <div className="flex items-center justify-center px-6">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] text-sm font-extrabold uppercase tracking-widest shadow-neo-sm">
              VS
            </div>
          </div>
          <VCRightPanel />
        </div>

        {/* Desktop bottom callout strip */}
        <div className="mt-1.5 hidden flex-wrap items-center justify-between gap-8 border-4 border-black bg-black px-10 py-7 shadow-neo-md lg:flex">
          <div className="flex items-baseline gap-8">
            <div>
              <p className="mb-1 text-[10px] font-extrabold uppercase tracking-widest text-white/40">Without Rozeta</p>
              <p className="text-4xl font-extrabold uppercase tracking-tighter text-white/30 line-through leading-none">
                $9K–20K+<span className="text-xl">/mo</span>
              </p>
            </div>
            <div className="border-2 border-[hsl(47,100%,50%)] bg-[hsl(47,100%,50%)] px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-black">
              VS
            </div>
            <div>
              <p className="mb-1 text-[10px] font-extrabold uppercase tracking-widest text-[hsl(47,100%,50%)]">With Rozeta Level 2</p>
              <p className="text-4xl font-extrabold uppercase tracking-tighter text-white leading-none">
                $2,500<span className="text-xl opacity-60">/mo</span>
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

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[hsl(46,100%,96%)] font-sans text-[hsl(0,0%,5%)]">
      <FloatingCTA />
      <Navbar />
      <div className="h-16" />
      <Hero />
      <ProblemSection />
      <WhySection />
      <StreamDemo />
      <EmbedOrg />
      <Features />
      <PricingModel />
      <ValueComparison />
      <OurProcess />
      <CTA />
      <Footer />
    </div>
  );
}
