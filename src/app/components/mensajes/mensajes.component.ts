
import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

  mensajesRecibidos = [];
  mensajesEnviados = [];

  constructor(
    private _mensajesService: MensajesService
  ) { }

  ngOnInit(): void {
    this.mensajesRecibidos = this._mensajesService.getMensajesRecibidos();
    this.mensajesEnviados = this._mensajesService.getMensajesEnviados();
  }

}
