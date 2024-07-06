import {
  formatearCantidad,
  getImagePath,
  formatearFechaLetras,
} from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

type SongCardProps = {
  product: Product;
};

export default function SongCard({ product }: SongCardProps) {
  const imagePath = getImagePath(product.image);
  const goal = 1000000000;

  const { streams, prevStreams } = product;
  const daily = streams - prevStreams;
  const difGoal = goal - streams;
  const totDias = Math.floor(difGoal / daily);
  const fechaFutura = new Date();
  fechaFutura.setDate(fechaFutura.getDate() + totDias);
  const fechaFormateada = formatearFechaLetras(fechaFutura);

  return (
    <div className=" pt-2 flex flex-col sm:justify-center items-center max-sm:mx-4 max-sm:pt-6 px-2 pb-20 gap-4 max-sm:flex max-sm:flex-col max-sm:py-2 max-sm:px-0">
      <div
        className="bg-black text-white px-10 pt-14 pb-4 rounded-3xl border-white border max-sm:pt-6"
        id="print"
      >
        <div className="flex flex-col gap-8 justify-center items-center max-sm:flex-col ">
          <div className="text-xl flex flex-col gap-1 max-sm:text-xs max-sm:gap-2  ">
            <div className="flex flex-row gap-4 items-center justify-center max-sm:text-xs pb-2 text-start text-xs max-sm:flex-col max-sm:text-center">
              <div className="flex flex-col items-center justify-between ">
                <p className=" font-bold text-xl">{product.name}</p>
              </div>
              esta cerca de ser el nuevo miembro del club
            </div>
            <div className="text-sm flex flex-row items-center justify-between  max-sm:text-xs ">
              Reproducciones Actuales
              <p className="text-lg font-bold max-sm:text-sm max-sm:ml-3">
                {formatearCantidad(streams)}
              </p>
            </div>
            <div className="text-sm flex flex-row items-center justify-between  max-sm:text-xs ">
              Reproducciones Previas
              <p className="text-lg font-bold max-sm:text-sm max-sm:ml-3">
                {formatearCantidad(prevStreams)}
              </p>
            </div>
            <div className="text-sm flex flex-row items-center justify-between  max-sm:text-xs ">
              Diario
              <p className="text-lg  font-bold max-sm:text-sm max-sm:ml-10">
                {formatearCantidad(+daily)}
              </p>
            </div>
            <div className="text-sm flex flex-row items-center justify-between  max-sm:text-xs">
              Restantes para llegar al goal
              <p className="text-lg font-bold max-sm:text-sm">
                {formatearCantidad(+difGoal)}
              </p>
            </div>
            <div className="text-sm flex flex-row items-center justify-between  max-sm:text-xs">
              llegará al goal
              <p className="text-lg  font-bold max-sm:text-sm">
                {fechaFormateada}
              </p>
            </div>
          </div>
          <div className="max-sm:h-20 max-sm:w-20 brightness-100 grayscale transition ease-in-out hover:filter-none max-lg:w-32 max-lg:h-32 ">
            <Image
              src={imagePath}
              alt="Imagen del producto"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex text-center justify-center items-center font-extrabold text-2xl pt-8">
          BILLIONS CLUB
        </div>
      </div>
    </div>
  );
}
