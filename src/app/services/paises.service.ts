import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000/api/v1/paises';
@Injectable({
  providedIn: 'root'
})

export class PaisesService {

  
  getAll(data) {
    return this.http.get(baseUrl, data)
  }

  getById(id) {
    return this.http.get(`${baseUrl}/${id}`)
  }

  
  constructor(private http: HttpClient) { }
}