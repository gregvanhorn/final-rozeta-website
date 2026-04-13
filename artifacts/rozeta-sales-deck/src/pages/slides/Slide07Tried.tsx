const C = { bg: '#D9D5CC', yellow: '#FFD100', lime: '#C5E24A', blue: '#4169E1', charcoal: '#2D2D2D', text: '#0D0D0D', warm: '#F5F2ED' } as const;

const rows = [
  ['Hire someone to follow up', 'They inherited the broken process'],
  ['Buy a CRM', 'Nobody used it consistently'],
  ['Hire a marketing agency', 'Drove leads into a leaky bucket'],
  ['Set manual reminders', 'Fell apart when things got busy'],
  ['Try to handle it yourself', 'You\'re already the bottleneck'],
] as const;

export default function Slide07Tried() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: C.bg, boxShadow: `inset 0 0 0 3px ${C.blue}`, fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* Headline — left aligned */}
      <div className="absolute left-[5vw] top-[7vh]" style={{ width: '55vw' }}>
        <div style={{ fontSize: '1.3vw', fontWeight: 700, letterSpacing: '0.14em', color: C.blue, textTransform: 'uppercase', marginBottom: '2vh' }}>
          The Problem Isn't Effort
        </div>
        <div style={{ fontSize: '4.5vw', fontWeight: 700, lineHeight: 1.0, color: C.text, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          YOU'VE TRIED TO FIX THIS.
          HERE'S WHY IT DIDN'T STICK.
        </div>
        <div style={{ width: '9vw', height: '4px', background: C.blue, margin: '2.5vh 0' }} />
      </div>

      {/* Table */}
      <div className="absolute left-[5vw] right-[4vw]" style={{ top: '36vh', bottom: '7vh' }}>
        {/* Header row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: C.charcoal, border: `3px solid ${C.text}`, marginBottom: '1.2vh' }}>
          <div style={{ padding: '1.4vh 1.5vw', fontSize: '1.3vw', fontWeight: 700, color: C.warm, textTransform: 'uppercase', letterSpacing: '0.08em', borderRight: `2px solid ${C.warm}` }}>
            What operators typically try
          </div>
          <div style={{ padding: '1.4vh 1.5vw', fontSize: '1.3vw', fontWeight: 700, color: C.lime, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Why it doesn't stick
          </div>
        </div>

        {/* Data rows */}
        {rows.map(([tried, why], i) => (
          <div key={tried} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: i % 2 === 0 ? C.warm : 'transparent', border: `2px solid ${C.text}`, marginBottom: '0.8vh' }}>
            <div style={{ padding: '1.2vh 1.5vw', fontSize: '1.45vw', fontWeight: 600, color: C.text, borderRight: `2px solid ${C.text}` }}>
              {tried}
            </div>
            <div style={{ padding: '1.2vh 1.5vw', fontSize: '1.45vw', fontWeight: 400, color: C.text }}>
              {why}
            </div>
          </div>
        ))}

        {/* Bottom callout */}
        <div style={{ marginTop: '2vh', background: C.yellow, border: `3px solid ${C.text}`, padding: '1.5vh 1.5vw', boxShadow: `5px 5px 0 0 ${C.text}` }}>
          <div style={{ fontSize: '1.6vw', fontWeight: 700, color: C.text }}>
            The problem isn't effort. It's infrastructure.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-[4vw]" style={{ height: '5.5vh', borderTop: `2px solid ${C.blue}` }}>
        <span style={{ fontSize: '1.2vw', fontWeight: 700, letterSpacing: '0.12em', color: C.text, textTransform: 'uppercase' }}>Rozeta Labs</span>
        <span style={{ fontSize: '1.2vw', color: C.text }}>07 / 15</span>
      </div>
    </div>
  );
}
