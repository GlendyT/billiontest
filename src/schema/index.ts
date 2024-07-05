import { z } from "zod";

export const SearchSchema = z.object({
  search: z
    .string()
    .trim()
    .min(1, { message: "La Busqueda no puede ir vacia" }),
});

export const ProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "El Nombre del Producto no puede ir vacio" }),
  streams: z
    .string()
    .trim()
    .transform((value) => parseFloat(value))
    .refine((value) => value > 0, { message: "Precio no válido" })
    .or(z.number().min(1, { message: "La Categoría es Obligatoria" })),

  previousStreams: z
    .string()
    .trim()
    .transform((value) => parseFloat(value))
    .refine((value) => value > 0, { message: "Precio no válido" })
    .or(z.number().min(1, { message: "La Categoría es Obligatoria" })),
  categoryId: z
    .string()
    .trim()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: "La Categoría es Obligatoria" })
    .or(z.number().min(1, { message: "La Categoría es Obligatoria" })),
  image: z.string().min(1, { message: "La Imagen es obligatoria" }),
});
