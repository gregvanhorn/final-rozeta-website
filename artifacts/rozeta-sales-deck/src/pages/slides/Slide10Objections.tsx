const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

const objections = [
  { label: '"We already have a CRM."', answer: 'We build on top of it. The problem isn\'t the tool — it\'s that nobody uses it consistently. We automate the consistency.' },
  { label: '"We\'ve tried agencies before."', answer: 'Agencies drive traffic. We fix what happens after. Different category entirely.' },
  { label: '"How fast will we see results?"', answer: 'Most clients see measurable recovery in the first 30 days. First system is live in 14 days.' },
  { label: '"What if it doesn\'t work?"', answer: 'See the next slide.' },
  { label: '"Our team won\'t adopt new technology."', answer: 'Your team doesn\'t use it. It runs without them. Nothing changes in their daily process.' },
] as const;

export default function Slide10Objections() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Left headline */}
      <div className="absolute left-[5vw] top-[7vh]" style={{ width: '32vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2vh' }}>
          Before You Ask
        </div>
        <div style={{ fontSize: '4.5vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          WHAT WE
          HEAR
          MOST AT
          THIS
          POINT.
        </div>
        <div style={{ width: '7vw', height: '4px', background: C.blue, margin: '2vh 0' }} />
      </div>

      {/* Right — five objection blocks */}
      <div className="absolute right-[4vw] top-[6vh] bottom-[6.5vh]" style={{ width: '60vw', display: 'flex', flexDirection: 'column', gap: '1.3vh' }}>
        {objections.map((obj, i) => (
          <div key={i} style={{ display: 'flex', gap: '1.5vw', alignItems: 'stretch', border: `2px solid ${C.text}`, background: i % 2 === 0 ? C.warm : 'transparent' }}>
            <div style={{ minWidth: '18vw', background: C.charcoal, padding: '1.2vh 1.2vw', display: 'flex', alignItems: 'center' }}>
              <div style={{ fontSize: '1.25vw', fontWeight: 700, color: C.lime, lineHeight: 1.3 }}>{obj.label}</div>
            </div>
            <div style={{ flex: 1, padding: '1.2vh 1.2vw', display: 'flex', alignItems: 'center' }}>
              <div style={{ fontSize: '1.4vw', fontWeight: 400, color: C.text, lineHeight: 1.45 }}>{obj.answer}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>10 / 15</span>
      </div>
    </div>
  );
}
