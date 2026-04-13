const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

export default function Slide03Hook() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Left content */}
      <div className="absolute left-[5vw] top-[7vh]" style={{ width: '55vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2.5vh' }}>
          Revenue Recovery
        </div>
        <div style={{ fontSize: '5.2vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          YOU'RE LOSING
          MONEY BETWEEN
          THE LEAD AND
          THE JOB.
        </div>
        <div style={{ width: '9vw', height: '4px', background: C.blue, margin: '2.5vh 0' }} />
        <div style={{ fontSize: '1.75vw', fontWeight: 500, color: C.charcoal, lineHeight: 1.5 }}>
          We find exactly where. We fix it. You keep the revenue.
        </div>
        <div style={{ marginTop: '3vh', display: 'inline-block', background: C.yellow, border: `3px solid ${C.text}`, padding: '1.4vh 2.5vw', fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.text, boxShadow: `5px 5px 0 0 ${C.text}` }}>
          Let's Find Your Leak
        </div>
      </div>

      {/* Right — decorative geometric elements */}
      <div className="absolute right-[4vw] top-[7vh]" style={{ width: '32vw', height: '80vh', position: 'absolute' }}>
        {/* Stacked ellipses (wireframe) */}
        <div style={{ position: 'absolute', top: '2vh', right: '2vw', width: '22vw', height: '22vw', borderRadius: '50%', border: `3px solid ${C.blue}`, opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '5vh', right: '4vw', width: '16vw', height: '16vw', borderRadius: '50%', border: `3px solid ${C.blue}`, opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: '8vh', right: '6vw', width: '10vw', height: '10vw', borderRadius: '50%', border: `3px solid ${C.blue}`, opacity: 0.3 }} />

        {/* Lime green geometric block */}
        <div style={{ position: 'absolute', bottom: '20vh', right: '1vw', width: '14vw', height: '14vw', background: C.lime, border: `4px solid ${C.text}`, boxShadow: `8px 8px 0 0 ${C.text}`, transform: 'rotate(-8deg)' }} />

        {/* Charcoal 4-pointed star (diamond + rotated square) */}
        <div style={{ position: 'absolute', bottom: '4vh', right: '8vw', width: '8vw', height: '8vw', background: C.charcoal, border: `3px solid ${C.text}`, transform: 'rotate(45deg)' }} />
        <div style={{ position: 'absolute', bottom: '4vh', right: '8vw', width: '8vw', height: '8vw', background: C.charcoal, border: `3px solid ${C.text}` }} />
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>03 / 15</span>
      </div>
    </div>
  );
}
