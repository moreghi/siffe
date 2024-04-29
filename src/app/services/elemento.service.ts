import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Elemento } from '../classes/Elemento';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ElementoService {

  private rotta = "/elemento";
  private rottafunction = '';

  private APIURL = environment.APIURL + this.rotta;  // definisco l'url su cui effettuare la lettura sul server

  constructor(private http: HttpClient, private auth: AuthService) { }


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
             });
      }

      getbyId(id: number) {
        return this.http.get(this.APIURL + '/' + id, {
          headers: this.getAuthHeader()
        });
      }

      delete(elemento: Elemento) {
        this.rottafunction = 'deletebyid';
        return this.http.delete(this.APIURL + '/' + this.rottafunction + '/' + elemento.id,  {
          headers: this.getAuthHeader()
        });

      }

      update(elemento: Elemento) {
        this.rottafunction = 'updatebyid';
        return this.http.put(this.APIURL + '/' + this.rottafunction + '/' + elemento.id, elemento,  {
          headers: this.getAuthHeader()
        });
      }


       create(elemento: Elemento){
        this.rottafunction = 'create';
        return this.http.post(this.APIURL + '/' + this.rottafunction, elemento,  {
          headers: this.getAuthHeader()
        });
      }

      deleteAll() {
        this.rottafunction = 'deleteAll';
        return this.http.delete(this.APIURL + '/' + this.rottafunction,  {
          headers: this.getAuthHeader()
        });

      }

      getlast() {
        this.rottafunction = 'lastid/last';
        return this.http.get(this.APIURL + '/' + this.rottafunction, {
          headers: this.getAuthHeader()
        });
      }

}



