import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    private _usersService: UsersService,
  ){
    
  }

  canActivate():Observable<boolean> {
    return this._usersService.isLogged.pipe(
      take(1),
      map((isLogged:boolean) => isLogged)
    )
  }
  
}
