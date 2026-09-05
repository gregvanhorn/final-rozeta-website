type PrimaryCtaProps = {
  href?: string;
  onClick?: () => void;
  size?: "sm" | "lg";
  className?: string;
};

export function PrimaryCta({
  href = "#assessment",
  onClick,
  size = "lg",
  className = "",
}: PrimaryCtaProps) {
  const sizing =
    size === "sm"
      ? "px-3 py-2 text-[10px] leading-tight whitespace-normal text-center sm:px-4 sm:text-sm sm:whitespace-nowrap"
      : "px-5 py-3 text-sm sm:px-6 sm:text-base";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center border-4 border-black bg-yellow font-bold tracking-wide uppercase shadow-neo-sm transition-all duration-100 hover:bg-[#ffd54a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${sizing} ${className}`}
    >
      Request a confidential assessment
    </a>
  );
}
