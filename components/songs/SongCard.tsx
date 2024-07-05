import { formatCurrency, getImagePath } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

type SongCardProps = {
  product: Product;
};

export default function SongCard({ product }: SongCardProps) {
  const imagePath = getImagePath(product.image);
  return (
    <div className="border bg-white">
      <Image
        src={imagePath}
        alt="Imagen del producto"
        width={500}
        height={500}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl">
          {formatCurrency(product.streams)}
        </p>
      </div>
    </div>
  );
}
