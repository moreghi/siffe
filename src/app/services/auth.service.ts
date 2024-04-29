
<<<<<<< HEAD
=======

>>>>>>> d8eac67 (registrazione corretta)
/*   link per documentazione utilizzata
1     https://www.bezkoder.com/angular-11-jwt-auth/
2     https://www.bezkoder.com/node-js-angular-11-jwt-authentication/
3     https://dev.to/bezkoder/node-js-angular-11-jwt-authentication-authorization-example-4add    inizio
4     https://github.com/bezkoder/node-js-jwt-auth/blob/master/app/controllers/auth.controller.js      git
5     https://www.bezkoder.com/angular-11-node-js-express-mysql/
6     https://dev-to.translate.goog/bezkoder/node-js-angular-11-jwt-authentication-authorization-example-4add?_x_tr_sl=en&_x_tr_tl=it&_x_tr_hl=it&_x_tr_pto=nui,sc
7     https://www-bezkoder-com.translate.goog/node-js-jwt-authentication-mysql/?_x_tr_sl=en&_x_tr_tl=it&_x_tr_hl=it&_x_tr_pto=nui,sc (middleware verifica email)
8     https://dev.to/bezkoder/node-js-angular-11-jwt-authentication-authorization-example-4add

*/

<<<<<<< HEAD
=======
//  attenzione  tabelle e metodi commentati per creazione Modello  -- struttura valida  -- mettere le tabelle necessarie


>>>>>>> d8eac67 (registrazione corretta)
import {HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import {Injectable, Output, EventEmitter} from '@angular/core';
import { User } from '../classes/User';
import { Registerconfirmed } from '../classes/Register_confirmed';
<<<<<<< HEAD
import { PrenotazioneConfirm } from '../classes/PrenotazioneConfirm';
=======
//  import { PrenotazioneConfirm } from '../classes/PrenotazioneConfirm';
>>>>>>> d8eac67 (registrazione corretta)

import {tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

import { JwtInterface } from './../interfaces/jwt';
import { Observable } from 'rxjs';    // 24/11/2021

/*
export interface Jwt {
// definisco l'interfaccia dei dati che ottengo dalla chiamata di login
  access_token: string;
  token_type: string;
  expires_in: number;
// parametri aggiuntivi - vedi AuthController in laraapi
  cognome: string;
  username: string;
  password: string;
}  */

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public  user: User;
  public registerconfirmed: Registerconfirmed;
<<<<<<< HEAD
  public prenotazioneConfirm: PrenotazioneConfirm;    // prenotazione serata a sanfra
=======
 // public prenotazioneConfirm: PrenotazioneConfirm;    // prenotazione serata a sanfra
>>>>>>> d8eac67 (registrazione corretta)
  private isUserLogged = true;

  // emettiamo degli eventi (la auth.service) che potranno essere ascoltati su altri componenti
  @Output() usersignedin = new EventEmitter<User>();
  @Output() usersignedup = new EventEmitter<User>();
  @Output() userlogout = new EventEmitter();
  @Output() userchgpwd = new EventEmitter<User>();

  // private APIAUTHURL = 'http://localhost:8000/api/auth/';  // definisco l'url su cui effettuare la lettura sul server  --- originale

  private APIAUTHURL = environment.APIAUTURL;  // definisco l'url su cui effettuare la lettura sul server
  private func = '';
<<<<<<< HEAD
=======
  private rottafunction = '';
>>>>>>> d8eac67 (registrazione corretta)

  constructor(private http: HttpClient) {
  }

  isUserLoggedIn() {           // ---- ok
    // faccio la verifica se l'utente è loggato
    // con !! (doppia negazione) trasformiamo in booleano il risultato della verifica su localStorage
    this.isUserLogged = !!localStorage.getItem('token');     // originariamente 'acces_token'

                   console.log('auth.service - isUserLoggedIn -- isUserLogged: ' + this.isUserLogged);

<<<<<<< HEAD
=======

>>>>>>> d8eac67 (registrazione corretta)
    return this.isUserLogged;

  }

/*   versione senza localstorage
  signIn(email: string, password: string): Observable<any> {
    console.log('auth.service - inizio signin');
    return this.http.post(this.APIAUTHURL + 'login', {
      email,
      password
    });
  }

 */


//    versione in uso fino al 23/11/2021
//  versione 2 - sposto il subscribe nel componente che chiama il service
<<<<<<< HEAD
 async signIn(email: string, password: string): Promise<JwtInterface> {
=======
 signIn(email: string, password: string) {          // : Promise<JwtInterface>
>>>>>>> d8eac67 (registrazione corretta)

  // ok test
  // alert('auth-service -- signIn: - username: ' + username + ' --  password: ' + password);
   // localStorage.setItem('userLogged', username);
   // localStorage.setItem('token', username);    // provvisorio sarà modificato dal valore token dopo lettura backoffice
  //  return;
  // fine test


<<<<<<< HEAD
=======

    // -------------------------   versione con promise (da errore)
/*
>>>>>>> d8eac67 (registrazione corretta)
    return this.http.post(this.APIAUTHURL + 'login',
      {
        email,
        password
      }
    ).pipe(
      tap(
        (payload: JwtInterface) => {

          // salvo su session storage id utente loggato
          sessionStorage.setItem('id', String(payload.id));

          localStorage.setItem('user', JSON.stringify(payload));            // campi aggiuntivi messi per testare - facoltativi
          localStorage.setItem('username', payload.username);
          localStorage.setItem('cognome', payload.cognome);
          localStorage.setItem('email', payload.email);
<<<<<<< HEAD
          localStorage.setItem('idruoloday', String(payload.idruoloday));     //  user_ruolo
          localStorage.setItem('id', String(payload.id));
          localStorage.setItem('user_ruolo', String(payload.level));
          localStorage.setItem('level', String(payload.level));
          localStorage.setItem('idruoloweb', String(payload.idruoloweb));
=======
          localStorage.setItem('id', String(payload.id));
          localStorage.setItem('user_ruolo', String(payload.level));
          localStorage.setItem('level', String(payload.level));
>>>>>>> d8eac67 (registrazione corretta)
          localStorage.setItem('token_type', payload.token_type);
          localStorage.setItem('expires_in', JSON.stringify(payload.expires_in));

          localStorage.setItem('token', payload.accessToken);

          console.log(`backend ----access_token ------------   da login ${payload.accessToken}`);

          const user = new User();
          user.cognome = payload.cognome;
          user.username = payload.username;
<<<<<<< HEAD
          user.idRuolo_Day = parseInt(payload.level, 10);
=======
>>>>>>> d8eac67 (registrazione corretta)
          this.usersignedin.emit(user);
          return true;

        }
<<<<<<< HEAD
      )).toPromise();


  }






  registerMoreno(cognome: string, nome: string, username: string, email: string, password: string) {

    console.log(`frontend - auth.service - registerMoreno ------  inizio -- cognome passato: ${cognome} ` );

    this.registerconfirmed = new Registerconfirmed();
    this.registerconfirmed.email = email;
    this.registerconfirmed.username = username;
    this.registerconfirmed.password = password;
    this.registerconfirmed.cognome = cognome;
    this.registerconfirmed.nome = nome;

   //  registerMoreno(account: Account) {
    console.log(`auth.service - registerMoreno ${this.registerconfirmed.cognome} ` );
    return this.http.post(this.APIAUTHURL + "confirmedregister", this.registerconfirmed);
    //  return this.http.post(`this.APIAUTHURL/gmmailforregister`,  this.registerconfirmed );

  }

  // registrazione prenotazione cena a sanfra tramite mail 2022/03/16
  registerConfermetPrenotazioneMoreno(cognome: string, nome: string, email: string, telefono: string, giornata: string, numpersone: number) {

=======
      ));


      */

   // ----------------------------  versione con subscribe

  console.log("auth.Service ---- passati: email: " + email + " -------- Password: " + password  );

   return this.http.post(this.APIAUTHURL + 'login',    // nuova modalità - con email di prenotazione da confermare
      {
        email,
        password
      });


/*
.subscribe(
        (payload: JwtInterface) => {
          // salvo su localStorage i valori del token
          localStorage.setItem('token', payload.accessToken);
          localStorage.setItem('username', payload.username);
          localStorage.setItem('cognome', payload.cognome);
          localStorage.setItem('email', payload.email);
          localStorage.setItem('level', payload.level);
          localStorage.setItem('id', String(payload.id));   // posso salvare su localstorage solo campi string
          localStorage.setItem('user', String(payload));
          this.usersignedup.emit(this.user);
          this.isUserLogged = true;

    },
    error => {
      console.log(error);
    });


    */

}

// metodo creato da Moreno per creare evenemitter da ascoltare i nav
creaevenemitterlogin(user: User) {
  localStorage.removeItem('evemitlogin');
  this.usersignedin.emit(user);
  localStorage.setItem('evemitlogin', String(user.id));
}



  // registrazione prenotazione cena a sanfra tramite mail 2022/03/16
  registerConfermetPrenotazioneMoreno(cognome: string, nome: string, email: string, telefono: string,
                                      giornata: string, numpersone: number) {

  // metodo commentato per la creazione del modello  .. funzione valida se metto  classe/service

/*
>>>>>>> d8eac67 (registrazione corretta)
    console.log(`frontend - auth.service - registerConfermetPrenotazioneMoreno ------  inizio -- cognome passato: ${cognome} ` );

    this.prenotazioneConfirm = new PrenotazioneConfirm();
    this.prenotazioneConfirm.cognome = cognome;
    this.prenotazioneConfirm.nome = nome;
    this.prenotazioneConfirm.email = email;
    this.prenotazioneConfirm.telefono = telefono;
    this.prenotazioneConfirm.datapren = giornata;
    this.prenotazioneConfirm.persone = numpersone;

    console.log('pronto per registrare la prenotazioen_confirm ' + JSON.stringify(this.prenotazioneConfirm));

    let merda = this.APIAUTHURL + 'confirmedprenotazione';
    console.log('path per lanciare la registrazione della prenotazione: ', merda);



    return this.http.post(this.APIAUTHURL + 'confirmedprenotazione', this.prenotazioneConfirm);

    //  return this.http.post(`this.APIAUTHURL/gmmailforregister`,  this.registerconfirmed );

<<<<<<< HEAD
  }













=======
    */

  }

>>>>>>> d8eac67 (registrazione corretta)
  signUp(cognome: string, nome: string, username: string, email: string, password: string) {

    console.log('authService - SignUp ' + username + ' .... ' + email + ' --- ' + password + ' --- ' + cognome + ' --- ' + nome);

    this.user = new User();
    this.user.email = email;
    this.user.username = username;
<<<<<<< HEAD
    this.user.password = password;
=======
    this.user.password = password.toLowerCase();
>>>>>>> d8eac67 (registrazione corretta)
    this.user.cognome = cognome;
    this.user.nome = nome;


    // return this.http.post(this.APIAUTHURL + "/signup",     <---  vecchia modalità con creazione immediata utente
    return this.http.post(this.APIAUTHURL + "createUserbyRegister",    // nuova modalità - con email di prenotazione da confermare
      {
        email,
        password,
        username,
        nome,
        cognome
      }).subscribe(
        (payload: JwtInterface) => {
          // salvo su localStorage i valori del token
          localStorage.setItem('token', payload.accessToken);
          localStorage.setItem('username', payload.username);
          localStorage.setItem('cognome', payload.cognome);
          localStorage.setItem('email', payload.email);
          localStorage.setItem('level', payload.level);
          localStorage.setItem('id', String(payload.id));   // posso salvare su localstorage solo campi string
          localStorage.setItem('user', String(payload));
          this.usersignedup.emit(this.user);
          this.isUserLogged = true;

    },
    error => {
      console.log(error);
    });
}

<<<<<<< HEAD


=======
>>>>>>> d8eac67 (registrazione corretta)
  logout() {   // ------  ok

    // devo eliminare tutte le eventuali variabili salvate su localStorage
    localStorage.removeItem('cognome');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('idruoloweb');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('user_ruolo');
    localStorage.removeItem('username');
    localStorage.removeItem('level');
    localStorage.removeItem('idruoloday');
    localStorage.removeItem('token_type');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('idGiornata');

<<<<<<< HEAD
=======
    localStorage.removeItem('Druolo');
    localStorage.removeItem('emBigliettoEvento');
    localStorage.removeItem('emBigliettoTipo');
    localStorage.removeItem('evemitlogin');
    localStorage.removeItem('functUser');
    localStorage.removeItem('tipoBiglietto');
    localStorage.removeItem('idPrenotazione');
    localStorage.removeItem('operBiglietto');

>>>>>>> d8eac67 (registrazione corretta)
    this.userlogout.emit();
    this.isUserLogged = false;
  }


  getUtente(): User {     // ----- ok
    // salvo su una variabile i dati dell'utente salvati in localStorage
    const data = JSON.parse(localStorage.getItem('user'));  // normalizzo la variabile user salvata con JSON.stringify
    const user = new User();
    if (data) {
<<<<<<< HEAD
      user.idRuolo_Day = data.user_ruolo;
=======
    //  user.idRuolo_Day = data.user_ruolo;   user_ruolo non esiste  22/03/2023
>>>>>>> d8eac67 (registrazione corretta)
      user.username = data.username;
      user.cognome = data.cognome;
      user.idRuolo_Day = parseInt(data.level, 10);
    }
    return user;
  }

  getToken() {    // -----  ok
    return localStorage.getItem('token');
  }



  sendAccountConfirmedLink(email: string, cognome: string, nome: string, username: string, password: string) {
    return  this.http.post(this.APIAUTHURL + "sendAccountConfirmedLink", {
      email,
      cognome,
      nome,
      username,
      password
    });
  }


   // effettuo il reset della password tramite email
 sendPasswordResetLink(email: string) {
    return  this.http.post(this.APIAUTHURL + "sendPasswordResetLink", { email
       });
 }

 // in password imposto la nuova password
 confchangePassword(email: string, password: string) {

   console.log('sono in auth.Service  -  confchangePasssword');
   console.log('email: -->  ' + email);
   console.log('password: -->  ' + password);
<<<<<<< HEAD

=======
   console.log('url per modifica: ' + this.APIAUTHURL + "confchangePassword")
>>>>>>> d8eac67 (registrazione corretta)

   return  this.http.post(this.APIAUTHURL + "confchangePassword",
   {
      email,
      password
  });
 }

 //  spostato su forgotConfirmed   - da eliminare
<<<<<<< HEAD
 /*
 forgotPassword(email: string) {
  return this.http.post(this.APIAUTHURL + "forgotpassword", { email });
}
*/
=======

 forgotPassword(email: string) {
  return this.http.post(this.APIAUTHURL + "forgotpassword", {
     email
      });
}



>>>>>>> d8eac67 (registrazione corretta)



confresetPassword(email: string, newpassword: string) {
<<<<<<< HEAD
  this.user = new User();
  this.user.email = email;
  this.user.password = newpassword;
  return this.http.post(this.APIAUTHURL + "confforgotpassword", { email, newpassword });
=======

  console.log('authService ------------  sono dentro a confresetPassword -- chiamo ' + this.APIAUTHURL + "resetpwduser")
  this.user = new User();
  this.user.email = email;
  this.user.password = newpassword;
  return this.http.post(this.APIAUTHURL + "resetpwduser", { email, newpassword });   // confforgotpassword
>>>>>>> d8eac67 (registrazione corretta)
}


// da fare in backend
sendConfirmPrenotazione(email: string, cognome: string, nome: string, dataserata: string, posti: number) {
  return  this.http.post(this.APIAUTHURL + "sendConfirmPrenotazione", {
    email,
    cognome,
    nome,
    dataserata,
    posti
  });
}

<<<<<<< HEAD


=======
controlemail(email: string) {
   return this.http.post(this.APIAUTHURL + "controlemail", { email });
}


// devo passare in chiaro la password
controlpassword(email: string, password: string)  {
  this.rottafunction = "controlpassword";
  return this.http.get(this.APIAUTHURL + this.rottafunction +  '/' + email +  '/' + password);
}

>>>>>>> d8eac67 (registrazione corretta)


//  versione 1   con subscribe fatta nel service
  /*
  signIn(email: string, password: string) {
    // metodo con il quale l'utente si logga
    // alert(' auth-service: '  + email + ' -- ' + password);

    // salvo in localstorage, come token' la email per indicare che mi sono loggato


      localStorage.clear();
      this.http.post(this.APIAUTHURL + 'login',
            {
              email: email,
              password: password
            }).subscribe(
              (payload: Jwt) => {   // payload variabile che identifica risposta del server

                localStorage.setItem('token', payload.access_token);
                console.log(payload)
                localStorage.setItem('user', JSON.stringify(payload));
<<<<<<< HEAD
                // campi aggiuntivi messi per testare - facoltativi
=======
                // campi aggiuntivi messi per testare - facoltausersignedintivi
>>>>>>> d8eac67 (registrazione corretta)
                localStorage.setItem('user_name', payload.user_name);
                localStorage.setItem('user_email', payload.email);
                localStorage.setItem('user_psw', payload.password);

                // creo l'evento che sarà gestito da altri componenti
                let user = new User();
                user.name = payload.user_name;
                user.email =  payload.email;
                this.usersignedin.emit(user);
                return true;  // provvisorio

              },
                (httpresp: HttpErrorResponse)  => {
                 console.log(httpresp.message);
                  alert('AuthService-login_Error: ' + httpresp.message);
               }
            )

  }
  */

// primo metodo - funziona
  /*
  signUp(username: string, email: string, password: string) {   // ----- ok
    // metodo per la registrazione dell 'utente

      const user = new User();
      user.name = username;
      user.email =  email;

      this.http.post(this.APIAUTHURL + 'signup',
          {
            email: email,
            password: password,
            name: username
          }).subscribe(
            (payload: Jwt) => {   // payload variabile che identifica risposta del server

              localStorage.setItem('token', payload.access_token);
              console.log(payload);
              localStorage.setItem('user', JSON.stringify(payload));
              // campi aggiuntivi messi per testare - facoltativi
              localStorage.setItem('user_name', payload.user_name);
              localStorage.setItem('user_email', payload.email);
              localStorage.setItem('user_psw', payload.password);

              this.usersignedup.emit(user);
              return true;  // provvisorio

            },
              (httpresp: HttpErrorResponse)  => {
               console.log(httpresp.message);
                alert('AuthService-signup: ------> ' + httpresp.message);
             })

  }
    */


/*      da  sistemare
  async chgpwd(username: string, emailx: string, newpassword: string): Promise<boolean> {
    const headers = new HttpHeaders(
      {
        Authorization: 'Bearer ' +  this.getToken()
      }
    );
    const utente = new Utente();
    utente.cognome = username;
    user.email = emailx;
    user.password = newpassword;


    this.func = 'chgpwd';
    // return this.http.post<boolean>(this.APIAUTHURL + 'chgpwd', user, {headers}).toPromise();    originale

    return this.http.post<boolean>(this.APIAUTHURL + 'chgpwd', user, {headers}).pipe(
      tap(
        (payload: boolean) => {

          localStorage.setItem('Func', this.func);
          const user = new User();
          user.name = username;
          user.email = emailx;
          this.userchgpwd.emit(user);
          return true;

        }
      )).toPromise();

  }
 */


// Secondo metodo -

   // vecchia versione con registrazione immediata senza mail
/*
   signUp(cognome: string, username: string, password: string) {   // ----- ok

    alert('auth-signup : ' + this.APIAUTHURL + 'signup');




    return this.http.post(this.APIAUTHURL + 'signup',
      {
        cognome,
        username,
        password

      }).pipe(
      tap(
        (payload: JwtInterface) => {   // payload variabile che identifica risposta del server

          localStorage.setItem('token', payload.access_token);
          console.log(payload);
          localStorage.setItem('user', JSON.stringify(payload));
          // campi aggiuntivi messi per testare - facoltativi
          localStorage.setItem('username', payload.username);
          localStorage.setItem('cognome', payload.cognome);
          localStorage.setItem('user_ruolo', payload.level);
          localStorage.setItem('id', String(payload.id));

          const user = new User();
          user.username = username;
          user.cognome = cognome;
          user.password = password;
          user.idRuolo_Day = parseInt(payload.level, 10);
          this.usersignedup.emit(user);
          return true;  // provvisorio
        },
        (httpResp: HttpErrorResponse) => {

          alert(httpResp.error);
        }
      ));

  }

*/




}
<<<<<<< HEAD
=======


/*

  spostato in registerconfirmedService per gestire l'invio della mail e confermare la registrazione

  registerMoreno(cognome: string, nome: string, username: string, email: string, password: string) {

    console.log(`frontend - auth.service - registerMoreno ------  inizio -- cognome passato: ${cognome} ` );

    this.registerconfirmed = new Registerconfirmed();
    this.registerconfirmed.email = email;
    this.registerconfirmed.username = username;
    this.registerconfirmed.password = password;
    this.registerconfirmed.cognome = cognome;
    this.registerconfirmed.nome = nome;

   //  registerMoreno(account: Account) {
    console.log(`auth.service - registerMoreno ${this.registerconfirmed.cognome} ` );
    return this.http.post(this.APIAUTHURL + "confirmedregister", this.registerconfirmed);
    //  return this.http.post(`this.APIAUTHURL/gmmailforregister`,  this.registerconfirmed );

  }






*/
>>>>>>> d8eac67 (registrazione corretta)
