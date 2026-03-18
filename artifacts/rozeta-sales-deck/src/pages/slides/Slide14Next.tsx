const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

export default function Slide14Next() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Left headline */}
      <div className="absolute left-[5vw] top-[7vh]" style={{ width: '38vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2vh' }}>
          Beyond Month One
        </div>
        <div style={{ fontSize: '4.8vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          MONTH ONE
          IS THE
          FOUNDATION.
        </div>
        <div style={{ width: '7vw', height: '4px', background: C.blue, margin: '2.5vh 0' }} />
        <div style={{ fontSize: '1.5vw', fontWeight: 400, color: C.charcoal, lineHeight: 1.55 }}>
          Once the Revenue Recovery Blueprint is running, most clients start asking about the next layer. We're ready when you are.
        </div>
        <div style={{ marginTop: '3vh', background: C.yellow, border: `3px solid ${C.text}`, padding: '1.5vh 1.5vw', boxShadow: `5px 5px 0 0 ${C.text}` }}>
          <div style={{ fontSize: '1.3vw', fontWeight: 400, fontStyle: 'italic', color: C.text }}>
            We start every engagement at Level 1. Levels 2 and 3 are where we go once that trust is built.
          </div>
        </div>
      </div>

      {/* Right — three level blocks */}
      <div className="absolute right-[4vw] top-[7vh] bottom-[7vh]" style={{ width: '55vw', display: 'flex', flexDirection: 'column', gap: '2vh' }}>

        <div style={{ flex: 1, background: C.lime, border: `3px solid ${C.text}`, boxShadow: `5px 5px 0 0 ${C.text}`, padding: '2.5vh 2.5vw', display: 'flex', gap: '2vw', alignItems: 'center' }}>
          <div style={{ minWidth: '8vw', height: '8vw', background: C.text, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.9vw', fontWeight: 700, color: C.lime, letterSpacing: '0.1em' }}>LEVEL</div>
              <div style={{ fontSize: '2.5vw', fontWeight: 700, color: C.lime, lineHeight: 1 }}>1</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '2.2vw', fontWeight: 700, color: C.text }}>Automation</div>
            <div style={{ fontSize: '1.4vw', fontWeight: 400, color: C.text, marginTop: '0.5vh', lineHeight: 1.4 }}>Fast wins. Immediate ROI. Your business stops running on manual processes.</div>
          </div>
        </div>

        <div style={{ flex: 1, background: C.charcoal, border: `3px solid ${C.text}`, boxShadow: `5px 5px 0 0 ${C.text}`, padding: '2.5vh 2.5vw', display: 'flex', gap: '2vw', alignItems: 'center' }}>
          <div style={{ minWidth: '8vw', height: '8vw', background: C.warm, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.9vw', fontWeight: 700, color: C.charcoal, letterSpacing: '0.1em' }}>LEVEL</div>
              <div style={{ fontSize: '2.5vw', fontWeight: 700, color: C.charcoal, lineHeight: 1 }}>2</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '2.2vw', fontWeight: 700, color: C.warm }}>Intelligent Automation</div>
            <div style={{ fontSize: '1.4vw', fontWeight: 400, color: C.warm, marginTop: '0.5vh', lineHeight: 1.4, opacity: 0.8 }}>AI that reads context and responds accordingly. Personalized follow-up. Smarter decisions.</div>
          </div>
        </div>

        <div style={{ flex: 1, background: C.blue, border: `3px solid ${C.text}`, boxShadow: `5px 5px 0 0 ${C.text}`, padding: '2.5vh 2.5vw', display: 'flex', gap: '2vw', alignItems: 'center' }}>
          <div style={{ minWidth: '8vw', height: '8vw', background: C.warm, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.9vw', fontWeight: 700, color: C.blue, letterSpacing: '0.1em' }}>LEVEL</div>
              <div style={{ fontSize: '2.5vw', fontWeight: 700, color: C.blue, lineHeight: 1 }}>3</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '2.2vw', fontWeight: 700, color: C.warm }}>Autonomous Operations</div>
            <div style={{ fontSize: '1.4vw', fontWeight: 400, color: C.warm, marginTop: '0.5vh', lineHeight: 1.4, opacity: 0.8 }}>Your business runs ahead of problems. Dispatch, estimating, reporting — handled without you.</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>14 / 15</span>
      </div>
    </div>
  );
}
