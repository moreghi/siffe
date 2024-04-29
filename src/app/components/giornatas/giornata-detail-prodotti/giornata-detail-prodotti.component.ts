<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { faPlusSquare, faSearch, faSave, faUserEdit, faMinus, faPlus, faWindowClose, faTrash, faReply, faUndo, faHandPointLeft, faTrashAlt, faInfoCircle, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

=======

import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { faPlusSquare, faSearch, faSave, faUserEdit, faMinus, faPlus, faWindowClose, faTrash, faReply } from '@fortawesome/free-solid-svg-icons';
>>>>>>> d8eac67 (registrazione corretta)
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
// classe
import { Giornata } from '../../../classes/Giornata';
import { Manifestazione } from '../../../classes/Manifestazione';
<<<<<<< HEAD
import { Prodotto } from '../../../classes/Prodotto';
import { Ttipologia } from '../../../classes/T_tipologia';

// services
import { ManifestazioneService } from './../../../services/manifestazione.service';
import { GiornataService } from './../../../services/giornata.service';
import { CtrfuncService } from './../../../services/ctrfunc.service';
import { ProdottoService } from './../../../services/prodotto.service';
import { TtipologiaService } from './../../../services/ttipologia.service';
import { CommandaService } from './../../../services/commanda.service';
=======
import { Prodotto } from '../../../classes/Prodotto'
import { Listino } from '../../../classes/Listino';
import { Listinoprod } from '../../../classes/Listinoprod'
import { Listinowork } from '../../../classes/Listinowork';
import { Listinoprodwork } from '../../../classes/listinoprodwork'
import { Ttipologia } from '../../../classes/T_tipologia';
// services
import { ManifestazioneService } from './../../../services/manifestazione.service';
import { GiornataService } from './../../../services/giornata.service';
import { ListinoService } from './../../../services/listino.service';
import { ListinoprodService } from '../../../services/listinoprod.service'
import { ListinoworkService } from '../../../services/listinowork.service';
import { ListinoprodworkService } from '../../../services/listinoprodwork.service'
import { ProdottoService } from '../../../services/prodotto.service';
import { TtipologiaService } from './../../../services/ttipologia.service';

>>>>>>> d8eac67 (registrazione corretta)

// per gestire il popup con esito operazione
import { NotifierService } from 'angular-notifier';
import { DatePipe } from '@angular/common';
<<<<<<< HEAD
=======
//import { isNull } from '@angular/compiler/src/output/output_ast';


>>>>>>> d8eac67 (registrazione corretta)

@Component({
  selector: 'app-giornata-detail-prodotti',
  templateUrl: './giornata-detail-prodotti.component.html',
  styleUrls: ['./giornata-detail-prodotti.component.css']
})
export class GiornataDetailProdottiComponent implements OnInit {

<<<<<<< HEAD
  public title = 'situagione giornaliera Prodotti -  giornata-detail-prodotti works';

  // icone
    faPlusSquare = faPlusSquare;
    faSearch = faSearch;
    faSave = faSave;
    faUserEdit = faUserEdit;
    faMinus = faMinus;
    faPlus = faPlus;
    faWindowClose = faWindowClose;
    faTrash = faTrash;
    faReply = faReply;

    faUndo = faUndo;
    faHandPointLeft = faHandPointLeft;
    faTrashAlt = faTrashAlt;
    faInfoCircle = faInfoCircle;
    faThumbsUp = faThumbsUp;
    faThumbsDown = faThumbsDown;

    // variabili per editazione messaggio
    public alertSuccess = false;
    public savechange = false;
    public isVisible = false;

    public nRecMan = 0;
    public nRec = 0;
    public trovatoRec = false;
    public Message = '';
    public isSelected = false;

    public saveValueStd: boolean;
    public lastNumber = 0;
    public fase = '';


    public isLoading = false;
    public fieldVisible = false;
    public messageTest1  = 'Operazione conclusa correttamente ';

    // variabili per visualizzazione messaggio di esito con notifier
    public type = '';
    public message = '';

    public statoStampa = '';

  // parametri per interfaccia a ghost
    // Parametri obbligatori:
    // - routeApp
    // parametri facoltativi
    // keyn ---->  se numerico trasformarlo in stringa
    // tipo
    //     S--> campo string
    //     N--> campo Numerico
    //     *--> non serve key

    // se impostato tipo = '*'  va impostato anche key a '*'

    public routeApp = '';
    public keyn = 0;
    public keys = '';
    public tipo = '';


    public href = '';
    public idpassed = 0;

    public functionInqu =  false;
    public functionEdit = false;
    public functionEdits = false;
    public functionNew = false;

    // funzioni di navigazione
    public navigateNew = 'new';
    public navigateInqu = 'inqu';
    public navigateEdit = 'edit';
    public navigateEdits = 'edits';

    public functionUser = '';

    public statoModulo  = '?';
    public ricercaIniziale = '';

    closeResult = '';

    public level = 0;
    public nRecord = 0;
    public enabledFunc = false;
    public rotta = '';
    public rottaId = 0;
    public rottaIdManif = 0;
    public rottaFunz = '';
    public rottaTipo = '';

  // variabili per editazione messaggio

  public Message1 = '';
  public Message2 = '';
  public Message3 = '';
  public Message1err = 'Contattare il gestore dell applicazione.';

  public isValid = false;
  public idManif = 0;
  public idGiornata = 0;

  // per gestione abilitazione funzioni con service Moreno

  public functionUrl = '';

  public searchInqu = 'Inqu';
  public searchEdit = 'Edit';
  public searchEdits = 'Edits';
  public searchNew = 'New';

  public functionUrlUp = '';
  public functionUserUp = '';


    // ---------------------  personalizzazioni componente


   public textMessage1 = '';
   public textMessage2 = '';
   public textUser = '';
   public headerPopup = '';

   public nrecanoSelect = 0;

   public tipoRichiesta = '?';
   public validSearch = false;
   public flagMenu = '';
   public EnabledRilascia = false;
 // -------------------

  public manif: Manifestazione;
  public giornata: Giornata;
  public prodotti: Prodotto[] = [];
  public prodotto: Prodotto;
  public tipologie: Ttipologia[] = [];
  public tipologia: Ttipologia;

  public prodottinull: Prodotto[] = [];

  options = [
   'Tutte',
   'Da Selezionare',
   'Non a Menù',
   'A Menù'
 ];

 // per paginazone
 p: number = 1;

 public selectedTip = 0;


 constructor(public modalService: NgbModal,
             private ctrfuncService: CtrfuncService,
             private giornataService: GiornataService,
             private manifestazioneService: ManifestazioneService,
             private prodottoService: ProdottoService,
             private ttipologiaService: TtipologiaService,
             private commandaService: CommandaService,
             private route: ActivatedRoute,
             private router: Router,
             private datePipe: DatePipe,
             private notifier: NotifierService) {
                    this.notifier = notifier;
                }


                ngOnInit(): void {

                  console.log('giornata-detail-Cassa - sono in oninit ');

                  this.checkFunctionbylevel();

                }

                checkFunctionbylevel() {
                  //  ----- parte comune a tutti i moduli
                 this.rotta = this.route.snapshot.url[0].path;
                 this.level = parseInt(localStorage.getItem('user_ruolo'));
                 this.functionUrl = this.route.snapshot.url[2].path;
                 this.rottaTipo = this.route.snapshot.url[1].path;

                 if(this.route.snapshot.url[1].path !== 'new') {
                   this.rottaId =  parseInt(this.route.snapshot.url[3].path);
                   this.rottaIdManif =  parseInt(this.route.snapshot.url[4].path);
                  } else {
                   this.rottaId =  0;
                   this.rottaIdManif =  parseInt(this.route.snapshot.url[4].path);
                  }


               //  console.log('Rotta: ' + JSON.stringify(this.route.url));
                 console.log('Rotta: ' + this.route.url);

                 console.log('frontend - checkFunctionbylevel -- step_01');
                 console.log('frontend - checkFunctionbylevel -- functionUrl:  --> ' + this.functionUrl);
                 console.log('frontend - checkFunctionbylevel -- functionUrl:  --> ' + this.rottaTipo);
                 console.log('frontend - checkFunctionbylevel -- rottaId ' + this.rottaId);
                 console.log('frontend - checkFunctionbylevel -- rottaIdManif ' + this.rottaIdManif);


              //    path: 'giornata/new/:idManif',
              //    path: 'giornata/inqu/:id/:idManif',


                 this.ctrfuncService.checkFunctionbylevelDetail(this.rotta, this.level, this.functionUrl).subscribe(
                   response =>{

                     console.log('frontend - checkFunctionbylevel -- step_02 ' + response['rc']);

                     if(response['rc'] === 'ko') {
                       this.isVisible = true;
                       this.alertSuccess = false;
                       this.type = 'error';
                       this.Message = response['message'];
                       this.showNotification(this.type, this.Message);
                       return;
                     }
                     if(response['rc'] === 'ok') {
                       this.functionUser = response['data'];
               //  ----- fine parte comune a tutti i moduli

                  // caricamento di eventuali tabelle per select

                 //  parte personalizzabile
                       console.log('frontend - checkFunctionbylevelDetail - funzione determinata: ' + this.functionUser);
                    //   console.log('messaggio: ' + response['message']);

                       this.functionInqu =  false;
                       this.functionEdit = false;
                       this.functionEdits = false;
                       this.functionNew = false;

                       if(this.level === -1) {
                        if(this.functionUser === this.searchEdit) {
                          this.functionEdit = true;
                        }
                        if(this.functionUser === this.searchEdits) {
                          this.functionEdits = true;
                        }
                        if(this.functionUser === this.searchNew) {
                          this.functionNew = true;
                        }
                       } else {
                        if(this.functionUser === this.searchInqu) {
                          this.functionInqu = true;
                        }
                       }

                       console.log('dopo test su funzione determinata - functionUser ' + this.functionUser);
                       console.log('functionInqu ' + this.functionInqu);
                       console.log('functionNew ' + this.functionNew);
                       console.log('functionEdit ' + this.functionEdit);
                       console.log('functionEdits' + this.functionEdits);


                       this.isVisible = true;
                       this.alertSuccess = true;

                       this.tipologieMenu();


                         //  leggo la manifestazione
                       this.route.paramMap.subscribe(x => {
                       this.idManif = +x.get('idManif');
                       this.loadManif(this.idManif);
                       });

                       if(this.functionNew) {
                         this.giornata = new Giornata();
                         this.giornata.key_utenti_operation = +localStorage.getItem('id');
                         this.title = 'Inserimento Giornata Manifestazione';
                         this.fase = 'N';
                         this.Message = `Inserire i dati della Giornata`;
                       } else {
                           this.calcolaProdottiaMenu();
                           this.route.paramMap.subscribe(p => {
                             this.idGiornata = +p.get('id');
                             console.log('id recuperato: ' + this.idGiornata);
                             // -------  leggo i dati della giornata
                             this.loadGiornata(this.idGiornata);
                             this.tipoRichiesta = 'D';
                             this.onSelectionChange(this.tipoRichiesta);
                             if(this.nrecanoSelect === 0) {
                              this.EnabledRilascia =  true;
                              } else {
                              this.EnabledRilascia =  false;
                              }
                             if(this.functionEdit || this.functionEdits) {
                               this.title = 'Situazione Giornaliera Prodotti';
                               this.fase = 'M';
                              } else {
                               this.title = 'Visualizzazione Giornaliera Prodotti';
                               this.fase = 'I';
                              }
                             this.Message = 'Situazione Attuale Prodotti ';
                          });

                           //  fine parte personalizzabile
                     }
                       this.type = 'success';
                       this.showNotification(this.type, this.Message);
                    }
                   },
                   error =>
                       {
                         this.isVisible = true;
                         this.alertSuccess = false;
                         this.type = 'error';
                         this.Message = 'Errore cancellazione Manifestazione' + '\n' + error.message;
                         this.showNotification(this.type, this.Message);
                         console.log(error);
                       });

                }


                async loadGiornata(id: number) {
                  //   alert('loadGiornata - id:' + id);
            let res = await this.giornataService.getGiornata(id).subscribe(
                  response => {
                  this.giornata = response['data'];
                  this.giornata.key_utenti_operation = +localStorage.getItem('id');
                  localStorage.removeItem('idGiornata');
                  localStorage.setItem('idGiornata', JSON.stringify(this.giornata.id));

                  console.log(`----------------->     loadGiornata - fatto lettura`);
                  },
                  error => {
                  alert('giornata-detail-prodotti  --loadGiornata: ' + error.message);
                  console.log(error);
                  }
                )

            }

              async  loadManif(id: number) {
                  console.log(`loadManif - appena entrato`);
                  let rc = await this.manifestazioneService.getManifestazione(id).subscribe(
                   resp => {
                         console.log(`loadManif:  ${JSON.stringify(resp['data'])} `);
                         this.manif = resp['data'];
                         this.manif.key_utenti_operation = +localStorage.getItem('id');

                     //    this.loadlastDay(this.idManif);
                         console.log('fatto lettura manif: ' + this.manif.id);
                       //  this.type = 'success';
                      //   this.Message = 'situazione attuale Manifestazione';
                      //   this.alertSuccess = true;
                      },
                   error => {
                        alert('sono in loadManif');
                        this.isVisible = true;
                        this.alertSuccess = false;
                        console.log('loadManif - errore: ' + error);
                        this.type = 'error';
                        this.Message = error.message;
                        this.alertSuccess = false;

                      });
                 }

      /**
             * Show a notification
             *
             * @param {string} type    Notification type
             * @param {string} message Notification message
             */

      showNotification( type: string, message: string ): void {
        // alert('sono in showNot - ' + message);
         this.notifier.notify( type, message );
         console.log(`sono in showNotification  ${type}`);
      //   alert('sono in notifier' + message);
       }

       prodottoSelected: Prodotto;
       updateProdotto(prodotto: Prodotto){
         this.prodottoSelected = prodotto;
       }


       tipologieMenu() {
          this.ttipologiaService.getAllMenu().subscribe(
            res => {
                this.tipologie = res['data'];
             },
            error => {
               alert('giornata-detail-Prodotti  -- tipologieMenu - errore: ' + error.message);
               console.log(error);
               this.Message = error.message;
               this.alertSuccess = false;
            });
       }



       selectedtipologia(selectedValue: number) {
        //  alert('selezionato: ' + selectedValue);
          if(selectedValue ===  999) {
            this.type = 'error';
            this.Message = 'selezione non corrette';
            this.showNotification(this.type, this.Message);
            this.alertSuccess = false;
            this.isVisible = true;
            return;
         } else {
          this.selectedTip = selectedValue;
          console.log('tipologia selezionata: ' + this.selectedTip);
          this.loadProdottiforTipologia(this.selectedTip);
         }

     }

    async loadProdottiforTipologia(tipologia: number) {

      this.trovatoRec = false;
      this.nRec = 0;
      this.isVisible = true;
      let resp = await  this.prodottoService.getProdottiforTipologia(tipologia).subscribe(
          res => {
            if(res['rc'] === 'ok') {
              this.prodotti = res['data'];
              this.nRec = res['number'];
              this.trovatoRec = true;
              this.Message = 'Situazione Attuale';
              this.alertSuccess = true;
             }
            if(res['rc'] === 'nf') {
              this.prodotti = this.prodottinull;
              this.nRec = 0;
              this.trovatoRec = false;
              this.Message = 'Nessun prodotto con la selezione impostata';
              this.alertSuccess = false;
             }
           },
          error => {
             alert('Prodotti  -- loadPersone - errore: ' + error.message);
             console.log(error);
             this.isVisible = true;
             this.Message = error.message;
             this.alertSuccess = false;
             this.type = 'error';
             this.showNotification(this.type, this.Message);
          });

     }






       async loadProdotti() {

         //alert('Manifestazioni   -- loadManifestazioni :  inizio ');
         this.trovatoRec = false;
         this.nRec = 0;
         this.isVisible = true;
         let resp = await  this.prodottoService.getAll().subscribe(
           // sentire hidran per lettura particolare
          // this.fedeleService.getFedeliforMessa(id).subscribe(
             res => {
                 this.prodotti = res['data'];
                 this.nRec = res['number'];
                 this.trovatoRec = true;
                 this.Message = 'Situazione Attuale -- globale';
                 this.alertSuccess = true;
            //     alert('Manifestazioni   -- loadManifestazioni :  fine ok ');
              },
             error => {
                alert('Prodotti  -- loadPersone - errore: ' + error.message);
                console.log(error);
                this.Message = error.message;
                this.alertSuccess = false;
             });
       }


       async loadProdottibyMenu(menu: string) {

         console.log('loadProdottibyMenu ' + menu);
         this.trovatoRec = false;
         this.nRec = 0;
         this.isVisible = true;
         let resp =  await  this.prodottoService.getProdottiforMenu(menu).subscribe(
           // sentire hidran per lettura particolare
          // this.fedeleService.getFedeliforMessa(id).subscribe(
             res => {

                 console.log('loadProdottibyMenu  +++++++ record trovati: ' +  res['number'] +  ' r.c. : -------> ' + res['rc']);

                 if(res['rc'] === 'ok') {
                  this.prodotti = res['data'];
                  this.nRec = res['number'];
                  this.trovatoRec = true;
                  this.Message = 'Situazione Attuale  filtrato';
                  this.alertSuccess = true;
                 }
                 if(res['rc'] === 'nf') {
                  this.prodotti = this.prodottinull;
                  this.nRec = 0;
                  this.trovatoRec = false;
                  this.Message = 'Nessun prodotto con la selezione impostato';
                  this.alertSuccess = false;
                 }
            //     alert('Manifestazioni   -- loadManifestazioni :  fine ok ');
              },
             error => {
                alert('Prodotti  -- loadProdottibyMenu - errore: ' + error.message);
                console.log(error);
                this.Message = error.message;
                this.alertSuccess = false;
             }
           )
       }

     // imposto il filtro di ricerca dei fedeli
     onSelectionChange(menu: string)   {

       const menu1 = menu.substring(0,1);
       this.tipoRichiesta = menu1;
       if(this.tipoRichiesta === 'A') {
         this.tipoRichiesta = 'S';
       }
       if(this.tipoRichiesta === 'D') {
         this.tipoRichiesta = '*';
       }
       this.validSearch = true;

       switch (this.tipoRichiesta) {
         case 'T':
         this.loadProdotti();
      //   this.router.navigate(['getpersoneforMessa', this.messa.id]);
         break;
         case 'N':
         case 'S':
         case '*':
           this.flagMenu = this.tipoRichiesta;
           this.loadProdottibyMenu(this.tipoRichiesta);
           break;
         default:
         alert('Scelta errata \n ricerca non possibile');
         break;
       }
   }

  async calcolaProdottiaMenu() {

             this.flagMenu = '*';
             this.trovatoRec = false;
             this.nrecanoSelect = 0;
             let resp =  await  this.prodottoService.getProdottiforMenu(this.flagMenu).subscribe(
               // sentire hidran per lettura particolare
              // this.fedeleService.getFedeliforMessa(id).subscribe(
                 res => {
                     this.nrecanoSelect = res['number'];
                   },
                 error => {
                    alert('Prodotti  -- calcolaProdottiaMenu - errore: ' + error.message);
                    this.isVisible = true;
                    console.log(error);
                    this.Message = error.message;
                    this.alertSuccess = false;
                 }
               );
   }

   eeguirilascio()  {
    console.log('esegui rilascio');

    // aggiorno lo stato della giornata
    this.giornata.stato = 1;
    this.giornata.statoMagazzino = 1;
    if(this.giornata.statoCassa === 1 && this.giornata.statoUtenti === 1  && this.giornata.statoMagazzino === 1) {
       this.giornata.stato = 2;
       this.resettaOldCommande();
    }
    this.giornataService.updateGiornata(this.giornata).subscribe(
       response => {
            if(response['rc'] === 'ok') {
              this.isVisible = true;
              this.alertSuccess = true;
              this.type = 'success';
              this.Message = response['message'];
              this.showNotification(this.type, this.Message);
           } else {
             alert(response['message']);
             this.Message = response['message'];
             this.alertSuccess = false;
             this.type = 'error';
             this.Message = 'rilascia - ' + this.Message;
             this.showNotification(this.type, this.Message);
           }
       },
       error =>
       {
         console.log(error);
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         this.Message = 'rilascia - ' + this.Message;
         this.showNotification(this.type, this.Message);
       });
   }

 async rilasciaProdottiMenu() {
    const menu = '*';
    const resp =  await  this.prodottoService.getProdottiforMenu(menu).subscribe(
          res => {
            if(res['rc'] === 'ok') {
             this.nRec = res['number'];
             this.isVisible = true;
             this.alertSuccess = false;
             this.type = 'error';
             this.Message = 'Presenti ancora ' + this.nRec + ' prodotti non selezionati + rilascio non possibile';
             this.showNotification(this.type, this.Message);
            }
            if(res['rc'] === 'nf') {
               this.eeguirilascio();
            }
          },
           error =>
           {
             console.log(error);
             this.Message = error.message;
             this.alertSuccess = false;
             this.type = 'error';
             this.Message = 'rilascia - ' + this.Message;
             this.showNotification(this.type, this.Message);
           });
}


async resettaOldCommande() {

  const resp =  await  this.commandaService.deleteAll().subscribe(
    res => {
      if(res['rc'] === 'ok') {
         console.log('resettate commande - giornta aperta');
      }
    },
     error =>
     {
       console.log(error);
       this.Message = error.message;
       this.alertSuccess = false;
       this.type = 'error';
       this.Message = 'resettaOldCommande - ' + this.Message;
       this.showNotification(this.type, this.Message);
     });
}





   backToGiornata(){

    alert('da sistemare');

    // this.router.navigate(['manif/' + this.giornata.idManifestazione]);

    }

=======
  public title = "Gestione Giornata -  giornata-detail works!";

// icone
  faPlusSquare = faPlusSquare;
  faSearch = faSearch;
  faSave = faSave;
  faUserEdit = faUserEdit;
  faMinus = faMinus;
  faPlus = faPlus;
  faWindowClose = faWindowClose;
  faTrash = faTrash;
  faReply = faReply;

  // variabili per editazione messaggio
  public alertSuccess = false;
  public savechange = false;
  public isVisible = false;

  public nRecMan = 0;
  public nRec = 0;
  public trovatoRec = false;
  public Message = '';
  public isSelected = false;

  public saveValueStd: boolean;
  public lastNumber = 0;
  public fase = '';


  public isLoading = false;
  public fieldVisible = false;
  public messageTest1  = 'Operazione conclusa correttamente ';

  // variabili per visualizzazione messaggio di esito con notifier
  public type = '';
  public message = '';

  public statoStampa = '';

// parametri per interfaccia a ghost
  // Parametri obbligatori:
  // - routeApp
  // parametri facoltativi
  // keyn ---->  se numerico trasformarlo in stringa
  // tipo
  //     S--> campo string
  //     N--> campo Numerico
  //     *--> non serve key

  // se impostato tipo = '*'  va impostato anche key a '*'

  public routeApp = '';
  public keyn = 0;
  public keys = '';
  public tipo = '';


  public href = '';
  public idpassed = 0;


  public statoModulo  = '?';
  public ricercaIniziale = '';

  closeResult = '';

  public level = 0;
  public nRecord = 0;
  public enabledFunc = false;
  public rotta = '';
  public rottaId = 0;
  public rottaIdManif = 0;
  public rottaFunz = '';


// variabili per editazione messaggio

public Message1 = '';
public Message2 = '';
public Message3 = '';
public Message1err = 'Contattare il gestore dell applicazione.';

public isValid = false;
public idPassed = 0;
public idGiornata = 0;

// per gestione abilitazione funzioni con service Moreno

public functionUrl = '';


  // ---------------------  personalizzazioni componente

  giornata: Giornata;
  prodotti: Prodotto[]= [];
  manif: Manifestazione;
  listino: Listino;
  listinoprodotti: Listinoprod[] = [];
  listinoprodotto: Listinoprod;
  listinowork: Listinowork;
  listinowork1: Listinowork;
  listinoprodottiwork: Listinoprodwork[] = [];
  listinoprodottowork: Listinoprodwork;
  tipologie: Ttipologia[] = [];

  gior: Giornata;

  public tipoRic = '';
  public tipoGiornata = '';

  // ------------------   variabili per controllo data

  public datepipe: DatePipe = new DatePipe('en-US');
  public formattedDate: string;

  public date1: Date;
  public date2: Date;


  public date1n: number;
  public date2n: number;

  public date1s: string;
  public date2s: string;


  // contrData
  public dt1: any;
  public dt2: any;
  public diffDays1: any;
  public diffDays2: any;

  public foundLastday = false;
  public neverDay = '';
  public enabledDay = false;   // se stato manifestazione = 0 (non aperta) abilito il taso conferma per inserire giornate
  public prg = 0;
  public rottafase = '';

  public dataGiorno: any;
  public selezionatoAll = false;
  public selezionatoActivi = false;
  public selezionatoSel = false;
  public SelectionUser = false;
  public tipoRichiesta = '';
  public amenu = '';

  options = [
    'Tutti',
    'Aggiornati',
    'Non Aggiornati',
    'Selezione'
  ];


  public stato = 1;
  public data = Date();
  public activateSelection = false;

  public searchText = '';
// per paginazone
  p = 1;
  p1 = 1;
  datawork = 'nonselect'

  public pathimage = 'assets/images/tipologia/';
  public listwork = 1;
  public nprodtot = 0;
  public nprodtots = 0;
  public nprodtotn = 0;
  public nprodamenu = 0;
  public listinow = 1;
  public idGiornatasave = 0;
  public prodottoCorretto = 'S';

  constructor(public modalService: NgbModal,
              private giornataService: GiornataService,
              private route: ActivatedRoute,
              private router: Router,
              private datePipe: DatePipe,
              private manifestazioneService: ManifestazioneService,
              private prodottoService: ProdottoService,
              private listinoService: ListinoService,
              private listinoprodService: ListinoprodService,
              private ttipologiaService: TtipologiaService,
              private listinoworkService: ListinoworkService,
              private listinoprodworkService: ListinoprodworkService,
              private notifier: NotifierService) {
                  this.notifier = notifier;
              }


              ngOnInit(): void {
                this.goApplication();
              }

              goApplication() {

                this.isVisible = true;
                this.alertSuccess = true;

                this.loadtipologie();
                this.listinowork1 = new Listinowork();
                this.listinowork1.id = 1;
                this.cancellalistinowork(this.listinowork1);

                this.route.paramMap.subscribe(p => {
                  this.idPassed = +p.get('id');
                  console.log('id recuperato: ' + this.idPassed);
                  // -------  leggo i dati della giornata
                  this.loadGiornata(this.idPassed);


                  this.Message = 'Situazione Attuale Giornata';
               });

              this.type = 'success';
              this.showNotification(this.type, this.Message);
           }

           async  loadtipologie() {
            this.stato = 1;
            let rc = await this.ttipologiaService.getAllbyStato(this.stato).subscribe(
                resp => {
                      console.log('statiprodotto: ' + JSON.stringify(resp['data']));
                      if(resp['rc'] === 'ok') {
                        this.tipologie = resp['data'];
                      }
                   },
                error => {
                     alert('sono in loadcompetenze');
                     this.isVisible = true;
                     this.alertSuccess = false;
                     console.log('loadcompetenze - errore: ' + error.error);
                     this.type = 'error';
                     this.Message = error.message;
                     this.alertSuccess = false;
                     this.showNotification(this.type, this.Message);
                 });
             }


async loadGiornata(id: number) {

  console.log(`loadGiornata - appena entrato` + id);
  let rc = await this.giornataService.getbyId(id).subscribe(
   resp => {

         console.log(`loadGiornata: ----------------------->  ${JSON.stringify(resp['data'])} `);
         if(resp['rc'] === 'ok') {
            this.giornata = resp['data'];
            this.loadManif(this.giornata.idManifestazione)
            this.loadlistino(this.giornata.idlistino);

          }

         console.log('fatto lettura  giornata: ' + this.giornata.id);
       //  this.type = 'success';
       //  this.Message = 'situazione attuale giornata';
       //  this.alertSuccess = true;
      },
   error => {
        alert('sono in loadGiornata');
        this.isVisible = true;
        this.alertSuccess = false;
        console.log('loadGiornata - errore: ' + error.error);
        this.type = 'error';
        this.Message = error.message;
        this.alertSuccess = false;
        this.showNotification(this.type, this.Message);
      });
}

async  loadlistino(id: number) {

  console.log(' .........................................  loadListino aèèena entrato: ' + id)
  let rc = await this.listinoService.getbyId(id).subscribe(
    resp => {
             if(resp['rc'] === 'ok') {
              this.listino = resp['data'];

              console.log(' faccio lettura dei prodotti a listino --- listino: ' + JSON.stringify(this.listino))
              if(this.giornata.statoMagazzino == 0) {
                // effettuo la creazione del listinoprodwork;
                this.loadlistinoprod(this.listino.id);
              }
              if(this.giornata.statoMagazzino == 1) {
                // effettuo la creazione del listinoprodwork;
                this.loadlistinoprodotti(this.listino.id);
              }
             }
       },
    error => {
         alert('sono in loadlistino -- error');
         this.isVisible = true;
         this.alertSuccess = false;
         console.log('loadlistino - errore: ' + error.error);
         this.type = 'error';
         this.Message = error.message;
         this.alertSuccess = false;
         this.showNotification(this.type, this.Message);
       });
  }

  async  loadlistinoprodotti(id: number) {
    console.log(' ----------------------  loadlistinoprodotti  appena entrato: ' + id)
    this.stato = 1;
    let rc = await this.listinoprodService.getallProdbylistino(id).subscribe(
     resp => {
          if(resp['rc'] === 'ok') {
            this.listinoprodotti = resp['data'];
            this.nRec = resp['number'];
        }
     },
     error => {
          alert('loadlistinoprodotti -- error');
          this.isVisible = true;
          this.alertSuccess = false;
          console.log('loadlistinoprodotti - errore: ' + error.error.message);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;
          this.showNotification(this.type, this.Message);
        });
   }

           async  loadlistinoprod(id: number) {
            console.log(' ----------------------  loadlistinoprod  appena entrato: ' + id)
            this.stato = 1;
            let rc = await this.listinoprodService.getallProdbylistino(id).subscribe(
             resp => {
                  if(resp['rc'] === 'ok') {
                    this.listinoprodotti = resp['data'];
                    this.prg = 0;
                    for(const prodotto of this.listinoprodotti) {
                  //    console.log(' letto Prodotto e sto creando listinoprodottowork: ' + JSON.stringify(prodotto))
                           this.listinoprodottowork = new Listinoprodwork();
                           this.prg += 1;
                           this.listinoprodottowork.id = this.prg;
                           this.listinoprodottowork.idlistino = 1;
                           this.listinoprodottowork.idprodotto = prodotto.idprodotto;
                           this.listinoprodottowork.descrizione = prodotto.descrizione;
                           this.listinoprodottowork.tipologia = prodotto.tipologia;
                           this.listinoprodottowork.categoria = prodotto.categoria;
                           this.listinoprodottowork.competenza = prodotto.competenza;
                           this.listinoprodottowork.prezzo = prodotto.prezzo;
                           this.listinoprodottowork.pz = prodotto.prezzo;
                           this.listinoprodottowork.photo = prodotto.photo;
                           this.listinoprodottowork.amenu = 'X';
                           this.listinoprodottowork.key_utenti_operation = +localStorage.getItem('id');

                      //     console.log('-------------------------------- >>>>> listinoprodottowork: ' + JSON.stringify(this.listinoprodottowork))
                           this.crealistinoprodwork(this.listinoprodottowork);
                  }
                  this.listinowork.nprodx = this.prg;
                  this.aggiornaListinowork(this.listinowork);

                }
             },
             error => {
                  alert('loadlistinoprod -- error');
                  this.isVisible = true;
                  this.alertSuccess = false;
                  console.log('loadlistinoprod - errore: ' + error.error.message);
                  this.type = 'error';
                  this.Message = error.message;
                  this.alertSuccess = false;
                  this.showNotification(this.type, this.Message);
                });
           }

           async  aggiornaListinowork(listinowork: Listinowork) {
            let rc = await this.listinoworkService.update(listinowork).subscribe(
              resp => {
                       if(resp['rc'] === 'ok') {
                          //  non faccio niente
                       }
                 },
              error => {
                   alert('sono in aggiornaListinowork -- error');
                   this.isVisible = true;
                   this.alertSuccess = false;
                   console.log('aggiornaListinowork - errore: ' + error.error);
                   this.type = 'error';
                   this.Message = error.message;
                   this.alertSuccess = false;
                   this.showNotification(this.type, this.Message);
                 });
            }

       async  crealistinoprodwork(listinoprodwork: Listinoprodwork) {
           let rc = await this.listinoprodworkService.create(listinoprodwork).subscribe(
             resp => {
                      if(resp['rc'] === 'ok') {
                         //  non faccio niente
                      }
                },
             error => {
                  alert('sono in crealistinoprodwork -- error');
                  this.isVisible = true;
                  this.alertSuccess = false;
                  console.log('crealistinoprodwork - errore: ' + error.error);
                  this.type = 'error';
                  this.Message = error.message;
                  this.alertSuccess = false;
                  this.showNotification(this.type, this.Message);
                });
           }

           async  cancellalistinowork(listinowork: Listinowork) {
            console.log(`cancellalistinowork - appena entrato`);
            let rc = await this.listinoworkService.delete(listinowork).subscribe(
             resp => {
                      this.crealistinowork();
              /*
                      if(resp['rc'] === 'ok') {
                        this.crealistinowork();
                      }
                      */
                },
             error => {
                  alert('sono in cancellalistinowork');
                  this.isVisible = true;
                  this.alertSuccess = false;
                  console.log('cancellalistinowork - errore: ' + error.error);
                  this.type = 'error';
                  this.Message = error.message;
                  this.alertSuccess = false;
                  this.showNotification(this.type, this.Message);
                });
           }

           async  crealistinowork() {

            console.log(`crealistinowork - appena entrato`);

            this.listinowork = new Listinowork();
            this.listinowork.id = 1;
            this.listinowork.descrizione = 'Listino serata di merda -- mettere la data ';
            this.listinowork.key_utenti_operation = +localStorage.getItem('id');

            let rc = await this.listinoworkService.create(this.listinowork).subscribe(
             resp => {
                      if(resp['rc'] === 'ok') {
                    //    alert('crealistinowork ----------------   cre<ato listinoworfk')

                      }
                },
             error => {
                  alert('sono in crealistinowork--  error');
                  this.isVisible = true;
                  this.alertSuccess = false;
                  console.log('crealistinowork - errore: ' + error.error);
                  this.type = 'error';
                  this.Message = error.message;
                  this.alertSuccess = false;
                  this.showNotification(this.type, this.Message);
                });
           }

        async  loadManif(id: number) {
               console.log(`loadManif - appena entrato`);
               let rc = await this.manifestazioneService.getbyid(id).subscribe(
                resp => {
                      if(resp['rc'] === 'ok') {
                            console.log(`loadManif:  ${JSON.stringify(resp['data'])} `);
                            this.manif = resp['data'];
                            this.manif.key_utenti_operation = +localStorage.getItem('id');

                            console.log('fatto lettura manif: ' + this.manif.id);
                          //  this.type = 'success';
                         //   this.Message = 'situazione attuale Manifestazione';
                         //   this.alertSuccess = true;
                      }

                   },
                error => {
                     alert('sono in loadManif');
                     this.isVisible = true;
                     this.alertSuccess = false;
                     console.log('loadManif - errore: ' + error.error);
                     this.type = 'error';
                     this.Message = error.message;
                     this.alertSuccess = false;
                     this.showNotification(this.type, this.Message);
                   });
              }



  async conferma() {
    console.log('conferma - fase: ' + this.fase);
    this.Message = '';
// controllo sulle date

    if(this.giornata.dtGiornata == '') {
      this.type = 'error';
      this.Message = 'Non hai selezionato la data';
      this.showNotification(this.type, this.Message);
      return;
    }

   // alert('data selezionata: ' + this.giornata.dtGiornata)

  if(this.listinowork.nprodx > 0) {
    this.type = 'error';
    this.Message = 'ci sono ancora ' + this.listinowork.nprodx + ' prodotti da selezionare';
    this.showNotification(this.type, this.Message);
    return;
  }

  //   if(this.foundLastday === true) {
  //       console.log('uscita 1');
  //       this.date1 = new Date(this.gior.dtGiornata);
  //       this.date2 = new Date(this.giornata.dtGiornata);

  //       console.log('la data1 lastdata :' + this.date1);

  //       console.log('la data2 gior.dtGiornata è:' + this.date2);

  //       if(this.date2 < this.date1) {
  //         this.type = 'error';
  //         this.Message = 'Selezionare una data maggiore dell ultima data inserita';
  //         this.showNotification(this.type, this.Message);
  //         return;
  //       }

  //       this.giornata.dtGiornata =  this.datePipe.transform(this.date2,"yyyy-MM-dd");                                      //this.date2;
  // } else {
  //   console.log('uscita ------------------------  2' );

  // }


  //   this.giornata.idManifestazione = this.manif.id;
  //   this.giornata.operationCassa = 'N';

  //  // ---------------------------
  //  this.dataGiorno = new Date(this.giornata.dtGiornata);


  // let dayCopy = 0;
  // let mmCopy = 0;

  //  var day =  this.dataGiorno.getDate();
  //  dayCopy = day;
  //  if(day < 10) {
  //    day = '0' + day;
  //  }
  //  var month = this.dataGiorno.getMonth();
  //  month =  month + 1
  //  mmCopy = month;
  //  if(month < 10) {
  //    month = '0' + month;
  //  }
  //  var year = this.dataGiorno.getFullYear();

  // alert('data spezzata: dayCopy; ' + dayCopy + ' mmCopy: ' + mmCopy + ' data normalizzata: ' + this.dataEvento)


  //  this.dataGiorno =  day + '-' + month + '-' + year;
  //  this.giornata.dtGiornata1 = this.dataGiorno;

    console.log('tutto ok');

// aggiorna il listino con i dati da listinowork


    this.aggiiornaprodLitinofromWork(this.giornata.idlistino, this.listinow)

    this.giornata.operationCassa = 'N';
    this.giornata.statoMagazzino = 1;
    if(this.giornata.statoCassa == 1  &&
       this.giornata.statoUtenti == 1  &&
       this.giornata.statoMagazzino == 1) {
        this.giornata.stato = 2    // giornata aperta
       }

      console.log(`Giornata-detail -- conferma (upd) : ${JSON.stringify(this.giornata)}`);

      let rc1 = this.giornataService.update(this.giornata).subscribe(
          res => {
               if(res['rc'] === 'ok') {
                  this.giornata = res['data'];
                  this.type = 'success';
                  this.Message = 'Aggiornato correttamente il Listino con disponibiliktà e prezzo prodotti';          //'utente aggiornato con successo del cazzo';
                  this.alertSuccess = true;
                  this.router.navigate(['giornate/' + this.manif.id]);
               }

         },
         error => {
               console.log(error);
               this.type = 'error';
               this.Message = error.message;
               this.alertSuccess = false;
               this.showNotification(this.type, this.Message);
            });

    this.showNotification(this.type, this.Message);
  }

  //  aggiorno il listino con i valori di quantita e prezzo da work


  async aggiiornaprodLitinofromWork(idListino: number, id: number) {
    let rc = await this.listinoprodService.getallProdbylistino(idListino).subscribe(
     resp => {
           if(resp['rc'] === 'ok') {
              this.listinoprodotti = resp['data'];
              for(const prod of this.listinoprodotti) {
                this.loadProdottowork(prod.idprodotto, prod)
              }
         }
     },
     error => {
          alert('sono in aggiiornaprodLitinofromWork');
          this.isVisible = true;
          this.alertSuccess = false;
          console.log('aggiiornaprodLitinofromWork - errore: ' + error.error);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;
          this.showNotification(this.type, this.Message);
        });
  }

  async loadProdottowork(id: number, prodlistino: Listinoprod) {
    let rc = await this.listinoprodworkService.getbyidProdotto(id).subscribe(
     resp => {
           if(resp['rc'] === 'ok') {

              this.listinoprodottowork = resp['data'];
              prodlistino.prezzo = this.listinoprodottowork.pz;
              prodlistino.qta = this.listinoprodottowork.qta;
              prodlistino.qtadisp = this.listinoprodottowork.qta;
              console.log('------->   sto per aggiornare la qta e prezzo sul listino ' + JSON.stringify(prodlistino));
              this.aggiornaprodottodelListino(prodlistino);
              }
         },
     error => {
          alert('sono in loadProdottowork');
          this.isVisible = true;
          this.alertSuccess = false;
          console.log('loadProdottowork - errore: ' + error.error);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;
          this.showNotification(this.type, this.Message);
        });
  }

  async aggiornaprodottodelListino(prodlistino: Listinoprod) {
    let rc = await this.listinoprodService.update(prodlistino).subscribe(
     resp => {
           if(resp['rc'] === 'ok') {
              //  non faccio niente
              }
         },
     error => {
          alert('sono in aggiornaprodottodelListino');
          this.isVisible = true;
          this.alertSuccess = false;
          console.log('aggiornaprodottodelListino - errore: ' + error.error);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;
          this.showNotification(this.type, this.Message);
        });
  }

  crealistinoGiornata(datagiorno: string) {
    console.log(`crealistinoGiornata - appena entrato`);
    this.listino = new Listino();
    this.listino.descrizione = 'Listino serata del ' + datagiorno;
    this.listino.key_utenti_operation = +localStorage.getItem('id');
    this.crealistino(this.listino);
  }

  async crealistino(listino: Listino) {
    let rc = await this.listinoService.create(listino).subscribe(
     resp => {
           if(resp['rc'] === 'ok') {

              this.listino = resp['data'];
              console.log('creato listino definitivo ----------------------------->>  ' + JSON.stringify(this.listino))
              this.crearighelistino(this.listino.id)
              this.giornata.idlistino = this.listino.id;
              console.log('------->   sto per aggiornare la giornata con il numero di listino ' + JSON.stringify(this.giornata));
              this.aggiornaGiornata(this.giornata);
              }
         },
     error => {
          alert('sono in crealistino');
          this.isVisible = true;
          this.alertSuccess = false;
          console.log('crealistino - errore: ' + error.error);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;
          this.showNotification(this.type, this.Message);
        });
  }


  async crearighelistino(id: number) {
    console.log('----------------------------------------------------------- crearighelistino -- appena entrato  id: ' + id );
    let rc = await this.listinoprodworkService.getAll().subscribe(
     resp => {
           if(resp['rc'] === 'ok') {
            console.log('le righe dei prodotti è: ' + JSON.stringify(resp['data']))
              this.listinoprodottiwork = resp['data'];
              for(const prodwork of this.listinoprodottiwork) {
                this.listinoprodotto = new Listinoprod();
                this.listinoprodotto.idlistino = id;
                this.listinoprodotto.idprodotto = prodwork.idprodotto;
                this.listinoprodotto.descrizione = prodwork.descrizione;
                this.listinoprodotto.photo = prodwork.photo;
                this.listinoprodotto.tipologia = prodwork.tipologia;
                this.listinoprodotto.categoria = prodwork.categoria;
                this.listinoprodotto.competenza = prodwork.competenza;
                this.listinoprodotto.prezzo = prodwork.prezzo;
                this.listinoprodotto.amenu = prodwork.amenu;
                this.listinoprodotto.key_utenti_operation = +localStorage.getItem('id');
                this.crealistinoprodotto(this.listinoprodotto);
            }

          }
     },
     error => {
          alert('sono in crearighelistino');
          this.isVisible = true;
          this.alertSuccess = false;
          console.log('crearighelistino - errore: ' + error.error);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;
          this.showNotification(this.type, this.Message);
        });
  }

  async aggiornaManifestazione(manif: Manifestazione) {

  console.log('aggiornaManifestazione: ---------------  ' + JSON.stringify(manif))


    manif.stato = 1;  // imposto la manifestazione prenotabile
    let rc = await this.manifestazioneService.update(manif).subscribe(
     resp => {
           if(resp['rc'] === 'ok') {
           // non faccio niente
          }
     },
     error => {
          alert('sono in  aggiornaManifestazione');
          this.isVisible = true;
          this.alertSuccess = false;
          console.log(' aggiornaManifestazione - errore: ' + error.error.message);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;
          this.showNotification(this.type, this.Message);
        });
  }


  async aggiornaGiornata(giornata: Giornata) {
    console.log('aggiornaGiornata: --------------->>>>>>>>>   ' + JSON.stringify(giornata))
    let rc = await this.giornataService.update(giornata).subscribe(
     resp => {
           if(resp['rc'] === 'ok') {
           // non faccio niente
          }
     },
     error => {
          alert('sono in  aggiornaGiornata');
          this.isVisible = true;
          this.alertSuccess = false;
          console.log(' aggiornaGiornata - errore: ' + error.error.message);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;
          this.showNotification(this.type, this.Message);
        });
  }

  async crealistinoprodotto(listinoprodotto: Listinoprod) {
    let rc = await this.listinoprodService.create(listinoprodotto).subscribe(
     resp => {
           if(resp['rc'] === 'ok') {
           // non faccio niente
          }
     },
     error => {
          alert('sono in  crealistinoprodotto');
          this.isVisible = true;
          this.alertSuccess = false;
          console.log(' crealistinoprodotto - errore: ' + error.error);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;
          this.showNotification(this.type, this.Message);
        });
  }

  async loadlastGiornata(id: number) {
    console.log(`loadlastGiornata - appena entrato`);
    let rc = await this.giornataService.getLastGiornataidbyManif(id).subscribe(
     resp => {

      //     console.log(`loadlastGiornata: ----------------------->  ${JSON.stringify(resp['data'])} `);
           if(resp['rc'] === 'ok') {
              this.gior = resp['data'];

            }

         },
     error => {
          alert('sono in loadlastGiornata');
          this.isVisible = true;
          this.alertSuccess = false;
          console.log('loadlastGiornata - errore: ' + error.error);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;

        });
  }

async aggiornaDatafineManifestazione(giornata: string) {
    console.log('--------------------- data inizio ---------------------------------------          aggiornaDate su manif: ' + JSON.stringify(giornata));




    if(this.manif.dtInizio === '01/01/9999') {
      console.log('trovata data null - caso 2');
      this.manif.dtInizio = giornata;
    }
    this.manif.dtFine = giornata;
    this.manif.key_utenti_operation = +localStorage.getItem('id');

/*   da sistemare

    if(this.manif.dtInizio == null ||  isNull(this.manif.dtInizio)) {
      this.manif.dtInizio = giornata;
    }
    this.manif.dtFine = giornata;
    this.manif.key_utenti_operation = +localStorage.getItem('id');
*/
    console.log('-------------------------------  aggiornadata fine: ' + JSON.stringify(this.manif));

    let rc = await this.manifestazioneService.update(this.manif).subscribe(
      resp => {
            console.log(`aggiornaDatafineManifestazione:  ${JSON.stringify(resp['data'])} `);
            this.manif = resp['data'];
         },
      error => {
           alert('sono in loadManif');
           this.isVisible = true;
           this.alertSuccess = false;
           console.log('loadManif - errore: ' + error.error);
           this.type = 'error';
           this.Message = error.message;
           this.alertSuccess = false;
           this.showNotification(this.type, this.Message);
         })
    }

  reset() {
    switch (this.fase)  {
        case 'N':
        this.giornata = new Giornata();
        this.type = 'success';
        this.Message = 'Inserire i dati della giornata';
        this.alertSuccess = true;
        break;
      case 'M':
        this.giornataService.getbyId(this.giornata.id).subscribe(
        res => {
              this.giornata = res['data'];
              this.type = 'success';
              this.Message = 'situazione attuale Giornata !!';
              this.alertSuccess = true;
           },
          error => {
             console.log(error);
             this.type = 'error';
             this.Message = error.message;
             this.alertSuccess = false;
          });
        break;
      default:
        alert('nav - funzione non ancora attivata');
        break;
    }
    this.showNotification(this.type, this.Message);
  }

  goback() {
     this.router.navigate(['manif/' + this.manif.id]);
  }

 /**
  * Show a notification
  *
  * @param {string} type    Notification type
  * @param {string} message Notification message
  */

 showNotification( type: string, message: string ): void {
    // alert('sono in showNot - ' + message);
     this.notifier.notify( type, message );
     console.log(`sono in showNotification  ${type}`);
  //   alert('sono in notifier' + message);
   }

   controllaPrezzo(listinoprodw: Listinoprodwork) {

   // alert(' sto controllando il prezzo del ' + listinoprodw.prezzo + ' relativo al prodotto: ' + listinoprodw.id)
    if(listinoprodw.prezzo <= 0) {
       this.Message = "il prezzo del prodotto: " + listinoprodw.descrizione  + ' è ERRATO !!'
       this.alertSuccess = false;
    }
   }

    controllaQta(listinoprodw: Listinoprodwork) {
   // alert(' sto controllando la qta ' + listinoprodw.qta + ' relativo al prodotto: ' + listinoprodw.id)
    if(listinoprodw.qta <= 0) {
      this.Message = "la quantità del prodotto: " + listinoprodw.descrizione  + ' è ERRATA !!'
      this.alertSuccess = false;
    }

   }


   confermaProdotto(listinoprodw: Listinoprodwork) {
   // alert(' sto effetuando controllo finale sul prodootto ' + listinoprodw.descrizione)
    if(listinoprodw.qta <= 0) {
      this.Message = "la quantità del prodotto: " + listinoprodw.descrizione  + ' è ERRATA !!'
      this.alertSuccess = false;
      return;
    }
    if(listinoprodw.prezzo <= 0) {
      this.Message = "il prezzo del prodotto: " + listinoprodw.descrizione  + ' è ERRATO !!'
      this.alertSuccess = false;
      return;
    }
    this.prodottoCorretto = 'S';
    listinoprodw.pz = listinoprodw.prezzo;
    console.log('------------------  aggiorno il nuovo prezzo e qta ' + JSON.stringify(listinoprodw));
    this.aggiornaprodottoamenu(this.prodottoCorretto, listinoprodw);

   }


   modificaProdotto(listinoprodw: Listinoprodwork) {
     this.prodottoCorretto = 'X';
     listinoprodw.qta = 0;
     this.aggiornaprodottoamenu(this.prodottoCorretto, listinoprodw);
     // riaggiorno la situazione dei selezionati
     this.activateSelection = false;
     this.amenu = 'S'
     this.loadprodottibyamenu(this.listinowork.id, this.amenu)

   }



   focusFunction() {
    this.Message = " "
    this.alertSuccess = true;
   }


   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      // alert('controllo la modalità di chiusura della popup - chiusura su tasto save: ' + result);
      if(result ===  'Cancel click') {
         this.cancellazioneAbort();
      }
      if(result ===  'Delete click') {
        // gestire uscita da popup
        this.cancellaUser(this.manif);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
   //   alert('controllo la modalità di chiusura della popup ------------------ chiusura su tasto close: ' + reason);
      this.cancellazioneAbort();
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  cancellazioneAbort() {
    this.type = 'warning';
    this.Message = 'cancellazione abbandonata dall utente';
    this.showNotification(this.type, this.Message);
  }

  cancellaUser(manif: Manifestazione) {

    this.manifestazioneService.delete(manif).subscribe(
        response => {
          if(response['ok']) {
            this.isVisible = true;
            this.alertSuccess = true;
            this.type = 'success';
            this.Message = 'Manifestazione cancellata correttamente';
            this.showNotification(this.type, this.Message);
          }
      },
      error =>
          {
            this.isVisible = true;
            this.alertSuccess = false;
            this.type = 'error';
            this.Message = 'Errore cancellazione User' + '\n' + error.message;
            this.showNotification(this.type, this.Message);
            console.log(error);
          });
  }


  onSelectionChange(tipo: string)   {

    // alert('onSelectionChange - Tipo Richiesta: ' + tipo);

     this.tipoRichiesta = tipo.substring(0, 1);

     this.trovatoRec = false;
     this.isVisible = true;
     this.activateSelection = false;

     switch (this.tipoRichiesta) {
      case 'T':
       this.activateSelection = false;
       this.loadAllprodottiwork(this.listwork);
   //   this.router.navigate(['getpersoneforMessa', this.messa.id]);
      break;
      case 'A':
          this.activateSelection = false;
          this.amenu = 'S'
          this.loadprodottibyamenu(this.listinowork.id, this.amenu)
        break;
      case 'N':
          this.activateSelection = false;
          this.amenu = 'N'
          this.loadprodottibyamenu(this.listinowork.id, this.amenu)
        break;
      case 'S':
      this.activateSelection = true;
      this.nRec = 0;
        break;
      default:
      alert('Scelta errata \n ricerca non possibile');
      break;
    }
 }

 onSelectionChange1(tipo: string, listinoprodwork: Listinoprodwork)   {

   console.log('.......................... onSelectionChange1 - Tipo Richiesta: ' + tipo);

   this.aggiornaprodottoamenu(tipo, listinoprodwork)

}

async aggiornaprodottoamenu(tipo: string, listinoprodwork: Listinoprodwork) {

  console.log(`aggiornaprodottoamenu - appena entrato ---- tipo ${tipo}` );
  this.tipoRichiesta = tipo.substring(0, 1);

  listinoprodwork.amenu = this.tipoRichiesta;

  let rc = await this.listinoprodworkService.update(listinoprodwork).subscribe(
   resp => {

    //     console.log(`loadlastGiornata: ----------------------->  ${JSON.stringify(resp['data'])} `);
         if(resp['rc'] === 'ok') {
            this.listinowork.nprodx -= 1;
            this.aggiornaListinowork(this.listinowork);
           // this.gior = resp['data'];

          }

       },
   error => {
        alert('sono in aggiornaprodottoamenu');
        this.isVisible = true;
        this.alertSuccess = false;
        console.log('aggiornaprodottoamenu - errore: ' + error.error.message);
        this.type = 'error';
        this.Message = error.message;
        this.alertSuccess = false;

      });
}

async loadprodottibyamenu(id: number, amenu: string) {
  console.log(`loadprodottibyamenu - appena entrato`);
  let rc = await this.listinoprodworkService.getallProdbylistinoamenu(id,amenu).subscribe(
   resp => {

      console.log(`loadprodottibytipologia: ----------------------->  ${JSON.stringify(resp['data'])} `);
         if(resp['rc'] === 'ok') {
            this.listinoprodottiwork = resp['data'];
            this.nRec = resp['number'];
          }
       },
   error => {
        alert('sono in loadprodottibytipologia');
        this.isVisible = true;
        this.alertSuccess = false;
        console.log('loadprodottibytipologia - errore: ' + error.error.message);
        this.type = 'error';
        this.Message = error.message;
        this.alertSuccess = false;

      });
}


async countAllprodottiworkamenu(id: number) {
  console.log(`lcountAllprodottiworkamenu - appena entrato`);
  let rc = await this.listinoprodworkService.getcountProdottiamenu(id).subscribe(
   resp => {

      console.log('countAllprodottiworkamenu: -----------------------> ' + this.nprodtot );
         if(resp['rc'] === 'ok') {
            this.nprodtots = resp['nums'];
            this.nprodtotn = resp['numn'];
          }
          if(resp['rc'] === 'nf') {
            this.nprodtots = 0;
            this.nprodtotn = 0;
          }
       },
   error => {
        alert('sono in countAllprodottiworkamenu');
        this.isVisible = true;
        this.alertSuccess = false;
        console.log('countAllprodottiworkamenu - errore: ' + error.error.message);
        this.type = 'error';
        this.Message = error.message;
        this.alertSuccess = false;

      });
}


// vecchia modalità senza count
async loadAllprodottiwork(id: number) {
  console.log(`loadAllprodottiwork - appena entrato`);
  let rc = await this.listinoprodworkService.getallProdbylistino(id).subscribe(
   resp => {

      console.log(`loadAllprodottiwork: ----------------------->  ${JSON.stringify(resp['data'])} `);
         if(resp['rc'] === 'ok') {
            this.listinoprodottiwork = resp['data'];
            this.nprodtot = 0;
            this.nprodamenu = 0;
            for(const prodwork of this.listinoprodottiwork) {
              this.nprodtot += 1;
              if(prodwork.amenu == 'S') {
                this.nprodamenu += 1;
              }
           }
           this.nRec = resp['number'];
          }
          if(resp['rc'] === 'nf') {
            this.nRec = 0;
          }
       },
   error => {
        alert('sono in loadAllprodottiwork');
        this.isVisible = true;
        this.alertSuccess = false;
        console.log('loadAllprodottiwork - errore: ' + error.error.message);
        this.type = 'error';
        this.Message = error.message;
        this.alertSuccess = false;

      });
}

   gestione(tipologia: Ttipologia) {
    console.log('-----------------   gestione ' + JSON.stringify(tipologia))
    this.loadprodottibytipologia(tipologia.id, this.listinowork.id);
   }


   async loadprodottibytipologia(idtipologia: number, id: number) {
    console.log('------------------------------------------  loadprodottibytipologia - appena entrato -- tipol ' + idtipologia + ' listinow:' + id);
    let amenu = 'X'
    let rc = await this.listinoprodworkService.getallProdbylistbytipologiabyamenu(idtipologia,id, amenu).subscribe(
     resp => {

        console.log(`loadprodottibytipologia: ----------------------->  ${JSON.stringify(resp['data'])} `);
           if(resp['rc'] === 'ok') {
              this.listinoprodottiwork = resp['data'];
              this.nRec = resp['number'];
            }
            if(resp['rc'] === 'nf') {
              this.nRec = 0;
            }
         },
     error => {
          alert('sono in loadprodottibytipologia');
          this.isVisible = true;
          this.alertSuccess = false;
          console.log('loadprodottibytipologia - errore: ' + error.error.message);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;

        });
  }

  getColor(amenu: string) {
    switch (amenu) {
      case 'S':
        return 'green';
      case 'N':
        return 'red';
    }
  }


  tipologiaSelect(id: number) {
   // alert('codice passato dal figlio card a giornata-detail -- padre_ Tipologia: ' + id + ' this.listinowork.id: ' + this.listinowork.id)
    this.loadprodottibytipologia(id, this.listinowork.id);
  }



>>>>>>> d8eac67 (registrazione corretta)


}
