export const allProductsQuery = `
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    mainImage,
    price,
    featured,
    _createdAt
  }
`;

export const singleProductQuery = `
  *[_type == "product" && slug.current == $slug][0]{
    name,
    mainImage,
    gallery,
    story,
    price
  }
`;

export const reviewsByProductQuery = `
  *[_type == "review" && product->slug.current == $slug && approved == true]{
    name,
    message,
    rating
  }
`;