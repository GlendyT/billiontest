

export default function ProductSearchForm() {
  return (
    <form>
        <input
         type="text"
         placeholder="Buscar Cancion"
         className="p-2 placeholder-gray-400 w-full"
         name="search"
        />

        <input
         type="submit"
         className="bg-gray-600 p-2 uppercase text-white cursor-pointer"
         value={"Buscar"}
        />
    </form>
  )
}
