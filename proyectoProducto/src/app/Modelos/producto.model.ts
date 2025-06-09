export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    img: string;
    disponibilidad?: boolean;
    cantidad: number;
}