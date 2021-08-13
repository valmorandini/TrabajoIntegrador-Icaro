import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLogged = false;
  usuario;
  

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this.usuario = this._usersService.decodedToken();
    this._usersService.isLogged.subscribe( res => this.isLogged = res)
    console.log(this.usuario)
  }

}
