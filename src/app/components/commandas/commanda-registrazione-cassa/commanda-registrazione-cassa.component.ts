<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
// model Class
import { Cassawc } from '../../../classes/Cassawc';
import { Cassac } from '../../../classes/cassac';
import { Cassa } from '../../../classes/Cassa';
import { Commandaw } from '../../../classes/Commandaw';
import { Commandawriga } from '../../../classes/Commandawriga';
=======

import { Component, OnInit } from '@angular/core';
// model Class
import { Commandaw } from '../../../classes/Commandaw';
import { Commandawriga } from '../../../classes/Commandawriga';
import { Cassawc1 } from '../../../classes/Cassawc1';
import { Prenotazione } from '../../../classes/Prenotazione';
import { Cassac } from '../../../classes/cassac';
import { Cassa } from '../../../classes/Cassa';
>>>>>>> d8eac67 (registrazione corretta)
import { Commanda } from '../../../classes/Commanda';
import { Commandariga } from '../../../classes/Commandariga';
import { Prodotto } from '../../../classes/Prodotto';
import { Giornata } from '../../../classes/Giornata';

import { ActivatedRoute, Router } from '@angular/router';
// Services
<<<<<<< HEAD
import { CassawcService } from '../../../services/cassawc.service';
import { CassacService } from '../../../services/cassac.service';
import { CassaService } from '../../../services/cassa.service';
import { CommandawService } from './../../../services/commandaw.service';
import { CtrfuncService } from './../../../services/ctrfunc.service';
import { CommandawrigaService} from './../../../services/commandawriga.service';
=======
import { CommandawService } from './../../../services/commandaw.service';
import { CommandawrigaService} from './../../../services/commandawriga.service';
import { Cassawc1Service } from '../../../services/cassawc1.service';
import { PrenotazioneService } from './../../../services/prenotazione.service';
import { CassacService } from '../../../services/cassac.service';
import { CassaService } from '../../../services/cassa.service';
>>>>>>> d8eac67 (registrazione corretta)
import { CommandaService } from './../../../services/commanda.service';
import { CommandarigaService} from './../../../services/commandariga.service';
import { ProdottoService } from './../../../services/prodotto.service';
import { GiornataService } from './../../../services/giornata.service';

<<<<<<< HEAD
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { faUndo, faSave, faHandPointLeft, faTrashAlt, faInfoCircle, faThumbsUp, faThumbsDown, faSearch,
          faPlusSquare, faTrash, faUserEdit, faWindowClose, faMinus, faPlus, faReply, faRecycle } from '@fortawesome/free-solid-svg-icons';
// per gestire il popup con esito operazione
import { NotifierService } from 'angular-notifier';
import { DatePipe } from '@angular/common';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';
=======
// other
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { faUndo, faSave, faHandPointLeft, faTrashAlt, faInfoCircle, faThumbsUp, faThumbsDown, faSearch,
          faPlusSquare, faTrash, faUserEdit, faWindowClose, faMinus, faPlus, faReply } from '@fortawesome/free-solid-svg-icons';
// per gestire il popup con esito operazione
import { NotifierService } from 'angular-notifier';
import { DatePipe } from '@angular/common';
>>>>>>> d8eac67 (registrazione corretta)

@Component({
  selector: 'app-commanda-registrazione-cassa',
  templateUrl: './commanda-registrazione-cassa.component.html',
  styleUrls: ['./commanda-registrazione-cassa.component.css']
})
export class CommandaRegistrazioneCassaComponent implements OnInit {

<<<<<<< HEAD
  public title = 'Registrazione Commanda  -  Commanda-registrazione-anagrafica';
=======
  public title = 'Registrazione Commanda  -  Commanda-registrazione-Cassa';
>>>>>>> d8eac67 (registrazione corretta)

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
<<<<<<< HEAD
    faRecycle = faRecycle;
=======
>>>>>>> d8eac67 (registrazione corretta)

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
<<<<<<< HEAD
    public fase = '';
=======
>>>>>>> d8eac67 (registrazione corretta)


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
    public functionValid = false;
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
    public rottaTipo = '';

  // variabili per editazione messaggio

  public Message1 = '';
  public Message2 = '';
  public Message3 = '';
  public Message1err = 'Contattare il gestore dell applicazione.';

  public isValid = false;
  public idManif = 0;
  public idGiornata = 0;
<<<<<<< HEAD
  public idDay = 0;
=======
>>>>>>> d8eac67 (registrazione corretta)

  // per gestione abilitazione funzioni con service Moreno

  public functionUrl = '';

<<<<<<< HEAD
  public searchInqu = 'Inqu';
  public searchEdit = 'Edit';
  public searchEdits = 'Edits';
  public searchNew = 'New';

=======
>>>>>>> d8eac67 (registrazione corretta)
  public functionUrlUp = '';
  public functionUserUp = '';
  public tipoSelected = '';

    // ---------------------  personalizzazioni componente

    public routenavigate = '';

<<<<<<< HEAD
    public textMessage1 = '';
=======

   public textMessage1 = '';
>>>>>>> d8eac67 (registrazione corretta)
   public textMessage2 = '';
   public textUser = '';
   public headerPopup = '';
   public effettuataCancellazioneOld = false;

   public commandaw: Commandaw;
   public commandawriga: Commandawriga;
<<<<<<< HEAD

   public commanda: Commanda;
   public commandariga: Commandariga;
   public commandarighe: Commandariga[] = [];
   public commandarighenull: Commandariga[] = [];

   public commandawrighe: Commandawriga[] = [];
   public commandawrighenull: Commandawriga[] = [];

   public tagliei: Cassawc[] = [];
   public taglier: Cassawc[] = [];

   public cassewc: Cassawc[] = [];
   public cassawc: Cassawc;

   public cassac: Cassac;
   public cassa: Cassa;
   public casse: Cassa[] = [];
   public prodotto: Prodotto;
   public giornata: Giornata;
=======
   public cassawc1: Cassawc1;
   public commandawrighe: Commandawriga[] = [];
   public commandawrighenull: Commandawriga[] = [];
   public commandawrigheordinati: Commandawriga[] = [];

   public cassa: Cassa;
   public cassac: Cassac;
   public giornata: Giornata;
   public commanda: Commanda;
   public commandariga: Commandariga;
   public commandarighe: Commandariga[] = [];
   public prodotto: Prodotto;
   public prenotazione: Prenotazione;
>>>>>>> d8eac67 (registrazione corretta)

   public tipoRichiesta = '?';
   public ricManif = 0;
   public validSearch = false;
   private textMessage = '';
   public nDay = 0;
   public statoRic = 0;
   public registrata = false;
<<<<<<< HEAD
   public npezzi = 0;

=======

   public prenotatocognomeenome = '';
>>>>>>> d8eac67 (registrazione corretta)

   public idCommanda = 0;
   public idlogged = 0;

   public Tnumero = 0;
   public Tnumpersone = 0;
   public Tpagato = 0;

   public selectedProdotto = 0;
   public selectedProdottoAcquistato = 0;
   public visibleProdottiAcquistati = false;
   public visibleProdotti = false;
   public visibleProdotto = false;
   public tipologia = 0;
   public anagrafica = '';
   public routeGiornata = '';
<<<<<<< HEAD
   public totincassato = 0;
   public visibleResto = false;
   public visibleresetIncasso = false;
   public visibleresetResto = false;

  public totReso =  0;
  public visibleStampa = false;
  public prg = 0;
  public totalexx = 0;
  public commandaStampata = false;
  public nProdCucina = 0;
  public nProdBevande = 0;

  p_inc: number = 1;
   p_res: number = 1;

   constructor(public modalService: NgbModal,
               private ctrfuncService: CtrfuncService,
               private commandawService: CommandawService,
               private cassawcService: CassawcService,
=======
   public prg = 0;
   public EnabledCassa = false;
   // per paginazone
   p_prod: number = 1;
   p_righe: number = 1;
   p_ord: number = 1;

   public fase = '';
   public nRecOrd = 0;


   public dTaglia01 = '';
   public imp01 = 0;
   public valImp01 = 0;
   public res01 = 0;
   public valRes01 = 0;

   public dTaglia02 = '';
   public imp02 = 0;
   public valImp02 = 0;
   public res02 = 0;
   public valRes02 = 0;

   public dTaglia03 = '';
   public imp03 = 0;
   public valImp03 = 0;
   public res03 = 0;
   public valRes03 = 0;

   public dTaglia04 = '';
   public imp04 = 0;
   public valImp04 = 0;
   public res04 = 0;
   public valRes04 = 0;

   public dTaglia05 = '';
   public imp05 = 0;
   public valImp05 = 0;
   public res05 = 0;
   public valRes05 = 0;

   public dTaglia06 = '';
   public imp06 = 0;
   public valImp06 = 0;
   public res06 = 0;
   public valRes06 = 0;

   public ctrCampoNum = false;
   public incassato = 0;
   public reso = 0;
   public disabled100 = true;

   public impdaRendere = 0;

   public disabledr01 = false;
   public disabledr02 = false;
   public disabledr03 = false;
   public disabledr04 = false;
   public disabledr05 = false;
   public disabledr06 = false;
   public impNettodaPagare = 0;
   public importoReso = 0;
   public idTaglianum = 0;
   public idTagliaStr = '';

   public visibleStampa = false;
   public totalexx = 0;
   public commandaStampata = false;
   public nProdCucina = 0;
   public nProdBevande = 0;
   public tipoTaglia = 0;
   public importoTaglia = 0;
   public tipoMovCassa = '';
   public importoIncassato = false;
   public sbilancio = 0;


   constructor(public modalService: NgbModal,
               private commandawService: CommandawService,
>>>>>>> d8eac67 (registrazione corretta)
               private commandawrigaService: CommandawrigaService,
               private commandaService: CommandaService,
               private commandarigaService: CommandarigaService,
               private cassacService: CassacService,
<<<<<<< HEAD
               private prodottoService: ProdottoService,
               private cassaService: CassaService,
               private giornataService: GiornataService,
=======
               private cassaService: CassaService,
               private cassawc1Service: Cassawc1Service,
               private prodottoService: ProdottoService,
               private giornataService: GiornataService,
               private prenotazioneService: PrenotazioneService,
>>>>>>> d8eac67 (registrazione corretta)
               private route: ActivatedRoute,
               private router: Router,
               private datePipe: DatePipe,
               private notifier: NotifierService) {
<<<<<<< HEAD
                        this.notifier = notifier;
                    }

ngOnInit(): void {

console.log('Commanda-registrazione-Cassa - sono in oninit ');

this.checkFunctionbylevel();

}

checkFunctionbylevel() {
  //  ----- parte comune a tutti i moduli

 // test --------

      const c1 = this.route.snapshot.url[0].path;
      const c2 = this.route.snapshot.url[1].path;
      const c3 = this.route.snapshot.url[2].path;
      const c4 = this.route.snapshot.url[3].path;

      console.log('frontend Cassa - checkFunctionbylevel -- c1:  --> ' + c1);
      console.log('frontend - checkFunctionbylevel -- c2:  --> ' + c2);
      console.log('frontend - checkFunctionbylevel -- c3 ' + c3);
      console.log('frontend - checkFunctionbylevel -- c4 ' + c4);

      this.functionInqu =  false;
      this.functionEdit = false;
      this.functionEdits = false;
      this.functionNew = false;

      this.functionValid = false;

      if(c1 === 'commanda' && c2 === 'RegistraCassa') {
        if(c3 === 'new') {
          this.functionNew = true;
          this.functionValid = true;
        }
      }


      if(this.functionValid !== true) {
        alert('funzione non ammessa - avvisare amministratore');
        return;
      }

      this.idlogged = +localStorage.getItem('id');
      this.route.paramMap.subscribe(p => {
      this.idCommanda = +p.get('idCommanda');
       console.log('id recuperato: ' + this.idCommanda);
       // -------  leggo i dati della giornata

      this.loadCommandaw(this.idCommanda);
      this.loadSelezioneTaglieIncasso();
      this.visibleresetIncasso = false;
      this.commandaStampata = false;
      });


      this.isVisible = true;
      this.alertSuccess = true;


      if(this.functionNew) {

               this.title = 'Inserimento Pagamento Commanda';
               this.fase = 'N';
               this.Message = `Inserire il pagamento commanda`;
             } else {
               // questa non la farà mai
                 if(this.functionEdit || this.functionEdits) {
                    // this.title = 'Situazione Giornaliera Commande';  il titolo è già preinpostato
                     this.fase = 'M';
                    } else {
                     this.title = 'Visualizzazione Pagamento Commanda';
                     this.fase = 'I';
                    }
                   this.Message = 'Situazione Attuale Pagamento Commande ';
                }

                 //  fine parte personalizzabile
              this.type = 'success';
              this.showNotification(this.type, this.Message);
      }



async loadCommandaw(id: number) {
    let res = await this.commandawService.getCommandaw(id).subscribe(
        response => {
              this.commandaw = response['data'];
          },
        error => {
          alert('commanda-registrazione-cassa  --loadCommanda: ' + error.message);
          console.log(error);
          this.isVisible = true;
          this.alertSuccess = false;
          this.type = 'error';
          this.Message = 'Errore loadCommanda' + '\n' + error.message;
          this.showNotification(this.type, this.Message);
        });

}




/**
* Show a notification
*
* @param {string} type    Notification type
* @param {string} message Notification message
*/

showNotification( type: string, message: string ): void {

        this.notifier.notify( type, message );
        console.log(`sono in showNotification  ${type}`);

      }

async loadSelezioneTaglieIncasso() {
  let res = await this.cassawcService.getAllTagliebyCommanda(this.idCommanda).subscribe(
    response => {
          if(response['rc'] === 'ok') {
            this.tagliei = response['data'];
          }
      },
    error => {
      alert('loadSelezioneTaglieIncasso: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore loadSelezioneTaglieIncasso' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
}

// salvo su comodo il valore della moneta per preimpostare il resto a mappa
async loadSelezioneTaglieRestobyMoneta() {
  let res = await this.cassawcService.getAllTagliebyCommanda(this.idCommanda).subscribe(
    response => {
          if(response['rc'] === 'ok') {
            this.taglier = response['data'];
            for(let riga of this.taglier) {
              if(riga.idTaglia === 6) {
                  this.cassawc = riga;
                }
             }
          }
      },
    error => {
      alert('lloadSelezioneTaglieRestobyMoneta: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore loadSelezioneTaglieRestobyMoneta' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
}

async loadSelezioneTaglieResto() {
  let res = await this.cassawcService.getAllTagliebyCommanda(this.idCommanda).subscribe(
    response => {
          if(response['rc'] === 'ok') {
            this.taglier = response['data'];
            this.visibleResto = true;
            this.visibleresetResto = true;
          }
      },
    error => {
      alert('loadSelezioneTaglieResto: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore loadSelezioneTaglieResto' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
}

async resetincasso() {
  let res = await this.cassawcService.azzeraCassaFull(this.idCommanda).subscribe(
    response => {
          if(response['rc'] === 'ok') {
            this.commandaw.importoPagato = 0;
            this.aggiornaCommanda(this.commandaw);
            this.loadSelezioneTaglieIncasso();
            this.visibleresetIncasso = false;
          }
      },
    error => {
      alert('resetincasso: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore resetincasso' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
}

async resetresto() {
  let res = await this.cassawcService.azzeraCassaResto(this.idCommanda).subscribe(
    response => {
          if(response['rc'] === 'ok') {
            this.loadSelezioneTaglieResto();
            this.visibleresetResto = false;
          }
      },
    error => {
      alert('resetresto: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore resetresto' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
}

incassa() {
  console.log('incassa - appena dentro');
  this.commandaw.resto = (this.commandaw.importodaPagare - this.commandaw.importoPagato) * -1;
  this.aggiornaCommanda(this.commandaw);
  this.loadSelezioneTaglieRestobyMoneta();  // salvo la eventale moneta inserita in pagamento
  this.ImpostaTagliperresto(this.commandaw.id, this.commandaw.resto);
}

async ImpostaTagliperresto(id: number, resto: number) {

//  console.log('ImpostaTagliperresto - appena dentro -- Giornata che sto passando : ' + this.idDay);
  let res = await this.cassawcService.getAllTaglieNoMoneybyCommanda(id).subscribe(
    response => {
          if(response['rc'] == 'ok') {
            this.cassewc = response['data'];
            this.totReso =  0;
            console.log('---------->    ImpostaTagliperresto -- cassa: ' + JSON.stringify(response['data']) + '  resto: ' + resto);

            for(let riga of this.cassewc) {

                  if(riga.valore_taglia > resto) {
                          console.log(' salto ' + riga.valore_taglia + ' con resto: ' + resto);
                    } else {
                      console.log(' resto da calcolare n.ro pezzi per la taglia ' + riga.valore_taglia + ' con resto: ' + resto);
                      this.npezzi = Math.floor(resto / riga.valore_taglia);
                      resto = resto - (this.npezzi * riga.valore_taglia);
                      console.log('nropezzi calcolati: ' + this.npezzi + ' resto ricalcolato: ' + resto );
                      riga.qtaRes = this.npezzi;
                      riga.valoreRes = riga.qtaRes * riga.valore_taglia;
                      this.totReso = this.totReso + riga.valoreRes;
                      riga.tipoMov = 'R';
                      console.log(`ImpostaTagliperresto: ------- pronto per aggiornare taglia della cassa  ----- cassawc ----------->  ${JSON.stringify(riga)} `);
                      this.aggiornaTagliaRestoCassawc(riga);
                 }
              }
            if(resto > 0) {
                this.cassawc.qtaRes = resto;
                this.cassawc.valoreRes = resto;
                this.totReso = this.totReso + resto;
                this.aggiornaTagliaRestoCassawc(this.cassawc);
                console.log('moneta preimpostata: ' +  JSON.stringify(this.cassawc));
              }
            this.loadSelezioneTaglieResto();
          }
      },
    error => {
      alert('ImpostaTagliperresto: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore ImpostaTagliperresto' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });

}

async aggiornaTagliaRestoCassawc(cassawc: Cassawc) {

  let res = await this.cassawcService.updateCassaResto(cassawc).subscribe(
    response => {
          if(response['rc'] == 'ok') {
           // non faccio niente
          }
      },
    error => {
      alert('aggiornaTagliaRestoCassawc: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore aggiornaTagliaRestoCassawc' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });

}

totaleIncassato(totInc: number) {
   alert('passato da figlio a padre: ' + totInc);
   console.log('totaleIncassato: -  passato da figlio: ' + totInc);

   this.visibleresetIncasso = true;
   this.commandaw.importoPagato = totInc;
   this.aggiornaCommanda(this.commandaw);
  //  this.totincassato =  totInc;

   if(totInc < this.commandaw.importodaPagare) {
     this.visibleResto = false;
   } else {
     this.visibleResto = true;
   }

 }

 totaleReso(totInc: number) {
  alert('passato da figlio a padre: ' + totInc);
  console.log('totaleIncassato: -  passato da figlio: ' + totInc);
  this.totReso =  totInc;

  this.visibleresetResto = true;
  if(this.totReso < this.commandaw.importodaPagare) {
    this.visibleStampa = false;
  }

}


async aggiornaCommanda(commandaw: Commandaw) {
  let res = await this.commandawService.updateCommanda(commandaw).subscribe(
=======
                       this.notifier = notifier;
                   }

         ngOnInit(): void {

           console.log('Commanda-registrazione-Cassa - sono in oninit ');

           this.goApplication();

         }

         goApplication() {


         this.idGiornata = parseInt(localStorage.getItem('idGiornata'));
         this.idlogged = +localStorage.getItem('id');
         this.route.paramMap.subscribe(p => {
          this.idCommanda = +p.get('idCommanda');
          console.log('id recuperato: ' + this.idCommanda);
          // -------  leggo i dati della giornata

         this.loadCommandaw(this.idCommanda);
         this.commandaSelect(this.idCommanda);

         });

         this.deletecassawcbyCommanda(this.idCommanda);

         this.title = 'Pagamento Commanda';
         this.fase = 'N';
         this.Message = `Inserire i dati di pagamento`;
         this.isVisible = true;
         this.alertSuccess = true;
         this.EnabledCassa = false;

                    //  fine parte personalizzabile
                 this.type = 'success';
                 this.showNotification(this.type, this.Message);
        }

        async deletecassawcbyCommanda(id: number) {
          let res = await this.cassawc1Service.delete(id).subscribe(
          response => {
            if(response['rc'] === 'ok') {
              this.cassawc1 = new Cassawc1();
              this.cassawc1.idCommanda = id;
              this.creaCassawc1(this.cassawc1);
            }

            if(response['rc'] === 'nf') {
              this.cassawc1 = new Cassawc1();
              this.cassawc1.idCommanda = id;
              this.creaCassawc1(this.cassawc1);
            }


        },
        error => {
            alert('deletecassawcbyCommanda: ' + error.message);
            console.log(error);
            this.isVisible = true;
            this.alertSuccess = false;
            this.type = 'error';
            this.Message = 'deletecassawcbyCommanda' + '\n' + error.message;
            this.showNotification(this.type, this.Message);
        });

  }

        async creaCassawc1(cassawc1: Cassawc1) {
            let res = await this.cassawc1Service.create(cassawc1).subscribe(
            response => {
              if(response['rc'] === 'ok') {
                //  non faccio nulla
              }
          },
          error => {
              alert('creaCassawc1: ' + error.message);
              console.log(error);
              this.isVisible = true;
              this.alertSuccess = false;
              this.type = 'error';
              this.Message = 'Errore creaCassawc1' + '\n' + error.message;
              this.showNotification(this.type, this.Message);
          });

    }

     async loadCommandaw(id: number) {
       let res = await this.commandawService.getbyid(id).subscribe(
         response => {
               this.commandaw = response['data'];
           },
       error => {
           alert('giornata-detail-prodotti  --loadCommanda: ' + error.message);
           console.log(error);
           this.isVisible = true;
           this.alertSuccess = false;
           this.type = 'error';
           this.Message = 'Errore loadCommanda' + '\n' + error.message;
           this.showNotification(this.type, this.Message);
       });

 }


     /**
      * Show a notification
      *
      * @param {string} type    Notification type
      * @param {string} message Notification message
      */

     showNotification( type: string, message: string ): void {

     this.notifier.notify( type, message );
     console.log(`sono in showNotification  ${type}`);

     }












// ricreo le commandawriga con qta > 0  per editare elenco
 async commandaSelect(id: number) {
 // alert('commandaSelect --- recuperato da figlio ' + id);


  let rc = await this.commandawrigaService.getProdottiOrdinati(id).subscribe(
    resp => {
        if(resp['rc'] === 'ok') {
          console.log('onSelectOrdinato --- commandawriga ---- recuperata da figlio ' + JSON.stringify(resp['data']));
          this.commandawrigheordinati = resp['data'];
          this.nRecOrd = resp['number'];
         }
       },
    error => {
        alert('sono in commandaSelect - error');
        this.isVisible = true;
        this.alertSuccess = false;
        console.log('commandaSelect - errore: ' + error);
        this.type = 'error';
        this.Message = error.message;
        this.showNotification(this.type, this.Message);
    });

 }



backToGiornata() {
  this.routeGiornata = 'commanda/RegistraAnag/new/' + this.idGiornata;
  this.router.navigate([`${this.routeGiornata}`]);

}

simpleAlert() {

}

alertWithSuccess() {


}

async conferma() {
  console.log('conferma - appena entrato');
  if(this.commandawriga.qta === 0) {
    this.isVisible = true;
    this.alertSuccess = false;
    this.type = 'error';
    this.Message = 'inserire quantità corretta';
    this.showNotification(this.type, this.Message);
  } else {
    let rc = await this.commandawrigaService.updateCommandawriga(this.commandawriga).subscribe(
      resp => {
          if(resp['rc'] === 'ok') {

            this.EnabledCassa = true;
           }
         },
      error => {
          alert('sono in conferma - error');
          this.isVisible = true;
          this.alertSuccess = false;
          console.log('onSelectProdotto - errore: ' + error);
          this.type = 'error';
          this.Message = error.message;
          this.alertSuccess = false;
          this.showNotification(this.type, this.Message);
      });
   }

}

ctrimp06(importo: any) {
  //  alert('ctri100 ' + importo)
    if (isNaN(importo)) {
      alert('inserito campo errato')
      this.Message = 'il valore inserito non è numerico'
      this.alertSuccess = false;
      this.ctrCampoNum = false;
      return;
    } else {
      this.valImp06  = importo * 1;
      this.ctrCampoNum = true;
      this.Message = ''
      this.alertSuccess = true;
    // totale
    this.incassato = 0;
    this.incassato = this.incassato +
                     this.valImp01 +
                     this.valImp02 +
                     this.valImp03 +
                     this.valImp04 +
                     this.valImp05 +
                     this.valImp06;

      this.aggiornaTotaliperCassa(this.incassato);
    }
  }

  ctrimp05(importo: any) {
    //  alert('ctri100 ' + importo)
      if (isNaN(importo)) {
        alert('inserito campo errato')
        this.Message = 'il valore inserito non è numerico'
        this.alertSuccess = false;
        this.ctrCampoNum = false;
        return;
      } else {
        this.cassawc1.i100Valore  = importo * 100;
        this.ctrCampoNum = true;
        this.Message = ''
        this.alertSuccess = true;
      // totale
        this.incassato = 0;
        this.incassato = this.incassato +
                         this.cassawc1.i100Valore +
                         this.cassawc1.i050Valore +
                         this.cassawc1.i020Valore +
                         this.cassawc1.i010Valore +
                         this.cassawc1.i005Valore +
                         this.cassawc1.icontante;
        this.aggiornaTotaliperCassa(this.incassato);
      }
    }
    ctrimp04(importo: any) {
      //  alert('ctri100 ' + importo)
        if (isNaN(importo)) {
          alert('inserito campo errato')
          this.Message = 'il valore inserito non è numerico'
          this.alertSuccess = false;
          this.ctrCampoNum = false;
          return;
        } else {
          this.cassawc1.i050Valore  = importo * 50;
          this.ctrCampoNum = true;
          this.Message = ''
          this.alertSuccess = true;
        // totale
          this.incassato = 0;
          this.incassato = this.incassato +
                         this.cassawc1.i100Valore +
                         this.cassawc1.i050Valore +
                         this.cassawc1.i020Valore +
                         this.cassawc1.i010Valore +
                         this.cassawc1.i005Valore +
                         this.cassawc1.icontante;
          this.aggiornaTotaliperCassa(this.incassato);
        }
      }

      ctrimp03(importo: any) {
        //  alert('ctri100 ' + importo)
          if (isNaN(importo)) {
            alert('inserito campo errato')
            this.Message = 'il valore inserito non è numerico'
            this.alertSuccess = false;
            this.ctrCampoNum = false;
            return;
          } else {
            this.cassawc1.i020Valore  = importo * 20;
            this.ctrCampoNum = true;
            this.Message = ''
            this.alertSuccess = true;
          // totale
            this.incassato = 0;
            this.incassato = this.incassato +
                              this.cassawc1.i100Valore +
                              this.cassawc1.i050Valore +
                              this.cassawc1.i020Valore +
                              this.cassawc1.i010Valore +
                              this.cassawc1.i005Valore +
                              this.cassawc1.icontante;
            this.aggiornaTotaliperCassa(this.incassato);

          }
        }

        ctrimp02(importo: any) {
          //  alert('ctri100 ' + importo)
            if (isNaN(importo)) {
              alert('inserito campo errato')
              this.Message = 'il valore inserito non è numerico'
              this.alertSuccess = false;
              this.ctrCampoNum = false;
              return;
            } else {
              this.cassawc1.i010Valore  = importo * 10;
              this.ctrCampoNum = true;
              this.Message = ''
              this.alertSuccess = true;
            // totale
              this.incassato = 0;
              this.incassato = this.incassato +
                              this.cassawc1.i100Valore +
                              this.cassawc1.i050Valore +
                              this.cassawc1.i020Valore +
                              this.cassawc1.i010Valore +
                              this.cassawc1.i005Valore +
                              this.cassawc1.icontante;
              this.aggiornaTotaliperCassa(this.incassato);

            }
          }

          ctrimp01(importo: any) {
            //  alert('ctri100 ' + importo)
              if (isNaN(importo)) {
                alert('inserito campo errato')
                this.Message = 'il valore inserito non è numerico'
                this.alertSuccess = false;
                this.ctrCampoNum = false;
                return;
              } else {
                this.cassawc1.i005Valore  = importo * 5;
                this.ctrCampoNum = true;
                this.Message = ''
                this.alertSuccess = true;
              // totale
                this.incassato = 0;
                this.incassato = this.incassato +
                                  this.cassawc1.i100Valore +
                                  this.cassawc1.i050Valore +
                                  this.cassawc1.i020Valore +
                                  this.cassawc1.i010Valore +
                                  this.cassawc1.i005Valore +
                                  this.cassawc1.icontante;
                this.aggiornaTotaliperCassa(this.incassato);

              }
            }


aggiornaTotaliperCassa(importo: number)  {

  this.impNettodaPagare = this.commandaw.importoCoperto +
                          this.commandaw.importoProdotti -
                          this.commandaw.buonoPasto;

      this.commandaw.importoPagato = importo;

      this.impdaRendere = this.commandaw.importoPagato - this.impNettodaPagare;
      this.commandaw.resto = this.impdaRendere;
      this.commandaw.sbilancio = this.impdaRendere;

      // verifica delle taglie da abuilitare per effettuare il resto
      // this.disabledr01 = false;
      // this.disabledr02 = false;
      // this.disabledr03 = false;
      // this.disabledr04 = false;
      // this.disabledr05 = false;
      // this.disabledr06 = false;

      // if(100 > this.impdaRendere) {
      //   this.disabledr05 = true;
      // }
      // if(50 > this.impdaRendere) {
      //   this.disabledr04 = true;
      // }
      // if(20 > this.impdaRendere) {
      //   this.disabledr03 = true;
      // }
      // if(10 > this.impdaRendere) {
      //   this.disabledr02 = true;
      // }
      // if(5 > this.impdaRendere) {
      //   this.disabledr01 = true;
      // }
      this.aggiornaCommandaw(this.commandaw);

      this.aggiornaCassawc1(this.cassawc1);
}


aggiornaTotaliResi(importo: number)  {

  this.sbilancio = this.cassawc1.r100Valore +
                   this.cassawc1.r050Valore +
                   this.cassawc1.r020Valore +
                   this.cassawc1.r010Valore +
                   this.cassawc1.r005Valore +
                   this.cassawc1.rcontante;

    this.cassawc1.totaleResto = this.sbilancio;
    alert('aggiornaTotaliResi  -- sbilancio: ' + this.sbilancio)
    alert('aggiornaTotaliResi  -- commandaw.sbilancio prima di aggiornamewnto: ' + this.commandaw.sbilancio)


  this.commandaw.sbilancio =  this.commandaw.resto - this.sbilancio;

      this.aggiornaCommandaw(this.commandaw);

      this.aggiornaCassawc1(this.cassawc1);
}






aggiornaTotaliResiperCassa(importo: number)  {
  if(importo == 0) {
    return;
  }

  this.importoReso = this.cassawc1.r005Valore +
                     this.cassawc1.r010Valore +
                     this.cassawc1.r020Valore +
                     this.cassawc1.r050Valore +
                     this.cassawc1.r100Valore +
                     this.cassawc1.rcontante;
  this.commandaw.resto = this.importoReso;

  this.impdaRendere = this.commandaw.importoPagato - this.commandaw.importodaPagare - this.importoReso;
  if(this.importoReso > 0)  {

    this.aggiornaCommandaw(this.commandaw);

    this.aggiornaCassawc1(this.cassawc1);
  }
      // verifica delle taglie da abuilitare per effettuare il resto
      // this.disabledr01 = false;
      // this.disabledr02 = false;
      // this.disabledr03 = false;
      // this.disabledr04 = false;
      // this.disabledr05 = false;
      // this.disabledr06 = false;

      // if(100 > this.impdaRendere) {
      //   this.disabledr05 = true;
      // }
      // if(50 > this.impdaRendere) {
      //   this.disabledr04 = true;
      // }
      // if(20 > this.impdaRendere) {
      //   this.disabledr03 = true;
      // }
      // if(10 > this.impdaRendere) {
      //   this.disabledr02 = true;
      // }
      // if(5 > this.impdaRendere) {
      //   this.disabledr01 = true;
      // }

}



async aggiornaCommandaw(commandaw: Commandaw) {
  let res = await this.commandawService.update(commandaw).subscribe(
>>>>>>> d8eac67 (registrazione corretta)
      response => {
           // this.commandaw = response['data'];
        },
      error => {
        alert('commanda-registrazione-cassa  --aggiornaCommanda: ' + error.message);
        console.log(error);
        this.isVisible = true;
        this.alertSuccess = false;
        this.type = 'error';
        this.Message = 'Errore aggiornaCommanda' + '\n' + error.message;
        this.showNotification(this.type, this.Message);
      });

<<<<<<< HEAD
}

async caclcolanumProdottibyTipologia() {
    let res = await this.commandawrigaService.getProdottiOrdinati(this.commandaw.id).subscribe(
    response => {
      if(response['rc'] === 'ok') {
        this.nProdCucina = 0;
        this.nProdBevande = 0;
        this.commandawrighe = response['data'];
        for(let riga of this.commandawrighe) {
            if(riga.competenza === 1) {
              this.nProdCucina += 1;
            }
            if(riga.competenza === 2) {
              this.nProdBevande += 1;
            }
          }
        }
      },
      error => {
          alert('commanda-registrazione-cassa  --caclcolanumProdottibyTipologia: ' + error.message);
          console.log(error);
          this.isVisible = true;
          this.alertSuccess = false;
          this.type = 'error';
          this.Message = 'Errore caclcolanumProdottibyTipologia' + '\n' + error.message;
          this.showNotification(this.type, this.Message);
      });
=======
    }

    async aggiornaCassawc1(cassawc1: Cassawc1) {
      let res = await this.cassawc1Service.update(cassawc1).subscribe(
          response => {
               // this.commandaw = response['data'];
            },
          error => {
            alert('commanda-registrazione-cassa  --aggiornaCassawc1: ' + error.message);
            console.log(error);
            this.isVisible = true;
            this.alertSuccess = false;
            this.type = 'error';
            this.Message = 'Errore aggiornaCassawc1' + '\n' + error.message;
            this.showNotification(this.type, this.Message);
          });

        }



/*

                  Resto       Resto        Resto       Resto

*/



resimp06(importo: any) {
  //  alert('ctri100 ' + importo)
    if (isNaN(importo)) {
      alert('inserito campo errato')
      this.Message = 'il valore inserito non è numerico'
      this.alertSuccess = false;
      this.ctrCampoNum = false;
      return;
    }
    if (importo == 0) {
      // alert('inserito campo errato')
      // this.Message = 'il valore inserito non è numerico'
      // this.alertSuccess = false;
      // this.ctrCampoNum = false;
      return;
    } else {
      this.cassawc1.rcontante  = importo * 1;
      this.ctrCampoNum = true;
      this.Message = ''
      this.alertSuccess = true;
    // totale
      this.reso = 0;
      this.reso = this.reso +
                  this.cassawc1.r100Valore +
                  this.cassawc1.r050Valore +
                  this.cassawc1.r020Valore +
                  this.cassawc1.r010Valore +
                  this.cassawc1.r005Valore +
                  this.cassawc1.rcontante;
      this.aggiornaTotaliResiperCassa(this.reso);


    }
  }

                    onKeypress100Event(event: any){
                      alert('onkeypress100Event -- ho premuto ' + event.target.value)
                      console.log('ho premuto ' + event.target.value);
                      return;
                   }

// --------------------------   per creare nuova commanda

async caclcolanumProdottibyTipologia() {
  let res = await this.commandawrigaService.getProdottiOrdinati(this.commandaw.id).subscribe(
  response => {
    if(response['rc'] === 'ok') {
      this.nProdCucina = 0;
      this.nProdBevande = 0;
      this.commandawrighe = response['data'];
      for(let riga of this.commandawrighe) {
          if(riga.competenza == 1 && riga.qta > 0) {
            this.nProdCucina += 1;
          }
          if(riga.competenza == 2 && riga.qta > 0) {
            this.nProdBevande += 1;
          }
        }
        this.creaNuovaCommanda();
      }
    },
    error => {
        alert('commanda-registrazione-cassa  --caclcolanumProdottibyTipologia: ' + error.message);
        console.log(error);
        this.isVisible = true;
        this.alertSuccess = false;
        this.type = 'error';
        this.Message = 'Errore caclcolanumProdottibyTipologia' + '\n' + error.message;
        this.showNotification(this.type, this.Message);
    });
>>>>>>> d8eac67 (registrazione corretta)
}


async creaCommanda() {

<<<<<<< HEAD
        if(this.commandaStampata === true) {
          this.isVisible = true;
          this.alertSuccess = false;
          this.type = 'error';
          this.Message = 'Commanda già Stampata - Funzione non eseguibile' + '\n' + '';
          this.showNotification(this.type, this.Message);
          return;
        }

// leggere le commandarighe e loop per ricalcolare il numero dei prodotti per tipologia
        this.caclcolanumProdottibyTipologia();

        this.idGiornata = this.commandaw.idGiornata;

        this.commanda = new Commanda();
        this.commanda.idSanfra = this.commandaw.idSanfra;
        this.commanda.idprenotazione = this.commandaw.idprenotazione;
        this.commanda.idpersona = this.commandaw.idpersona;
        this.commanda.anagrafica_cliente  = this.commandaw.anagrafica_cliente;
        this.commanda.idGiornata = this.commandaw.idGiornata;
        this.commanda.buonoPasto = this.commandaw.buonoPasto;
        this.commanda.numTavolo  = this.commandaw.numTavolo;
        this.commandaw.stato = this.commandaw.stato;
        /*
        if(this.commandaw.numTavolo === 0) {
          this.commandaw.stato = 1;
        } else {
          this.commandaw.stato = 2;
        }
*/
        this.commanda.numPersone  = this.commandaw.numPersone;
        this.commanda.numProdotti  = this.commandaw.numProdotti;
        this.commanda.importoProdotti  = this.commandaw.importoProdotti;
        this.commanda.importoCoperto  = this.commandaw.importoCoperto;
        this.commanda.importodaPagare = this.commandaw.importodaPagare;
        this.commanda.importoPagato  = this.commandaw.importoPagato;
        this.commanda.resto  = this.commandaw.resto;
        this.commanda.noteCommanda  = this.commandaw.noteCommanda;
        this.commanda.numProdottiBevande = this.nProdBevande;
        this.commanda.numProdottiCucina = this.nProdCucina;
        this.commanda.key_utenti_operation = +localStorage.getItem('id');

        let res = await this.commandaService.createCommanda(this.commanda).subscribe(
          response => {
            if(response['rc'] === 'ok') {
              this.loadlastCommanda();
              }
            },
          error => {
            alert('commanda-registrazione-cassa  --creaCommanda: ' + error.message);
            console.log(error);
            this.isVisible = true;
            this.alertSuccess = false;
            this.type = 'error';
            this.Message = 'Errore creaCommanda' + '\n' + error.message;
            this.showNotification(this.type, this.Message);
          });

}

async loadlastCommanda() {
  let res = await this.commandaService.getLastCommandaid().subscribe(
    response => {
      if(response['rc'] === 'ok') {
        this.commanda = response['data'];
        console.log('lastnumber: ------------------------------- is  ' + JSON.stringify(this.commanda));
        this.inseriscicommandarighe(this.commandaw.id, this.commanda.id);
        this.inseriscicassaCommanda(this.commandaw.id, this.commanda.id);
        this.commandaStampata = true;
        this.isVisible = true;
        this.alertSuccess = false;
=======
  if(this.commandaStampata === true) {
    this.isVisible = true;
    this.alertSuccess = false;
    this.type = 'error';
    this.Message = 'Commanda già Stampata - Funzione non eseguibile' + '\n' + '';
    this.showNotification(this.type, this.Message);
    return;
  }

  if(this.commandaw.idprenotazione > 0) {
    this.loadPrenotazione(this.commandaw.idprenotazione);
  }




// leggere le commandarighe e loop per ricalcolare il numero dei prodotti per tipologia
  this.caclcolanumProdottibyTipologia();

}


async creaNuovaCommanda() {

  this.idGiornata = this.commandaw.idGiornata;

  this.commanda = new Commanda();
  this.commanda.idSanfra = this.commandaw.idSanfra;
  this.commanda.idprenotazione = this.commandaw.idprenotazione;
  this.commanda.idpersona = this.commandaw.idpersona;
  this.commanda.anagrafica_cliente  = this.commandaw.anagrafica_cliente;
  this.commanda.idGiornata = this.commandaw.idGiornata;
  this.commanda.buonoPasto = this.commandaw.buonoPasto;
  this.commanda.numTavolo  = this.commandaw.numTavolo;
  this.commandaw.stato = this.commandaw.stato;
  /*
  if(this.commandaw.numTavolo === 0) {
    this.commandaw.stato = 1;
  } else {
    this.commandaw.stato = 2;
  }
*/
  this.commanda.numPersone  = this.commandaw.numPersone;
  this.commanda.numProdotti  = this.commandaw.numProdotti;
  this.commanda.importoProdotti  = this.commandaw.importoProdotti;
  this.commanda.importoCoperto  = this.commandaw.importoCoperto;
  this.commanda.importodaPagare = this.commandaw.importodaPagare;
  this.commanda.importoPagato  = this.commandaw.importoPagato;
  this.commanda.statoContabile = 1;  // pagata
  this.commanda.resto  = this.commandaw.resto;
  this.commanda.noteCommanda  = this.commandaw.noteCommanda;
  this.commanda.numProdottiBevande = this.nProdBevande;
  this.commanda.numProdottiCucina = this.nProdCucina;
  this.commanda.key_utenti_operation = +localStorage.getItem('id');

  let res = await this.commandaService.create(this.commanda).subscribe(
    response => {
      if(response['rc'] === 'ok') {
        this.commanda = response['data'];
        this.inseriscicommandarighe(this.commandaw.id, this.commanda.id);
        this.inseriscicassaCommanda(this.commandaw.id, this.commanda.id);
   //     this.cancellaCommandaw(this.commanda.id);
        this.commandaStampata = true;
        this.isVisible = true;
        this.alertSuccess = true;
>>>>>>> d8eac67 (registrazione corretta)
        this.type = 'success';
        this.Message = 'Commanda pagata regolarmente';
        this.showNotification(this.type, this.Message);

<<<<<<< HEAD
      }
    },
    error => {
      alert('commanda-registrazione-cassa  --loadlastCommanda: ' + error.message);
=======
        }
      },
    error => {
      alert('commanda-registrazione-cassa  --creaCommanda: ' + error.message);
>>>>>>> d8eac67 (registrazione corretta)
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
<<<<<<< HEAD
      this.Message = 'Errore loadlastCommanda' + '\n' + error.message;
=======
      this.Message = 'Errore creaCommanda' + '\n' + error.message;
>>>>>>> d8eac67 (registrazione corretta)
      this.showNotification(this.type, this.Message);
    });
}


<<<<<<< HEAD
async inseriscicassaCommanda(idw: number, id: number) {

  console.log('inseriscicassaCommanda - appena entrato' );
  let res = await this.cassawcService.getAllTagliebyCommanda(idw).subscribe(
    response => {
        if(response['rc'] === 'ok') {
           console.log(`inseriscicassaCommanda: ----------------------->  ${JSON.stringify(response['data'])} `);
           this.cassewc = response['data'];
           this.totalexx = 0;
           this.prg = id * 10;
           for(let riga of this.cassewc) {
                this.cassac = new Cassac();
                if(riga.qtaInc === 0  && riga.qtaRes === 0) {

                } else {
                  this.prg = this.prg + 1;
                  this.cassac.id = this.prg;
                  this.cassac.idCommanda = id;
                  this.cassac.idTaglia = riga.idTaglia;
                  this.cassac.tipoMov = riga.tipoMov;
                  this.cassac.qtaInc = riga.qtaInc;
                  this.cassac.valoreInc = riga.valoreInc;
                  this.cassac.qtaRes = riga.qtaRes;
                  this.cassac.valoreRes = riga.valoreRes;
                  this.totalexx = this.totalexx + riga.valoreInc - riga.valoreRes;
                  this.cassac.key_utenti_operation =  +localStorage.getItem('id');
                  console.log(`inseriscicassaCommanda: ------- pronto per inserire ----- cassac ----------->  ${JSON.stringify(this.cassac)} `);
                  this.inseriscirigaCassa(this.cassac);
                  this.aggiornaCassa(riga.idTaglia, riga.qtaInc, riga.valoreInc, riga.qtaRes, riga.valoreRes);
           }
         }
           this.aggiornaGiornata(this.idGiornata, this.totalexx);
           // visualizzo preview
           this.router.navigate(['prewcommanda/' + id]);

        }
     },
    error => {
      alert('commanda-registrazione-cassa  --inseriscicassaCommanda: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore inseriscicassaCommanda' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
=======
async cancellaCommandaw(id: number) {

  console.log('cancellaCommandaw - appena entrato --- giornata: ' + id );
  let res = await this.commandawService.delete(id).subscribe(
  response => {
    if(response['rc'] === 'ok') {
       //   non faccio nulla
    }
  },
  error => {
            alert('cancellaCommandaw: ' + error.message);
            console.log(error);
            this.isVisible = true;
            this.alertSuccess = false;
            this.type = 'error';
            this.Message = 'Errore cancellaCommandaw' + '\n' + error.message;
            this.showNotification(this.type, this.Message);
        });
  }



  async loadPrenotazione(id: number) {
    let res = await this.prenotazioneService.getbyid(id).subscribe(
      response => {
        if(response['rc'] === 'ok') {
           this.prenotazione = response['data'];
           this.prenotazione.idstato = 2;
           this.aggiornaPrenotazione(this.prenotazione);
        }
      },
      error => {
                alert('loadPrenotazione ' + error.message);
                console.log(error);
                this.isVisible = true;
                this.alertSuccess = false;
                this.type = 'error';
                this.Message = 'Errore loadPrenotazione' + '\n' + error.message;
                this.showNotification(this.type, this.Message);
            });
  }

  async aggiornaPrenotazione(prenotazione: Prenotazione) {
    let res = await this.prenotazioneService.update(prenotazione).subscribe(
      response => {
        if(response['rc'] === 'ok') {
           //  non faccio nulla
        }
      },
      error => {
                alert('aggiornaPrenotazione ' + error.message);
                console.log(error);
                this.isVisible = true;
                this.alertSuccess = false;
                this.type = 'error';
                this.Message = 'Errore aggiornaPrenotazione' + '\n' + error.message;
                this.showNotification(this.type, this.Message);
            });
  }

// async loadlastCommanda() {
// let res = await this.commandaService.getLastCommandaid().subscribe(
// response => {
// if(response['rc'] === 'ok') {
//   this.commanda = response['data'];
//   console.log('lastnumber: ------------------------------- is  ' + JSON.stringify(this.commanda));
//   this.inseriscicommandarighe(this.commandaw.id, this.commanda.id);
//   this.inseriscicassaCommanda(this.commandaw.id);
//   this.commandaStampata = true;
//   this.isVisible = true;
//   this.alertSuccess = false;
//   this.type = 'success';
//   this.Message = 'Commanda pagata regolarmente';
//   this.showNotification(this.type, this.Message);

// }
// },
// error => {
//               alert('commanda-registrazione-cassa  --loadlastCommanda: ' + error.message);
//               console.log(error);
//               this.isVisible = true;
//               this.alertSuccess = false;
//               this.type = 'error';
//               this.Message = 'Errore loadlastCommanda' + '\n' + error.message;
//               this.showNotification(this.type, this.Message);
//         });
// }


async inseriscicassaCommanda(idw: number, id: number) {

console.log('inseriscicassaCommanda - appena entrato '  + idw);
let res = await this.cassawc1Service.getbyId(idw).subscribe(
response => {
   console.log('sto facendo la lettura cassawc1 --- rc: ' + response['rc'])
  if(response['rc'] === 'ok') {
     console.log(`inseriscicassaCommanda: ----------------------->  ${JSON.stringify(response['data'])} `);
     this.cassawc1 = response['data'];

// ---------------------------------------------  Incassi

    if(this.cassawc1.i100 > 0) {
      this.tipoTaglia = 5;
      this.tipoMovCassa = 'I';
      this.creaCassaC(this.tipoMovCassa, this.tipoTaglia,this.cassawc1, id);
    }
    if(this.cassawc1.i050 > 0) {
      this.tipoTaglia = 4;
      this.tipoMovCassa = 'I';
      this.creaCassaC(this.tipoMovCassa, this.tipoTaglia,this.cassawc1, id);
    }
    if(this.cassawc1.i020 > 0) {
      this.tipoTaglia = 3;
      this.tipoMovCassa = 'I';
      this.creaCassaC(this.tipoMovCassa, this.tipoTaglia,this.cassawc1, id);
    }
    if(this.cassawc1.i010 > 0) {
      this.tipoTaglia = 2;
      this.tipoMovCassa = 'I';
      this.creaCassaC(this.tipoMovCassa, this.tipoTaglia,this.cassawc1, id);
    }
    if(this.cassawc1.i005 > 0) {
      this.tipoTaglia = 1;
      this.tipoMovCassa = 'I';
      this.creaCassaC(this.tipoMovCassa, this.tipoTaglia,this.cassawc1, id);
    }
    if(this.cassawc1.icontante > 0) {
      this.tipoTaglia = 6;
      this.tipoMovCassa = 'I';
      this.creaCassaC(this.tipoMovCassa, this.tipoTaglia,this.cassawc1, id);
    }
// ---------------------------------------------  Resi

    if(this.cassawc1.r100 > 0) {
      this.tipoTaglia = 5;
      this.tipoMovCassa = 'R';
      this.creaCassaC(this.tipoMovCassa, this.tipoTaglia,this.cassawc1, id);
    }
    if(this.cassawc1.r050 > 0) {
      this.tipoTaglia = 4;
      this.tipoMovCassa = 'R';
      this.creaCassaC(this.tipoMovCassa, this.tipoTaglia,this.cassawc1, id);
    }
    if(this.cassawc1.r020 > 0) {
      this.tipoTaglia = 3;
      this.tipoMovCassa = 'R';
      this.creaCassaC(this.tipoMovCassa, this.tipoTaglia,this.cassawc1, id);
    }
    if(this.cassawc1.r010 > 0) {
      this.tipoTaglia = 2;
      this.tipoMovCassa = 'R';
      this.creaCassaC(this.tipoMovCassa, this.tipoTaglia,this.cassawc1, id);
    }
    if(this.cassawc1.r005 > 0) {
      this.tipoTaglia = 1;
      this.tipoMovCassa = 'R';
      this.creaCassaC(this.tipoMovCassa, this.tipoTaglia,this.cassawc1, id);
    }
    if(this.cassawc1.rcontante > 0) {
      this.tipoTaglia = 6;
      this.tipoMovCassa = 'R';
      this.creaCassaC(this.tipoMovCassa, this.tipoTaglia,this.cassawc1, id);
    }
// ----------------  aggiorno cassa giornaliera
    if(this.cassawc1.i100 > 0 || this.cassawc1.r100 > 0) {
      this.tipoTaglia = 5;
      this.aggiornaCassa(this.tipoTaglia, this.cassawc1.i100, this.cassawc1.i100Valore, this.cassawc1.r100, this.cassawc1.r100Valore);
    }
    if(this.cassawc1.i050 > 0 || this.cassawc1.r050 > 0) {
      this.tipoTaglia = 4;
      this.aggiornaCassa(this.tipoTaglia, this.cassawc1.i050, this.cassawc1.i050Valore, this.cassawc1.r050, this.cassawc1.r050Valore);
    }
    if(this.cassawc1.i020 > 0 || this.cassawc1.r020 > 0) {
      this.tipoTaglia = 3;
      this.aggiornaCassa(this.tipoTaglia, this.cassawc1.i020, this.cassawc1.i020Valore, this.cassawc1.r020, this.cassawc1.r020Valore);
    }
    if(this.cassawc1.i050 > 0 || this.cassawc1.r050 > 0) {
      this.tipoTaglia = 2;
      this.aggiornaCassa(this.tipoTaglia, this.cassawc1.i010, this.cassawc1.i010Valore, this.cassawc1.r010, this.cassawc1.r010Valore);
    }
    if(this.cassawc1.i005 > 0 || this.cassawc1.r005 > 0) {
      this.tipoTaglia = 1;
      this.aggiornaCassa(this.tipoTaglia, this.cassawc1.i005, this.cassawc1.i005Valore, this.cassawc1.r005, this.cassawc1.r005Valore);
    }
    if(this.cassawc1.icontante > 0 || this.cassawc1.rcontante > 0) {
      this.tipoTaglia = 6;
      this.aggiornaCassa(this.tipoTaglia, this.cassawc1.icontante, this.cassawc1.icontante, this.cassawc1.rcontante, this.cassawc1.rcontante);
    }
    this.totalexx = this.totalexx + this.commandaw.importoPagato -  this.commandaw.resto;
    this.aggiornaGiornata(this.idGiornata, this.totalexx);
        // visualizzo preview
        this.router.navigate(['prewcommanda/' + id]);

  }
},
error => {
            alert('commanda-registrazione-cassa  --inseriscicassaCommanda: ' + error.message);
            console.log(error);
            this.isVisible = true;
            this.alertSuccess = false;
            this.type = 'error';
            this.Message = 'Errore inseriscicassaCommanda' + '\n' + error.message;
            this.showNotification(this.type, this.Message);
      });
}


async creaCassaC(tipovCassa: string, tipoTaglia: number,cassawc1: Cassawc1, idCommanda: number) {

            this.cassac = new Cassac();
            this.cassac.idCommanda = idCommanda;
            this.cassac.idTaglia = tipoTaglia;
            this.cassac.tipoMov = tipovCassa;
            switch ( tipoTaglia ) {
              case 1:
                  if(tipovCassa ='I') {
                    this.cassac.qtaInc = cassawc1.i005;
                    this.cassac.valoreInc = cassawc1.i005 * 5;
                  }
                  if(tipovCassa ='R') {
                    this.cassac.qtaRes = cassawc1.r005;
                    this.cassac.valoreRes = cassawc1.r005 * 5;
                  }
                  break;
              case 2:
                  if(tipovCassa ='I') {
                    this.cassac.qtaInc = cassawc1.i010;
                    this.cassac.valoreInc = cassawc1.i010 * 10;
                  }
                  if(tipovCassa ='R') {
                    this.cassac.qtaRes = cassawc1.r010;
                    this.cassac.valoreRes = cassawc1.r010 * 10;
                  }
                  break;
              case 3:
                  if(tipovCassa ='I') {
                    this.cassac.qtaInc = cassawc1.i020;
                    this.cassac.valoreInc = cassawc1.i020 * 20;
                  }
                  if(tipovCassa ='R') {
                    this.cassac.qtaRes = cassawc1.r020;
                    this.cassac.valoreRes = cassawc1.r020 * 20;
                  }
                  break;
              case 4:
                  if(tipovCassa ='I') {
                    this.cassac.qtaInc = cassawc1.i050;
                    this.cassac.valoreInc = cassawc1.i050 * 50;
                  }
                  if(tipovCassa ='R') {
                    this.cassac.qtaRes = cassawc1.r050;
                    this.cassac.valoreRes = cassawc1.r050 * 50;
                  }
                  break;
              case 5:
                  if(tipovCassa ='I') {
                    this.cassac.qtaInc = cassawc1.i100;
                    this.cassac.valoreInc = cassawc1.i100 * 100;
                  }
                  if(tipovCassa ='R') {
                    this.cassac.qtaRes = cassawc1.r100;
                    this.cassac.valoreRes = cassawc1.r100 * 100;
                  }
                  break;
              case 6:
                  if(tipovCassa ='I') {
                    this.cassac.qtaInc = cassawc1.icontante;
                    this.cassac.valoreInc = cassawc1.icontante;
                  }
                  if(tipovCassa ='R') {
                    this.cassac.qtaRes = cassawc1.rcontante;
                    this.cassac.valoreRes = cassawc1.rcontante;
                  }
                  break;
              default:
                  //
                  break;
           }
          this.cassac.key_utenti_operation =  +localStorage.getItem('id');

          let res = await this.cassacService.createCassac(this.cassac).subscribe(
            response => {
              if(response['rc'] === 'ok') {
                //   non faccio nulla
                }
              },
            error => {
              alert('creaCassaC: ' + error.message);
              console.log(error);
              this.isVisible = true;
              this.alertSuccess = false;
              this.type = 'error';
              this.Message = 'Errore creaCassaC' + '\n' + error.message;
              this.showNotification(this.type, this.Message);
            });

>>>>>>> d8eac67 (registrazione corretta)
}

async aggiornaGiornata(idGiornata: number, totalexx: number) {

<<<<<<< HEAD
  console.log('aggiornaGiornata - appena entrato --- giornata: ' + idGiornata );
  let res = await this.giornataService.getGiornata(idGiornata).subscribe(
    response => {
        if(response['rc'] === 'ok') {
           this.giornata = response['data'];
           this.giornata.cassaAttuale += totalexx;
           this.aggiornaImportiGiornata(this.giornata);
        }
     },
    error => {
      alert('commanda-registrazione-cassa  --aggiornaGiornata: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore aggiornaGiornata' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });


=======
console.log('aggiornaGiornata - appena entrato --- giornata: ' + idGiornata );
let res = await this.giornataService.getbyId(idGiornata).subscribe(
response => {
  if(response['rc'] === 'ok') {
     this.giornata = response['data'];
     this.giornata.cassaAttuale += totalexx;
     this.aggiornaImportiGiornata(this.giornata);
  }
},
error => {
          alert('commanda-registrazione-cassa  --aggiornaGiornata: ' + error.message);
          console.log(error);
          this.isVisible = true;
          this.alertSuccess = false;
          this.type = 'error';
          this.Message = 'Errore aggiornaGiornata' + '\n' + error.message;
          this.showNotification(this.type, this.Message);
      });
>>>>>>> d8eac67 (registrazione corretta)
}

async aggiornaImportiGiornata(giornata: Giornata) {

<<<<<<< HEAD
  console.log('aggiornaImportiGiornata - appena entrato' );
  let res = await this.giornataService.updateGiornata(giornata).subscribe(
    response => {
        if(response['rc'] === 'ok') {
          // nulla
        }
     },
    error => {
      alert('commanda-registrazione-cassa  --aggiornaImportiGiornata: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore aggiornaImportiGiornata' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
}

async inseriscirigaCassa(cassac: Cassac) {
  let res = await this.cassacService.createCassac(cassac).subscribe(
    response => {
        if(response['rc'] === 'ok') {

         }
     },
    error => {
      alert('commanda-registrazione-cassa  --inseriscirigaCassa: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore inseriscirigaCassa' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
}

async aggiornaCassa(idTaglia: number, qtaInc: number, valoreInc: number, qtaRes: number, valoreRes: number) {

  let res = await this.cassaService.getbyidTagliaeGiorno(this.idGiornata, idTaglia).subscribe(
    response => {
        if(response['rc'] === 'ok') {
           console.log(`aggiornaCassa: ----------------------->  ${JSON.stringify(response['data'])} `);
           this.cassa = response['data'];
           if(qtaInc !== 0) {
              this.cassa.qtaAc += qtaInc;
              this.cassa.valoreAc += valoreInc;
           }
           if(qtaRes !== 0) {
            this.cassa.qtaAc -= qtaRes;
            this.cassa.valoreAc -= valoreRes;
          }
           this.cassa.key_utenti_operation =  +localStorage.getItem('id');
           console.log(`inseriscicassaCommanda: ------- pronto per inserire ----- cassac - giorno --->   ${this.idGiornata}`);
           console.log(`inseriscicassaCommanda: ------- pronto per inserire ----- cassac ---->  ${JSON.stringify(this.cassac)} `);
           this.aggiornaCassaday(this.idGiornata, this.cassa);
        }
     },
    error => {
      alert('commanda-registrazione-cassa  --aggiornaCassa: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore aggiornaCassa' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
=======
console.log('aggiornaImportiGiornata - appena entrato' );
let res = await this.giornataService.update(giornata).subscribe(
response => {
  if(response['rc'] === 'ok') {
    // nulla
  }
},
error => {
            alert('commanda-registrazione-cassa  --aggiornaImportiGiornata: ' + error.message);
            console.log(error);
            this.isVisible = true;
            this.alertSuccess = false;
            this.type = 'error';
            this.Message = 'Errore aggiornaImportiGiornata' + '\n' + error.message;
            this.showNotification(this.type, this.Message);
      });
}


async aggiornaCassa(idTaglia: number, qtaInc: number, valoreInc: number, qtaRes: number, valoreRes: number) {

let res = await this.cassaService.getbyidTagliaeGiorno(this.idGiornata, idTaglia).subscribe(
response => {
  if(response['rc'] === 'ok') {
     console.log(`aggiornaCassa: ----------------------->  ${JSON.stringify(response['data'])} `);
     this.cassa = response['data'];
     if(qtaInc !== 0) {
        this.cassa.qtaAc += qtaInc;
        this.cassa.valoreAc += valoreInc;
     }
     if(qtaRes !== 0) {
      this.cassa.qtaAc -= qtaRes;
      this.cassa.valoreAc -= valoreRes;
    }
     this.cassa.key_utenti_operation =  +localStorage.getItem('id');
     console.log(`inseriscicassaCommanda: ------- pronto per inserire ----- cassac - giorno --->   ${this.idGiornata}`);
     console.log(`inseriscicassaCommanda: ------- pronto per inserire ----- cassac ---->  ${JSON.stringify(this.cassac)} `);
     this.aggiornaCassaday(this.idGiornata, this.cassa);
  }
},
error => {
            alert('commanda-registrazione-cassa  --aggiornaCassa: ' + error.message);
            console.log(error);
            this.isVisible = true;
            this.alertSuccess = false;
            this.type = 'error';
            this.Message = 'Errore aggiornaCassa' + '\n' + error.message;
            this.showNotification(this.type, this.Message);
        });
>>>>>>> d8eac67 (registrazione corretta)
}


async aggiornaCassaday(idDay: number, cassa: Cassa) {

<<<<<<< HEAD
  let res = await this.cassaService.updateCassa(cassa, idDay).subscribe(
    response => {
         // this.commandaw = response['data'];
      },
    error => {
      alert('commanda-registrazione-cassa  --aggiornaCassaday: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore aggiornaCassaday' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
=======
let res = await this.cassaService.updateCassa(cassa, idDay).subscribe(
response => {
   // this.commandaw = response['data'];
},
error => {
              alert('commanda-registrazione-cassa  --aggiornaCassaday: ' + error.message);
              console.log(error);
              this.isVisible = true;
              this.alertSuccess = false;
              this.type = 'error';
              this.Message = 'Errore aggiornaCassaday' + '\n' + error.message;
              this.showNotification(this.type, this.Message);
        });

}

async inseriscicommandarighe(idw: number, id: number) {
//  console.log('inserisciCommandarighe - appena entrato - giornata' + id);
let res = await this.commandawrigaService.getProdottiOrdinati(idw).subscribe(
response => {
  if(response['rc'] === 'ok') {
 //    console.log(`createCassawc: ----------------------->  ${JSON.stringify(response['data'])} `);
     this.commandawrighe = response['data'];
     for(let riga of this.commandawrighe) {
          this.commandariga = new Commandariga();
          this.commandariga.idCommanda = id;
          this.commandariga.idProdotto = riga.idProdotto;
          this.commandariga.prezzo = riga.prezzo_day;
          this.commandariga.categoria = riga.categoria;
          this.commandariga.competenza = riga.competenza;
          this.commandariga.tipologia = riga.tipologia;
          this.commandariga.descrizione_prodotto = riga.descrizione_prodotto;
          if(riga.tipologia === 4) { // bevande
            this.commandariga.stato = 1;
          }
          this.commandariga.qta_ord = riga.qta;
          this.commandariga.key_utenti_operation =  +localStorage.getItem('id');

  //        console.log(`inseriscicommandarighe: ------- pronto per inserire ---------------->  ${JSON.stringify(this.commandariga)} `);

          this.inserisciriga(this.commandariga);
          this.aggiornadisponibilitaProdotto(riga.idProdotto, riga.qta);
     }
   }
},
error => {
              alert('commanda-registrazione-cassa  --inseriscicommandarighe: ' + error.message);
              console.log(error);
              this.isVisible = true;
              this.alertSuccess = false;
              this.type = 'error';
              this.Message = 'Errore inseriscicommandarighe' + '\n' + error.message;
              this.showNotification(this.type, this.Message);
        });
>>>>>>> d8eac67 (registrazione corretta)

}


<<<<<<< HEAD




async inseriscicommandarighe(idw: number, id: number) {
//  console.log('inserisciCommandarighe - appena entrato - giornata' + id);
  let res = await this.commandawrigaService.getProdottiOrdinati(idw).subscribe(
    response => {
        if(response['rc'] === 'ok') {
       //    console.log(`createCassawc: ----------------------->  ${JSON.stringify(response['data'])} `);
           this.commandawrighe = response['data'];
           for(let riga of this.commandawrighe) {
                this.commandariga = new Commandariga();
                this.commandariga.idCommanda = id;
                this.commandariga.idProdotto = riga.idProdotto;
                this.commandariga.prezzo = riga.prezzo_day;
                this.commandariga.categoria = riga.categoria;
                this.commandariga.competenza = riga.competenza;
                this.commandariga.descrizione_prodotto = riga.descrizione_prodotto;
                if(riga.tipologia === 4) { // bevande
                  this.commandariga.stato = 1;
                }
                this.commandariga.qta_ord = riga.qta;
                this.commandariga.key_utenti_operation =  +localStorage.getItem('id');

        //        console.log(`inseriscicommandarighe: ------- pronto per inserire ---------------->  ${JSON.stringify(this.commandariga)} `);

                this.inserisciriga(this.commandariga);
                this.aggiornadisponibilitaProdotto(riga.idProdotto, riga.qta);
           }
         }
     },
    error => {
      alert('commanda-registrazione-cassa  --inseriscicommandarighe: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore inseriscicommandarighe' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });

  }


async inserisciriga(commandariga: Commandariga) {

  let res = await this.commandarigaService.createCommandariga(commandariga).subscribe(
    response => {
        if(response['rc'] === 'ok') {

         }
     },
    error => {
      alert('commanda-registrazione-cassa  --inserisciriga: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore inserisciriga' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
=======
async inserisciriga(commandariga: Commandariga) {

let res = await this.commandarigaService.createCommandariga(commandariga).subscribe(
response => {
  if(response['rc'] === 'ok') {

   }
},
error => {
            alert('commanda-registrazione-cassa  --inserisciriga: ' + error.message);
            console.log(error);
            this.isVisible = true;
            this.alertSuccess = false;
            this.type = 'error';
            this.Message = 'Errore inserisciriga' + '\n' + error.message;
            this.showNotification(this.type, this.Message);
        });
>>>>>>> d8eac67 (registrazione corretta)

}


async aggiornadisponibilitaProdotto(id: number, qta: number) {

<<<<<<< HEAD
 // console.log(`aggiornadisponibilitaProdotto: ----appena entrato ----prodotto: -------> ${id} qta: ${qta} `);

  let res = await this.prodottoService.getProdotto(id).subscribe(
    response => {
         if(response['rc'] === 'ok') {
           this.prodotto = response['data'];
           if(this.prodotto.disponibile_Day !== 999) {
              this.prodotto.disponibile =  this.prodotto.disponibile - qta;
              this.prodotto.disponibile_Day =  this.prodotto.disponibile_Day - qta;
              this.prodotto.qta_vendute = this.prodotto.qta_vendute + qta;
              this.prodotto.residuo = this.prodotto.disponibile_Day;
           } else {
             this.prodotto.qta_vendute = this.prodotto.qta_vendute + qta;
           }
     //      console.log('aggiornadisponibilitaProdotto: ----pronto per aggiornamento : -------> ' + JSON.stringify(this.prodotto));
           this.aggiornadisp(this.prodotto);
         }
     },
    error => {
      alert('commanda-registrazione-cassa  --inserisciriga: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore inserisciriga' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
=======
// console.log(`aggiornadisponibilitaProdotto: ----appena entrato ----prodotto: -------> ${id} qta: ${qta} `);

let res = await this.prodottoService.getbyid(id).subscribe(
response => {
   if(response['rc'] === 'ok') {
     this.prodotto = response['data'];
     if(this.prodotto.disponibile_Day !== 999) {
        this.prodotto.disponibile =  this.prodotto.disponibile - qta;
        this.prodotto.disponibile_Day =  this.prodotto.disponibile_Day - qta;
        this.prodotto.qta_vendute = this.prodotto.qta_vendute + qta;
        this.prodotto.residuo = this.prodotto.disponibile_Day;
     } else {
       this.prodotto.qta_vendute = this.prodotto.qta_vendute + qta;
     }
//      console.log('aggiornadisponibilitaProdotto: ----pronto per aggiornamento : -------> ' + JSON.stringify(this.prodotto));
     this.aggiornadisp(this.prodotto);
   }
},
error => {
                alert('commanda-registrazione-cassa  --inserisciriga: ' + error.message);
                console.log(error);
                this.isVisible = true;
                this.alertSuccess = false;
                this.type = 'error';
                this.Message = 'Errore inserisciriga' + '\n' + error.message;
                this.showNotification(this.type, this.Message);
        });
>>>>>>> d8eac67 (registrazione corretta)
}

async aggiornadisp(prodotto: Prodotto) {
//  console.log('`aggiornadisp  --appena entrato ----prodotto: -------> ' + JSON.stringify(prodotto));
<<<<<<< HEAD
  let res = this.prodottoService.updateProdotto(prodotto).subscribe(
    response => {
        if(response['rc'] === 'ok') {
          console.log(`aggiornadisp  --fatto aggiornamento  `);
        } else {
          this.isVisible = true;
          this.alertSuccess = false;
          this.type = 'error';
          this.Message = 'Errore aggiornadisp' + '\n' + ' Return Code: ' + response['rc'];
          this.showNotification(this.type, this.Message);
        }
    },
    error => {
      alert('commanda-registrazione-cassa  --aggiornadisp: ' + error.message);
      console.log(error);
      this.isVisible = true;
      this.alertSuccess = false;
      this.type = 'error';
      this.Message = 'Errore aggiornadisp' + '\n' + error.message;
      this.showNotification(this.type, this.Message);
    });
=======
let res = this.prodottoService.update(prodotto).subscribe(
response => {
  if(response['rc'] === 'ok') {
    console.log(`aggiornadisp  --fatto aggiornamento  `);
  } else {
    this.isVisible = true;
    this.alertSuccess = false;
    this.type = 'error';
    this.Message = 'Errore aggiornadisp' + '\n' + ' Return Code: ' + response['rc'];
    this.showNotification(this.type, this.Message);
  }
},
error => {
            alert('commanda-registrazione-cassa  --aggiornadisp: ' + error.message);
            console.log(error);
            this.isVisible = true;
            this.alertSuccess = false;
            this.type = 'error';
            this.Message = 'Errore aggiornadisp' + '\n' + error.message;
            this.showNotification(this.type, this.Message);
      });
}

incassatoImporto() {
  alert('ho premutop il pulsante di incasso')
  this.importoIncassato = true;
  this.editCassawc1();
}

annullaIncasso() {

  this.cassawc1 = new Cassawc1();
  this.editCassawc1();
  this.commandaw.importoPagato = 0;
  this.commandaw.resto = 0;
  this.commandaw.sbilancio = 0;
  this.aggiornaCommandaw(this.commandaw);
}

editCassawc1() {
  let residuo = this.commandaw.sbilancio;
  let importo = 0;
     if(100 <= residuo) {
      importo = 100;
      for (let i = 1; residuo > importo; i++) {
          residuo -= importo;
          this.cassawc1.r100 = i;
          this.cassawc1.r100Valore =  this.cassawc1.r100 * importo;
        }
     }
    if(50 <= residuo) {
      importo = 50;
      for (let i = 1; residuo > importo; i++) {
        residuo -= importo;
        this.cassawc1.r050 = i;
        this.cassawc1.r050Valore =  this.cassawc1.r050 * importo;
      }
    }
    if(20 <= residuo) {
      alert('residuo > 20   ----  step_01')
      importo = 20;
      for (let i = 1; residuo > importo; i++) {

        residuo -= importo;
        this.cassawc1.r020 = i;
        this.cassawc1.r020Valore =  this.cassawc1.r020 * importo;
        alert('residuo > 20   ----  step_02  -- i:' + i)
      }
    }
    if(10 <= residuo) {
      importo = 10;
      for (let i = 1; residuo > importo; i++) {
        residuo -= importo;
        this.cassawc1.r010 = i;
        this.cassawc1.r010Valore =  this.cassawc1.r010 * importo;
      }
    }
    if(5 <= residuo) {
      importo = 5;
      for (let i = 1; residuo > importo; i++) {
        residuo -= importo;
        this.cassawc1.r005 = i;
        this.cassawc1.r005Valore =  this.cassawc1.r005 * importo;
      }
    }
    if(residuo >= 0) {
      this.cassawc1.rcontante = residuo;
      this.cassawc1.totaleResto = this.cassawc1.r100Valore +
                                  this.cassawc1.r050Valore +
                                  this.cassawc1.r020Valore +
                                  this.cassawc1.r010Valore +
                                  this.cassawc1.r005Valore +
                                  this.cassawc1.rcontante;
      if(this.cassawc1.totaleResto == this.commandaw.sbilancio) {
        this.commandaw.sbilancio  = this.commandaw.sbilancio -
                                    this.cassawc1.totaleResto;
        this.commandaw.stato = 2;
        this.aggiornaCommandaw(this.commandaw);
      }
  }


>>>>>>> d8eac67 (registrazione corretta)
}



<<<<<<< HEAD
=======
onKeypressEventIncasso(event: any, taglia: number){

  console.log(' sono dentro onKeypressEventIncass ' + event.target.value);

  if (isNaN(event.target.value)) {
    alert('inserito campo errato')
    this.Message = 'il valore inserito non è numerico'
    this.alertSuccess = false;
    this.ctrCampoNum = false;
    return;
  }
  if (event.target.value == '') {
    alert('inserito campo errato')
    this.Message = 'il valore inserito non è numerico'
    this.alertSuccess = false;
    this.ctrCampoNum = false;
    event.target.value = 0;
    return;
  }
    if(taglia == 5) {
      this.cassawc1.i100Valore  = event.target.value * 100;
    }
    if(taglia == 4) {
      this.cassawc1.i050Valore  = event.target.value * 50;
    }
    if(taglia == 3) {
      this.cassawc1.i020Valore  = event.target.value * 20;
    }
    if(taglia == 2) {
      this.cassawc1.i010Valore  = event.target.value * 10;
    }
    if(taglia == 1) {
      this.cassawc1.i005Valore  = event.target.value * 5;
    }
    if(taglia == 6) {
      this.cassawc1.icontante  = event.target.value * 1;
    }

    this.ctrCampoNum = true;
    this.Message = ''
    this.alertSuccess = true;
  // totale
    this.incassato = 0;
    this.incassato = this.incassato +
                      this.cassawc1.i100Valore +
                      this.cassawc1.i050Valore +
                      this.cassawc1.i020Valore +
                      this.cassawc1.i010Valore +
                      this.cassawc1.i005Valore +
                      this.cassawc1.icontante;
    this.aggiornaTotaliperCassa(this.incassato);

}


onKeypressEventSbilancio(event: any, taglia: number){

  console.log(' sono dentro onKeypressEventSbilancio ' + event.target.value);

  if (isNaN(event.target.value)) {
    alert('inserito campo errato')
    this.Message = 'il valore inserito non è numerico'
    this.alertSuccess = false;
    this.ctrCampoNum = false;
    return;
  }
  if (event.target.value == '') {
    alert('inserito campo errato')
    this.Message = 'il valore inserito non è numerico e non può essere vuoto'

    event.target.value = 0;
    return;
  }

    if(taglia == 5) {
      this.cassawc1.r100Valore  = event.target.value * 100;
    }
    if(taglia == 4) {
      this.cassawc1.r050Valore  = event.target.value * 50;
    }
    if(taglia == 3) {
      this.cassawc1.r020Valore  = event.target.value * 20;
    }
    if(taglia == 2) {
      this.cassawc1.r010Valore  = event.target.value * 10;
    }
    if(taglia == 1) {
      this.cassawc1.r005Valore  = event.target.value * 5;
    }
    if(taglia == 6) {
      this.cassawc1.rcontante  = event.target.value * 1;
    }

    this.ctrCampoNum = true;
    this.Message = ''
    this.alertSuccess = true;
  // totale
    this.sbilancio = 0;
    this.sbilancio = this.sbilancio +
                      this.cassawc1.r100Valore +
                      this.cassawc1.r050Valore +
                      this.cassawc1.r020Valore +
                      this.cassawc1.r010Valore +
                      this.cassawc1.r005Valore +
                      this.cassawc1.rcontante;
    this.aggiornaTotaliResi(this.sbilancio);



}

/*
 metodi non più usati

*/

/*
resimp05(importo: any) {
  alert('resimp05 ' + importo)
      if (isNaN(importo)) {
        alert('inserito campo errato')
        this.Message = 'il valore inserito non è numerico'
        this.alertSuccess = false;
        this.ctrCampoNum = false;
        return;
      }
      if (importo == 0) {
        // alert('inserito campo errato')
        // this.Message = 'il valore inserito non è numerico'
        // this.alertSuccess = false;
        // this.ctrCampoNum = false;
        return;
      }
      this.cassawc1.r100Valore  = importo * 100;
      this.ctrCampoNum = true;
      this.Message = ''
      this.alertSuccess = true;
    // totale
    alert('this.cassawc1.r100Valore ' + this.cassawc1.r100Valore)
      if(this.cassawc1.r100Valore > this.commandaw.resto) {
        this.Message = 'Taglia € 100 superiore a resto';
        this.cassawc1.r100 = 0;
        this.cassawc1.r100Valore = 0;
        this.alertSuccess = false;
        return;
      } else {

        this.reso = 0;
        this.reso = this.reso +
                    this.cassawc1.r100Valore +
                    this.cassawc1.r050Valore +
                    this.cassawc1.r020Valore +
                    this.cassawc1.r010Valore +
                    this.cassawc1.r005Valore +
                    this.cassawc1.rcontante;
                    this.aggiornaTotaliResiperCassa(this.reso);
      }
    }

resimp04(importo: any) {
      alert('resimp05 ' + importo)
          if (isNaN(importo)) {
            alert('inserito campo errato')
            this.Message = 'il valore inserito non è numerico'
            this.alertSuccess = false;
            this.ctrCampoNum = false;
            return;
          }
          if (importo == 0) {
            // alert('inserito campo errato')
            // this.Message = 'il valore inserito non è numerico'
            // this.alertSuccess = false;
            // this.ctrCampoNum = false;
            return;
          }
          this.cassawc1.r050Valore  = importo * 50;
          this.ctrCampoNum = true;
          this.Message = ''
          this.alertSuccess = true;
        // totale
        alert('this.cassawc1.r050Valore ' + this.cassawc1.r050Valore)
          if(this.cassawc1.r050Valore > this.commandaw.resto) {
            this.Message = 'Taglia € 50 superiore a resto';
            this.cassawc1.r050 = 0;
            this.cassawc1.r050Valore = 0;
            this.alertSuccess = false;
            return;
          } else {

            this.reso = 0;
            this.reso = this.reso +
                        this.cassawc1.r100Valore +
                        this.cassawc1.r050Valore +
                        this.cassawc1.r020Valore +
                        this.cassawc1.r010Valore +
                        this.cassawc1.r005Valore +
                        this.cassawc1.rcontante;
                        this.aggiornaTotaliResiperCassa(this.reso);
          }
        }

resimp03(importo: any) {
          alert('resimp03 ' + importo)
              if (isNaN(importo)) {
                alert('inserito campo errato')
                this.Message = 'il valore inserito non è numerico'
                this.alertSuccess = false;
                this.ctrCampoNum = false;
                return;
              }
              if (importo == 0) {
                // alert('inserito campo errato')
                // this.Message = 'il valore inserito non è numerico'
                // this.alertSuccess = false;
                // this.ctrCampoNum = false;
                return;
              }
              this.cassawc1.r020Valore  = importo * 20;
              this.ctrCampoNum = true;
              this.Message = ''
              this.alertSuccess = true;
            // totale
            alert('this.cassawc1.r020Valore ' + this.cassawc1.r020Valore)
              if(this.cassawc1.r020Valore > this.commandaw.resto) {
                this.Message = 'Taglia € 20 superiore a resto';
                this.cassawc1.r020 = 0;
                this.cassawc1.r020Valore = 0;
                this.alertSuccess = false;
                return;
              } else {

                this.reso = 0;
                this.reso = this.reso +
                            this.cassawc1.r100Valore +
                            this.cassawc1.r050Valore +
                            this.cassawc1.r020Valore +
                            this.cassawc1.r010Valore +
                            this.cassawc1.r005Valore +
                            this.cassawc1.rcontante;
                            this.aggiornaTotaliResiperCassa(this.reso);
              }
            }

            resimp02(importo: any) {
              alert('resimp02 ' + importo)
                  if (isNaN(importo)) {
                    alert('inserito campo errato')
                    this.Message = 'il valore inserito non è numerico'
                    this.alertSuccess = false;
                    this.ctrCampoNum = false;
                    return;
                  }
                  if (importo == 0) {
                    // alert('inserito campo errato')
                    // this.Message = 'il valore inserito non è numerico'
                    // this.alertSuccess = false;
                    // this.ctrCampoNum = false;
                    return;
                  }
                  this.cassawc1.r010Valore  = importo * 10;
                  this.ctrCampoNum = true;
                  this.Message = ''
                  this.alertSuccess = true;
                // totale
                alert('this.cassawc1.r010Valore ' + this.cassawc1.r010Valore)
                  if(this.cassawc1.r010Valore > this.commandaw.resto) {
                    this.Message = 'Taglia € 10 superiore a resto';
                    this.cassawc1.r010 = 0;
                    this.cassawc1.r010Valore = 0;
                    this.alertSuccess = false;
                    return;
                  } else {

                    this.reso = 0;
                    this.reso = this.reso +
                                this.cassawc1.r100Valore +
                                this.cassawc1.r050Valore +
                                this.cassawc1.r020Valore +
                                this.cassawc1.r010Valore +
                                this.cassawc1.r005Valore +
                                this.cassawc1.rcontante;
                                this.aggiornaTotaliResiperCassa(this.reso);
                  }
                }

                resimp01(importo: any) {
                  alert('resimp01 ' + importo)
                      if (isNaN(importo)) {
                        alert('inserito campo errato')
                        this.Message = 'il valore inserito non è numerico'
                        this.alertSuccess = false;
                        this.ctrCampoNum = false;
                        return;
                      }
                      if (importo == 0) {
                        // alert('inserito campo errato')
                        // this.Message = 'il valore inserito non è numerico'
                        // this.alertSuccess = false;
                        // this.ctrCampoNum = false;
                        return;
                      }
                      this.cassawc1.r005Valore  = importo * 5;
                      this.ctrCampoNum = true;
                      this.Message = ''
                      this.alertSuccess = true;
                    // totale
                    alert('this.cassawc1.r005Valore ' + this.cassawc1.r005Valore)
                      if(this.cassawc1.r005Valore > this.commandaw.resto) {
                        this.Message = 'Taglia € 5 superiore a resto -- ' + this.commandaw.resto;
                        this.cassawc1.r005 = 0;
                        this.cassawc1.r005Valore = 0;
                        this.alertSuccess = false;
                        return;
                      } else {
                        this.reso = 0;
                        this.reso = this.reso +
                                    this.cassawc1.r100Valore +
                                    this.cassawc1.r050Valore +
                                    this.cassawc1.r020Valore +
                                    this.cassawc1.r010Valore +
                                    this.cassawc1.r005Valore +
                                    this.cassawc1.rcontante;
                                    this.aggiornaTotaliResiperCassa(this.reso);
                      }
                    }
*/


>>>>>>> d8eac67 (registrazione corretta)



}




<<<<<<< HEAD



=======
>>>>>>> d8eac67 (registrazione corretta)
