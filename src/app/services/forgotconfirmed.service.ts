import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForgotPassword } from '../classes/Forgot-password';    // ../../../classes/user
import { environment } from '../../environments/environment';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForgotPassword } from '../classes/Forgot-password';    // ../../../classes/user
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
>>>>>>> d8eac67 (registrazione corretta)

@Injectable({
  providedIn: 'root'
})
export class ForgotconfirmedService {

<<<<<<< HEAD
  private rotta = '/forgotpasswords';

  constructor(private http: HttpClient) { }

  // connessione tra backend e frontend

  apiUrl = environment.APIURL + this.rotta;
=======
  private rotta = 'forgotpasswords';

  constructor(private http: HttpClient, private auth: AuthService) { }

  // connessione tra backend e frontend

  apiUrl = environment.APIAUTURL + this.rotta;
>>>>>>> d8eac67 (registrazione corretta)

  forgotconf: ForgotPassword;
  // lettura tutti gli utenti

<<<<<<< HEAD
=======
  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders(
      {
        authorization: 'Bearer ' + this.auth.getToken()
      }
    );
    return headers;
  }



>>>>>>> d8eac67 (registrazione corretta)
  getAll():Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // inserimento nuovo utente
  createNew(data:any):Observable<any> {
    console.log(data,'forgotconfirmedService - CreateNew');
    return this.http.post(`${this.apiUrl}`, data);
  }

  // cancellazione utente
  delete(email:any):Observable<any>  {
    console.log('cancellazione richiesta reset: ' + email);
    return this.http.delete(`${this.apiUrl}/${email}`);
  }


  update(data:any,email:any):Observable<any> {
    console.log(`aggiornamento richiesta ripristino ${email} `);
    return this.http.put(`${this.apiUrl}/${email}`, data);
  }

 // Visualizzazione singolo utente
 getby(email:any):Observable<any>  {
  console.log('ForgotconfirmedService ------ lettura singola richiesta: ' + email);

<<<<<<< HEAD
  return this.http.get(`${this.apiUrl}/${email}`);
=======
  return this.http.get(`${environment.APIURL}/forgotpasswords/${email}`, {
    headers: this.getAuthHeader()
  });
>>>>>>> d8eac67 (registrazione corretta)

 }
//  spostato da authservice
 forgotPwd(email: string) {
<<<<<<< HEAD
  return this.http.post(this.apiUrl + "/forgotpwd", { email });
=======
  return this.http.post(this.apiUrl + "/forgotpwd", { email }, {
    headers: this.getAuthHeader()
  });
>>>>>>> d8eac67 (registrazione corretta)
}

// non funziona - togliere
 confresetPassword(email: string, newpassword: string) {

<<<<<<< HEAD
  const test = this.apiUrl + "/confresetuserpwd";
=======
  const test = environment.APIURL + "/confresetuserpwd";
>>>>>>> d8eac67 (registrazione corretta)

  console.log(`forgotService - confresetPassword - parametri ${email} ' ' ${newpassword} url: ${test}`);



<<<<<<< HEAD
  return this.http.post(this.apiUrl + "/confresetuserpwd", { email, newpassword });
=======
  return this.http.post(environment.APIURL + "/confresetuserpwd", { email, newpassword });
>>>>>>> d8eac67 (registrazione corretta)
}


resetpassword(email: string, password: string) {

  const test = this.apiUrl + "/resetpassword";
  const test1 = `${this.apiUrl}/resetpassword`;
  console.log(`forgotService - resetpassword - parametri ${email} ' ' ${password} url: ${test} url1: ${test1}`);

// this.apiUrl + "/resetpassword"

  return this.http.post(`${this.apiUrl}/resetpassword`, { email, password });
}



}
