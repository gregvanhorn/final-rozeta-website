export function LogoExplorer3() {
  const icons = [
    {
      name: "Compass Rose",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="20" y1="6"  x2="20" y2="16" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="24" x2="20" y2="34" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="6"  x2="16" y1="20" y2="20" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="24" x2="34" y1="20" y2="20" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="10" y1="10" x2="15" y2="15" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="25" y1="25" x2="30" y2="30" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="30" y1="10" x2="25" y2="15" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="10" y1="30" x2="15" y2="25" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="3" fill="black" />
        </svg>
      ),
    },
    {
      name: "Hex Node",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="20" y1="5"  x2="20" y2="13" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="12" x2="27" y2="19" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="28" x2="27" y2="21" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="35" x2="20" y2="27" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="8"  y1="28" x2="13" y2="21" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="8"  y1="12" x2="13" y2="19" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <circle cx="20" cy="20" r="4" fill="none" stroke="black" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      name: "R-Arrow",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="8"  y1="34" x2="8"  y2="6"  stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="14" y1="34" x2="14" y2="14" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="20" y1="34" x2="20" y2="20" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="26" y1="34" x2="26" y2="26" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="32" y1="34" x2="32" y2="10" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <polyline points="26,10 32,4 38,10" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Radar Sweep",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="6"  y1="32" x2="6"  y2="28" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="12" y1="32" x2="12" y2="24" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="32" x2="18" y2="18" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="24" y1="32" x2="24" y2="12" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="30" y1="32" x2="30" y2="6" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <circle cx="6" cy="26" r="2" fill="black" />
          <circle cx="12" cy="22" r="2" fill="black" />
          <circle cx="18" cy="16" r="2" fill="black" />
          <circle cx="24" cy="10" r="2" fill="black" />
          <circle cx="30" cy="4" r="2" fill="black" />
          <line x1="3" y1="34" x2="36" y2="34" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Double Chevron",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="8"  y1="22" x2="8"  y2="14" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="14" y1="22" x2="14" y2="8"  stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="20" y1="22" x2="20" y2="14" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="8"  y1="36" x2="8"  y2="28" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="14" y1="36" x2="14" y2="22" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="20" y1="36" x2="20" y2="28" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="26" y1="22" x2="26" y2="8"  stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="32" y1="22" x2="32" y2="14" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="26" y1="36" x2="26" y2="22" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="32" y1="36" x2="32" y2="28" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Geometric Eye",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="6"  y1="24" x2="6"  y2="16" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="12" y1="28" x2="12" y2="12" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="30" x2="18" y2="10" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="24" y1="30" x2="24" y2="10" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="30" y1="28" x2="30" y2="12" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="36" y1="24" x2="36" y2="16" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <circle cx="21" cy="20" r="3" fill="black" />
        </svg>
      ),
    },
    {
      name: "Circuit Rosette",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="20" y1="4"  x2="20" y2="16" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="20" y1="24" x2="20" y2="36" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="4"  x2="16" y1="20" y2="20" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="24" x2="36" y1="20" y2="20" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="20" cy="4"  r="2" fill="black" />
          <circle cx="20" cy="36" r="2" fill="black" />
          <circle cx="4"  cy="20" r="2" fill="black" />
          <circle cx="36" cy="20" r="2" fill="black" />
          <circle cx="20" cy="20" r="4" fill="none" stroke="black" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      name: "Lock-On Bracket",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <path d="M4,12 L4,4 L12,4"  stroke="black" strokeWidth="3.5" strokeLinecap="square" fill="none" />
          <path d="M28,4 L36,4 L36,12" stroke="black" strokeWidth="3.5" strokeLinecap="square" fill="none" />
          <path d="M36,28 L36,36 L28,36" stroke="black" strokeWidth="3.5" strokeLinecap="square" fill="none" />
          <path d="M12,36 L4,36 L4,28" stroke="black" strokeWidth="3.5" strokeLinecap="square" fill="none" />
          <line x1="14" y1="28" x2="14" y2="20" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="28" x2="20" y2="12" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="26" y1="28" x2="26" y2="20" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Neural Star",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="20" y1="16" x2="20" y2="4"  stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="23" y1="18" x2="32" y2="8"  stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="24" y1="20" x2="36" y2="20" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="23" y1="22" x2="32" y2="32" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="24" x2="20" y2="36" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="17" y1="22" x2="8"  y2="32" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="16" y1="20" x2="4"  y2="20" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="17" y1="18" x2="8"  y2="8"  stroke="black" strokeWidth="3" strokeLinecap="round" />
          <circle cx="20" cy="20" r="4" fill="black" />
        </svg>
      ),
    },
    {
      name: "Shield Crest",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <path d="M20,3 L34,8 L34,22 Q34,33 20,37 Q6,33 6,22 L6,8 Z" fill="none" stroke="black" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="14" y1="30" x2="14" y2="24" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="30" x2="20" y2="14" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="26" y1="30" x2="26" y2="24" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Spiral Vortex",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="4"  y1="28" x2="4"  y2="20" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="10" y1="30" x2="10" y2="16" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="16" y1="34" x2="16" y2="10" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="22" y1="30" x2="22" y2="14" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="28" y1="26" x2="28" y2="18" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="34" y1="24" x2="34" y2="20" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <circle cx="16" cy="22" r="3" fill="black" />
        </svg>
      ),
    },
    {
      name: "Grid Highlight",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="8"  y1="30" x2="8"  y2="24" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="16" y1="30" x2="16" y2="24" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="24" y1="30" x2="24" y2="24" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="32" y1="30" x2="32" y2="24" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="8"  y1="20" x2="8"  y2="14" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="16" y1="20" x2="16" y2="6"  stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="24" y1="20" x2="24" y2="6"  stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="32" y1="20" x2="32" y2="14" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="4"  y1="22" x2="36" y2="22" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Lightning in Diamond",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="8"  y1="28" x2="8"  y2="18" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="14" y1="32" x2="14" y2="8"  stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="36" x2="20" y2="4"  stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="26" y1="32" x2="26" y2="8"  stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="28" x2="32" y2="18" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <polyline points="14,20 18,14 20,20 22,14 26,20" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Angular Infinity",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="6"  y1="28" x2="6"  y2="20" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="12" y1="30" x2="12" y2="14" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="28" x2="18" y2="20" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="22" y1="28" x2="22" y2="20" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="28" y1="30" x2="28" y2="14" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="34" y1="28" x2="34" y2="20" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="4"  y1="32" x2="36" y2="32" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Bar Chart Rising",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="7"  y1="34" x2="7"  y2="26" stroke="black" strokeWidth="5" strokeLinecap="round" />
          <line x1="15" y1="34" x2="15" y2="20" stroke="black" strokeWidth="5" strokeLinecap="round" />
          <line x1="23" y1="34" x2="23" y2="12" stroke="black" strokeWidth="5" strokeLinecap="round" />
          <line x1="31" y1="34" x2="31" y2="6"  stroke="black" strokeWidth="5" strokeLinecap="round" />
          <line x1="3"  y1="36" x2="37" y2="36" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Skeleton Key",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <circle cx="13" cy="14" r="7" fill="none" stroke="black" strokeWidth="3" />
          <circle cx="13" cy="14" r="2.5" fill="black" />
          <line x1="18" y1="19" x2="34" y2="35" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="27" y1="27" x2="33" y2="21" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Signal Waveform",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="8"  y1="16" x2="8"  y2="24" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="14" y1="10" x2="14" y2="30" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="4"  x2="20" y2="36" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="26" y1="10" x2="26" y2="30" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="16" x2="32" y2="24" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Slab-R Block",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="10" y1="34" x2="10" y2="6"  stroke="black" strokeWidth="4" strokeLinecap="round" />
          <line x1="17" y1="34" x2="17" y2="22" stroke="black" strokeWidth="4" strokeLinecap="round" />
          <line x1="24" y1="34" x2="24" y2="28" stroke="black" strokeWidth="4" strokeLinecap="round" />
          <line x1="31" y1="34" x2="31" y2="14" stroke="black" strokeWidth="4" strokeLinecap="round" />
          <line x1="8"  y1="4"  x2="34" y2="4"  stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="8"  y1="36" x2="34" y2="36" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Arch Pillars",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="8"  y1="34" x2="8"  y2="14" stroke="black" strokeWidth="4" strokeLinecap="round" />
          <line x1="32" y1="34" x2="32" y2="14" stroke="black" strokeWidth="4" strokeLinecap="round" />
          <path d="M8,14 Q8,4 20,4 Q32,4 32,14" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="14" y1="34" x2="14" y2="22" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="34" x2="20" y2="18" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="26" y1="34" x2="26" y2="22" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <line x1="4"  y1="36" x2="36" y2="36" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Wing Chevron",
      svg: (
        <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
          <line x1="6"  y1="34" x2="6"  y2="24" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="12" y1="34" x2="12" y2="16" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="18" y1="34" x2="18" y2="24" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="22" y1="34" x2="22" y2="24" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="28" y1="34" x2="28" y2="16" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="34" y1="34" x2="34" y2="24" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
          <polyline points="6,24 12,16 18,24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="22,24 28,16 34,24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
          Logo Explorer — Waveform Series
        </div>
        <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight">
          All 20 Concepts — Waveform Treatment
        </h1>
        <p className="mt-1 text-sm font-medium text-gray-500">
          Rozeta Labs · Signal waveform visual language applied to every concept
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

        <p className="mt-8 text-xs text-center text-gray-400 pb-8">
          Rozeta Labs · Waveform Series · All icons use vertical bar / pulse visual language
        </p>
      </div>
    </div>
  );
}
