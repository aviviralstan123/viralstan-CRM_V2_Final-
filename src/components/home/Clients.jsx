const clients = ['MetaVerse','CryptoPay','ZenithCloud','FutureWave','AuraSoft','NovaTech','DataPulse','StellarAI']

export default function Clients() {
  return (
    <section className="py-10 overflow-hidden" style={{ background:'#F4F6FF', borderBottom:'1px solid #e2e8f0' }}>
      <div className="relative">

        {/* Left fade */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-32 z-10" 
          style={{ background:'linear-gradient(90deg,#F4F6FF,transparent)' }}
        />

        {/* Right fade */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-32 z-10" 
          style={{ background:'linear-gradient(270deg,#F4F6FF,transparent)' }}
        />

        <div className="flex gap-12 whitespace-nowrap" style={{ animation:'marquee 20s linear infinite' }}>
          {[...clients,...clients].map((c,i) => (
            <span 
              key={i} 
              className="inline-flex items-center text-sm font-semibold tracking-widest px-6 py-2 rounded-full"
              style={{
                color:'#475569',
                fontFamily:'Syne,sans-serif',
                letterSpacing:'0.1em',
                border:'1px solid #e2e8f0',
                background:'#ffffff'
              }}
            >
              {c}
            </span>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}