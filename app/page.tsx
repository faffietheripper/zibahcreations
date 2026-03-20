import { client } from "@/lib/sanity";
import ProductGrid from "@/components/ProductGrid";

export default async function Home() {
  const products = await client.fetch(`*[_type == "product"]`);
  const featured = products.filter((p: any) => p.featured);

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
          className="w-full h-64 object-cover object-center rounded-lg"
        />
      </section>

      {/* BRAND STORY */}
      <section className="py-20 px-6 text-center space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif">More Than Just a Bag</h2>

        <p className="text-gray-700 leading-relaxed">
          Each piece is carefully handcrafted using traditional techniques,
          blending culture, creativity, and craftsmanship. No two bags are ever
          the same — every knot reflects time, patience, and individuality.
          These are not just accessories, but expressions of heritage, designed
          to be worn, used, and appreciated over time.
        </p>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-serif mb-8 text-center">
          Featured Pieces
        </h2>

        <ProductGrid products={featured} />
      </section>

      <div className="w-16 h-px bg-black mx-auto my-10 opacity-30"></div>
      {/* MADE TO ORDER */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div className="overflow-hidden rounded-xl">
          <img
            src="/bags/7.JPG"
            className="w-full h-100 object-cover rounded-xl hover:scale-105 transition duration-700 ease-out"
          />
        </div>

        {/* TEXT */}
        <div className="space-y-6">
          <h2 className="text-3xl font-serif leading-snug">Made to Order</h2>

          <p className="text-gray-700 leading-relaxed">
            Each bag is created by hand once your order is placed. This allows
            every piece to be crafted with care, attention, and intention —
            rather than mass produced.
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

      {/* CRAFT SECTION */}
      <section className="bg-[#F1E8DF] py-20 px-6 text-center space-y-6">
        <h2 className="text-3xl font-serif">Crafted with Intention</h2>

        <p className="max-w-xl mx-auto text-gray-700 leading-relaxed">
          Each bag is made slowly by hand using natural materials and
          time-honoured techniques. From the first knot to the final detail,
          every step is done with care and intention. This is craftsmanship that
          values patience over speed, quality over quantity, and meaning in
          every piece created.
        </p>
      </section>

      {/* CRAFT IMAGES */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-10">
        <img
          src="/bags/7.JPG"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://www.hoookedyarn.com/media/catalog/product/_/c/_c_l_clutch_sisak_squared_4_13.jpg"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="/bags/1.JPG"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="/bags/3.JPG"
          className="w-full h-64 object-cover rounded-lg"
        />
      </section>

      {/* LIFESTYLE */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-10">
        <img
          src="https://missmacrebelmacrame.com/cdn/shop/files/Koma_Bag_in_the_colour_Sand.jpg?v=1750228391&width=416"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="/bags/4.JPG"
          className="w-full h-64 object-cover object-top rounded-lg"
        />
        <img
          src="/bags/5.JPG"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="/bags/6.JPG"
          className="w-full h-64 object-cover rounded-lg"
        />
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
