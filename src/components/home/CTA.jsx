export default function CTA() {
  return (
    <section className="px-6 py-20 bg-[#F4F6FF]">

      <div className="max-w-7xl mx-auto">

        {/* CTA BOX */}
        <div className="rounded-[60px] py-28 px-6 text-center
        bg-[#0F172A]">

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Go Viral?
          </h2>

          {/* Text */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Let's build the future of your brand together. High-fidelity
            results, zero compromises.
          </p>

          {/* Button */}
          <button className="px-10 py-4 rounded-xl text-white font-semibold
          bg-gradient-to-r from-blue-600 to-purple-600
          hover:scale-105 transition-all duration-300">

            Start Your Project

          </button>

        </div>

      </div>

    </section>
  )
}