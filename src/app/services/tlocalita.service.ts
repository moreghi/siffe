import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tlocalita } from '../classes/T_localita';    // ../../../classes/user
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class TlocalitaService {

  private rotta = "/tlocalita";
  private rottafunction = '';

// vecchia versione senza environment
//  private APIURL = 'http://localhost:8000/users';  // definisco l'url su cui effettuare la lettura sul server

private APIURL = environment.APIURL + this.rotta;  // definisco l'url su cui effettuare la lettura sul server

  constructor(private http: HttpClient, private auth: AuthService) { }


// attenzione: per ogni funzione che voglio usare DEVO passare il token per dimostrare che sono loggato
// metodo per concatenare il token nei metodi di chiamata al server
      getAuthHeader(): HttpHeaders {
        const headers = new HttpHeaders(
          {
            authorization: 'Bearer ' + this.auth.getToken()
          }
        );
        return headers;
      }

      getAll() {
               return this.http.get(this.APIURL,  {
               headers: this.getAuthHeader()
             });      // ok
        }

        getbyId(id: number) {
          return this.http.get(this.APIURL + '/' + id, {
            headers: this.getAuthHeader()
          });
        }

        getbylocalita(local: string) {
          this.rottafunction = 'getbydlocalita';
          return this.http.get(this.APIURL + '/' + this.rottafunction + '/' + local);
        }


        delete(localita: Tlocalita) {
          this.rottafunction = 'deletebyid';
          return this.http.delete(this.APIURL + '/' + this.rottafunction + '/' + localita.id,  {
            headers: this.getAuthHeader()
          });

        }


        update(localita: Tlocalita) {
          this.rottafunction = 'updatebyid';
          return this.http.put(this.APIURL + '/' + this.rottafunction + '/' + localita.id, localita,  {
            headers: this.getAuthHeader()
          });

        }


         create(localita: Tlocalita){
          this.rottafunction = 'create';
          return this.http.post(this.APIURL + '/' + this.rottafunction, localita,  {
            headers: this.getAuthHeader()
          });
        }

        getLastLocalitaid() {
          this.rottafunction = 'localitalast/lastid';
          return this.http.get(this.APIURL + '/' + this.rottafunction  ,  {
            headers: this.getAuthHeader()
          });      // ok;
        }


}

