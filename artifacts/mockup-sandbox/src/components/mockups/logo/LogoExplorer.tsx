export function LogoExplorer() {
  const icons = [
    {
      name: "Compass Rose",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <polygon points="20,2 23,17 20,14 17,17" fill="black" />
          <polygon points="38,20 23,17 26,20 23,23" fill="black" />
          <polygon points="20,38 17,23 20,26 23,23" fill="black" />
          <polygon points="2,20 17,23 14,20 17,17" fill="black" />
          <polygon points="28,5 22,16 24,15 25,17" fill="black" opacity="0.5" />
          <polygon points="35,28 24,22 25,24 22,25" fill="black" opacity="0.5" />
          <polygon points="12,35 18,24 16,25 15,23" fill="black" opacity="0.5" />
          <polygon points="5,12 16,18 15,16 18,15" fill="black" opacity="0.5" />
          <circle cx="20" cy="20" r="3" fill="black" />
        </svg>
      ),
    },
    {
      name: "Hex Node",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <polygon
            points="20,4 34,11 34,25 20,32 6,25 6,11"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="20" r="5" fill="none" stroke="black" strokeWidth="2.5" />
          <circle cx="20" cy="4" r="2.5" fill="black" />
          <circle cx="34" cy="11" r="2.5" fill="black" />
          <circle cx="34" cy="25" r="2.5" fill="black" />
          <circle cx="20" cy="32" r="2.5" fill="black" />
          <circle cx="6" cy="25" r="2.5" fill="black" />
          <circle cx="6" cy="11" r="2.5" fill="black" />
          <line x1="20" y1="4" x2="20" y2="15" stroke="black" strokeWidth="1.5" />
          <line x1="34" y1="11" x2="24.5" y2="17" stroke="black" strokeWidth="1.5" />
          <line x1="34" y1="25" x2="24.5" y2="23" stroke="black" strokeWidth="1.5" />
          <line x1="20" y1="32" x2="20" y2="25" stroke="black" strokeWidth="1.5" />
          <line x1="6" y1="25" x2="15.5" y2="23" stroke="black" strokeWidth="1.5" />
          <line x1="6" y1="11" x2="15.5" y2="17" stroke="black" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      name: "R-Arrow",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <path
            d="M10,6 L10,34 L10,34 M10,6 L24,6 C30,6 33,10 33,14 C33,18 30,22 24,22 L16,22 L30,34"
            fill="none"
            stroke="black"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon points="34,30 34,38 26,34" fill="black" />
        </svg>
      ),
    },
    {
      name: "Radar Sweep",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <circle cx="14" cy="20" r="4" fill="black" />
          <path
            d="M20,10 L20,6 Q34,6 34,20 Q34,34 20,34 L20,30"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="square"
          />
          <path
            d="M20,13 L20,11 Q30,11 30,20 Q30,29 20,29 L20,27"
            fill="none"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="square"
          />
          <path
            d="M20,16 L20,15 Q26,15 26,20 Q26,25 20,25 L20,24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      ),
    },
    {
      name: "Double Chevron",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <polyline
            points="10,26 20,14 30,26"
            fill="none"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="10,34 20,22 30,34"
            fill="none"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.35"
          />
        </svg>
      ),
    },
    {
      name: "Geometric Eye",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <path
            d="M2,20 Q12,6 20,6 Q28,6 38,20 Q28,34 20,34 Q12,34 2,20 Z"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <polygon points="20,12 26,20 20,28 14,20" fill="black" />
          <polygon points="20,16 22.5,20 20,24 17.5,20" fill="hsl(47,100%,50%)" />
        </svg>
      ),
    },
    {
      name: "Circuit Rosette",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <circle cx="20" cy="20" r="3" fill="black" />
          <path d="M20,17 L20,4 L28,4" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23,20 L36,20 L36,12" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20,23 L20,36 L12,36" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17,20 L4,20 L4,28" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22,18 L30,10 L30,4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          <path d="M18,22 L10,30 L10,36" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          <circle cx="28" cy="4" r="2" fill="black" />
          <circle cx="36" cy="12" r="2" fill="black" />
          <circle cx="12" cy="36" r="2" fill="black" />
          <circle cx="4" cy="28" r="2" fill="black" />
          <circle cx="30" cy="4" r="1.5" fill="black" opacity="0.5" />
          <circle cx="10" cy="36" r="1.5" fill="black" opacity="0.5" />
        </svg>
      ),
    },
    {
      name: "Lock-On Bracket",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <path d="M4,14 L4,4 L14,4" stroke="black" strokeWidth="4" strokeLinecap="square" />
          <path d="M26,4 L36,4 L36,14" stroke="black" strokeWidth="4" strokeLinecap="square" />
          <path d="M36,26 L36,36 L26,36" stroke="black" strokeWidth="4" strokeLinecap="square" />
          <path d="M14,36 L4,36 L4,26" stroke="black" strokeWidth="4" strokeLinecap="square" />
          <polygon points="20,13 27,20 20,27 13,20" fill="black" />
        </svg>
      ),
    },
    {
      name: "Neural Star",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <circle cx="20" cy="20" r="4" fill="black" />
          <line x1="20" y1="16" x2="20" y2="4" stroke="black" strokeWidth="2.5" />
          <line x1="23.5" y1="18" x2="33" y2="7" stroke="black" strokeWidth="2.5" />
          <line x1="24" y1="20" x2="36" y2="20" stroke="black" strokeWidth="2.5" />
          <line x1="23.5" y1="22" x2="33" y2="33" stroke="black" strokeWidth="2.5" />
          <line x1="20" y1="24" x2="20" y2="36" stroke="black" strokeWidth="2.5" />
          <line x1="16.5" y1="22" x2="7" y2="33" stroke="black" strokeWidth="2.5" />
          <line x1="16" y1="20" x2="4" y2="20" stroke="black" strokeWidth="2.5" />
          <line x1="16.5" y1="18" x2="7" y2="7" stroke="black" strokeWidth="2.5" />
          <circle cx="20" cy="4" r="3" fill="black" />
          <circle cx="33" cy="7" r="3" fill="black" />
          <circle cx="36" cy="20" r="3" fill="black" />
          <circle cx="33" cy="33" r="3" fill="black" />
          <circle cx="20" cy="36" r="3" fill="black" />
          <circle cx="7" cy="33" r="3" fill="black" />
          <circle cx="4" cy="20" r="3" fill="black" />
          <circle cx="7" cy="7" r="3" fill="black" />
        </svg>
      ),
    },
    {
      name: "Shield Crest",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <path
            d="M20,3 L35,8 L35,22 Q35,34 20,38 Q5,34 5,22 L5,8 Z"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <line x1="8" y1="18" x2="32" y2="18" stroke="black" strokeWidth="2.5" />
          <polygon points="20,22 25,27 20,32 15,27" fill="black" />
          <text
            x="20"
            y="15"
            textAnchor="middle"
            fontSize="10"
            fontWeight="900"
            fill="black"
            fontFamily="'Space Grotesk', sans-serif"
          >
            R
          </text>
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
          Logo Explorer
        </div>
        <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight">
          10 Icon Concepts
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
                  #{i + 1}
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
                  #{i + 1}
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
            { n: "Compass Rose", why: "\"Rozeta\" literally means rosette/compass rose. Heritage, geometric, directional. Works perfectly embroidered." },
            { n: "Hex Node", why: "Network + intelligence + systematic thinking. 6 vertex nodes = interconnected systems." },
            { n: "R-Arrow", why: "Block-letter R with arrow leg. Type-as-mark, street/merch-forward, instantly readable." },
            { n: "Radar Sweep", why: "Central point + detection arcs. \"We detect the opportunity you're missing.\" Tech-forward." },
            { n: "Double Chevron", why: "Upward momentum, growth, forward trajectory. Dead simple at any size." },
            { n: "Geometric Eye", why: "Intelligence + observation. \"We see what you can't.\" Diamond pupil ties to current icon." },
            { n: "Circuit Rosette", why: "Marries the Rozeta name's meaning with tech/circuit imagery. L-shaped circuit petals." },
            { n: "Lock-On Bracket", why: "Targeting reticle = \"we lock in / we embed.\" Video game energy. Bold, geometric." },
            { n: "Neural Star", why: "AI neural network reference. 8 radiating nodes. Heavier, more intentional than a snowflake." },
            { n: "Shield Crest", why: "Military badge / unit patch energy. \"Embedded team,\" protection, inside your org." },
          ].map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border-2 border-black p-3"
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center border-2 border-black bg-[hsl(47,100%,50%)] text-xs font-bold"
                style={{ boxShadow: "2px 2px 0 #000" }}
              >
                {i + 1}
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
          Rozeta Labs · Logo Exploration · All icons are pure SVG, single-color embroidery-ready
        </p>
      </div>
    </div>
  );
}
