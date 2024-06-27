import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Proposta } from '../models/proposta';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  http = inject(HttpClient);
  API = "http://localhost:8080/api/proposta"
  constructor() { }

  listAll(): Observable<Proposta[]>{ 
    return this.http.get<Proposta[]>(this.API+"/listAll");
  }

  save(proposta: Proposta): Observable<string> {
    return this.http.post<string>(this.API + "/save", proposta, { responseType: 'text' as 'json' });
  }

  findById(id: number): Observable<Proposta>{
    return this.http.get<Proposta>(this.API+"/findById/"+id);
  }
}
