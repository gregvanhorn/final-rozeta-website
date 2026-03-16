import {
  Crown,
  TrendingUp,
  Truck,
  HardHat,
  Headphones,
  Megaphone,
  DollarSign,
} from "lucide-react";

const departments = [
  {
    icon: <Crown className="h-6 w-6" />,
    name: "Owner / Leadership",
    blurb:
      "Where is your time going? We map every decision that only you make — and identify which ones a system should be making instead.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    name: "Sales / Estimating",
    blurb:
      "How fast are quotes going out? What percentage of estimates go cold and never get followed up? We find every leak in the sales pipeline.",
  },
  {
    icon: <Truck className="h-6 w-6" />,
    name: "Operations / Dispatch",
    blurb:
      "How is scheduling handled? Where are crews sitting idle? We look for scheduling gaps, double-bookings, and manual handoffs that cause delays.",
  },
  {
    icon: <HardHat className="h-6 w-6" />,
    name: "Field / Crews",
    blurb:
      "What information are crews missing on-site? Where does scope creep happen and never make it back to billing? We close that loop.",
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    name: "Customer Service",
    blurb:
      "What questions repeat every single day? What's getting dropped between the office and the field? We automate the routine and escalate the critical.",
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    name: "Marketing / Lead Gen",
    blurb:
      "What channels aren't being followed up? What does your actual lead response time look like? We find where leads are going cold before anyone notices.",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    name: "Finance / Billing",
    blurb:
      "What's being invoiced late? What work is completed but never billed? We surface revenue that's already been earned but hasn't been collected.",
  },
];

export function EmbedOrg() {
  return (
    <section
      className="min-h-screen border-b-4 border-black bg-black py-24"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Badge */}
        <div
          className="mb-6 inline-block border-4 border-white bg-black px-4 py-2 text-sm font-bold tracking-widest text-white uppercase"
          style={{ boxShadow: "3px 3px 0px 0px rgba(255,255,255,0.4)" }}
        >
          How It Works: Step Two
        </div>

        {/* Header */}
        <h2 className="mb-2 text-6xl font-bold tracking-tighter text-white uppercase lg:text-7xl">
          We embed{" "}
          <span
            className="inline-block border-4 border-black bg-[hsl(47,100%,50%)] px-3 text-black"
            style={{ boxShadow: "6px 6px 0px 0px rgba(255,255,255,0.5)" }}
          >
            into your org
          </span>
        </h2>

        {/* Subheader */}
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-white/60">
          We sit alongside the owner and every department head — not to observe, but to dig. We're
          looking for every bottleneck, broken handoff, and manual process that's costing you money.
        </p>

        {/* Department grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, i) => (
            <div
              key={i}
              className="border-4 border-white bg-black p-6 transition-colors hover:bg-white/5"
              style={{ boxShadow: "5px 5px 0px 0px rgba(255,255,255,0.15)" }}
            >
              {/* Icon + dept name row */}
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center border-4 border-white bg-[hsl(47,100%,50%)] text-black"
                >
                  {dept.icon}
                </div>
                <span className="text-sm font-bold tracking-widest text-white uppercase">
                  {dept.name}
                </span>
              </div>

              {/* Divider */}
              <div className="mb-4 h-px bg-white/20" />

              {/* What we look for label */}
              <p className="mb-1 text-xs font-bold tracking-widest text-[hsl(47,100%,50%)] uppercase">
                What we look for:
              </p>

              {/* Blurb */}
              <p className="text-sm font-medium leading-relaxed text-white/70">
                {dept.blurb}
              </p>
            </div>
          ))}

          {/* Closing CTA card */}
          <div
            className="border-4 border-[hsl(47,100%,50%)] bg-[hsl(47,100%,50%)] p-6 sm:col-span-2 lg:col-span-3"
            style={{ boxShadow: "5px 5px 0px 0px rgba(255,200,0,0.3)" }}
          >
            <p className="text-xl font-bold uppercase text-black">
              Nothing is off-limits.
            </p>
            <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-black/70">
              Most consultants talk to the owner and call it a day. We go cross-org — every function,
              every workflow, every repetitive task — until we have a complete map of what's broken and
              what's possible. That's what makes our builds stick.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
