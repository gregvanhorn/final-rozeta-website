import { useState } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Examples", href: "/#use-cases" },
  { label: "Pricing", href: "/#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-black bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="rozeta-logo-icon flex h-9 w-9 items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] shadow-[3px_3px_0px_0px_#000]">
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                <line x1="3"   y1="8"  x2="3"   y2="12" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="6.5" y1="5"  x2="6.5" y2="15" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="10"  y1="1"  x2="10"  y2="19" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="13.5" y1="5" x2="13.5" y2="15" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="17"  y1="8"  x2="17"  y2="12" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Rozeta Labs</span>
          </a>

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
              href="/get-started"
              className="inline-flex items-center gap-1 border-4 border-black bg-[hsl(47,100%,50%)] px-4 py-2 text-sm font-bold tracking-wide uppercase shadow-neo-sm transition-all duration-100 hover:bg-yellow-400 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden border-4 border-black bg-white p-2 shadow-neo-sm transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

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
            <a href="/get-started" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center gap-1 border-4 border-black bg-[hsl(47,100%,50%)] px-4 py-3 text-sm font-bold tracking-wide uppercase shadow-neo-sm">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
