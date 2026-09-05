type SignalLogoProps = {
  size?: "sm" | "md";
};

export function SignalLogo({ size = "md" }: SignalLogoProps) {
  const box = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div
      className={`rozeta-logo-icon flex items-center justify-center border-4 border-black bg-yellow shadow-neo-sm ${box}`}
    >
      <svg viewBox="0 0 20 20" fill="none" className={icon} aria-hidden="true">
        <line x1="3" y1="8" x2="3" y2="12" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <line x1="6.5" y1="5" x2="6.5" y2="15" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="1" x2="10" y2="19" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <line
          x1="13.5"
          y1="5"
          x2="13.5"
          y2="15"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line x1="17" y1="8" x2="17" y2="12" stroke="black" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
