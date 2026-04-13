const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

export default function Slide12Bonuses() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Headline */}
      <div className="absolute left-[5vw] top-[7vh]" style={{ width: '90vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2vh' }}>
          When You Start Today
        </div>
        <div style={{ fontSize: '4.5vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          THREE BONUSES. INCLUDED AT NO CHARGE.
        </div>
        <div style={{ width: '9vw', height: '4px', background: C.blue, margin: '2.5vh 0' }} />
      </div>

      {/* Three columns */}
      <div className="absolute left-[5vw] right-[4vw]" style={{ top: '38vh', bottom: '7vh', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2vw' }}>

        {/* Card 1 */}
        <div style={{ border: `3px solid ${C.text}`, boxShadow: `6px 6px 0 0 ${C.text}`, display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: C.lime, padding: '1.8vh 1.5vw', borderBottom: `3px solid ${C.text}` }}>
            <div style={{ fontSize: '1.1vw', fontWeight: 700, color: C.text, letterSpacing: '0.1em', textTransform: 'uppercase' }}>BONUS 01</div>
            <div style={{ fontSize: '1.5vw', fontWeight: 700, color: C.text, marginTop: '0.5vh' }}>90-Day Revenue Leak Audit</div>
          </div>
          <div style={{ flex: 1, background: C.warm, padding: '1.8vh 1.5vw' }}>
            <div style={{ fontSize: '1.3vw', fontWeight: 400, color: C.text, lineHeight: 1.5 }}>
              Before we build anything, we run a full diagnostic of your pipeline — every channel, every drop-off. Most clients find a leak they had no idea existed.
            </div>
          </div>
          <div style={{ background: C.lime, padding: '1.2vh 1.5vw', borderTop: `3px solid ${C.text}` }}>
            <div style={{ fontSize: '1.25vw', fontWeight: 700, color: C.text }}>✓ $2,000 value — included free</div>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{ border: `3px solid ${C.text}`, boxShadow: `6px 6px 0 0 ${C.text}`, display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: C.charcoal, padding: '1.8vh 1.5vw', borderBottom: `3px solid ${C.text}` }}>
            <div style={{ fontSize: '1.1vw', fontWeight: 700, color: C.lime, letterSpacing: '0.1em', textTransform: 'uppercase' }}>BONUS 02</div>
            <div style={{ fontSize: '1.5vw', fontWeight: 700, color: C.warm, marginTop: '0.5vh' }}>The SMB Automation Playbook</div>
          </div>
          <div style={{ flex: 1, background: C.warm, padding: '1.8vh 1.5vw' }}>
            <div style={{ fontSize: '1.3vw', fontWeight: 400, color: C.text, lineHeight: 1.5 }}>
              20 highest-ROI automation plays for home services operators. Pre-built templates, trigger logic, and frameworks built from real engagements — not theory.
            </div>
          </div>
          <div style={{ background: C.charcoal, padding: '1.2vh 1.5vw', borderTop: `3px solid ${C.text}` }}>
            <div style={{ fontSize: '1.25vw', fontWeight: 700, color: C.lime }}>✓ $900 value — included free</div>
          </div>
        </div>

        {/* Card 3 */}
        <div style={{ border: `3px solid ${C.text}`, boxShadow: `6px 6px 0 0 ${C.text}`, display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: C.blue, padding: '1.8vh 1.5vw', borderBottom: `3px solid ${C.text}` }}>
            <div style={{ fontSize: '1.1vw', fontWeight: 700, color: C.warm, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.75 }}>BONUS 03</div>
            <div style={{ fontSize: '1.5vw', fontWeight: 700, color: C.warm, marginTop: '0.5vh' }}>Priority Onboarding — Live in 14 Days</div>
          </div>
          <div style={{ flex: 1, background: C.warm, padding: '1.8vh 1.5vw' }}>
            <div style={{ fontSize: '1.3vw', fontWeight: 400, color: C.text, lineHeight: 1.5 }}>
              Your first system is built and running within 14 days of kickoff — or month one is free. Most agencies take 60–90 days. We don't.
            </div>
          </div>
          <div style={{ background: C.blue, padding: '1.2vh 1.5vw', borderTop: `3px solid ${C.text}` }}>
            <div style={{ fontSize: '1.25vw', fontWeight: 700, color: C.warm }}>✓ $1,200 value — included free</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>12 / 15</span>
      </div>
    </div>
  );
}
