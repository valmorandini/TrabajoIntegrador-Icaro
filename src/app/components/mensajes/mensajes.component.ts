
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators} from '@angular/forms';
import { MensajesService } from 'src/app/services/mensajes.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

  token: string;
  mensajesRecibidos;
  mensajesEnviados;
  usuario
  usuarios;
  
  
  destinatarios = ['jose', 'maria', 'carlos']
  
  mensajeNuevoForm = this.fb.group({
    destinatario: new FormControl('', Validators.required),
    asunto: new FormControl(''),
    mensaje: new FormControl('', Validators.required),
  })
  
  destinatario_id = this.mensajeNuevoForm.get('destinatario');
  mensaje = this.mensajeNuevoForm.get('mensaje');

  enviarMensaje(){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    const data = {
      cuerpo: this.mensaje.value,
      remitente_id: this.usuario.id,
      destinatario_id: this.destinatario_id.value,
    }
    this._mensajesService.create(headers, data).subscribe((res:any) =>{
      console.log(res);
      window.location.reload();
    })
  }

  eliminarMensaje(id){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    this._mensajesService.deleteById(headers, id).subscribe((res) => {
      console.log("mensaje eliminado");
      window.location.reload();
  })}

  getMensajesEnviados(){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    const params = new HttpParams().set('remitente_id', this.usuario.id);
    console.log(headers, this.usuario.id);
    this._mensajesService.getAll(headers, params).subscribe((res) => {
      this.mensajesEnviados = res
      console.log(this.mensajesEnviados);
    })
  }

  getMensajesRecibidos(){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    const params = new HttpParams().set('destinatario_id', this.usuario.id);
    console.log(headers, this.usuario.id);
    this._mensajesService.getAll(headers, params).subscribe((res) => {
      console.log(res);
      this.mensajesRecibidos = res
      console.log(this.mensajesRecibidos);
    })
  }

  getUsuarios(){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    this._usersService.getAll(headers).subscribe((res) => {
      console.log(res);
      this.usuarios = res;
      console.log(this.usuarios)
     
     })
  }

  constructor(
    private _mensajesService: MensajesService,
    private _usersService: UsersService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.usuario = this._usersService.decodedToken();
    this.getMensajesEnviados(); 
    this.getMensajesRecibidos();
    this.getUsuarios();

  }

}
