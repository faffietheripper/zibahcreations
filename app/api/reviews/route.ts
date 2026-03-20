import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, message, rating, slug } = await req.json();

  // find product
  const productRes = await fetch(
    `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2023-01-01/data/query/production?query=*[_type=="product" && slug.current=="${slug}"][0]._id`,
  );

  const productData = await productRes.json();
  const productId = productData.result;

  // create review
  await fetch(
    `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2023-01-01/data/mutate/production`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
      },
      body: JSON.stringify({
        mutations: [
          {
            create: {
              _type: "review",
              name,
              message,
              rating,
              approved: false,
              product: {
                _type: "reference",
                _ref: productId,
              },
            },
          },
        ],
      }),
    },
  );

  return NextResponse.json({ success: true });
}
