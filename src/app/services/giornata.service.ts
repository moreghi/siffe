import { Injectable } from '@angular/core';
import { Giornata } from '../classes/Giornata';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
<<<<<<< HEAD
import { AuthService } from '../services/auth.service';
=======
import { AuthService } from './auth.service';
>>>>>>> d8eac67 (registrazione corretta)

@Injectable({
  providedIn: 'root'
})
export class GiornataService {

  giornata: Giornata[] = [];  // definisco i dati come array vuoto

<<<<<<< HEAD
  private rotta = "/giornates";
  private rottafunction = '';
  private url = '';

  private rottadayActive = '/giornataact';
  private rottaManif = '/giornataManif';

  private rootGiornatalastid  = "/lastid";

  private rootGiornatebyManif = '/getGiornateByManifId/';
  private rootGiornatebyManifFiltro  = '/getGiornateByManifIdFiltrato/';

  private rootGiornatebyManifStato  = '/getGiornateByManifIdbyStato/';
  private rootGirnataactive = '/getGiornataactive/';
  private rootlastGiornatabyManif = '/getLastGiornataByManifId/';

  private APIURL = environment.APIURL + this.rotta;  // definisco l'url su cui effettuare la lettura sul server

  private APIURLLAST = environment.APIURL + this.rottaManif;

  private tipoFiltro = 0;
=======
  public rotta = "/giornates";
  public rottafunction = '';
  public url = '';

  public rottaManif = '/giornataManif';

  public rootlastGiornatabyManif = '/getLastGiornataByManifId/';

  public APIURL = environment.APIURL + this.rotta;  // definisco l'url su cui effettuare la lettura sul server

  public APIURLLAST = environment.APIURL + this.rottaManif;

  public tipoFiltro = 0;
>>>>>>> d8eac67 (registrazione corretta)

  constructor(private http: HttpClient,
              private auth: AuthService) { }

<<<<<<< HEAD
=======

>>>>>>> d8eac67 (registrazione corretta)
              getAuthHeader(): HttpHeaders {
                const headers = new HttpHeaders(
                  {
                    Autorization: 'Bearer ' + this.auth.getToken()
                  }
                );
                return headers;
              }

<<<<<<< HEAD
              // ok
              getGiornate() {
=======



              // ok
              getAll() {
>>>>>>> d8eac67 (registrazione corretta)

                // ritorniamo un observoble - il subscribe devo farlo su users.component.ts

                // la chiamata la faccio solo se ho il token per abilitare la lettura solo a uteti loggati

                    // primo metodo passando il token in chiaro su url
                    //  return this.http.get(this.APIURL + '?token=' + this.auth.getToken());       // <---- 1° metodo  in chiaro su url

          // secondo metodo passando il token non in chiaro come header                   // <---- 2* metodo come header (non in chiaro)
                     return this.http.get(this.APIURL,  {
                      headers: this.getAuthHeader()
                    });      // ok;      // ok

                  }
               // ok
<<<<<<< HEAD
              getGiornata(id: number) {
=======

              getbyId(id: number) {
>>>>>>> d8eac67 (registrazione corretta)
                      return this.http.get(this.APIURL + '/' + id,  {
                        headers: this.getAuthHeader()
                      });      // ok;
                  }
              // ok
<<<<<<< HEAD
              deleteGiornata(giornata: Giornata) {
                      return this.http.delete(this.APIURL + '/' + giornata.id,  {
                        headers: this.getAuthHeader()
                      });      // ok;

                  }
              // ok
              updateGiornata(giornata: Giornata) {
                  console.log(`aggiornamento giornata ${giornata.id} `);
                  return this.http.put(this.APIURL + '/' + giornata.id, giornata, {
                  headers: this.getAuthHeader()
                  });
                 }
              // ok
              createGiornata(giornata: Giornata){
                  return this.http.post(this.APIURL, giornata,  {
                    headers: this.getAuthHeader()
=======
              delete(giornata: Giornata) {
                this.rottafunction = 'deletebyid';
                return this.http.delete(this.APIURL + '/' + this.rottafunction + '/' + giornata.id,  {
                     headers: this.getAuthHeader()
                      });      // ok;
                  }

              update(giornata: Giornata) {
                this.rottafunction = 'updatebyid';
                return this.http.put(this.APIURL + '/' + this.rottafunction + '/' + giornata.id, giornata,  {
                   headers: this.getAuthHeader()
                  });
                 }
              // ok
              create(giornata: Giornata){
                this.rottafunction = 'create';
                return this.http.post(this.APIURL + '/' + this.rottafunction, giornata,  {
                   headers: this.getAuthHeader()
>>>>>>> d8eac67 (registrazione corretta)
                  });      // ok;
                  }

              // metodo gestito in laravel
              // per nodejs  smembrato nei die metodi getGiornateManifAll   e  getGiornateManifFiltro
              // OK  -  FATTI DUE MODULI SEPARATI
<<<<<<< HEAD
              getGiornateforManif(id: number, tipoRic: string) {

                  // ritorniamo un observoble - il subscribe devo farlo su users.component.ts

                  // la chiamata la faccio solo se ho il token per abilitare la lettura solo a uteti loggati

                      // primo metodo passando il token in chiaro su url
                      //  return this.http.get(this.APIURL + '?token=' + this.auth.getToken());       // <---- 1° metodo  in chiaro su url

                      // secondo metodo passando il token non in chiaro come header



              //alert('GiornataService - Parametri: ' + tipoRic + ' tipo filtro: ' + this.tipoFiltro);

                      if(tipoRic === 'T') {
                        return this.http.get(this.APIURL + this.rootGiornatebyManif + id,  {
                          headers: this.getAuthHeader()
                        });      // ok;
                      } else {
                         return this.http.get(this.APIURL + this.rootGiornatebyManifStato + id + '/tipo/' + tipoRic,  {
                          headers: this.getAuthHeader()
                        });      // ok;
                      }
                  }

              // ok
              getGiornateManifAll(id: number) {
                return this.http.get(this.APIURL + this.rootGiornatebyManif + id,  {
                  headers: this.getAuthHeader()
                });      // ok;
              }
=======
              //  'getGiornateByManif'
              getGiornateforManif(id: number) {
                this.rottafunction = 'getgiornatebymanif';


                let path = this.APIURL + '/' + this.rottafunction + '/' + id
                console.log('service -- giornata - path: ' + path )



                return this.http.get(this.APIURL + '/' + this.rottafunction + '/' + id ,  {
                          headers: this.getAuthHeader()
                        });      // ok;
                 }
>>>>>>> d8eac67 (registrazione corretta)
              // OK
              getGiornateManifbyStato(id: number, tipoRic: string) {
                  this.tipoFiltro = 0;
                  switch (tipoRic) {
                    case 'T':
                        break;
                   case 'A':
                       this.tipoFiltro = 2;
                       break;
                   case 'C':
                       this.tipoFiltro = 3;
                       break;
                   case 'E':
                       this.tipoFiltro = 4;
                       break;
                   case 'N':
                        this.tipoFiltro = 1;
                        break;
                   default:
                       tipoRic = 'T';
                       break;
                   }
<<<<<<< HEAD
                  return this.http.get(this.APIURL + this.rootGiornatebyManifStato + id + '/tipo/' + this.tipoFiltro,  {
                  headers: this.getAuthHeader()
                });      // ok;
=======
                   this.rottafunction = 'getGiornateByManifbyStato';
                       return this.http.get(this.APIURL + '/' + this.rottafunction + '/' + id + '/tipo/' + this.tipoFiltro,  {
                      headers: this.getAuthHeader()
                    });      // ok;
>>>>>>> d8eac67 (registrazione corretta)
              }


              // ok
              getGiornataactive()  {
<<<<<<< HEAD

                this.rottafunction = environment.APIURL + this.rotta + this.rottadayActive + this.rootGirnataactive;
                  return this.http.get(this.rottafunction,  {
                    headers: this.getAuthHeader()
                  });      // ok;      // ok  // ok;

                  }

              // ok
              getLastGiornataid() {

                this.APIURLLAST = environment.APIURL + this.rottaManif + this.rootGiornatalastid;

                return this.http.get(this.APIURLLAST ,  {
                  headers: this.getAuthHeader()
                });      // ok;

                 }
              // Ok
              getLastGiornataidbyManif(id: number) {

                this.APIURLLAST = environment.APIURL + this.rotta + this.rootlastGiornatabyManif  + id;

                return this.http.get(this.APIURLLAST  ,  {
=======
                this.rottafunction = 'giornataact/getGiornataactive/';
                    return this.http.get(this.APIURL + '/' + this.rottafunction ,  {
                    headers: this.getAuthHeader()
                  });      // ok;      // ok  // ok;
               }

              // Ok
              getLastGiornataidbyManif(id: number) {

                this.rottafunction = 'getLastGiornataByManifId';
                return this.http.get(this.APIURL + '/' + this.rottafunction + '/' + id,  {
>>>>>>> d8eac67 (registrazione corretta)
                  headers: this.getAuthHeader()
                });      // ok;

                 }
              // ok
<<<<<<< HEAD
              getGiornatebyManif(id: number) {

                return this.http.get(this.APIURL + this.rootGiornatebyManif + id,  {
                        headers: this.getAuthHeader()
                      });      // ok;

                 }

=======
              // getGiornatebyManif(id: number) {
              //   this.rottafunction = 'getGiornateByManifId/';
              //   return this.http.get(this.APIURL + '/' + this.rottafunction + '/' + id,  {
              //           headers: this.getAuthHeader()
              //         });      // ok;
              //    }
>>>>>>> d8eac67 (registrazione corretta)

     // per fare grafici
     getforChart(id: number) {

      this.rottafunction = 'getforChart/graph';

      return this.http.get(this.APIURL + '/' + this.rottafunction  + '/' + id).map(result => result);      // ok      // ok      // ok

   }

<<<<<<< HEAD
   getGiornateprenotabili() {
    const stato = 3;   // cerco giornate con stato < 3
=======
   getGiornateprenotabili(stato: number) {

>>>>>>> d8eac67 (registrazione corretta)
    this.rottafunction = 'getGiornateByStato/' + stato;
    return this.http.get(this.APIURL + '/' + this.rottafunction ,  {
            headers: this.getAuthHeader()
          });      // ok;

     }
              /*
              bisogna fare  prima
                  npm install --save rxjs-compat

              e poi inserire in import

                import { map } from 'rxjs/operators';
                import 'rxjs/add/operator/map';    // per gestire i grafici

                https://www.youtube.com/watch?v=RTzi5DS7On4      per esempio

              */



<<<<<<< HEAD


=======
                getAllGiornatebyManif(id: number) {
                  this.rottafunction = 'getAllGiornatebyManif';
                  return this.http.get(this.APIURL + '/' + this.rottafunction + '/' + id ,  {
                            headers: this.getAuthHeader()
                          });      // ok;
                   }


                   getGiornataggmmaaaa(ggmmaaaa: string) {
                    this.rottafunction = 'getbyggmmaaaa';
                    return this.http.get(this.APIURL + '/' + this.rottafunction + '/' + ggmmaaaa ,  {
                              headers: this.getAuthHeader()
                            });      // ok;
                     }
>>>>>>> d8eac67 (registrazione corretta)

}
