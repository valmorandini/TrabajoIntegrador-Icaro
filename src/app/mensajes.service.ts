import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  mensajes = [{
    remitente: 'jose',
    asunto: 'holis',
    mensaje: 'sdfjnbsldjfnsldnf'
  }, {
    remitente: 'nico',
    asunto: 'holis',
    mensaje: 'sdfjnbsldjfnsldnf'
  }, {
    remitente: 'ana',
    asunto: 'holis',
    mensaje: 'sdfjnbsldjfnsldnf'
  }];

  getMensajes() {
    return this.mensajes;
  }

  constructor() { }
}
