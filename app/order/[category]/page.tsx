import SongCard from "@/components/songs/SongCard";
import { prisma } from "@/src/lib/prisma";

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });

  return products;
}

export default async function OrderPage({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProducts(params.category);

  return (
    <>

    <h1 className="text-2xl my-10">
      Billion Club
    </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">

        {products.map(product => (
          <SongCard
           key={product.id}
           product={product}
          />
        ))}
      </div>
    </>
  );
}
