import SongCard from "@/components/songs/SongCard";
import Heading from "@/components/ui/Heading";
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
    <Heading>Welcome to BTS next BILLION CLUB </Heading>
      <div className="grid grid-cols-1 lg:grid-cols-1 2xl:grid-cols-3 gap-1 items-start">
        {products.map((product) => (
          <SongCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
