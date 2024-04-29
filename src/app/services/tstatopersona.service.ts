
import { Injectable } from '@angular/core';
import { TstatoPersona } from './../classes/T_stato_persona';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TstatopersonaService {

  statopersona: TstatoPersona;

  private rotta = "/statopersona";
  private rottafunction = '';
  private APIURL = environment.APIURL + this.rotta;  // definisco l'url su cui effettuare la lettura sul server

  constructor(private http: HttpClient,
              private auth: AuthService) { }


// attenzione: per ogni funzione che voglio usare DEVO passare il token per dimostrare che sono loggato

getAuthHeader(): HttpHeaders   {
  // passo il token dentro a header per non farlo passare in chiaro su url
  const headers = new HttpHeaders(
      {
          Authorization: 'Bearer ' +  this.auth.getToken()
      }
    );
    return headers;
  }

    getAll() {
      return this.http.get(this.APIURL,  {
        headers: this.getAuthHeader()
      });
    }

      getbyid(id: number) {
        return this.http.get(this.APIURL + '/' + id,  {
          headers: this.getAuthHeader()
        });
      }

      delete(statopersona: TstatoPersona) {
        this.rottafunction = 'deletebyid';
        return this.http.delete(this.APIURL + '/' + this.rottafunction + '/' + statopersona.id,  {
          headers: this.getAuthHeader()
        });      // ok      // ok
      }

  update(statopersona: TstatoPersona) {
    this.rottafunction = 'updatebyid';
    return this.http.put(this.APIURL + '/' + this.rottafunction + '/' + statopersona.id, statopersona,  {
      headers: this.getAuthHeader()
    });      // ok      // ok
  }

   create(statopersona: TstatoPersona){
    this.rottafunction = 'create';
    return this.http.post(this.APIURL + '/' + this.rottafunction, statopersona,  {
      headers: this.getAuthHeader()
    });      // ok      // ok
  }

  getlastid() {
    this.rottafunction = 'lastid';
    return this.http.get(this.APIURL + '/' + this.rottafunction ,  {
      headers: this.getAuthHeader()
    });      // ok      // ok
  }

}

