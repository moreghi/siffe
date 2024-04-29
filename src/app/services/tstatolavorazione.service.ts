import { Injectable } from '@angular/core';
import { TstatoLavorazione } from '../classes/T_stato_lavorazione';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TstatolavorazioneService {

  statolavorazione: TstatoLavorazione;

  private rotta = '/tstatolavorazione';
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

      delete(statolavorazione: TstatoLavorazione) {
        this.rottafunction = 'deletebyid';
        return this.http.delete(this.APIURL + '/' + this.rottafunction + '/' + statolavorazione.id,  {
          headers: this.getAuthHeader()
        });
      }

  update(statolavorazione: TstatoLavorazione) {
    this.rottafunction = 'updatebyid';
    return this.http.put(this.APIURL + '/' + this.rottafunction + '/' + statolavorazione.id, statolavorazione,  {
      headers: this.getAuthHeader()
    });
  }

   create(statolavorazione: TstatoLavorazione){
    this.rottafunction = 'create';
    return this.http.post(this.APIURL + '/' + this.rottafunction, statolavorazione,  {
      headers: this.getAuthHeader()
    });
  }

  getlastid() {
    this.rottafunction = 'lastid';
    return this.http.get(this.APIURL + '/' + this.rottafunction ,  {
      headers: this.getAuthHeader()
    });
  }
}

