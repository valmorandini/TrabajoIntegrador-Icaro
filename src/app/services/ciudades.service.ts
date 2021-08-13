import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudades } from '../shared/models/interface';

const baseUrl = 'http://localhost:3000/api/v1/ciudades';
@Injectable({
  providedIn: 'root'
})

export class CiudadesService {

  
  getAll(params):Observable<Ciudades[]>  {
    return this.http.get<Ciudades[]>(baseUrl, {params: params})
  }

  getById(id) {
    return this.http.get(`${baseUrl}/${id}`)
  }

  
  constructor(private http: HttpClient) { }
}