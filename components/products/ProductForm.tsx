import { prisma } from "@/src/lib/prisma"
import ImageUpload from "./ImageUpload"
import { Product } from "@prisma/client"

async function getCategories() {
    return await prisma.category.findMany()
}

type ProducFormProps = {
    product?: Product
}


export default async function ProductForm({product}: ProducFormProps) {

    const categories = await getCategories()


    return (
        <>
            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="name"
                >Nombre:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Nombre Producto"
                    defaultValue={product?.name}
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="streams"
                >Streams:</label>
                <input
                    id="streams"
                    name="streams"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Streams Cancion"
                    defaultValue={product?.streams}
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="categoryId"
                >Categoría:</label>
                <select
                    className="block w-full p-3 bg-slate-100"
                    id="categoryId"
                    name="categoryId"
                    defaultValue={product?.categoryId}
                >
                    <option value="">-- Seleccione --</option>
                    {categories.map(category => (
                        <option
                         key={category.id}
                         value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
          
                </select>
            </div>
            <ImageUpload
             image={product?.image}
            />
        </>
    )
}