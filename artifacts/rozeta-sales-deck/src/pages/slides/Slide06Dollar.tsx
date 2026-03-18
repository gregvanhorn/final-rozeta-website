const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

const rows = [
  ['Leads per month', ''],
  ['Current close rate', '  %'],
  ['Average job value', '$  '],
  ['Revenue leaking monthly', '$  '],
  ['Revenue leaking annually', '$  '],
] as const;

export default function Slide06Dollar() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Left headline */}
      <div className="absolute left-[5vw] top-[7vh]" style={{ width: '36vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2vh' }}>
          Here's What That Costs You
        </div>
        <div style={{ fontSize: '5vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          PUT A
          NUMBER
          ON IT.
        </div>
        <div style={{ width: '8vw', height: '4px', background: C.blue, margin: '2.5vh 0' }} />
        <div style={{ fontSize: '1.6vw', fontWeight: 400, fontStyle: 'italic', color: C.charcoal, lineHeight: 1.5 }}>
          Most operators discover $8,000–$22,000/month in recoverable revenue in this exercise.
        </div>

        <div style={{ marginTop: '3vh', background: C.yellow, border: `3px solid ${C.text}`, padding: '1.5vh 1.5vw', boxShadow: `5px 5px 0 0 ${C.text}` }}>
          <div style={{ fontSize: '1.3vw', fontWeight: 700, color: C.text }}>Say the numbers out loud.</div>
          <div style={{ fontSize: '1.2vw', fontWeight: 400, color: C.text }}>They become the anchor for everything that follows.</div>
        </div>
      </div>

      {/* Right — fill-in table */}
      <div className="absolute right-[4vw] top-[7vh] bottom-[7vh]" style={{ width: '52vw', display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', background: C.charcoal, padding: '1.5vh 2vw', border: `3px solid ${C.text}` }}>
          <div style={{ fontSize: '1.3vw', fontWeight: 700, color: C.warm, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Metric</div>
          <div style={{ fontSize: '1.3vw', fontWeight: 700, color: C.lime, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Your Number</div>
        </div>
        {rows.map(([label, suffix], i) => (
          <div key={label} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: i % 2 === 0 ? C.warm : 'transparent', border: `2px solid ${C.text}`, padding: '2vh 2vw', alignItems: 'center' }}>
            <div style={{ fontSize: '1.55vw', fontWeight: 600, color: C.text }}>{label}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5vw' }}>
              <div style={{ flex: 1, borderBottom: `3px solid ${C.text}`, height: '3.5vh' }} />
              <span style={{ fontSize: '1.3vw', fontWeight: 700, color: C.text }}>{suffix}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>06 / 15</span>
      </div>
    </div>
  );
}
