import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registerconfirmed } from '../classes/Register_confirmed';    // ../../../classes/user
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterconfirmedService {

  private rotta = '/regconf';
  private rottafunction = '';
<<<<<<< HEAD

  constructor(private http: HttpClient) { }

  // connessione tra backend e frontend

  apiUrl = environment.APIAUTURL + this.rotta;

  regconf: Registerconfirmed;
  // lettura tutti gli utenti

  getAll():Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // inserimento nuovo utente
  createNew(data:any):Observable<any> {
    console.log(data,'RegisterconfirmedService - CreateNew');
    return this.http.post(`${this.apiUrl}`, data);
  }

  // cancellazione utente
  delete(email:any):Observable<any>  {
    console.log('cancellazione Utente: ' + email);
    return this.http.delete(`${this.apiUrl}/${email}`);
  }


  update(data:any,email:any):Observable<any> {
    console.log(`aggiornamento utente ${email} `);
    return this.http.put(`${this.apiUrl}/${email}`, data);
  }

 // Visualizzazione singolo utente
 getby(email:any):Observable<any>  {
  console.log('RegisterconfirmedService ------ lettura singola conferma: ' + email);

  return this.http.get(`${this.apiUrl}/${email}`);

 }

 // lettura per token

 getRegConfirmbyToken(token:any):Observable<any> {
  console.log('RegisterconfirmedService ------ lettura per token: ' + token);
  console.log(`RegisterconfirmedService -- token ---- url lettura: ${this.apiUrl}/${token}`);
  return this.http.get(`${this.apiUrl}/${token}`);

 }


 getPreConfirmbyEmail(email: string) {
  this.rottafunction = "/getbyemail";
  return this.http.get(this.apiUrl + this.rottafunction + '/' + email  );

}


}
=======
  public registerconfirmed: Registerconfirmed;

  private APIURL = environment.APIURL + this.rotta;


  constructor(private http: HttpClient) { }

getAll() {
  return this.http.get(`${this.APIURL}`);
}

getbyid(id: number) {
  return this.http.get(this.APIURL + '/' + id);
}

getbyToken(token: string) {

  console.log('frontend -- registerConfermed  -- getbytoken  -----------------  appena entrato');
  this.rottafunction = 'token';
  return this.http.get(this.APIURL + '/' + 'reg'  + '/' + this.rottafunction  + '/' + token);
}

delete(regconf: Registerconfirmed) {
  this.rottafunction = 'deletebyid';
  return this.http.delete(this.APIURL + '/' + this.rottafunction + '/' + regconf.id);
}

update(regconf: Registerconfirmed) {
  this.rottafunction = 'updatebyid';
  return this.http.put(this.APIURL + '/' + this.rottafunction + '/' + regconf.id, regconf);
}

create(regconf: Registerconfirmed){
  this.rottafunction = 'create';
  return this.http.post(this.APIURL + '/' + this.rottafunction, regconf);
}

deletebytoken(token: string) {
  this.rottafunction = 'destroyToken';
  return this.http.delete(this.APIURL + '/' + this.rottafunction + '/' + token);
}


  registerMoreno(cognome: string, nome: string, username: string, email: string, password: string) {

    console.log(`frontend - registerconfirmed.service - registerMoreno ------  inizio -- cognome passato: ${cognome} ` );

    this.registerconfirmed = new Registerconfirmed();
    this.registerconfirmed.email = email;
    this.registerconfirmed.username = username;
    this.registerconfirmed.password = password.toLowerCase();
    this.registerconfirmed.cognome = cognome;
    this.registerconfirmed.nome = nome;

   //  registerMoreno(account: Account) {
    console.log(`registerconfirmed - registerMoreno ${this.registerconfirmed.cognome} ` );
    return this.http.post(this.APIURL + '/' + "confirmedregister", this.registerconfirmed);
    //  return this.http.post(`this.APIAUTHURL/gmmailforregister`,  this.registerconfirmed );

  }

  getRegConfirmbyToken(token: string) {
    this.rottafunction = 'token';
    return this.http.get(this.APIURL + '/' + this.rottafunction + '/' + token);

  }

  SendEmailbynewUser(email: string, cognome: string, nome: string, token: string) {

    console.log('--------------------------  registerconfirmed.service ----------- parametri ricevuti e da trasmettere --------------------------');
    console.log('email: ' + email);
    console.log('cognome: ' + cognome);
    console.log('nome: ' + nome);
    console.log('token: ' + token);
    console.log('--------------------------  registerconfirmed.service ----------- parametri ricevuti e da trasmettere ----     end ------------');




    this.registerconfirmed = new Registerconfirmed();
    this.registerconfirmed.email = email;
    this.registerconfirmed.cognome = cognome;
    this.registerconfirmed.nome = nome;
    this.registerconfirmed.token = token;

    this.rottafunction = 'reg/getbyconfirmed/sendmail';
    return this.http.post(this.APIURL + '/' + this.rottafunction, this.registerconfirmed);
   //   attenzione return this.http.post(this.APIURL + '/' + "confirmedregister", this.registerconfirmed);



  }



  sendEmail(regconf: Registerconfirmed){
    console.log('frontend - registerconfirmed.service - sendEmail --  :  ' + JSON.stringify(regconf));

    this.rottafunction = 'sendmail';
    return this.http.post(this.APIURL + '/' + this.rottafunction, regconf);
  }






}

>>>>>>> d8eac67 (registrazione corretta)
