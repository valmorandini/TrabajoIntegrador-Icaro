
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000/api/v1/users';
const securityUrl = 'http://localhost:3000/api/v1/seguridad';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  
  getAll() {
    return this.http.get(baseUrl)
  }

  getById(id) {
    return this.http.get(`${baseUrl}/${id}`)
  }

  create(data) {
    return this.http.post(`${securityUrl}/singup`, data)
  }

  login(data) {
    return this.http.post(`${securityUrl}/singin`, data)
  }
  
  constructor(private http: HttpClient) { }
}


