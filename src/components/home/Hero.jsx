import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"


export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
        radial-gradient(141% 141% at 100% 0%, #DDE9FF 0%, rgba(221,233,255,0) 60%),
        radial-gradient(141% 141% at 0% 100%, #EBF1FF 0%, rgba(235,241,255,0) 60%),
        #F4F6FF
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center w-full">

        {/* LEFT CONTENT */}

        <div>

          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#D9E3FF] text-blue-700 px-4 py-1 rounded-full mb-6">
            DIGITAL INNOVATION
          </span>

          <h1 className="text-5xl md:text-6xl font-display leading-tight text-[#1E293B] mb-6">

            Architects of <br />

            <span className="bg-gradient-to-r from-blue-600 font-display to-purple-600 bg-clip-text text-transparent">
              Digital Domination.
            </span>

          </h1>

          <p className="text-slate-600 max-w-md mb-8 text-lg font-sans">
            We combine high-chroma creative precision with technical engineering
            to craft experiences that aren't just seen—they're felt.
          </p>

          <div className="flex gap-4">

            <button className="px-7 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
              Launch Project
            </button>

            <button className="px-7 py-3 rounded-xl bg-white border border-gray-200 text-slate-700">
              Our Process
            </button>

          </div>

        </div>

        {/* RIGHT SIDE CARDS */}

        <div className="relative h-[520px] w-full hidden md:block">

          {/* TOP CARD */}

          <div className="absolute top-0 right-0 w-[220px] bg-white rounded-2xl shadow-xl p-4 z-10">

            <img
              src={card1}
              className="w-full h-[120px] object-cover rounded-lg"
            />

          </div>

          {/* MIDDLE CARD */}

          <div className="absolute top-24 right-16 w-[260px] bg-white rounded-2xl shadow-xl p-4 z-20">

            <img
              src={card2}
              className="w-full h-[140px] object-cover rounded-lg mb-3"
            />

            <p className="text-blue-600 font-semibold text-sm ml-32">
              +240% Growth
            </p>

          </div>

          {/* FRONT CARD */}

          <div className="absolute bottom-10 left-16 w-[260px] bg-white rounded-2xl shadow-xl p-4 z-30">

            <div className="flex items-center gap-2 mb-3">

              <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
                ✨
              </div>

              <div>

                <p className="text-sm font-semibold text-slate-800">
                  AI Generation
                </p>

                <p className="text-xs text-gray-500">
                  Active processing...
                </p>

              </div>

            </div>

            <img
              src={card3}
              className="w-full h-[160px] object-cover rounded-lg"
            />

          </div>

        </div>

      </div>
    </section>
  )
}