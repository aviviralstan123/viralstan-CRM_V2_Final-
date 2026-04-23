import ai from "../../assets/ai.png"
import design from "../../assets/design.png"
import web3 from "../../assets/web3.png"
const posts = [
  {
    tag: "AI & MACHINE LEARNING",
    title: "The Future of Generative UI",
    excerpt:
      "Exploring how AI is redefining the way we interact with digital interfaces in 2024.",
    img:ai
  },
  {
    tag: "DESIGN SYSTEMS",
    title: "Liquid Motion Principles",
    excerpt:
      "Why static designs are dead and how fluidity creates more engaging user experiences.",
    img: design
  },
  {
    tag: "WEB3",
    title: "Decentralized Experiences",
    excerpt:
      "Mapping the shift from platform-owned to user-owned digital assets and identities.",
    img: web3
  }
];

export default function IntelligenceHub() {
  return (
    <section className="py-28 bg-[#eef0f6]">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-16">
          Intelligence Hub
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer">

              {/* Image */}
              <div className="rounded-3xl overflow-hidden mb-5">
                <img
                  src={post.img}
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Tag */}
              <p className="text-sm font-semibold tracking-wide text-blue-600 mb-2">
                {post.tag}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 leading-relaxed text-sm">
                {post.excerpt}
              </p>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}