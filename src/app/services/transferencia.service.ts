import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listatransferencia: any[];
  url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) { 
    this.listatransferencia = [];
  }

  get transferencias(){
    return this.listatransferencia;
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia);

    this.listatransferencia.push(transferencia)
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

}
