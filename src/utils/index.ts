export function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount)
}
export const formatearCantidad = (playcount:number ) => {
    return playcount.toLocaleString("en-ES", {
      style : "decimal",
    })
  }

export function getImagePath(imagePath: string) {
    const cloudinaryBaseUrl = "https://res.cloudinary.com"
    if(imagePath.startsWith(cloudinaryBaseUrl)) {
        return imagePath
    } else {
        return `/products/${imagePath}.jpg`
    }
}

export function formatearFecha(isoString: string) : string {
    const date = new Date(isoString)
    const formatter = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    return formatter.format(date)
}

export const formatearFechaLetras = (fecha: Date) => {
    const meses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    return `${dia} de ${mes} ${año}`;
  };
