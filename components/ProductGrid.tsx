import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: any) {
  if (!products?.length) {
    return <p>No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product: any) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
}