const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

const blocks = [
  { bg: C.lime, textColor: C.text, copy: 'A lead comes in at 11pm. By 11:00:47 they have a response. Your competitor never had a chance.' },
  { bg: C.charcoal, textColor: C.warm, copy: 'It\'s been 32 days since you sent that $18,000 estimate. The system has touched that prospect four times. They just replied.' },
  { bg: C.warm, textColor: C.text, copy: 'You left at 4:30. Dispatch handled the afternoon. Nobody called you.' },
  { bg: C.yellow, textColor: C.text, copy: 'You finished 11 jobs last week. 8 left a Google review. You didn\'t ask a single one of them.' },
] as const;

export default function Slide08LifeAfter() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Headline */}
      <div className="absolute left-[5vw] top-[7vh]" style={{ width: '90vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2vh' }}>
          What Changes
        </div>
        <div style={{ fontSize: '4.5vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          WHAT YOUR BUSINESS LOOKS LIKE WHEN THE LEAKS ARE PLUGGED.
        </div>
        <div style={{ width: '9vw', height: '4px', background: C.blue, margin: '2.5vh 0' }} />
      </div>

      {/* 2×2 grid of scenario blocks */}
      <div className="absolute left-[5vw] right-[4vw]" style={{ top: '40vh', bottom: '7vh', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '1.5vh 2vw' }}>
        {blocks.map((block, i) => (
          <div key={i} style={{ background: block.bg, border: `3px solid ${C.text}`, boxShadow: `5px 5px 0 0 ${C.text}`, padding: '2.5vh 2vw', display: 'flex', alignItems: 'flex-start', gap: '1.2vw' }}>
            <div style={{ minWidth: '0.5vw', height: '0.5vw', marginTop: '1vh', background: C.blue, flexShrink: 0 }} />
            <div style={{ fontSize: '1.55vw', fontWeight: 500, color: block.textColor, lineHeight: 1.5 }}>
              {block.copy}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>08 / 15</span>
      </div>
    </div>
  );
}
