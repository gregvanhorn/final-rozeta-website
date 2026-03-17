export function LogoExplorer2() {
  const icons = [
    {
      name: "Spiral Vortex",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <path
            d="M20,20 Q20,16 24,16 Q28,16 28,20 Q28,26 22,26 Q14,26 14,18 Q14,10 22,10 Q32,10 32,20 Q32,30 22,30 Q10,30 10,18 Q10,6 22,6"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="2" fill="black" />
        </svg>
      ),
    },
    {
      name: "Grid Highlight",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <rect x="4" y="4" width="9" height="9" fill="none" stroke="black" strokeWidth="2.5" />
          <rect x="15.5" y="4" width="9" height="9" fill="none" stroke="black" strokeWidth="2.5" />
          <rect x="27" y="4" width="9" height="9" fill="none" stroke="black" strokeWidth="2.5" />
          <rect x="4" y="15.5" width="9" height="9" fill="none" stroke="black" strokeWidth="2.5" />
          <rect x="15.5" y="15.5" width="9" height="9" fill="black" stroke="black" strokeWidth="2.5" />
          <rect x="27" y="15.5" width="9" height="9" fill="none" stroke="black" strokeWidth="2.5" />
          <rect x="4" y="27" width="9" height="9" fill="none" stroke="black" strokeWidth="2.5" />
          <rect x="15.5" y="27" width="9" height="9" fill="none" stroke="black" strokeWidth="2.5" />
          <rect x="27" y="27" width="9" height="9" fill="none" stroke="black" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      name: "Lightning Diamond",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <polygon
            points="20,2 38,20 20,38 2,20"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <polygon points="22,10 16,22 21,22 18,30 26,18 21,18" fill="black" />
        </svg>
      ),
    },
    {
      name: "Angular Infinity",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <path
            d="M20,20 L12,13 L5,13 L5,27 L12,27 L20,20 L28,13 L35,13 L35,27 L28,27 Z"
            fill="none"
            stroke="black"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      name: "Bar Chart Rising",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <rect x="4" y="28" width="6" height="8" fill="black" />
          <rect x="13" y="22" width="6" height="14" fill="black" />
          <rect x="22" y="14" width="6" height="22" fill="black" />
          <rect x="31" y="6" width="6" height="30" fill="black" />
          <line x1="2" y1="37" x2="39" y2="37" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Skeleton Key",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <circle cx="13" cy="13" r="8" fill="none" stroke="black" strokeWidth="3" />
          <circle cx="13" cy="13" r="3.5" fill="black" />
          <line x1="19" y1="19" x2="34" y2="34" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="28" y1="28" x2="34" y2="22" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="32" x2="38" y2="26" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Signal Waveform",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="8" y1="16" x2="8" y2="24" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="14" y1="10" x2="14" y2="30" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="4" x2="20" y2="36" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="26" y1="10" x2="26" y2="30" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="16" x2="32" y2="24" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Slab-R Block",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <text
            x="20"
            y="33"
            textAnchor="middle"
            fontSize="36"
            fontWeight="900"
            fill="black"
            fontFamily="'Space Grotesk', sans-serif"
            letterSpacing="-2"
          >
            R
          </text>
          <line x1="4" y1="4" x2="36" y2="4" stroke="black" strokeWidth="4" strokeLinecap="square" />
          <line x1="4" y1="36" x2="36" y2="36" stroke="black" strokeWidth="4" strokeLinecap="square" />
        </svg>
      ),
    },
    {
      name: "Arch Pillars",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <path
            d="M6,36 L6,14 Q6,4 20,4 Q34,4 34,14 L34,36"
            fill="none"
            stroke="black"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="6" y1="36" x2="6" y2="24" stroke="black" strokeWidth="5" strokeLinecap="square" />
          <line x1="34" y1="36" x2="34" y2="24" stroke="black" strokeWidth="5" strokeLinecap="square" />
          <line x1="2" y1="36" x2="38" y2="36" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <circle cx="20" cy="22" r="3" fill="black" />
        </svg>
      ),
    },
    {
      name: "Wing Chevron",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <path
            d="M4,32 L4,18 L20,6 L36,18 L36,32"
            fill="none"
            stroke="black"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M10,32 L10,22 L20,14 L30,22 L30,32"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <circle cx="20" cy="26" r="3" fill="black" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="min-h-screen bg-white p-10"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="mx-auto max-w-5xl">
        <div
          className="mb-2 inline-block border-4 border-black bg-[hsl(47,100%,50%)] px-4 py-2 text-xs font-bold tracking-widest uppercase"
          style={{ boxShadow: "3px 3px 0 #000" }}
        >
          Logo Explorer — Batch 2
        </div>
        <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight">
          10 More Icon Concepts
        </h1>
        <p className="mt-1 text-sm font-medium text-gray-500">
          Rozeta Labs · Merch-ready, embroidery-safe, bold at any size
        </p>

        <hr className="my-8 border-t-4 border-black" />

        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-400">
          On yellow background
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
          {icons.map((icon, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div
                className="flex h-24 w-24 items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] p-4"
                style={{ boxShadow: "5px 5px 0 #000" }}
              >
                {icon.svg}
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  #{i + 11}
                </p>
                <p className="text-sm font-bold uppercase tracking-tight">
                  {icon.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-8 border-t-4 border-black" />

        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-400">
          On white background
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
          {icons.map((icon, i) => (
            <div key={`w-${i}`} className="flex flex-col items-center gap-3">
              <div
                className="flex h-24 w-24 items-center justify-center border-4 border-black bg-white p-4"
                style={{ boxShadow: "5px 5px 0 #000" }}
              >
                {icon.svg}
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  #{i + 11}
                </p>
                <p className="text-sm font-bold uppercase tracking-tight">
                  {icon.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-8 border-t-4 border-black" />

        <h2 className="mb-4 text-xl font-bold uppercase tracking-widest border-b-4 border-black pb-2">
          Concept Rationale
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { n: "Spiral Vortex", why: "Inward pull — \"pulling revenue back in.\" Clean logarithmic coil. Bold at any scale, classic mark energy." },
            { n: "Grid Highlight", why: "3x3 grid with filled center = \"we find the one thing that matters.\" Data/systems visual, extremely clean." },
            { n: "Lightning Diamond", why: "Speed + energy inside a diamond frame. \"Fast action, structured approach.\" High-impact merch mark." },
            { n: "Angular Infinity", why: "Geometric ∞ with sharp angles, not the soft rounded cliche. Continuous improvement, infinite loop of optimization." },
            { n: "Bar Chart Rising", why: "Direct visual metaphor — revenue going up. Four ascending bars = growth trajectory. Instantly understood." },
            { n: "Skeleton Key", why: "\"We unlock the revenue already sitting in your business.\" Classic key silhouette, bold and embroidery-perfect." },
            { n: "Signal Waveform", why: "Audio/data pulse pattern. \"We detect the signal in the noise.\" Tech-forward, clean vertical rhythm." },
            { n: "Slab-R Block", why: "Pure typographic mark — heavyweight R between slab rules. Industrial, brutalist, no-nonsense identity." },
            { n: "Arch Pillars", why: "Classical architecture — two pillars + arch. \"Rozeta\" as foundational structure. Trust, permanence, gravitas." },
            { n: "Wing Chevron", why: "Nested chevrons forming a wing/roof shape. Forward motion + protection. Military patch energy meets growth." },
          ].map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border-2 border-black p-3"
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center border-2 border-black bg-[hsl(47,100%,50%)] text-xs font-bold"
                style={{ boxShadow: "2px 2px 0 #000" }}
              >
                {i + 11}
              </span>
              <div>
                <p className="text-xs font-bold uppercase">{r.n}</p>
                <p className="mt-0.5 text-xs text-gray-600 leading-relaxed">
                  {r.why}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-center text-gray-400 pb-8">
          Rozeta Labs · Logo Exploration Batch 2 · All icons are pure SVG, single-color embroidery-ready
        </p>
      </div>
    </div>
  );
}
