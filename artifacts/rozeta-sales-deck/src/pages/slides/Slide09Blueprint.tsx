const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

const systems = [
  { num: '01', name: '60-Second Response Engine', tag: 'Eliminates: Speed-to-Lead Failure', bg: C.lime, textColor: C.text },
  { num: '02', name: 'Dead Estimate Reactivation Sequence', tag: 'Eliminates: Estimate Graveyard', bg: C.warm, textColor: C.text },
  { num: '03', name: 'No-Show Recovery Protocol', tag: 'Eliminates: Cancellation Bleed', bg: C.charcoal, textColor: C.warm },
  { num: '04', name: 'Owner Liberation System', tag: 'Eliminates: Owner Bottleneck', bg: C.warm, textColor: C.text },
  { num: '05', name: 'Repeat Revenue Reactivation Campaign', tag: 'Eliminates: Zero Retention', bg: C.blue, textColor: C.warm },
] as const;

export default function Slide09Blueprint() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Left — headline */}
      <div className="absolute left-[5vw] top-[7vh]" style={{ width: '35vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2vh' }}>
          The Revenue Recovery Blueprint
        </div>
        <div style={{ fontSize: '4.5vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          FIVE
          SYSTEMS.
          ALL
          RUNNING
          WITHOUT
          YOU.
        </div>
        <div style={{ width: '7vw', height: '4px', background: C.blue, margin: '2vh 0' }} />
        <div style={{ fontSize: '1.45vw', fontWeight: 400, fontStyle: 'italic', color: C.charcoal, lineHeight: 1.4 }}>
          Custom-built for your business. Live in 14 days.
        </div>
      </div>

      {/* Right — five stacked rows */}
      <div className="absolute right-[4vw] top-[7vh] bottom-[7vh]" style={{ width: '57vw', display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
        {systems.map((sys) => (
          <div key={sys.num} style={{ flex: 1, background: sys.bg, border: `3px solid ${C.text}`, boxShadow: `4px 4px 0 0 ${C.text}`, display: 'flex', alignItems: 'center', padding: '0 1.5vw', gap: '1.5vw' }}>
            <div style={{ minWidth: '3.5vw', height: '3.5vw', background: sys.textColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2vw', fontWeight: 700, color: sys.bg, flexShrink: 0 }}>
              {sys.num}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '1.7vw', fontWeight: 700, color: sys.textColor, lineHeight: 1.2 }}>{sys.name}</div>
              <div style={{ fontSize: '1.2vw', fontWeight: 400, fontStyle: 'italic', color: sys.textColor, opacity: sys.textColor === C.warm ? 0.7 : 0.65, marginTop: '0.4vh' }}>{sys.tag}</div>
            </div>
            <div style={{ fontSize: '1.8vw', fontWeight: 700, color: sys.textColor, opacity: sys.textColor === C.warm ? 0.5 : 0.35 }}>→</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>09 / 15</span>
      </div>
    </div>
  );
}
