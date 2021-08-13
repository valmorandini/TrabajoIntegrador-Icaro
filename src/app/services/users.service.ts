
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable,  BehaviorSubject } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/v1/users';
const securityUrl = 'http://localhost:3000/api/v1/seguridad';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  loggedIn = new BehaviorSubject<boolean>(false);

  get isLogged():Observable<boolean> {
    return this.loggedIn.asObservable();
  }
  
  getAll(headers) {
    return this.http.get(baseUrl, {headers: headers})
  }

  getById(id) {
    return this.http.get(`${baseUrl}/${id}`)
  }

  create(data) {
    return this.http.post(`${securityUrl}/singup`, data)
  }

  login(data): Observable<any> {
    return this.http.post(`${securityUrl}/singin`, data)
  }

  isAuth():boolean {
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false
    }
    this.loggedIn.next(true);
    return true;
  }

  decodedToken() {
    const token = localStorage.getItem('token');
    return this.jwtHelper.decodeToken(token)
  }
  
  constructor(
    private http: HttpClient, 
    private jwtHelper: JwtHelperService
    ) {
      this.isAuth();
     }
}


