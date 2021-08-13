import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000/api/v1/mensajes';
@Injectable({
  providedIn: 'root'
})

export class MensajesService {

  
  getAll(headers, params) {
    return this.http.get(baseUrl, {headers: headers, params: params})
  }

  getById(id) {
    return this.http.get(`${baseUrl}/${id}`)
  }

  create(headers, data) {
    return this.http.post(baseUrl, data, {headers:headers})
  }

  deleteById(headers,id) {
    return this.http.delete(`${baseUrl}/${id}`, {headers:headers})
  }
  
  constructor(private http: HttpClient) { }
}

