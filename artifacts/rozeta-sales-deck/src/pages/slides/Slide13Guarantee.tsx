const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

const cards = [
  { name: 'Jobs or Free', desc: '2+ additional booked jobs in 30 days — or we keep working at no charge until you get them.', bg: C.lime, textColor: C.text },
  { name: 'Live in 14 Days', desc: 'First system running in 14 calendar days of kickoff — or month one is free.', bg: C.charcoal, textColor: C.warm },
  { name: 'Month-to-Month', desc: 'No contracts. No lock-in. Cancel with 30 days notice at any time, for any reason.', bg: C.warm, textColor: C.text },
  { name: 'We Find the Leak', desc: 'We identify one measurable revenue leak in the first session — or it costs you nothing.', bg: C.blue, textColor: C.warm },
] as const;

export default function Slide13Guarantee() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Headline */}
      <div className="absolute left-[5vw] top-[7vh]" style={{ width: '90vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2vh' }}>
          Our Guarantees
        </div>
        <div style={{ fontSize: '4.5vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          IF WE DON'T PERFORM, YOU DON'T PAY.
        </div>
        <div style={{ width: '9vw', height: '4px', background: C.blue, margin: '2.5vh 0' }} />
      </div>

      {/* 2×2 grid */}
      <div className="absolute left-[5vw] right-[4vw]" style={{ top: '38vh', bottom: '7vh', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '2vh 2.5vw' }}>
        {cards.map((card) => (
          <div key={card.name} style={{ background: card.bg, border: `3px solid ${C.text}`, boxShadow: `6px 6px 0 0 ${C.text}`, padding: '2.5vh 2vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1vw', marginBottom: '1.5vh' }}>
              <div style={{ width: '3.5vw', height: '3.5vw', background: card.textColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6vw', flexShrink: 0 }}>
                <span style={{ color: card.bg, fontWeight: 700 }}>✓</span>
              </div>
              <div style={{ fontSize: '1.9vw', fontWeight: 700, color: card.textColor }}>{card.name}</div>
            </div>
            <div style={{ fontSize: '1.4vw', fontWeight: 400, color: card.textColor, lineHeight: 1.5, opacity: card.textColor === C.warm ? 0.85 : 0.75 }}>
              {card.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>13 / 15</span>
      </div>
    </div>
  );
}
