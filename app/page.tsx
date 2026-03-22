import ProductGrid from "../components/ProductGrid";
import { client } from "../lib/sanity";

export default async function Home() {
  const products = await client.fetch(`*[_type == "product"]`);
  const featured = products.filter((p: any) => p.featured);

  // ✅ NEW: Latest reviews
  const reviews = await client.fetch(`
    *[_type == "review" && approved == true] 
    | order(_createdAt desc)[0...3] {
      name,
      message,
      rating,
      location
    }
  `);

  return (
    <main className="bg-[#F7F3EE] text-[#1A1A1A]">
      {/* HERO */}
      <section className="text-center md:py-24 py-12 px-6 space-y-6 max-w-4xl mx-auto">
        <h1 className="text-6xl font-serif leading-tight">
          Hand crafted. Whole hearted.
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          Handcrafted macramé bags inspired by heritage, texture, and timeless
          design. Each piece carries a story, made slowly, with intention.
        </p>
      </section>

      {/* HERO IMAGES */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
        <img
          src="/bags/7.JPG"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="/bags/2.JPG"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://i.ebayimg.com/images/g/xR8AAOSwqEtdd866/s-l400.jpg"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="/bags/5.JPG"
          className="w-full h-64 object-cover rounded-lg"
        />
      </section>

      {/* BRAND STORY */}
      <section className="py-20 px-6 text-center space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif">More Than Just a Bag</h2>

        <p className="text-gray-700 leading-relaxed">
          Each piece is carefully handcrafted using traditional techniques,
          blending culture, creativity, and craftsmanship. No two bags are ever
          the same — every knot reflects time, patience, and individuality.
        </p>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-serif mb-8 text-center">
          Featured Pieces
        </h2>

        <ProductGrid products={featured} />
      </section>

      {/* 🔥 REVIEWS */}
      <section className="px-6 py-20 bg-[#F1E8DF]">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-3xl font-serif">What People Are Saying</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r: any, i: number) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 text-left"
              >
                {/* ⭐ STARS */}
                <div className="flex text-yellow-500 mb-3">
                  {Array.from({ length: r.rating || 0 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* MESSAGE */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  “
                  {r.message.length > 120
                    ? r.message.slice(0, 120) + "..."
                    : r.message}
                  ”
                </p>

                {/* NAME + LOCATION */}
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-black">{r.name}</span>
                  {r.location && <span> • {r.location}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW CTA */}
      <section className="text-center py-16 px-6 space-y-6">
        <h2 className="text-2xl font-serif">Share Your Experience</h2>

        <p className="text-gray-600 max-w-xl mx-auto">
          Purchased a piece? We'd love to hear your thoughts. Select your bag
          from our collection and leave a review to share your experience.
        </p>

        <a
          href="/products"
          className="inline-block border border-black px-6 py-3 hover:bg-black hover:text-white transition"
        >
          Browse Collection
        </a>
      </section>

      <div className="w-16 h-px bg-black mx-auto my-10 opacity-30"></div>

      {/* MADE TO ORDER */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className=" overflow-hidden rounded-xl">
          <img
            src="/bags/7.JPG"
            className="w-full object-cover h-[500px] rounded-xl hover:scale-105 transition duration-700"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-serif">Made to Order</h2>

          <p className="text-gray-700 leading-relaxed">
            Each bag is created by hand once your order is placed. This ensures
            every piece is crafted with care, not mass produced.
          </p>

          <p className="text-gray-600 text-sm">
            Please allow time for your piece to be carefully made and prepared.
          </p>

          <a
            href="/contact"
            className="inline-block border border-black px-6 py-3 hover:bg-black hover:text-white transition"
          >
            Enquire About a Piece
          </a>
        </div>
      </section>

      {/* CRAFT */}
      <section className="bg-[#F1E8DF] py-20 px-6 text-center space-y-6">
        <h2 className="text-3xl font-serif">Crafted with Intention</h2>

        <p className="max-w-xl mx-auto text-gray-700 leading-relaxed">
          Each bag is made slowly by hand using natural materials and
          time-honoured techniques. Quality over quantity, always.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-20 space-y-6">
        <h2 className="text-2xl font-serif">Discover the Collection</h2>

        <a
          href="/products"
          className="inline-block bg-black text-white px-8 py-4"
        >
          View All Products
        </a>
      </section>
    </main>
  );
}
