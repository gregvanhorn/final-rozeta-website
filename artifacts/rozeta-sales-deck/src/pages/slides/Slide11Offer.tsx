const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

const bullets = [
  'All 5 systems custom-built for your business',
  'Ongoing maintenance and optimization every month',
  'Monthly performance report',
  'Direct Slack access — no account managers',
  'Cancel any time — 30 days notice',
] as const;

const compare = [
  ['Operations Manager', '$6,500/mo'],
  ['Marketing Agency', '$3,000/mo'],
  ['CRM Consultant', '$2,000/mo'],
  ['AI Vendor Stack', '$1,800/mo'],
] as const;

export default function Slide11Offer() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Left column */}
      <div className="absolute left-[5vw] top-[6vh] bottom-[6.5vh]" style={{ width: '43vw', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '1.5vh' }}>
          The Offer
        </div>
        <div style={{ fontSize: '3.8vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '1.5vh' }}>
          ONE PRICE.
          EVERYTHING INCLUDED.
          NO CONTRACT.
        </div>
        <div style={{ width: '7vw', height: '4px', background: C.blue, marginBottom: '2.5vh' }} />

        {/* Price box */}
        <div style={{ background: C.yellow, border: `4px solid ${C.text}`, boxShadow: `8px 8px 0 0 ${C.text}`, padding: '2.5vh 2.5vw', marginBottom: '2.5vh', display: 'inline-flex', alignItems: 'baseline', gap: '0.5vw' }}>
          <div style={{ fontSize: '7vw', fontWeight: 700, color: C.text, lineHeight: 1 }}>$2,500</div>
          <div style={{ fontSize: '2vw', fontWeight: 600, color: C.text }}>/month</div>
        </div>

        {/* Bullets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
          {bullets.map((b) => (
            <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
              <div style={{ width: '1vw', height: '3px', background: C.blue, flexShrink: 0 }} />
              <div style={{ fontSize: '1.4vw', fontWeight: 500, color: C.text }}>{b}</div>
            </div>
          ))}
        </div>
      </div>

      {/* VS badge */}
      <div className="absolute" style={{ left: '48.5vw', top: '50%', transform: 'translateY(-50%)', width: '4vw', height: '4vw', borderRadius: '50%', background: C.blue, border: `3px solid ${C.text}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3vw', fontWeight: 700, color: C.warm, zIndex: 10 }}>
        VS
      </div>

      {/* Right — charcoal comparison panel */}
      <div className="absolute right-[4vw] top-[6vh] bottom-[6.5vh]" style={{ width: '42vw', background: C.charcoal, border: `4px solid ${C.text}`, boxShadow: `8px 8px 0 0 ${C.text}`, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '2vh 2vw', borderBottom: `2px solid rgba(255,255,255,0.15)` }}>
          <div style={{ fontSize: '1.3vw', fontWeight: 700, color: C.warm, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            What you'd pay separately
          </div>
        </div>
        <div style={{ flex: 1, padding: '1.5vh 2vw', display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
          {compare.map(([role, cost]) => (
            <div key={role} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.2vh', borderBottom: `1px solid rgba(255,255,255,0.1)` }}>
              <div style={{ fontSize: '1.45vw', fontWeight: 500, color: C.warm }}>{role}</div>
              <div style={{ fontSize: '1.45vw', fontWeight: 700, color: C.warm }}>{cost}</div>
            </div>
          ))}
        </div>
        {/* Lime bar */}
        <div style={{ background: C.lime, padding: '2vh 2vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.3vw', fontWeight: 700, color: C.text, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Total if hired separately</div>
          <div style={{ fontSize: '2vw', fontWeight: 700, color: C.text }}>$13,300+/mo</div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>11 / 15</span>
      </div>
    </div>
  );
}
