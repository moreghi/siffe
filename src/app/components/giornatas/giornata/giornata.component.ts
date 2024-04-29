import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { GiornataService } from './../../../services/giornata.service';
import { ProdottoService } from './../../../services/prodotto.service';
import { PersonaService } from './../../../services/persona.service';
import { Giornata} from '../../../classes/Giornata';
=======
// service
import { GiornataService } from './../../../services/giornata.service';
import { ProdottoService } from './../../../services/prodotto.service';
import { PersonaService } from './../../../services/persona.service';
import { CassasinteticaService } from './../../../services/cassasintetica.service';
// model
import { Giornata} from '../../../classes/Giornata';
import { Cassasintetica } from '../../../classes/Cassasintetica'
>>>>>>> d8eac67 (registrazione corretta)
import { faUserEdit, faTrash, faInfo, faEuroSign, faUtensils, faStream, faChartBar, faList, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
// per gestire inserimento/Modifica con popup
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
//  import { GiornatapopComponent } from './../../components/popups/giornatapop/giornatapop.component';   gestire non con popup
import { DatePipe } from '@angular/common';
// per gestire il popup con esito operazione
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'tr[app-giornata]',
  templateUrl: './giornata.component.html',
  styleUrls: ['./giornata.component.css']
})
export class GiornataComponent implements OnInit {

<<<<<<< HEAD
  @Input('giornata-data') giornata: Giornata;
  @Input('giornata-prog') i: number;
  @Input('functionUser') functionUser: string;
=======

  @Input('giornata-data') giornata: Giornata;
  @Input('giornata-prog') i: number;

  public cassasintetica: Cassasintetica;
>>>>>>> d8eac67 (registrazione corretta)

  faUserEdit = faUserEdit;
  faTrash = faTrash;
  faInfo = faInfo;
  faEuroSign = faEuroSign;
  faUtensils = faUtensils;
  faStream = faStream;
  faChartBar = faChartBar;
  faList = faList;
  faCalendarAlt = faCalendarAlt;

  routeGiornata = '';

  private dataOdierna: Date;
  private datepipe: DatePipe = new DatePipe('en-US');

  private dt1: string;
  private dt2: string;

  // variabili per visualizzazione messaggio di esito con notifier
  public type = '';
  public Message = '';

<<<<<<< HEAD

=======
>>>>>>> d8eac67 (registrazione corretta)
  constructor(public modal: NgbModal,
              private giornataService: GiornataService,
              private prodottoService: ProdottoService,
              private personaService: PersonaService,
<<<<<<< HEAD
              private route: Router,
=======
              private cassasinteticaService: CassasinteticaService,
              private router: Router,
>>>>>>> d8eac67 (registrazione corretta)
              public notifier: NotifierService) {
                this.notifier = notifier;
              }


  ngOnInit(): void {
    this.dataOdierna = new Date();
  }

  // ---------  funziona
  showGiornataDetail(giornata: Giornata) {

<<<<<<< HEAD
=======
    this.router.navigate(['giornata/edit/' + giornata.id + '/' + giornata.idManifestazione ]);
/*

>>>>>>> d8eac67 (registrazione corretta)

    this.routeGiornata = '/giornata/Info/' + this.functionUser + '/' + giornata.id + '/' + giornata.idManifestazione;

    console.log('showGiornataDetail - rotta: ' + this.routeGiornata);


    localStorage.removeItem("SanfraGiornata");
    localStorage.setItem("SanfraGiornata", this.routeGiornata);
    this.route.navigate([`${this.routeGiornata}`]);
<<<<<<< HEAD

=======
*/
>>>>>>> d8eac67 (registrazione corretta)

    }

    showGiornataDetailCassa(giornata: Giornata) {

      this.dt1 = this.datepipe.transform(giornata.dtGiornata, 'dd/MM/yyyy');
      this.dt2 = this.datepipe.transform(this.dataOdierna, 'dd/MM/yyyy');


      if(this.dt1 !== this.dt2) {

        this.type = 'error';
        this.Message = 'Data selezionata non Operativa';
        this.showNotification(this.type, this.Message);
        return;
      }

<<<<<<< HEAD
=======
      alert('preparare invio della cassa')
      /*
>>>>>>> d8eac67 (registrazione corretta)
      this.routeGiornata = '/giornata/Cassa/' + this.functionUser + '/' + giornata.id + '/' + giornata.idManifestazione;
      localStorage.removeItem("SanfraGiornata");
      localStorage.setItem("SanfraGiornata", this.routeGiornata);
      this.route.navigate([`${this.routeGiornata}`]);
<<<<<<< HEAD

      }

      showGiornataDetailCassa1(giornata: Giornata) {

        this.dt1 = this.datepipe.transform(giornata.dtGiornata, 'dd/MM/yyyy');
        this.dt2 = this.datepipe.transform(this.dataOdierna, 'dd/MM/yyyy');
=======
*/
      }

  async    showGiornataDetailCassa1(giornata: Giornata) {
   console.log('show cassa ' + JSON.stringify(giornata))
        let rc = await this.cassasinteticaService.getbyGiornata(giornata.id).subscribe(
          resp => {
                   console.log('essito lettura: ' + resp['rc'])
                if(resp['rc'] === 'ok') {
                   this.cassasintetica = resp['data'];
                   this.router.navigate(['cassasintetica/edit/' + this.cassasintetica.id]);
                 }
                 if(resp['rc'] === 'nf') {
                  this.router.navigate(['cassasintetica/new/' + giornata.id]);


                 }
              },
          error => {
               alert('sono in showGiornataDetailCassa1');
               console.log('showGiornataDetailCassa1 - errore: ' + error.error.message);
               this.type = 'error';
               this.Message = error.message;
             });






        // this.dt1 = this.datepipe.transform(giornata.dtGiornata, 'dd/MM/yyyy');
        // this.dt2 = this.datepipe.transform(this.dataOdierna, 'dd/MM/yyyy');

        this.dt1 = this.giornata.dtGiornata1;
        this.dt2 = this.datepipe.transform(this.dataOdierna, 'dd-MM-yyyy');

        alert('this.dt1:  ' + this.dt1 + 'this.dt2:  ' + this.dt2)

>>>>>>> d8eac67 (registrazione corretta)


        if(this.dt1 !== this.dt2) {

          this.type = 'error';
          this.Message = 'Data selezionata non Operativa';
          this.showNotification(this.type, this.Message);
          return;
        }

<<<<<<< HEAD
=======
        alert('preparare invio della cassa ---------------------- 1')

        /*
>>>>>>> d8eac67 (registrazione corretta)
        this.routeGiornata = '/giornata/Cassa1/' + this.functionUser + '/' + giornata.id + '/' + giornata.idManifestazione;
        localStorage.removeItem("SanfraGiornata");
        localStorage.setItem("SanfraGiornata", this.routeGiornata);
        this.route.navigate([`${this.routeGiornata}`]);
<<<<<<< HEAD

        }


=======
        */

        }

        showGiornataPrenotazioni(giornata: Giornata ){

            this.router.navigate(['PrenotazionidelGiorno/' + this.giornata.id]);

                }
>>>>>>> d8eac67 (registrazione corretta)



      showGiornataDetailProdotti(giornata: Giornata) {

        this.dt1 = this.datepipe.transform(giornata.dtGiornata, 'dd/MM/yyyy');
        this.dt2 = this.datepipe.transform(this.dataOdierna, 'dd/MM/yyyy');


        if(this.dt1 !== this.dt2) {

          this.type = 'error';
          this.Message = 'Data selezionata non Operativa';
          this.showNotification(this.type, this.Message);
          return;
        }

<<<<<<< HEAD
      // se statoUtenti = 0 inizializzo tutti i prodotti sul campo amenu il carattere * per inizializzazione delle scelte
        if(giornata.statoMagazzino === 0) {
          this.prodottoService.resettaamenu().subscribe(
            resp => {
                if(resp['Rc'] === 'OK') {
                  localStorage.removeItem("SanfraGiornata");
                  localStorage.setItem('SanfraGiornata', JSON.stringify(this.giornata));
                  // vecchia personalizzazione - non + valida dal 10/03/2021
                 // localStorage.setItem("SanfraGiornata", this.routeGiornata);
                // --------  this.route.navigate(['giormanifpersone', giornata.id]);
                }
            },
            error => {
              this.type = 'error';
              this.Message = error.message;
              this.showNotification(this.type, this.Message);
              return;
            }
          );
       }
=======

        this.router.navigate(['giornata/Prod/' + this.giornata.id]);


/*

>>>>>>> d8eac67 (registrazione corretta)
        this.routeGiornata = '/giornata/Prod/' + this.functionUser + '/' + giornata.id + '/' + giornata.idManifestazione;
        localStorage.removeItem("SanfraGiornata");
        localStorage.setItem("SanfraGiornata", this.routeGiornata);
        this.route.navigate([`${this.routeGiornata}`]);
<<<<<<< HEAD

        /* ----------------------------------------   attenzione
             sospesa temporaneamente fino a quando non completato prodottoservice

        if(giornata.statoMagazzino === 0) {
            this.prodottoService.resettaamenu().subscribe(
              resp => {
                  if(resp['Rc'] === 'OK') {
                    localStorage.removeItem("SanfraGiornata");
                    localStorage.setItem('SanfraGiornata', JSON.stringify(this.giornata));
                    // vecchia personalizzazione - non + valida dal 10/03/2021
                   // localStorage.setItem("SanfraGiornata", this.routeGiornata);
                 }
              },
              error => {
                this.type = 'error';
                this.Message = error.message;
                this.showNotification(this.type, this.Message);
                return;
              });
           }
           this.route.navigate(['giormanifprodotti', giornata.id]);

=======
>>>>>>> d8eac67 (registrazione corretta)
*/






<<<<<<< HEAD
=======

>>>>>>> d8eac67 (registrazione corretta)
        /*   vecchia modalità di passaggio a form di dettaglio  prima del 2021/05/18
       this.routeGiornata = 'giormanif/' + giornata.id;

       localStorage.removeItem("SanfraGiornata");
       localStorage.setItem('SanfraGiornata', JSON.stringify(this.giornata));
       // vecchia personalizzazione - non + valida dal 10/03/2021
      // localStorage.setItem("SanfraGiornata", this.routeGiornata);
       this.route.navigate(['giormanifprodotti', giornata.id]);
*/


       }


       showGiornataDetailPersone(giornata: Giornata) {


        this.dt1 = this.datepipe.transform(giornata.dtGiornata, 'dd/MM/yyyy');
        this.dt2 = this.datepipe.transform(this.dataOdierna, 'dd/MM/yyyy');


        if(this.dt1 !== this.dt2) {

          this.type = 'error';
          this.Message = 'Data selezionata non Operativa';
          this.showNotification(this.type, this.Message);
          return;

<<<<<<< HEAD
      //    alert('data attuale non operativa dtGiornata: ' + this.dt1 + ' dataodierna: ' + this.dt2);
      //    return;
        }
=======
        }
        this.router.navigate(['giornata/Pers/' + this.giornata.id]);


 //   alert('visualizzazione persone da fare')
>>>>>>> d8eac67 (registrazione corretta)

      // se statoUtenti = 0 inizializzo tutti i prodotti sul campo amenu il carattere * per inizializzazione delle scelte
        if(giornata.statoUtenti === 0) {
          /*   resettare il flag persone
          this.prodottoService.resettaamenu().subscribe(
            resp => {
                if(resp['Rc'] === 'OK') {
                  localStorage.removeItem("SanfraGiornata");
                  localStorage.setItem('SanfraGiornata', JSON.stringify(this.giornata));
                  // vecchia personalizzazione - non + valida dal 10/03/2021
                 // localStorage.setItem("SanfraGiornata", this.routeGiornata);
                // --------  this.route.navigate(['giormanifpersone', giornata.id]);
                }
            },
            error => {
              this.type = 'error';
              this.Message = error.message;
              this.showNotification(this.type, this.Message);
              return;
            });*/
       }
<<<<<<< HEAD
=======

         /*
>>>>>>> d8eac67 (registrazione corretta)
        this.routeGiornata = '/giornata/Pers/' + this.functionUser + '/' + giornata.id + '/' + giornata.idManifestazione;
        localStorage.removeItem("SanfraGiornata");
        localStorage.setItem("SanfraGiornata", this.routeGiornata);
        this.route.navigate([`${this.routeGiornata}`]);
<<<<<<< HEAD
=======

        */
>>>>>>> d8eac67 (registrazione corretta)
       }



       showGiornataDetailCommande(giornata: Giornata) {

        this.dt1 = this.datepipe.transform(giornata.dtGiornata, 'dd/MM/yyyy');
        this.dt2 = this.datepipe.transform(this.dataOdierna, 'dd/MM/yyyy');

        if(this.dt1 !== this.dt2) {

          this.type = 'error';
          this.Message = 'Data selezionata non Operativa';
          this.showNotification(this.type, this.Message);
          return;
        }

      // controllo se giornata aperta

        if(this.giornata.stato !==  2) {

          this.type = 'error';
          this.Message = 'Giornata non Operativa - Registrazione commande non consentita';
          this.showNotification(this.type, this.Message);
          return;
        }

<<<<<<< HEAD
=======
       alert('visualizzazione commande da fare')


        /*
>>>>>>> d8eac67 (registrazione corretta)

        this.routeGiornata = '/giornata/Commande/' + this.functionUser + '/' + giornata.id + '/' + giornata.idManifestazione;
        localStorage.removeItem("SanfraGiornata");
        localStorage.setItem("SanfraGiornata", this.routeGiornata);
        this.route.navigate([`${this.routeGiornata}`]);
<<<<<<< HEAD

=======
*/
>>>>>>> d8eac67 (registrazione corretta)

      }

      // visualizzo la popup con la selezione della giornata
      showGiornata(giornata: Giornata) {

<<<<<<< HEAD
=======
        alert('visualizzazione giornata da fare')
        /*
>>>>>>> d8eac67 (registrazione corretta)
      const test = 'giornata/edits/' + giornata.id + '/' + this.giornata.idManifestazione + '/' + this.giornata.dtGiornata;
      console.log('go merda ---------->  ' + test);

      alert('effettuo il lancio al dettaglio ');

      if(this.functionUser === 'Inqu') {
        this.route.navigate(['giornata/inqu/' + giornata.id + '/' + this.giornata.idManifestazione]);
       }
      if(this.functionUser === 'Edit') {
        this.route.navigate(['giornata/edit/' + giornata.id + '/' + this.giornata.idManifestazione]);
       }
      if(this.functionUser === 'Edits') {
        this.route.navigate(['giornata/edits/' + giornata.id + '/' + this.giornata.idManifestazione]);
       }


<<<<<<< HEAD
=======
       */

>>>>>>> d8eac67 (registrazione corretta)
      /*    se effettuo uso con form popup

        const ref = this.modal.open(GiornatapopComponent, {size:'lg'});
        ref.componentInstance.selectedUser = giornata;

        ref.result.then(
          (yes) => {
            console.log('Click YES');
          },
          (cancel) => {
            console.log('click Cancel');
          }
        )
*/

      }

      /**
* Show a notification
*
* @param {string} type    Notification type
* @param {string} message Notification message
*/

showNotification( type: string, message: string ): void {
  this.notifier.notify( type, message );
}

<<<<<<< HEAD
/*      da controllare   -- è da buttare

      if(giornata.statoUtenti === 0) {
          //  mettere reset persone
          /*
          this.prodottoService.resettaamenu().subscribe(
            resp => {
                if(resp['Rc'] === 'OK') {
                  localStorage.removeItem("SanfraGiornata");
                  localStorage.setItem('SanfraGiornata', JSON.stringify(this.giornata));
                  // vecchia personalizzazione - non + valida dal 10/03/2021
                 // localStorage.setItem("SanfraGiornata", this.routeGiornata);
                // --------  this.route.navigate(['giormanifpersone', giornata.id]);
                }
            },
            error => {
              this.type = 'error';
              this.Message = error.message;
              this.showNotification(this.type, this.Message);
              return;
            }
          );
       }

       this.routeGiornata = '/giornata/Pers/' + this.functionUser + '/' + giornata.id + '/' + giornata.idManifestazione;
       localStorage.removeItem("SanfraGiornata");
       localStorage.setItem("SanfraGiornata", this.routeGiornata);
       this.route.navigate([`${this.routeGiornata}`]);




*/



=======
>>>>>>> d8eac67 (registrazione corretta)

}

