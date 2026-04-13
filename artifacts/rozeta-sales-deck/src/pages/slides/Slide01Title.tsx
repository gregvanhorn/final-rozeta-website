const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

export default function Slide01Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Left content */}
      <div className="absolute left-[5vw] top-[6vh] bottom-[6.5vh] flex flex-col justify-between" style={{ width: '52vw' }}>
        <div>
          <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '3vh' }}>
            Revenue Recovery
          </div>
          <div style={{ fontSize: '8.5vw', fontWeight: 700, lineHeight: 0.92, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            ROZETA
          </div>
          <div style={{ fontSize: '8.5vw', fontWeight: 700, lineHeight: 0.92, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
            LABS
          </div>
          <div style={{ width: '100%', height: '6px', background: C.yellow, margin: '2.5vh 0', border: `2px solid ${C.text}` }} />
          <div style={{ fontSize: '1.8vw', fontWeight: 500, color: C.charcoal, lineHeight: 1.4, maxWidth: '46vw' }}>
            AI-powered revenue recovery for SMBs.
            We find the leaks. We fix them.
            You keep the revenue.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5vw' }}>
          <div style={{ background: C.yellow, border: `3px solid ${C.text}`, padding: '1.2vh 2.5vw', fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.text }}>
            rozeta.ai
          </div>
          <div style={{ fontSize: '1.3vw', color: C.charcoal, fontWeight: 500 }}>
            Confidential — Not for distribution
          </div>
        </div>
      </div>

      {/* Right — Neo-brutalist icon */}
      <div className="absolute right-[5vw]" style={{ top: '8vh', width: '36vw', height: '36vw', border: `5px solid ${C.text}`, background: C.yellow, boxShadow: `14px 14px 0 0 ${C.text}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="0 0 120 120" style={{ width: '65%', height: '65%' }}>
          <line x1="22" y1="55" x2="22" y2="73" stroke={C.text} strokeWidth="7" strokeLinecap="round"/>
          <line x1="42" y1="38" x2="42" y2="88" stroke={C.text} strokeWidth="7" strokeLinecap="round"/>
          <line x1="60" y1="14" x2="60" y2="106" stroke={C.text} strokeWidth="7" strokeLinecap="round"/>
          <line x1="78" y1="38" x2="78" y2="88" stroke={C.text} strokeWidth="7" strokeLinecap="round"/>
          <line x1="98" y1="55" x2="98" y2="73" stroke={C.text} strokeWidth="7" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>01 / 15</span>
      </div>
    </div>
  );
}
