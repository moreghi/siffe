import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
>>>>>>> d8eac67 (registrazione corretta)
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { faPlusSquare, faSearch, faSave, faUserEdit, faMinus, faPlus, faWindowClose, faTrash, faReply } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
// classe
import { Giornata } from '../../../classes/Giornata';
import { Manifestazione } from '../../../classes/Manifestazione';
<<<<<<< HEAD
import { Cassaw } from '../../../classes/Cassaw';
import { Cassa } from '../../../classes/Cassa';
import { TTaglia } from '../../../classes/T_taglia';
// services
import { ManifestazioneService } from './../../../services/manifestazione.service';
import { GiornataService } from './../../../services/giornata.service';
import { CtrfuncService } from './../../../services/ctrfunc.service';
import { CassawService } from '../../../services/cassaw.service';
import { CassaService } from '../../../services/cassa.service';
import { TtagliaService} from '../../../services/ttaglia.service';
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
import { isNull } from '@angular/compiler/src/output/output_ast';
=======
//import { isNull } from '@angular/compiler/src/output/output_ast';

>>>>>>> d8eac67 (registrazione corretta)


@Component({
  selector: 'app-giornata-detail',
  templateUrl: './giornata-detail.component.html',
  styleUrls: ['./giornata-detail.component.css']
})
export class GiornataDetailComponent implements OnInit {


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

<<<<<<< HEAD
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
=======
>>>>>>> d8eac67 (registrazione corretta)

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
public idManif = 0;
public idGiornata = 0;

// per gestione abilitazione funzioni con service Moreno

public functionUrl = '';

<<<<<<< HEAD
public searchInqu = 'Inqu';
public searchEdit = 'Edit';
public searchEdits = 'Edits';
public searchNew = 'New';

public functionUrlUp = '';
public functionUserUp = '';

=======
>>>>>>> d8eac67 (registrazione corretta)

  // ---------------------  personalizzazioni componente

  giornata: Giornata;
  giornate: Giornata[] = [];
<<<<<<< HEAD
  manif: Manifestazione;

 public cassaw: Cassaw;
 public cassew: Cassaw[] = [];

 public cassa: Cassa;
 public casse: Cassa[] = [];

 public taglie: TTaglia[] = [];
 public taglia: TTaglia;



=======
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
>>>>>>> d8eac67 (registrazione corretta)

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
<<<<<<< HEAD

  constructor(public modalService: NgbModal,
              private ctrfuncService: CtrfuncService,
              private giornataService: GiornataService,
              private cassawService: CassawService,
              private cassaService: CassaService,
              private tagliaService: TtagliaService,
=======
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
    'Attivi',
    'Non Attivi',
    'Selezione'
  ];

  options1 = [
    'Si',
    'No'
  ];

  options2 = [
    'Sintetica',
    'Dettagliata'
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

  public dateParts: any;
  public tipoCassa = '?';

  constructor(public modalService: NgbModal,
              private giornataService: GiornataService,
>>>>>>> d8eac67 (registrazione corretta)
              private route: ActivatedRoute,
              private router: Router,
              private datePipe: DatePipe,
              private manifestazioneService: ManifestazioneService,
<<<<<<< HEAD
=======
              private prodottoService: ProdottoService,
              private listinoService: ListinoService,
              private listinoprodService: ListinoprodService,
              private ttipologiaService: TtipologiaService,
              private listinoworkService: ListinoworkService,
              private listinoprodworkService: ListinoprodworkService,
>>>>>>> d8eac67 (registrazione corretta)
              private notifier: NotifierService) {
                  this.notifier = notifier;
              }


              ngOnInit(): void {
<<<<<<< HEAD

                console.log('giornata-detail - sono in oninit - preparato messaggio ' + this.Message);

                this.tipoGiornata = 'merda';

                this.checkFunctionbylevel();

              }


              checkFunctionbylevel() {
               //  ----- parte comune a tutti i moduli
              this.rotta = this.route.snapshot.url[0].path;
              this.level = parseInt(localStorage.getItem('user_ruolo'));
              this.functionUrl = this.route.snapshot.url[1].path;

              if(this.route.snapshot.url[1].path !== 'new') {
                this.rottaId =  parseInt(this.route.snapshot.url[2].path);
                this.rottaIdManif =  parseInt(this.route.snapshot.url[3].path);
               } else {
                this.rottaId =  0;
                this.rottaIdManif =  parseInt(this.route.snapshot.url[2].path);
               }



            //  console.log('Rotta: ' + JSON.stringify(this.route.url));
              console.log('Rotta: ' + this.route.url);


              console.log('frontend - checkFunctionbylevel -- step_01');
              console.log('frontend - checkFunctionbylevel -- functionUrl:  --> ' + this.functionUrl);
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
                        this.route.paramMap.subscribe(p => {
                          this.idGiornata = +p.get('id');
                          console.log('id recuperato: ' + this.idGiornata);
                          // -------  leggo i dati della giornata
                          this.loadGiornata(this.idGiornata);
                          if(this.functionEdit || this.functionEdits) {
                            this.title = 'Aggiornamento Giornata Manifestazione';
                            this.fase = 'M';
                           } else {
                            this.title = 'Visualizzazione Giornata Manifestazione';
                            this.fase = 'I';
                           }
                          this.Message = 'Situazione Attuale Giornata';
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


        async  loadManif(id: number) {
               console.log(`loadManif - appena entrato`);
               let rc = await this.manifestazioneService.getManifestazione(id).subscribe(
                resp => {
                      console.log(`loadManif:  ${JSON.stringify(resp['data'])} `);
                      this.manif = resp['data'];
                      this.manif.key_utenti_operation = +localStorage.getItem('id');
                      if(this.manif.stato === 0) {
                        this.enabledDay = true;
                      } else {
                        this.enabledDay = false;
                      }
                      this.loadlastDay(this.idManif);
                      console.log('fatto lettura manif: ' + this.manif.id);
                    //  this.type = 'success';
                   //   this.Message = 'situazione attuale Manifestazione';
                   //   this.alertSuccess = true;
=======
                this.goApplication();
              }

              goApplication() {

                this.isVisible = true;
                this.alertSuccess = true;

                this.rotta = this.route.snapshot.url[0].path;
                this.rottafase = this.route.snapshot.url[1].path;

          //      this.idManif = +this.route.snapshot.url[2].path;

                console.log('giornata-detail - rotta: ' + this.rotta);
                console.log('giornata-detail - rottafase: ' + this.rottafase);

                this.loadtipologie();

                this.route.paramMap.subscribe(p => {
                  this.idManif = +p.get('idManif');
                  console.log('id recuperato: ' + this.idManif);
                  // -------  leggo i dati della giornata
                  this.loadManif(this.idManif);
                  this.title = 'Aggiornamento Giornata';
                  this.fase = 'M';
                  this.Message = 'Situazione Attuale Giornata';
               });


                if(this.rottafase === 'new') {
                 this.giornata = new Giornata();
                 this.giornata.key_utenti_operation = +localStorage.getItem('id');
                 this.title = 'Inserimento Giornata';
                 this.fase = 'N';
                 this.Message = `Inserire i dati della giornata`;
                 this.listinowork1 = new Listinowork();
                 this.listinowork1.id = 1;
                 this.cancellalistinowork(this.listinowork1);
               //  this.loadallProdotti()
               } else {
                   this.route.paramMap.subscribe(p => {
                     this.idpassed = +p.get('id');
                     console.log('id recuperato: ' + this.idpassed);
                     // -------  leggo i dati della giornata
                     this.loadGiornata(this.idpassed);
                     this.title = 'Aggiornamento Giornata';
                     this.fase = 'M';
                     this.Message = 'Situazione Attuale Giornata';
                  });
              }
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


           async  loadallProdotti() {
            this.stato = 1;
            let rc = await this.prodottoService.getAllProdottibytipologAttiva(this.stato).subscribe(
             resp => {
                  if(resp['rc'] === 'ok') {
                    this.prodotti = resp['data'];
                    this.prg = 0;
                    for(const prodotto of this.prodotti) {
                           this.listinoprodottowork = new Listinoprodwork();
                           this.prg += 1;
                           this.listinoprodottowork.id = this.prg;
                           this.listinoprodottowork.idlistino = 1;
                           this.listinoprodottowork.idprodotto = prodotto.id;
                           this.listinoprodottowork.descrizione = prodotto.descrizione;
                           this.listinoprodottowork.tipologia = prodotto.tipologia;
                           this.listinoprodottowork.categoria = prodotto.categoria;
                           this.listinoprodottowork.competenza = prodotto.competenza;
                           this.listinoprodottowork.prezzo = prodotto.prezzo;
                           this.listinoprodottowork.photo = prodotto.photo;
                           this.listinoprodottowork.amenu = 'X';
                           this.listinoprodottowork.key_utenti_operation = +localStorage.getItem('id');

                           console.log('listinoprodottowork: ' + JSON.stringify(this.listinoprodottowork))
                           this.crealistinoprodwork(this.listinoprodottowork);
                  }
                  this.listinowork.nprodx = this.prg;
                  this.aggiornaListinowork(this.listinowork);
                }
             },
             error => {
                  alert('sono in loadallProdotti -- error');
                  this.isVisible = true;
                  this.alertSuccess = false;
                  console.log('loadallProdotti - errore: ' + error.error);
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
                        this.loadallProdotti();
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
                            if(this.manif.stato === 0) {
                              this.enabledDay = true;
                            } else {
                              this.enabledDay = false;
                            }
                            this.loadlastDay(this.idManif);
                            console.log('fatto lettura manif: ' + this.manif.id);
                          //  this.type = 'success';
                         //   this.Message = 'situazione attuale Manifestazione';
                         //   this.alertSuccess = true;
                      }

>>>>>>> d8eac67 (registrazione corretta)
                   },
                error => {
                     alert('sono in loadManif');
                     this.isVisible = true;
                     this.alertSuccess = false;
<<<<<<< HEAD
                     console.log('loadManif - errore: ' + error);
                     this.type = 'error';
                     this.Message = error.message;
                     this.alertSuccess = false;

=======
                     console.log('loadManif - errore: ' + error.error);
                     this.type = 'error';
                     this.Message = error.message;
                     this.alertSuccess = false;
                     this.showNotification(this.type, this.Message);
>>>>>>> d8eac67 (registrazione corretta)
                   });
              }

  async loadlastDay(id: number) {
    this.gior = new Giornata();
    this.neverDay = 'Nessuna data ancora inserita';
    console.log(`loadlastDay - appena entrato`);
    let rc = await this.giornataService.getLastGiornataidbyManif(id).subscribe(
     resp => {

           console.log(`loadlastDay: ----------------------->  ${JSON.stringify(resp['data'])} `);
           if(resp['rc'] === 'ok') {
              this.foundLastday = true;
              this.gior = resp['data'];

            }
           if(resp['rc'] === 'nf') {
              this.foundLastday = false;
<<<<<<< HEAD
=======
              this.neverDay = 'Nessuna data ancora inserita';
>>>>>>> d8eac67 (registrazione corretta)

            }
           console.log('fatto lettura last giornata: ' + this.gior.id);
         //  this.type = 'success';
         //  this.Message = 'situazione attuale giornata';
         //  this.alertSuccess = true;
        },
     error => {
          alert('sono in loadlastDay');
          this.isVisible = true;
          this.alertSuccess = false;
<<<<<<< HEAD
          console.log('loadlastDay - errore: ' + error);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;

        });

=======
          console.log('loadlastDay - errore: ' + error.error);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;
          this.showNotification(this.type, this.Message);
        });
>>>>>>> d8eac67 (registrazione corretta)
  }


async loadGiornata(id: number) {

  console.log(`loadGiornata - appena entrato` + id);
<<<<<<< HEAD
  let rc = await this.giornataService.getGiornata(id).subscribe(
=======
  let rc = await this.giornataService.getbyId(id).subscribe(
>>>>>>> d8eac67 (registrazione corretta)
   resp => {

         console.log(`loadGiornata: ----------------------->  ${JSON.stringify(resp['data'])} `);
         if(resp['rc'] === 'ok') {
            this.foundLastday = true;
            this.giornata = resp['data'];
          }
         if(resp['rc'] === 'nf') {
            this.foundLastday = false;
            this.neverDay = 'Nessuna data ancora inserita';
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
<<<<<<< HEAD
        console.log('loadGiornata - errore: ' + error);
        this.type = 'error';
        this.Message = error.message;
        this.alertSuccess = false;

=======
        console.log('loadGiornata - errore: ' + error.error);
        this.type = 'error';
        this.Message = error.message;
        this.alertSuccess = false;
        this.showNotification(this.type, this.Message);
>>>>>>> d8eac67 (registrazione corretta)
      });
}



  async conferma() {
    console.log('conferma - fase: ' + this.fase);
<<<<<<< HEAD

// controllo sulle date

    if(this.foundLastday === true) {
        console.log('uscita 1');
        this.date1 = new Date(this.gior.dtGiornata);
        this.date2 = new Date(this.giornata.dtGiornata);

        console.log('la data1 lastdata :' + this.date1);

        console.log('la data2 gior.dtGiornata è:' + this.date2);

        if(this.date2 < this.date1) {
          this.type = 'error';
          this.Message = 'Selezionare una data maggiore dell ultima data inserita';
          this.showNotification(this.type, this.Message);
          return;
        }
=======
    this.Message = '';
// controllo sulle date

    if(this.giornata.dtGiornata == '') {
      this.type = 'error';
      this.Message = 'Non hai selezionato la data';
      this.alertSuccess = false;
      this.showNotification(this.type, this.Message);
      return;
    }

   // alert('data selezionata: ' + this.giornata.dtGiornata)


  if(this.listinowork.nprodx > 0) {
    this.type = 'error';
    this.Message = 'ci sono ancora ' + this.listinowork.nprodx + ' prodotti da selezionare';
    this.alertSuccess = false;
    this.showNotification(this.type, this.Message);
    return;
  }

  if(this.giornata.tipocassa == '?') {
    this.type = 'error';
    this.Message = 'selezionare il tipo cassa';
    this.alertSuccess = false;
    this.showNotification(this.type, this.Message);
    return;
  }

   if(this.foundLastday === true) {
        console.log('uscita 1');

        //  trasformo la data in formato stringa in Date
        this.dateParts = this.gior.dtGiornata1.split("-");
        this.date1 =  new Date(Date.UTC(this.dateParts[2], this.dateParts[1]-1, this.dateParts[0]))

        this.date2 = new Date(this.giornata.dtGiornata);
        var _MS_PER_DAY = 1000 * 60 * 60 * 24;

        // a e b sono oggetti Data

          var utc1 = Date.UTC(this.date1.getFullYear(), this.date1.getMonth(), this.date1.getDate());
          var utc2 = Date.UTC(this.date2.getFullYear(), this.date2.getMonth(), this.date2.getDate());
          var tx =  Math.floor((utc2 - utc1) / _MS_PER_DAY);


       //alert('differenza tra date2 e date1 ' + tx)

       if(tx <= 0) {
        this.type = 'error';
        this.Message = 'Selezionare una data maggiore dell ultima data inserita';
        this.alertSuccess = false;
        this.showNotification(this.type, this.Message);
        return;
      }
>>>>>>> d8eac67 (registrazione corretta)




<<<<<<< HEAD
=======
        // if(this.date2 <= this.date1) {
        //   this.type = 'error';
        //   this.Message = 'Selezionare una data maggiore dell ultima data inserita';
        //   this.alertSuccess = false;
        //   this.showNotification(this.type, this.Message);
        //   return;
        // }

>>>>>>> d8eac67 (registrazione corretta)
        this.giornata.dtGiornata =  this.datePipe.transform(this.date2,"yyyy-MM-dd");                                      //this.date2;
  } else {
    console.log('uscita ------------------------  2' );

  }
<<<<<<< HEAD


    this.giornata.idManifestazione = this.manif.id;
=======
      //  alert('data corretta per registrazione')
      //  return;  // test
    this.giornata.idManifestazione = this.manif.id;
    this.giornata.operationCassa = 'N';

   // ---------------------------
   this.dataGiorno = new Date(this.giornata.dtGiornata);

   /*
   var day = ('0' + this.dataEvento.getDate()).slice(-2);
   var month = ('0' + (this.dataEvento.getMonth() + 1)).slice(-2);
   var year = this.dataEvento.getFullYear();
*/

  let dayCopy = 0;
  let mmCopy = 0;

   var day =  this.dataGiorno.getDate();
   dayCopy = day;
   if(day < 10) {
     day = '0' + day;
   }
   var month = this.dataGiorno.getMonth();
   month =  month + 1
   mmCopy = month;
   if(month < 10) {
     month = '0' + month;
   }
   var year = this.dataGiorno.getFullYear();

  // alert('data spezzata: dayCopy; ' + dayCopy + ' mmCopy: ' + mmCopy + ' data normalizzata: ' + this.dataEvento)


   this.dataGiorno =  day + '-' + month + '-' + year;
   this.giornata.dtGiornata1 = this.dataGiorno;

    console.log('tutto ok');
>>>>>>> d8eac67 (registrazione corretta)

    switch (this.fase)  {

        case 'N':
        console.log('pronto per fare inserimento ' + JSON.stringify(this.giornata));
<<<<<<< HEAD
          let rc = await  this.giornataService.createGiornata(this.giornata).subscribe(
          res => {
                this.aggiornaDatafineManifestazione(this.giornata.dtGiornata);
                this.loadlastGiornata(this.idManif);

                this.type = 'success';
                this.Message =  res['message'];                               //'utente  creato con successo';
                this.alertSuccess = true;
                this.router.navigate(['/manif/' + this.manif.id]);
=======
        this.giornata.stato = 1;
        let rc = await  this.giornataService.create(this.giornata).subscribe(
          res => {
                if(res['rc'] === 'ok') {
                  this.giornata = res['data'];
                  this.aggiornaDatafineManifestazione(this.giornata.dtGiornata1);
                  this.loadlastGiornata(this.idManif);
                  this.crealistinoGiornata(this.dataGiorno);
                  this.type = 'success';
                  this.Message =  res['message'];                               //'utente  creato con successo';
                  this.alertSuccess = true;
                  this.router.navigate(['giornate/' + this.manif.id]);
                }

>>>>>>> d8eac67 (registrazione corretta)
             },
            error => {
               console.log(error);
               this.type = 'error';
               this.Message = error.message;
               this.alertSuccess = false;
<<<<<<< HEAD
=======
               this.showNotification(this.type, this.Message);
>>>>>>> d8eac67 (registrazione corretta)
            });
          break;
      case 'M':

      console.log(`Giornata-detail -- conferma (upd) : ${JSON.stringify(this.giornata)}`);


<<<<<<< HEAD
      let rc1 = this.giornataService.updateGiornata(this.giornata).subscribe(
=======
      let rc1 = this.giornataService.update(this.giornata).subscribe(
>>>>>>> d8eac67 (registrazione corretta)
          res => {
                this.aggiornaDatafineManifestazione(this.giornata.dtGiornata);
                this.giornata = res['data'];
                this.type = 'success';
                this.Message = res['message'];          //'utente aggiornato con successo del cazzo';
                this.alertSuccess = true;
<<<<<<< HEAD
                this.router.navigate(['/manif/' + this.manif.id]);
=======
                this.router.navigate(['manif/' + this.manif.id]);
>>>>>>> d8eac67 (registrazione corretta)
             },
            error => {
               console.log(error);
               this.type = 'error';
               this.Message = error.message;
               this.alertSuccess = false;
<<<<<<< HEAD
=======
               this.showNotification(this.type, this.Message);
>>>>>>> d8eac67 (registrazione corretta)
            });
          break;
      default:
        alert('nav - funzione non ancora attivata');
        break;
    }
    this.showNotification(this.type, this.Message);
  }


<<<<<<< HEAD
=======
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

>>>>>>> d8eac67 (registrazione corretta)
  async loadlastGiornata(id: number) {
    console.log(`loadlastGiornata - appena entrato`);
    let rc = await this.giornataService.getLastGiornataidbyManif(id).subscribe(
     resp => {

      //     console.log(`loadlastGiornata: ----------------------->  ${JSON.stringify(resp['data'])} `);
           if(resp['rc'] === 'ok') {
              this.gior = resp['data'];
<<<<<<< HEAD
              this.creanewCassawGiornata(this.gior.id);
              this.creanewCassaGiornata(this.gior.id);
=======

>>>>>>> d8eac67 (registrazione corretta)
            }

         },
     error => {
          alert('sono in loadlastGiornata');
          this.isVisible = true;
          this.alertSuccess = false;
<<<<<<< HEAD
          console.log('loadlastGiornata - errore: ' + error);
=======
          console.log('loadlastGiornata - errore: ' + error.error);
>>>>>>> d8eac67 (registrazione corretta)
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;

        });
<<<<<<< HEAD

  }


  async creanewCassawGiornata(id: number) {
    console.log('creanewCassaw - appenza entrato ----   Giornata ' + id);

    let rc = await this.tagliaService.getAll().subscribe(
      resp => {

            if(resp['rc'] === 'ok') {
         //      console.log(`creanewCassawGiornata: ----------------------->  ${JSON.stringify(resp['data'])} `);
               this.taglie = resp['data'];
               this.prg = id * 100;
               for(let tagl of this.taglie) {
                  if(tagl.id > 0) {
                    this.cassaw = new Cassaw();
              //      console.log(`creanewCassawGiornata: ------fatto istanza -------->  ${JSON.stringify(this.cassaw)} `);
                    this.prg = this.prg + 1;
                    this.cassaw.id = this.prg;
                    this.cassaw.idGiornata = id;
                    this.cassaw.idTaglia = tagl.id;

              //      console.log(`creanewCassawGiornata: ------- pronto per inserire ---------------->  ${JSON.stringify(this.cassaw)} `);

                    this.registranewCassaw(this.cassaw);
                  }
               }
             }
         },
      error => {
           alert('sono in creanewCassawGiornata');
           this.isVisible = true;
           this.alertSuccess = false;
           console.log('creanewCassawGiornata - errore: ' + error);
           this.type = 'error';
           this.Message = error.message;
           this.alertSuccess = false;
           this.showNotification(this.type, this.Message);
         });

  }



  async creanewCassaGiornata(id: number) {
    console.log('------ Cassa -------------   creanewCassa - appenza entrato ----   Giornata ' + id);

    let rc = await this.tagliaService.getAll().subscribe(
      resp => {

            if(resp['rc'] === 'ok') {
            //   console.log(`creanewCassaGiornata: ----------------------->  ${JSON.stringify(resp['data'])} `);
               this.taglie = resp['data'];
               this.prg = id * 100;
               for(let tagl of this.taglie) {
                  if(tagl.id > 0) {
                    this.cassa = new Cassa();
              //      console.log(`creanewCassaGiornata: ------fatto istanza -------->  ${JSON.stringify(this.cassa)} `);
                    this.prg = this.prg + 1;
                    this.cassa.id = this.prg;
                    this.cassa.idGiornata = id;
                    this.cassa.idTaglia = tagl.id;
                    this.cassa.key_utenti_operation = +localStorage.getItem('id');
                //    console.log(`creanewCassaGiornata: ------- pronto per inserire ---------------->  ${JSON.stringify(this.cassa)} `);

                    this.registranewCassa(this.cassa);
                  }
               }
             }
         },
      error => {
           alert('sono in creanewCassaGiornata');
           this.isVisible = true;
           this.alertSuccess = false;
           console.log('creanewCassaGiornata - errore: ' + error);
           this.type = 'error';
           this.Message = error.message;
           this.alertSuccess = false;
           this.showNotification(this.type, this.Message);
         });

  }




  async registranewCassaw(cassaw: Cassaw) {


    console.log(`registranewCassaw appena entrato: ----------------------->  ${JSON.stringify(cassaw)} `);
    let rc = await this.cassawService.createCassa(cassaw).subscribe(
      resp => {
            if(resp['rc'] !== 'ok') {
              this.isVisible = true;
              this.alertSuccess = false;
        //      console.log('registranewCassaw - errore:creazione nuova taglia ');
              this.type = 'error';
              this.Message = 'errore in creazione nuove taglie';
              this.alertSuccess = false;
              this.showNotification(this.type, this.Message);
              return;
             }
         },
      error => {
           this.isVisible = true;
           this.alertSuccess = false;
           console.log('registranewCassaw - errore: ' + error);
           this.type = 'error';
           this.Message = error.message;
           this.alertSuccess = false;
           this.showNotification(this.type, this.Message);
         });

  }

  async registranewCassa(cassa: Cassa) {
    console.log(`registranewCassa appena entrato: ----------------------->  ${JSON.stringify(cassa)} `);
    let rc = await this.cassaService.createCassa(cassa).subscribe(
      resp => {
            if(resp['rc'] !== 'ok') {
              this.isVisible = true;
              this.alertSuccess = false;
        //      console.log('registranewCassa - errore:creazione nuova taglia ');
              this.type = 'error';
              this.Message = 'errore in creazione nuove taglie';
              this.alertSuccess = false;
              this.showNotification(this.type, this.Message);
              return;
             }
         },
      error => {
           this.isVisible = true;
           this.alertSuccess = false;
           console.log('registranewCassa - errore: ' + error);
           this.type = 'error';
           this.Message = error.message;
           this.alertSuccess = false;
           this.showNotification(this.type, this.Message);
         });

  }


=======
  }

>>>>>>> d8eac67 (registrazione corretta)
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

<<<<<<< HEAD
    let rc = await this.manifestazioneService.updateManifestazione(this.manif).subscribe(
=======
    let rc = await this.manifestazioneService.update(this.manif).subscribe(
>>>>>>> d8eac67 (registrazione corretta)
      resp => {
            console.log(`aggiornaDatafineManifestazione:  ${JSON.stringify(resp['data'])} `);
            this.manif = resp['data'];
         },
      error => {
           alert('sono in loadManif');
           this.isVisible = true;
           this.alertSuccess = false;
<<<<<<< HEAD
           console.log('loadManif - errore: ' + error);
           this.type = 'error';
           this.Message = error.message;
           this.alertSuccess = false;

         })

}







=======
           console.log('loadManif - errore: ' + error.error);
           this.type = 'error';
           this.Message = error.message;
           this.alertSuccess = false;
           this.showNotification(this.type, this.Message);
         })
    }
>>>>>>> d8eac67 (registrazione corretta)

  reset() {
    switch (this.fase)  {
        case 'N':
        this.giornata = new Giornata();
        this.type = 'success';
        this.Message = 'Inserire i dati della giornata';
        this.alertSuccess = true;
        break;
      case 'M':
<<<<<<< HEAD
        this.giornataService.getGiornata(this.giornata.id).subscribe(
=======
        this.giornataService.getbyId(this.giornata.id).subscribe(
>>>>>>> d8eac67 (registrazione corretta)
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
<<<<<<< HEAD
     this.router.navigate(['/manif/' + this.manif.id]);
=======
     this.router.navigate(['manif/' + this.manif.id]);
>>>>>>> d8eac67 (registrazione corretta)
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

<<<<<<< HEAD


=======
>>>>>>> d8eac67 (registrazione corretta)
  cancellazioneAbort() {
    this.type = 'warning';
    this.Message = 'cancellazione abbandonata dall utente';
    this.showNotification(this.type, this.Message);
  }

<<<<<<< HEAD

  cancellaUser(manif: Manifestazione) {

    this.manifestazioneService.deleteManifestazione(manif).subscribe(
=======
  cancellaUser(manif: Manifestazione) {

    this.manifestazioneService.delete(manif).subscribe(
>>>>>>> d8eac67 (registrazione corretta)
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


<<<<<<< HEAD

=======
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


onSelectionChange2(tipo: string)   {

  this.tipoRichiesta = tipo.substring(0, 1);
  this.giornata.tipocassa = this.tipoRichiesta;

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
    console.log(`loadprodottibytipologia - appena entrato`);
    let rc = await this.listinoprodworkService.getallProdbylistbytipologia(idtipologia,id).subscribe(
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
   // alert('codice passato dal figlio card a giornata-detail -- padre: ' + id)
    this.loadprodottibytipologia(id, this.listinowork.id);
  }




  /*
  getBackground(amenu: string) {
    switch (amenu) {
      case 'S':
        return 'yellow';
      case 'N':
        return 'black';
    }
  }
*/

/*

 this.giornataService.getGiornateforManif(this.idpassed).subscribe(
       // sentire hidran per lettura particolare
      // this.fedeleService.getFedeliforMessa(id).subscribe(
         response => {
             console.log('dopo ricerca per tipo ' + this.tipoRichiesta + ' esito: ' + response['rc'] + ' dati: ' + JSON.stringify(response['data']) + ' record: ' + response['number']) ;
             if(response['rc'] === 'ok') {
               this.giornate = response['data'];
               this.nRec = response['number'];
               this.textMessage = response['message'];
               this.trovatoRec = true;
               this.alertSuccess = true;
               this.Message = 'Situazione Attuale';
             }
             if(response['rc'] === 'nf') {
               this.giornate = this.giornatenull;
               this.nRec = response['number'];
               this.textMessage = response['message'];
               this.trovatoRec = false;
               this.alertSuccess = false;
               this.Message = 'Situazione Attuale - Nessuna giornata presente per il tipo di richiesta';
             }


          //   alert('loadGiornateFromManif - dovrei aver letto le giornate' + this.nRec + ' Messaggio: ' + this.textMessage);
          //   console.log('loadGiornateFromManif - dovrei aver letto le giornate' + this.nRec + ' Messaggio: ' + this.textMessage);
         },
         error => {
            alert('onSelectionChange: ' + error.message);
            console.log(error);
            this.alertSuccess = false;
            this.Message = error.message;
         });


*/
>>>>>>> d8eac67 (registrazione corretta)

}
