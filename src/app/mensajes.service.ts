import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  mensajesRecibidos = [{
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

  mensajesEnviados = [{
    destinatario: 'jose',
    asunto: 'holis',
    mensaje: 'sdfjnbsldjfnsldnf'
  }, {
    destinatario: 'nico',
    asunto: 'holis',
    mensaje: 'sdfjnbsldjfnsldnf'
  }, {
    destinatario: 'ana',
    asunto: 'holis',
    mensaje: 'sdfjnbsldjfnsldnf'
  }];

  getMensajesRecibidos() {
    return this.mensajesRecibidos;
  }

  getMensajesEnviados() {
    return this.mensajesEnviados;
  }

  constructor() { }
}
