const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

export default function Slide02Agenda() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Left column */}
      <div className="absolute left-[5vw] top-[6vh]" style={{ width: '42vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2vh' }}>
          Today's Session
        </div>
        <div style={{ fontSize: '5vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          WHAT WE'LL
          COVER.
        </div>
        <div style={{ width: '8vw', height: '4px', background: C.blue, margin: '2vh 0' }} />
        <div style={{ fontSize: '1.6vw', fontWeight: 500, color: C.charcoal, lineHeight: 1.5 }}>
          13 topics. One conversation.
          Everything you need to make a decision today.
        </div>

        <div style={{ marginTop: '4vh', background: C.yellow, border: `3px solid ${C.text}`, padding: '2vh 2vw', boxShadow: `6px 6px 0 0 ${C.text}` }}>
          <div style={{ fontSize: '1.3vw', fontWeight: 700, color: C.text }}>Duration: 45–60 minutes</div>
          <div style={{ fontSize: '1.3vw', fontWeight: 500, color: C.text }}>No slides left behind — you keep everything.</div>
        </div>
      </div>

      {/* Right column — agenda items */}
      <div className="absolute right-[4vw] top-[6vh] bottom-[7vh]" style={{ width: '48vw', display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
        {[
          ['01', 'The Money Leak', 'Where you\'re losing revenue right now'],
          ['02', 'Four Diagnostic Questions', 'Your answers shape everything that follows'],
          ['03', 'Six Revenue Leaks', 'The six ways SMBs hemorrhage revenue'],
          ['04', 'Put a Number on It', 'Your personal revenue leak calculator'],
          ['05', 'What You\'ve Tried', 'Why previous fixes didn\'t stick'],
          ['06', 'Life After Rozeta', 'What the business looks like when it\'s fixed'],
          ['07', 'The Blueprint', 'Five systems, all running without you'],
          ['08', 'Common Objections', 'Answered before you ask them'],
          ['09', 'The Offer', 'One price, everything included, no contract'],
          ['10', 'The Bonuses', 'Three extras included at no charge'],
          ['11', 'Our Guarantees', 'If we don\'t perform, you don\'t pay'],
          ['12', 'What Comes Next', 'Beyond month one'],
          ['13', 'Next Steps', 'How to get started today'],
        ].map(([num, title, sub]) => (
          <div key={num} style={{ display: 'flex', alignItems: 'center', gap: '1.2vw', padding: '0.8vh 1vw', borderBottom: `1px solid rgba(13,13,13,0.15)` }}>
            <div style={{ minWidth: '2.8vw', height: '2.8vw', background: num === '01' ? C.yellow : 'transparent', border: `2px solid ${C.text}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1vw', fontWeight: 700, color: C.text, flexShrink: 0 }}>
              {num}
            </div>
            <div>
              <div style={{ fontSize: '1.4vw', fontWeight: 700, color: C.text, lineHeight: 1.2 }}>{title}</div>
              <div style={{ fontSize: '1.1vw', fontWeight: 400, color: C.charcoal }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>02 / 15</span>
      </div>
    </div>
  );
}
