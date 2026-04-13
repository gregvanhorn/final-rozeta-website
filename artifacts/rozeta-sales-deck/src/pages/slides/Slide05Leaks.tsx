const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

const cards = [
  { num: '01', title: 'Speed-to-Lead Failure', desc: '35% of leads never get a callback in the first hour.', bg: C.lime, textColor: C.text },
  { num: '02', title: 'Estimate Graveyard', desc: '$50K–$150K in open quotes dying in silence.', bg: C.warm, textColor: C.text },
  { num: '03', title: 'No-Show & Cancellation Bleed', desc: 'Booked jobs ghosting with zero recovery system.', bg: C.charcoal, textColor: C.warm },
  { num: '04', title: 'Owner as Bottleneck', desc: 'Every decision flows through one person.', bg: C.warm, textColor: C.text },
  { num: '05', title: 'Invisible Pipeline', desc: 'No close rate. No data. Running on gut feel.', bg: C.charcoal, textColor: C.warm },
  { num: '06', title: 'Zero Retention Engine', desc: 'Completed jobs that never become reviews or referrals.', bg: C.lime, textColor: C.text },
] as const;

export default function Slide05Leaks() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Left headline */}
      <div className="absolute left-[5vw] top-[7vh]" style={{ width: '32vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2vh' }}>
          The 6 Revenue Leaks
        </div>
        <div style={{ fontSize: '4.5vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          WHERE
          YOUR
          MONEY
          WALKS
          OUT THE
          DOOR.
        </div>
        <div style={{ width: '7vw', height: '4px', background: C.blue, margin: '2vh 0' }} />
        <div style={{ fontSize: '1.5vw', fontWeight: 500, color: C.charcoal, lineHeight: 1.4 }}>
          Diagnosis only. No solutions yet. Just reality.
        </div>
      </div>

      {/* Right — 3×2 card grid */}
      <div className="absolute right-[3vw] top-[6vh] bottom-[6.5vh]" style={{ width: '60vw', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '1.5vh 1.5vw' }}>
        {cards.map((card) => (
          <div key={card.num} style={{ background: card.bg, border: `3px solid ${C.text}`, boxShadow: `4px 4px 0 0 ${C.text}`, padding: '1.8vh 1.2vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ width: '2.8vw', height: '2.8vw', background: card.textColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1vw', fontWeight: 700, color: card.bg, marginBottom: '1.2vh' }}>
              {card.num}
            </div>
            <div>
              <div style={{ fontSize: '1.4vw', fontWeight: 700, color: card.textColor, lineHeight: 1.2, marginBottom: '0.8vh' }}>
                {card.title}
              </div>
              <div style={{ fontSize: '1.2vw', fontWeight: 400, color: card.textColor, lineHeight: 1.4, opacity: card.textColor === C.warm ? 0.85 : 0.75 }}>
                {card.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>05 / 15</span>
      </div>
    </div>
  );
}
