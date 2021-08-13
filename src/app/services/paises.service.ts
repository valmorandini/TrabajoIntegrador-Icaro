import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from '../shared/models/interface';

const baseUrl = 'http://localhost:3000/api/v1/paises';
@Injectable({
  providedIn: 'root'
})

export class PaisesService {

  
  getAll():Observable<Paises[]> {
    return this.http.get<Paises[]>(baseUrl)
  }

  getById(id):Observable<Paises[]> {
    return this.http.get<Paises[]>(`${baseUrl}/${id}`)
  }

  
  constructor(private http: HttpClient) { }
}