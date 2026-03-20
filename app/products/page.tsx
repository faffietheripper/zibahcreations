import { client } from "@/lib/sanity";
import { allProductsQuery } from "@/lib/queries";
import Link from "next/link";
import { urlFor } from "@/lib/image"; // make sure you have this

export default async function ProductsPage() {
  const products = await client.fetch(allProductsQuery);

  return (
    <main className="bg-[#F7F3EE] text-[#1A1A1A] px-6 py-16">
      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <h1 className="text-4xl font-serif">Our Collection</h1>

        <p className="text-gray-600">
          Each piece is handcrafted with care, blending traditional techniques
          with modern style. No two bags are ever the same.
        </p>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((p: any) => (
          <Link
            key={p._id}
            href={`/products/${p.slug.current}`}
            className="group"
          >
            <div className="space-y-3">
              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={urlFor(p.mainImage).width(600).url()}
                  className="w-full h-80 object-cover rounded-xl 
                  group-hover:scale-105 transition duration-500 ease-out"
                />
              </div>

              {/* NAME */}
              <h3 className="font-medium text-lg group-hover:opacity-70 transition">
                {p.name}
              </h3>

              {/* OPTIONAL PRICE */}
              {p.price && <p className="text-sm text-gray-500">{p.price}</p>}
            </div>
          </Link>
        ))}
      </section>
      <div className="w-36 h-px bg-black mx-auto my-10 opacity-30"></div>
      {/* EXTRA BRAND TOUCH */}
      <section className="text-center mt-24 max-w-2xl mx-auto space-y-4">
        <h2 className="text-2xl font-serif">Crafted Slowly, Worn Daily</h2>

        <p className="text-gray-600">
          Our pieces are designed to be timeless — made by hand, meant to last,
          and created to be part of your everyday life.
        </p>
      </section>
    </main>
  );
}
