import { Injectable } from '@angular/core';
import { TstatoUtenti } from '../classes/T_stato_utenti';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TstatoutentiService {

  private rotta = '/tstatoutenti';
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

  getAllbyTipo(tipo: string):Observable<any> {
        this.rottafunction = 'tipo';
        return this.http.get(this.APIURL + '/' + this.rottafunction  + '/' + tipo,  {
        headers: this.getAuthHeader()
      });      // ok      // ok
     }

  getbyId(id: number) {
         return this.http.get(this.APIURL + '/' + id,  {
          headers: this.getAuthHeader()
        });      // ok);
       }


      delete(tstatoutenti: TstatoUtenti) {
        this.rottafunction = 'deletebyid';
        return this.http.delete(this.APIURL + '/' + this.rottafunction  + '/' + tstatoutenti.id,  {
          headers: this.getAuthHeader()
        });      // ok);

       }

      update(tstatoutenti: TstatoUtenti) {
        this.rottafunction = 'updatebyid';
        return this.http.put(this.APIURL + '/' + this.rottafunction + '/' + tstatoutenti.id, tstatoutenti,  {
            headers: this.getAuthHeader()
          });      // ok);
         }

      create(tstatoutenti: TstatoUtenti){
          this.rottafunction = 'create';
          return this.http.post(this.APIURL + '/' + this.rottafunction, tstatoutenti,  {
      headers: this.getAuthHeader()
    });      // ok);
   }

   getlastid(){
    this.rottafunction = 'lastid';
    return this.http.post(this.APIURL + '/' + this.rottafunction,  {
      headers: this.getAuthHeader()
      });      // ok);
   }
}

