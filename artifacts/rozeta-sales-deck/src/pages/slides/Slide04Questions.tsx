const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

export default function Slide04Questions() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Left side headline */}
      <div className="absolute left-[5vw] top-[7vh]" style={{ width: '38vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2.5vh' }}>
          Before We Show You Anything
        </div>
        <div style={{ fontSize: '5vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          WE HAVE
          FOUR
          QUESTIONS.
        </div>
        <div style={{ width: '8vw', height: '4px', background: C.blue, margin: '2.5vh 0' }} />
        <div style={{ fontSize: '1.6vw', fontWeight: 400, fontStyle: 'italic', color: C.charcoal, lineHeight: 1.5, marginTop: '3vh' }}>
          Your answers determine everything we show you next.
        </div>
      </div>

      {/* Right side — four questions */}
      <div className="absolute right-[4vw] top-[7vh] bottom-[7vh]" style={{ width: '52vw', display: 'flex', flexDirection: 'column', gap: '2.2vh' }}>
        {[
          ['01', 'What\'s your current close rate on estimates?'],
          ['02', 'How fast does your team respond to a new inbound lead?'],
          ['03', 'When did you last follow up on a quote from 30 days ago?'],
          ['04', 'How many hours a week do you spend on things your team should be handling?'],
        ].map(([num, q]) => (
          <div key={num} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5vw', padding: '2.5vh 2vw', background: num === '01' || num === '03' ? C.warm : C.yellow, border: `3px solid ${C.text}`, boxShadow: `5px 5px 0 0 ${C.text}` }}>
            <div style={{ minWidth: '3.5vw', height: '3.5vw', background: C.charcoal, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3vw', fontWeight: 700, color: C.lime, flexShrink: 0 }}>
              {num}
            </div>
            <div style={{ fontSize: '1.7vw', fontWeight: 600, color: C.text, lineHeight: 1.35 }}>
              {q}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>04 / 15</span>
      </div>
    </div>
  );
}
