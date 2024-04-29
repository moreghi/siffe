import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Msgpopup } from '../classes/Msgpopup';    // ../../../classes/user
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MsgpopupService {

  msgpopup: Msgpopup;

  private rotta = "/msgpopup";
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
<<<<<<< HEAD
            Autorization: 'Bearer ' + this.auth.getToken()
=======
            authorization: 'Bearer ' + this.auth.getToken()
>>>>>>> d8eac67 (registrazione corretta)
          }
        );
        return headers;
      }

      getAllMsgpopup() {

             return this.http.get(this.APIURL,  {
               headers: this.getAuthHeader()
             });      // ok
      }

      getMsgpopup(id: number) {
        return this.http.get(this.APIURL + '/' + id, {
          headers: this.getAuthHeader()
        });
      }


      deleteMsgpopup(msgpopup: Msgpopup) {
        this.rottafunction = 'deletebyid';
        return this.http.delete(this.APIURL + '/' + this.rottafunction + '/' + msgpopup.id,  {
          headers: this.getAuthHeader()
        });

      }


      updateMsgpopup(msgpopup: Msgpopup) {
        this.rottafunction = 'updatebyid';
        return this.http.put(this.APIURL + '/' + this.rottafunction + '/' + msgpopup.id, msgpopup,  {
          headers: this.getAuthHeader()
        });
      }

       createMsgpopup(msgpopup: Msgpopup){
        this.rottafunction = 'create';
        return this.http.post(this.APIURL + '/' + this.rottafunction, msgpopup,  {
          headers: this.getAuthHeader()
        });
      }

}
