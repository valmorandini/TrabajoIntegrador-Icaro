
import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, Validators} from '@angular/forms';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

  mensajesRecibidos = [];
  mensajesEnviados = [];

  destinatarios = ['jose', 'maria', 'carlos']
  
  mensajeNuevoForm = this.fb.group({
    destinatario: new FormControl('', Validators.required),
    asunto: new FormControl(''),
    mensaje: new FormControl('', Validators.required),
  })

  destinatario = this.mensajeNuevoForm.get('destinatario');
  asunto = this.mensajeNuevoForm.get('asunto');
  mensaje = this.mensajeNuevoForm.get('mensaje');

  constructor(
    private _mensajesService: MensajesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.mensajesRecibidos = this._mensajesService.getMensajesRecibidos();
    // this.mensajesEnviados = this._mensajesService.getMensajesEnviados();
  }

}
