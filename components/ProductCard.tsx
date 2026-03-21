import Link from "next/link";
import { urlFor } from "@/lib/image";

export default function ProductCard({ product }: any) {
  return (
    <Link href={`/products/${product.slug.current}`}>
      <div className="group cursor-pointer">
        <div className="overflow-hidden rounded-xl">
          <img
            src={urlFor(product.mainImage).width(600).url()}
            alt={product.name}
            className="w-full h-75 object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="mt-3">
          <h3 className="text-lg font-semibold">{product.name}</h3>

          {product.price && (
            <p className="text-gray-500 text-sm">{product.price}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
