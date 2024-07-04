import { formatCurrency } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"


type SongCardProps = {
    product: Product
}

export default function SongCard({product}: SongCardProps ) {
  return (
    <div className="border bg-white">
        <Image
         src={`/products/${product.image}.jpg`} alt="Imagen del producto" width={500} height={500}
        />
        <div className="p-5">
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="mt-5 font-black text-4xl">{formatCurrency(product.streams)}</p>
            <button 
             type="button"
             className="bg-black hover:bg-gray-500 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            >
              Listen Song
            </button>
        </div>
    </div>
  )
}
