import { client } from "../../../lib/sanity";
import {
  singleProductQuery,
  reviewsByProductQuery,
} from "../../../lib/queries";
import ReviewForm from "../../../components/ReviewForm";
import { urlFor } from "../../../lib/image";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await client.fetch(singleProductQuery, {
    slug: params.slug,
  });

  if (!product) {
    return {
      title: "Product Not Found | Zibah Creations",
    };
  }

  return {
    title: `${product.name} | Handmade Macramé Bag`,
    description:
      product.story ||
      "Handcrafted macramé bag made with care and inspired by African design.",

    openGraph: {
      title: product.name,
      description: product.story,
      images: product.mainImage ? [product.mainImage] : [],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await client.fetch(singleProductQuery, { slug });
  const reviews = await client.fetch(reviewsByProductQuery, { slug });

  return (
    <main className="bg-[#F7F3EE] text-[#1A1A1A] px-6 py-16">
      {/* PRODUCT */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* IMAGE */}
        <img
          src={urlFor(product.mainImage).width(800).url()}
          className="w-full rounded-xl object-cover"
        />

        {/* INFO */}
        <div className="space-y-6">
          <h1 className="text-3xl font-serif">{product.name}</h1>

          {product.price && <p className="text-gray-500">{product.price}</p>}

          <p className="text-gray-700 leading-relaxed">{product.story}</p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-3xl mx-auto mt-20 space-y-6">
        <h2 className="text-2xl font-serif">Reviews</h2>

        {reviews.length === 0 && (
          <p className="text-gray-500">No reviews yet</p>
        )}

        {reviews.map((r: any, i: number) => (
          <div key={i} className="border p-4 rounded-lg bg-white">
            <p className="font-medium">{r.name}</p>

            {/* ⭐ STARS */}
            <div className="flex text-yellow-500">
              {Array.from({ length: r.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            <p className="text-gray-600 text-sm mt-2">{r.message}</p>
          </div>
        ))}

        {/* FORM */}
        <div className="mt-10">
          <h3 className="text-xl font-serif mb-4">Leave a Review</h3>

          <ReviewForm slug={slug} />
        </div>
      </section>
    </main>
  );
}
