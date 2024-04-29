import { Injectable } from '@angular/core';
import { Truoloweb } from '../classes/T_ruolo_web';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TruoloWebService {

  private rotta = "/truoloweb";
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


 getAll():Observable<any> {
    return this.http.get(this.APIURL,  {
       headers: this.getAuthHeader()
     });      // ok      // ok

    }

getbyId(id: number) {
      return this.http.get(this.APIURL + '/' + id,  {
       headers: this.getAuthHeader()
     });      // ok);
    }


delete(ruoloweb: Truoloweb) {
     this.rottafunction = 'deletebyid';
     return this.http.delete(this.APIURL + '/' + this.rottafunction + '/' + ruoloweb.id,  {
         headers: this.getAuthHeader()
         });
    }

update(ruoloweb: Truoloweb) {
       this.rottafunction = 'updatebyid';
       return this.http.put(this.APIURL + '/' + this.rottafunction + '/' + ruoloweb.id, ruoloweb,  {
           headers: this.getAuthHeader()
           });
      }

create(ruoloweb: Truoloweb){
     this.rottafunction = 'create';
     return this.http.post(this.APIURL + '/' + this.rottafunction, ruoloweb,  {
     headers: this.getAuthHeader()
     });
   }




}
