export function TwitterBanner() {
  return (
    <div
      style={{
        width: 1200,
        height: 628,
        background: "hsl(46,100%,96%)",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
        overflow: "hidden",
        border: "4px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Content block */}
      {/* Wrapper — sizes to content so tagline centers within it */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* Icon + [Introducing / Pill] row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 120,
              height: 120,
              background: "hsl(47,100%,50%)",
              border: "5px solid black",
              boxShadow: "6px 6px 0px 0px #000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 200 200" width="72" height="72" fill="none">
              <line x1="44"  y1="84"  x2="44"  y2="116" stroke="black" strokeWidth="20" strokeLinecap="round"/>
              <line x1="72"  y1="56"  x2="72"  y2="144" stroke="black" strokeWidth="20" strokeLinecap="round"/>
              <line x1="100" y1="24"  x2="100" y2="176" stroke="black" strokeWidth="20" strokeLinecap="round"/>
              <line x1="128" y1="56"  x2="128" y2="144" stroke="black" strokeWidth="20" strokeLinecap="round"/>
              <line x1="156" y1="84"  x2="156" y2="116" stroke="black" strokeWidth="20" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Introducing + Pill stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {/* Introducing */}
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "black",
              }}
            >
              Introducing
            </div>

            {/* Rozeta Labs pink pill */}
            <div
              style={{
                display: "inline-block",
                background: "hsl(0,85%,70%)",
                border: "5px solid black",
                boxShadow: "8px 8px 0px 0px #000",
                padding: "14px 36px",
                transform: "rotate(-1.5deg)",
                fontSize: 80,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "black",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              Rozeta Labs
            </div>
          </div>
        </div>

        {/* Tagline — tight under the pill, centered within group */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "rgba(0,0,0,0.45)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginTop: 2,
          }}
        >
          Your SMB&apos;s Dedicated AI Team
        </div>
      </div>
    </div>
  );
}
