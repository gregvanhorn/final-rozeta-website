export default function Footer() {
  return (
    <footer className="border-b-4 border-black bg-[hsl(46,50%,88%)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="/" className="flex items-center gap-3">
            <div className="rozeta-logo-icon flex h-10 w-10 items-center justify-center border-4 border-black bg-[hsl(47,100%,50%)] shadow-[3px_3px_0px_0px_#000]">
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                <line x1="3"   y1="8"  x2="3"   y2="12" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="6.5" y1="5"  x2="6.5" y2="15" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="10"  y1="1"  x2="10"  y2="19" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="13.5" y1="5" x2="13.5" y2="15" stroke="black" strokeWidth="2" strokeLinecap="round" />
                <line x1="17"  y1="8"  x2="17"  y2="12" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Rozeta Labs</span>
            <span className="text-sm font-bold opacity-40">&copy; 2026</span>
          </a>

          <div className="flex flex-col items-center gap-2 sm:items-end">
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
