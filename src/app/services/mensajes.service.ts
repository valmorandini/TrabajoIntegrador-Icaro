import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000/api/v1/mensajes';
@Injectable({
  providedIn: 'root'
})

export class MensajesService {

  
  getAll(data) {
    return this.http.get(baseUrl, data)
  }

  getById(id) {
    return this.http.get(`${baseUrl}/${id}`)
  }

  create(data) {
    return this.http.post(baseUrl, data)
  }

  deleteById(id) {
    return this.http.delete(`${baseUrl}/${id}`)
  }
  
  constructor(private http: HttpClient) { }
}

