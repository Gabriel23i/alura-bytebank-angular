import { ITransferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todas(): Observable<ITransferencia[]>{
    return this.httpClient.get<ITransferencia[]>(this.url);
  }

  adicionar(transferencia: ITransferencia): Observable<ITransferencia>{
    this.hidratar(transferencia);

    return this.httpClient.post<ITransferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }
}
