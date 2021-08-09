import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

  mensajes = [];

  constructor(
    private _mensajesService: MensajesService
  ) { }

  ngOnInit(): void {
    this.mensajes = this._mensajesService.getMensajes();
  }

}
