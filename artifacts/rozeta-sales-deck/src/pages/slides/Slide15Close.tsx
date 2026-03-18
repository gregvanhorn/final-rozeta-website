const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

export default function Slide15Close() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Left content */}
      <div className="absolute left-[5vw] top-[7vh]" style={{ width: '48vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2.5vh' }}>
          Next Steps
        </div>
        <div style={{ fontSize: '4.8vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          THE QUESTION
          ISN'T WHETHER
          YOU HAVE A
          LEAK.
        </div>
        <div style={{ width: '8vw', height: '4px', background: C.blue, margin: '2.5vh 0' }} />
        <div style={{ fontSize: '1.65vw', fontWeight: 400, fontStyle: 'italic', color: C.charcoal, lineHeight: 1.5, marginBottom: '3vh' }}>
          You just told us you do. The question is how much longer you want it to keep draining.
        </div>
        <div style={{ display: 'inline-block', background: C.yellow, border: `4px solid ${C.text}`, padding: '1.6vh 3vw', fontSize: '1.4vw', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.text, boxShadow: `6px 6px 0 0 ${C.text}` }}>
          Let's Build Your First System
        </div>
      </div>

      {/* Right — three next steps */}
      <div className="absolute right-[4vw] top-[7vh] bottom-[7vh]" style={{ width: '43vw', display: 'flex', flexDirection: 'column', gap: '2.5vh' }}>
        {[
          { num: '1', bold: 'Say yes today.', reg: 'Intake form in your inbox within the hour.' },
          { num: '2', bold: 'Kickoff this week.', reg: '45 minutes. We map your first system.' },
          { num: '3', bold: 'Live in 14 days.', reg: 'Revenue Recovery System is running.' },
        ].map((step) => (
          <div key={step.num} style={{ flex: 1, display: 'flex', gap: '1.5vw', alignItems: 'center', background: C.warm, border: `3px solid ${C.text}`, boxShadow: `5px 5px 0 0 ${C.text}`, padding: '2vh 2vw' }}>
            <div style={{ minWidth: '4.5vw', height: '4.5vw', background: C.lime, border: `3px solid ${C.text}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2vw', fontWeight: 700, color: C.text, flexShrink: 0 }}>
              {step.num}
            </div>
            <div>
              <div style={{ fontSize: '1.8vw', fontWeight: 700, color: C.text }}>{step.bold}</div>
              <div style={{ fontSize: '1.4vw', fontWeight: 400, color: C.charcoal, marginTop: '0.3vh' }}>{step.reg}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom right — domain */}
      <div className="absolute" style={{ bottom: '7.5vh', right: '4.5vw', fontSize: '1.2vw', fontWeight: 500, color: C.charcoal }}>
        rozeta.ai
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>15 / 15</span>
      </div>
    </div>
  );
}
