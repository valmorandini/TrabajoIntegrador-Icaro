
export interface Mensajes{
    mensaje_id: number;
    cuerpo: string;
    remitente_id: number
    destinatario_id: number,
    fecha: Date,
    estado: string;
}

export interface Paises{
    pais_id: number;
    nombre: string;
}

export interface Ciudades{
    ciudad_id: number;
    nombre: string;
    pais_id: number
}