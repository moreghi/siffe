
/*
     tabelle da inserire in gestione tabelle



t_tipo_commandas


*/
<<<<<<< HEAD


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// Services
=======
// attenzione classe - service  e metodi commentati per la creazione Modello -- logica corretta

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// --------------------------------------------------------------------------  Services
>>>>>>> d8eac67 (registrazione corretta)
import { TabellaService} from '../../../services/tabella.service';
import { TabellaTwDettService} from '../../../services/tabella-tw-dett.service';
import { TabellaTwService} from '../../../services/tabella-tw.service';
//  service tabelle da normalizzare in twdett
<<<<<<< HEAD
import { TcategoriaProdottoService } from '../../../services/tcategoria-prodotto.service';  // tabella_1
import { TcompetenzaProdottoService } from '../../../services/tcompetenza-prodotto.service';  // tabella_2
import { TruoloService } from '../../../services/truolo.service';  // tabella_3
import { TstatobevandeService } from '../../../services/tstatobevande.service';  // tabella_4
import { TstatocassaService } from '../../../services/tstatocassa.service';  // tabella_5
import { TstatocommandaService } from '../../../services/tstatocommanda.service';  // tabella_6
import { TstatocontabileService } from '../../../services/tstatocontabile.service';  // tabella_7
import { TstatocucinaService } from '../../../services/tstatocucina.service';  // tabella_8
import { TstatogiornataService } from '../../../services/tstatogiornata.service';  // tabella_9
import { TstatolavorazioneService } from '../../../services/tstatolavorazione.service';  // tabella_10
import { TstatomagazzinoService } from '../../../services/tstatomagazzino.service';  // tabella_11
import { TstatomanifestazioneService } from '../../../services/tstatomanifestazione.service';  // tabella_12
import { TstatopersonaService } from '../../../services/tstatopersona.service';  // tabella_13
import { TstatoprodottoService } from '../../../services/tstatoprodotto.service';  // tabella_14
import { TstatorigacommandaService } from '../../../services/tstatorigacommanda.service';  // tabella_15
import { TstatoutenteService } from '../../../services/tstatoutente.service';  // tabella_16
import { TtagliaService } from '../../../services/ttaglia.service';  // tabella_17
import { TtipologiaService } from '../../../services/ttipologia.service';  // tabella_18
import { TtitoloService } from '../../../services/ttitolo.service';  // tabella_19

import { TruoloDayService } from '../../../services/truolo-day.service';  // tabella_20
import { TruoloWebService } from '../../../services/truolo-web.service';  // tabella_21
import { TsettoreService } from '../../../services/tsettore.service';  // tabella_22
import { TstatoconsegnaService } from '../../../services/tstatoconsegna.service';  // tabella_23
import { TstatofornitoreService } from '../../../services/tstatofornitore.service';  // tabella_24
import { TstatoprenotazioneService } from '../../../services/tstatoprenotazione.service';  // tabella_25
import { TstatospesaService } from '../../../services/tstatospesa.service';  // tabella_26
import { TstatoutentiService } from '../../../services/tstatoutenti.service';  // tabella_27
import { TtipocommandaService } from '../../../services/ttipocommanda.service';  // tabella_28

// Model Class
=======

// import { TruoloService } from '../../../services/truolo.service';  // tabella_3
// import { TstatoutenteService } from '../../../services/tstatoutente.service';  // tabella_16
// import { TstatoprenotazioneService } from '../../../services/tstatoprenotazione.service';  // tabella_25

import { TtitoloService } from '../../../services/ttitolo.service';  // tabella_19

// --------------------------------------------------------------------------------  Model Class
>>>>>>> d8eac67 (registrazione corretta)
import { Tabellat} from '../../../classes/Tabella_t';
import { TabellatwDett} from '../../../classes/Tabella_tw_dett';
import { Tabellatw} from '../../../classes/Tabella_tw';
// model class tabelle da portare in tabellatwdett
// model classi tabelle da Normalizzare in twdwtt
<<<<<<< HEAD
import { TcategoriaProdotto } from '../../../classes/T_categoria_prodotto';  // tabella_1
import { TcompetenzaProdotto } from '../../../classes/T_competenza_prodotto';  // tabella_2
import { Truolo } from '../../../classes/T_ruolo';  // tabella_3
import { TstatoBevande } from '../../../classes/T_stato_bevande';  // tabella_4
import { TstatoCassa } from '../../../classes/T_stato_cassa';  // tabella_5
import { TstatoCommanda } from '../../../classes/T_stato_commanda';  // tabella_6
import { TstatoContabile } from '../../../classes/T_stato_contabile';  // tabella_7
import { TstatoCucina } from '../../../classes/T_stato_cucina';  // tabella_8
import { TstatoGiornata } from '../../../classes/T_stato_giornata';  // tabella_9
import { TstatoLavorazione } from '../../../classes/T_stato_lavorazione';  // tabella_10
import { TstatoMagazzino } from '../../../classes/T_stato_magazzino';  // tabella_11
import { TstatoManifestazione } from '../../../classes/T_stato_manifestazione';  // tabella_12
import { TstatoPersona } from '../../../classes/T_stato_persona';  // tabella_13
import { TstatoProdotto } from '../../../classes/T_stato_prodotto';  // tabella_14
import { Tstatorigacommanda } from '../../../classes/T_stato_rigacommanda';  // tabella_15
import { TstatoUtente } from '../../../classes/T_stato_utente';  // tabella_16
import { TTaglia } from '../../../classes/T_taglia';  // tabella_17
import { Ttipologia } from '../../../classes/T_tipologia';  // tabella_18
import { Ttitolo } from '../../../classes/T_titolo';  // tabella_19

import { Truoloday } from '../../../classes/T_ruolo_day';  // tabella_20
import { Truoloweb } from '../../../classes/T_ruolo_web';  // tabella_21
import { Tsettore } from '../../../classes/T_settore';  // tabella_22
import { TstatoConsegna } from '../../../classes/T_stato_consegna';  // tabella_23
import { TstatoFornitore } from '../../../classes/T_stato_fornitore';  // tabella_24
import { TstatoPrenotazione } from '../../../classes/T_stato_prenotazione';  // tabella_25
import { Tstatospesa } from '../../../classes/T_stato_spesa';  // tabella_26
import { TstatoUtenti } from '../../../classes/T_stato_utenti';  // tabella_27
import { TtipoCommanda } from '../../../classes/T_tipo_commanda';  // tabella_28
=======

// import { Truolo } from '../../../classes/T_ruolo';  // tabella_3
// import { TstatoPrenotazione } from '../../../classes/T_stato_prenotazione';  // tabella_25

import { TstatoUtente } from '../../../classes/T_stato_utente';  // tabella_16
import { Ttitolo } from '../../../classes/T_titolo';  // tabella_19

>>>>>>> d8eac67 (registrazione corretta)

import { Router } from '@angular/router';
// per gestire il popup con esito operazione
import { NotifierService } from 'angular-notifier';
import { faPlusSquare, faSearch, faSave, faUserEdit, faMinus, faPlus, faWindowClose, faTrash, faInfo,
         faInfoCircle, faList, faChartPie } from '@fortawesome/free-solid-svg-icons';
// popup per avviso cancellazione
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'tr [app-tabella]',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

   // variabili passate dal componente padre
   @Input('tabella-prog') i: number;
   @Input('tabella-data') tabella: Tabellat;

   // passo dati a tabelle
  @Output('onSelectTabella') onSelectTabella = new EventEmitter();
  @Output('esitoTabella') esitoTabella = new EventEmitter();





   public tabelletwDett: TabellatwDett[] = [];
   public tabellatwdett: TabellatwDett;
   public tabellatw: Tabellatw;
   public tabellat: Tabellat;

<<<<<<< HEAD
   public tcategorieProdotto: TcategoriaProdotto[] = [];
   public tcompetenzeProdotto: TcompetenzaProdotto[] = [];
   public truoli: Truolo[] = [];
   public tstatibevande: TstatoBevande[] = [];
   public tstaticassa: TstatoCassa[] = [];
   public tstaticommanda: TstatoCommanda[] = [];
   public tstaticontabili: TstatoContabile[] = [];
   public tstaticucina: TstatoCucina[] = [];
   public tstatigiornata: TstatoGiornata[] = [];
   public tstatilavorazione: TstatoLavorazione[] = [];
   public tstatimagazzino: TstatoMagazzino[] = [];
   public tstatimanifestazione: TstatoManifestazione[] = [];
   public tstatipersona: TstatoPersona[] = [];
   public tstatiprodotto: TstatoProdotto[] = [];
   public tstatirigacommanda: Tstatorigacommanda[] = [];
   public tstatiutente: TstatoUtente[] = [];
   public ttaglie: TTaglia[] = [];
   public ttipologie: Ttipologia[] = [];
   public ttitoli: Ttitolo[] = [];

   public truoliday: Truoloday[] = [];
   public truoliweb: Truoloweb[] = [];
   public tsettori: Tsettore[] = [];
   public tstaticonsegna: TstatoConsegna[] = [];
   public tstatifornitore: TstatoFornitore[] = [];
   public tstatiprenotazione: TstatoPrenotazione[] = [];
   public tstatispesa: Tstatospesa[] = [];
   public tstatiutenti: TstatoUtenti[] = [];
   public ttipicommanda: TtipoCommanda[] = [];
=======

  // public truoli: Truolo[] = [];
   public tstatiutente: TstatoUtente[] = [];
   public ttitoli: Ttitolo[] = [];

  // public tstatiprenotazione: TstatoPrenotazione[] = [];
>>>>>>> d8eac67 (registrazione corretta)

   faUserEdit = faUserEdit;
   faTrash = faTrash;
   faInfo = faInfo;
   faInfoCircle = faInfoCircle;
   faList = faList;
   faPlusSquare = faPlusSquare;
   faSearch = faSearch;
   faSave = faSave;
   faMinus = faMinus;
   faPlus = faPlus;
   faWindowClose = faWindowClose;
   faChartPie = faChartPie;

 // -----
   public textMessage1 = '';
   public textMessage2 = '';
   public textUser = '';
   public headerPopup = '';
   public perDebug = 'utente passato: ';
   public Message = '';
   public presenti = false;
   public isVisible = false;
   public alertSuccess = false;
   public function = 0;
   public nRec = 0;

   public utenteFedele = false;

    // variabili per gestione inqu/edit/new

   public href = '';
   public functionInqu = false;
   public functionEdit = false;
   public functionNew = false;
   public functionElenco = false;

   public searchInqu = 'show';
   public searchEdit = 'edit';
   public searchNew = 'new';
   public searchElenco = 'read';

   // funzioni di navigazione
   public navigateInqu = 'Inqu';
   public navigateEdit = 'Edit';
   public navigateEdits = 'Edits';
   public navigateNew = 'New';
   public navigateDays = 'Days';
   public navigateGraficoDays = 'GraphDays';

   public messagenull = 'Nessun record presente !!!';
   public esitoNegativo = 'tabella non disponibile';

   closeResult = '';

// variabili per notifica esito operazione con Notifier
  public type = '';



   constructor(private tabellaService: TabellaService,
               private tabellaTwDettService: TabellaTwDettService,
               private tabellaTwService: TabellaTwService,
<<<<<<< HEAD
               private tcategoriaProdottoService: TcategoriaProdottoService,
               private tcompetenzaProdottoService: TcompetenzaProdottoService,
               private tstatobevandeService: TstatobevandeService,
               private tstatocassaService: TstatocassaService,
               private tstatocommandaService: TstatocommandaService,
               private tstatocontabileService: TstatocontabileService,
               private tstatocucinaService: TstatocucinaService,
               private tstatogiornataService: TstatogiornataService,
               private tstatolavorazioneService: TstatolavorazioneService,
               private tstatomagazzinoService: TstatomagazzinoService,
               private tstatomanifestazioneService: TstatomanifestazioneService,
               private tstatopersonaService: TstatopersonaService,
               private tstatoprodottoService: TstatoprodottoService,
               private tstatorigacommandaService: TstatorigacommandaService,
               private tstatoutenteService: TstatoutenteService,
               private ttagliaService: TtagliaService,
               private ttipologiaService: TtipologiaService,
               private ttitoloService: TtitoloService,
               private truoloService: TruoloService,
               private truolodayService: TruoloDayService,
               private truolowebService: TruoloWebService,
               private tsettoreService: TsettoreService,
               private tstatoconsegnaService: TstatoconsegnaService,
               private tstatofornitoreService: TstatofornitoreService,
               private tstatoprenotazioneService: TstatoprenotazioneService,
               private tstatospesaService: TstatospesaService,
               private tstatoutentiService: TstatoutentiService,
               private ttipocommandaService: TtipocommandaService,
=======
          //     private tstatoutenteService: TstatoutenteService,

               private ttitoloService: TtitoloService,
          //     private truoloService: TruoloService,

          //     private tstatoprenotazioneService: TstatoprenotazioneService,

>>>>>>> d8eac67 (registrazione corretta)
               private modalService: NgbModal,
               private route: Router,
               private datePipe: DatePipe,
               private notifier: NotifierService) {
                this.notifier = notifier;
              }




   ngOnInit(): void {

      //   per gestire eventuale popup
      this.headerPopup = 'Registrazione Manifestazione';
      this.textMessage1 = '?????????? ';
   //   this.textUser = this.messa.demessa;
      this.textMessage2 = 'Registrazione non possibile';


    //  console.log('onInit - tabella passata: ' + JSON.stringify(this.tabella));

      // this.cancellaTabellatwdett();


   }


   showElemTabella(tabella: Tabellat) {

    this.tabellat = tabella;
    this.cancellaTabellatw(tabella);
  }

/*
  navigate(pathNavigate: string, manif: Manifestazione) {

    console.log(`navigate ---- funzione: ${pathNavigate} ---------------------  id: ${manif.id} `);


    switch (pathNavigate) {

         case 'Inqu':
         this.route.navigate(['manif/inqu/' + manif.id]);
         break;
      case 'Edit':
        this.route.navigate(['manif/edit/' + manif.id]);
        break;
      case 'Edits':
        this.route.navigate(['manif/edits/' + manif.id]);
        break;
      case 'Days':
        this.route.navigate(['manif/' + manif.id]);
        break;
      case 'GraphDays':
        this.route.navigate(['manif/grafico/day/' + manif.id]);
        break;
      default:
        alert('scelta errata \n navigazione non possibile');
        break;
    }
  }


  naviga(manif: Manifestazione) {
let aa = 'manif/grafico/day/' + manif.id;
console.log('path per grafico: ' + aa);
return;
    this.route.navigate(['manif/grafico/day/' + manif.id]);
  }
*/


// cancellazione tabella dettaglio
/*
async cancellaTabellatwdett() {

  let rc =  await  this.tabellaTwDettService.deleteAll().subscribe(
       res => {
        // non faccio nulla
      },
      error => {
         alert('Tabella  -- cancellaTabellatwdett - errore: ' + error.message);
         console.log(error);
         this.Message = error.message;
         this.alertSuccess = false;
      });
}

*/
async cancellaTabellatw(tabella: Tabellat) {
  console.log('cancellaTabellatw - appena entrato');
  let rc =  await  this.tabellaTwService.deleteAll().subscribe(
       res => {
           if(res['rc'] === 'ok') {
             console.log('cancellato tabellatw');
             this.inserisciTabellatw(tabella);
           }
        // non faccio nulla
      },
      error => {
         alert('Tabella  -- cancellaTabellatw - errore: ' + error.message);
         console.log(error);
         this.type = 'error';
         this.Message = error.message;
         this.alertSuccess = false;
         this.showNotification(this.type, this.Message)
      });
}


async inserisciTabellatw(tabella: Tabellat) {


  this.tabellatw = new Tabellatw();
  this.tabellatw.idTab  = tabella.id;
  this.tabellatw.nametab = tabella.d_tabella;
  this.tabellatw.key_utenti_operation = parseInt(localStorage.getItem('id'));
  console.log('fe - inserisciTabellatw  --- appena entrato ----  ' + JSON.stringify(this.tabellatw));
  const rc1 = await this.tabellaTwService.create(this.tabellatw).subscribe(
    resp => {
        if(resp['rc'] === 'ok') {
          this.elaboraTabellaSelect(tabella);
          }
      },
    error =>
       {
         console.log(error);
         this.type = 'error';
         this.Message = error.message;
         this.alertSuccess = false;
         this.showNotification(this.type, this.Message);
       });

}





/*
     Show a notification

     @param {string} type Notification type
     @param {string} message Notification message
*/

showNotification( type: string, message: string ): void {
  // alert('sono in showNot - ' + message);
  this.notifier.notify( type, message );
  console.log(`sono in showNotification  ${type}`);
  }

  elaboraTabellaSelect(tabella: Tabellat) {


    switch (tabella.id) {
<<<<<<< HEAD
      case 1:
        this.editaTabella_01(tabella.id, tabella);
        break;
      case 2:
        this.editaTabella_02(tabella.id, tabella);
        break;
      case 3:
        this.editaTabella_03(tabella.id, tabella);
        break;
      case 4:
        this.editaTabella_04(tabella.id, tabella);
        break;
      case 5:
        this.editaTabella_05(tabella.id, tabella);
        break;
      case 6:
        this.editaTabella_06(tabella.id, tabella);
        break;
      case 7:
        this.editaTabella_07(tabella.id, tabella);
        break;
      case 8:
        this.editaTabella_08(tabella.id, tabella);
        break;
      case 9:
        this.editaTabella_09(tabella.id, tabella);
        break;
      case 10:
        this.editaTabella_10(tabella.id, tabella);
        break;
      case 11:
        this.editaTabella_11(tabella.id, tabella);
        break;
      case 12:
        this.editaTabella_12(tabella.id, tabella);
        break;
      case 13:
        this.editaTabella_13(tabella.id, tabella);
        break;
      case 14:
        this.editaTabella_14(tabella.id, tabella);
        break;
      case 15:
        this.editaTabella_15(tabella.id, tabella);
        break;
      case 16:
        this.editaTabella_16(tabella.id, tabella);
        break;
      case 17:
        this.editaTabella_17(tabella.id, tabella);
        break;
      case 18:
        this.editaTabella_18(tabella.id, tabella);
        break;
      case 19:
        this.editaTabella_19(tabella.id, tabella);
        break;
      case 20:
        this.editaTabella_20(tabella.id, tabella);
        break;
      case 21:
        this.editaTabella_21(tabella.id, tabella);
        break;
      case 22:
        this.editaTabella_22(tabella.id, tabella);
        break;
      case 23:
        this.editaTabella_23(tabella.id, tabella);
        break;
      case 24:
        this.editaTabella_24(tabella.id, tabella);
        break;
      case 25:
        this.editaTabella_25(tabella.id, tabella);
        break;
      case 26:
        this.editaTabella_26(tabella.id, tabella);
        break;
      case 27:
        this.editaTabella_27(tabella.id, tabella);
        break;
      case 28:
        this.editaTabella_28(tabella.id, tabella);
        break;





=======

      case 3:
        this.editaTabella_03(tabella.id, tabella);
        break;

      case 16:
        this.editaTabella_16(tabella.id, tabella);
        break;

      case 19:
        this.editaTabella_19(tabella.id, tabella);
        break;

      case 25:
        this.editaTabella_25(tabella.id, tabella);
        break;
>>>>>>> d8eac67 (registrazione corretta)
      case 99:
        this.editaTabella_99(tabella.id, tabella);
        break;



      default:
      alert('Scelta errata \n editazione tabella non possibile');
      break;
}



  }

// editazione tabelle

<<<<<<< HEAD
async editaTabella_01(idtab: number, tabella: Tabellat) {

  const rc =  await this.tcategoriaProdottoService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tcategorieProdotto = response['data'];
          console.log('editaTabella_01 --------------------------------- letto tabella da migrare ' + JSON.stringify(this.tcategorieProdotto));
          for(const tabel of this.tcategorieProdotto) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_categoria;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
            console.log('editaTabella_01 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));
            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);



          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });
}

async editaTabella_02(idtab: number, tabella: Tabellat) {

  const rc =  await this.tcompetenzaProdottoService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tcompetenzeProdotto = response['data'];
          console.log('editaTabella_02 --------------------------------- letto tabella da migrare ' + JSON.stringify(this.tcompetenzeProdotto));
          for(const tabel of this.tcompetenzeProdotto) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_competenza;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
            console.log('editaTabella_02 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));
            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);



          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });
}

async editaTabella_03(idtab: number, tabella: Tabellat) {
  console.log('editaTabella_03 - appena entrato');
=======

async editaTabella_03(idtab: number, tabella: Tabellat) {
  console.log('editaTabella_03 - appena entrato');

  // metodo commentato per la creazione tabelle  -- corretta logica
  /*
>>>>>>> d8eac67 (registrazione corretta)
  const rc =  await this.truoloService.getRuoli().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.truoli = response['data'];
          console.log('editaTabella_03 --------------------------------- letto tabella da migrare ' + JSON.stringify(this.truoli));
          for(const tabel of this.truoli) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_ruolo;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
            console.log('editaTabella_03 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
<<<<<<< HEAD



=======
>>>>>>> d8eac67 (registrazione corretta)
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });
<<<<<<< HEAD
}

async editaTabella_04(idtab: number, tabella: Tabellat) {
//  console.log('editaTabella_04 - appena entrato');
  const rc =  await this.tstatobevandeService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatibevande = response['data'];
         // console.log('editaTabella_04 --------------------------------- letto tabella da migrare ' + JSON.stringify(this.truoli));
          for(const tabel of this.tstatibevande) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_bevande;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);



          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });
}

async editaTabella_05(idtab: number, tabella: Tabellat) {

  //  console.log('editaTabella_04 - appena entrato');
  const rc =  await this.tstatocassaService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstaticassa = response['data'];
         // console.log('editaTabella_04 --------------------------------- letto tabella da migrare ' + JSON.stringify(this.truoli));
          for(const tabel of this.tstaticassa) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_cassa;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);



          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });

}

async editaTabella_06(idtab: number, tabella: Tabellat) {

   //  console.log('editaTabella_04 - appena entrato');
   const rc =  await this.tstatocommandaService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstaticommanda = response['data'];
         // console.log('editaTabella_04 --------------------------------- letto tabella da migrare ' + JSON.stringify(this.truoli));
          for(const tabel of this.tstaticommanda) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_commanda;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);



          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });

}

async editaTabella_07(idtab: number, tabella: Tabellat) {

    //  console.log('editaTabella_04 - appena entrato');
    const rc =  await this.tstatocontabileService.getAll().subscribe(
      response => {
          if(response['rc'] === 'ok') {            //  response['success']
            this.tstaticontabili = response['data'];
           // console.log('editaTabella_04 --------------------------------- letto tabella da migrare ' + JSON.stringify(this.truoli));
            for(const tabel of this.tstaticontabili) {
              this.tabellatwdett = new TabellatwDett();
              this.tabellatwdett.id  = tabel.id;
              this.tabellatwdett.idtab  = 0;
              this.tabellatwdett.idtabella  = idtab;
              this.tabellatwdett.descrizione = tabel.d_stato_contabile;
              this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
           //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


              this.registraTabellatwdett(this.tabellatwdett);
              }
           // setTimeout(this.returntoPadre, 5000);



            this.onSelectTabella.emit(tabella);

            }
       },
      error =>
          {
           this.Message = error.message;
           this.alertSuccess = false;
           this.type = 'error';
           console.log(error);
           this.showNotification(this.type, this.Message);
          });
}

async editaTabella_08(idtab: number, tabella: Tabellat) {
   //  console.log('editaTabella_04 - appena entrato');
   const rc =  await this.tstatocucinaService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstaticucina = response['data'];
         // console.log('editaTabella_04 --------------------------------- letto tabella da migrare ' + JSON.stringify(this.truoli));
          for(const tabel of this.tstaticucina) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_cucina;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);



          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });
}

async editaTabella_09(idtab: number, tabella: Tabellat) {

     //  console.log('editaTabella_04 - appena entrato');
     const rc =  await this.tstatogiornataService.getAll().subscribe(
      response => {
          if(response['rc'] === 'ok') {            //  response['success']
            this.tstatigiornata = response['data'];
           // console.log('editaTabella_04 --------------------------------- letto tabella da migrare ' + JSON.stringify(this.truoli));
            for(const tabel of this.tstatigiornata) {
              this.tabellatwdett = new TabellatwDett();
              this.tabellatwdett.id  = tabel.id;
              this.tabellatwdett.idtab  = 0;
              this.tabellatwdett.idtabella  = idtab;
              this.tabellatwdett.descrizione = tabel.d_stato_giornata;
              this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
           //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


              this.registraTabellatwdett(this.tabellatwdett);
              }
           // setTimeout(this.returntoPadre, 5000);



            this.onSelectTabella.emit(tabella);

            }
       },
      error =>
          {
           this.Message = error.message;
           this.alertSuccess = false;
           this.type = 'error';
           console.log(error);
           this.showNotification(this.type, this.Message);
          });

}

async editaTabella_10(idtab: number, tabella: Tabellat) {

    //  console.log('editaTabella_04 - appena entrato');
    const rc =  await this.tstatolavorazioneService.getAll().subscribe(
      response => {
          if(response['rc'] === 'ok') {            //  response['success']
            this.tstatilavorazione = response['data'];
           // console.log('editaTabella_04 --------------------------------- letto tabella da migrare ' + JSON.stringify(this.truoli));
            for(const tabel of this.tstatilavorazione) {
              this.tabellatwdett = new TabellatwDett();
              this.tabellatwdett.id  = tabel.id;
              this.tabellatwdett.idtab  = 0;
              this.tabellatwdett.idtabella  = idtab;
              this.tabellatwdett.descrizione = tabel.d_stato_lavorazione;
              this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
           //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


              this.registraTabellatwdett(this.tabellatwdett);
              }
           // setTimeout(this.returntoPadre, 5000);



            this.onSelectTabella.emit(tabella);

            }
       },
      error =>
          {
           this.Message = error.message;
           this.alertSuccess = false;
           this.type = 'error';
           console.log(error);
           this.showNotification(this.type, this.Message);
          });

}

async editaTabella_11(idtab: number, tabella: Tabellat) {

    //  console.log('editaTabella_04 - appena entrato');
    const rc =  await this.tstatomagazzinoService.getAll().subscribe(
      response => {
          if(response['rc'] === 'ok') {            //  response['success']
            this.tstatimagazzino = response['data'];
           // console.log('editaTabella_04 --------------------------------- letto tabella da migrare ' + JSON.stringify(this.truoli));
            for(const tabel of this.tstatimagazzino) {
              this.tabellatwdett = new TabellatwDett();
              this.tabellatwdett.id  = tabel.id;
              this.tabellatwdett.idtab  = 0;
              this.tabellatwdett.idtabella  = idtab;
              this.tabellatwdett.descrizione = tabel.d_stato_magazzino;
              this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
           //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


              this.registraTabellatwdett(this.tabellatwdett);
              }
           // setTimeout(this.returntoPadre, 5000);



            this.onSelectTabella.emit(tabella);

            }
       },
      error =>
          {
           this.Message = error.message;
           this.alertSuccess = false;
           this.type = 'error';
           console.log(error);
           this.showNotification(this.type, this.Message);
          });
}

async editaTabella_12(idtab: number, tabella: Tabellat) {

  const rc =  await this.tstatomanifestazioneService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatimanifestazione = response['data'];
         // console.log('editaTabella_04 --------------------------------- letto tabella da migrare ' + JSON.stringify(this.truoli));
          for(const tabel of this.tstatimanifestazione) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_manifestazione;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);



          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });
}

async editaTabella_13(idtab: number, tabella: Tabellat) {

  const rc =  await this.tstatopersonaService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatipersona = response['data'];
          console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.tstatipersona) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_persona;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);



          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });
}

async editaTabella_14(idtab: number, tabella: Tabellat) {

  const rc =  await this.tstatoprodottoService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatiprodotto = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.tstatiprodotto) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_prodotto;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });


}

async editaTabella_15(idtab: number, tabella: Tabellat) {

  const rc =  await this.tstatorigacommandaService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatirigacommanda = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.tstatirigacommanda) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_riga_commanda;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });

}

async editaTabella_16(idtab: number, tabella: Tabellat) {

=======
        */
}



async editaTabella_16(idtab: number, tabella: Tabellat) {

  // metodo commentato per la creazione tabelle  -- corretta logica
  /*
>>>>>>> d8eac67 (registrazione corretta)
  const rc =  await this.tstatoutenteService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatiutente = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.tstatiutente) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_utente;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });
<<<<<<< HEAD




}

async editaTabella_17(idtab: number, tabella: Tabellat) {


  const rc =  await this.ttagliaService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.ttaglie = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.ttaglie) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_taglia;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });

}

async editaTabella_18(idtab: number, tabella: Tabellat) {

  const rc =  await this.ttipologiaService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.ttipologie = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.ttipologie) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_tipologia;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });


}
=======
        */

}

>>>>>>> d8eac67 (registrazione corretta)

async editaTabella_19(idtab: number, tabella: Tabellat) {

  const rc =  await this.ttitoloService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.ttitoli = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.ttitoli) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_titolo;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });
}

<<<<<<< HEAD
async editaTabella_20(idtab: number, tabella: Tabellat) {

  const rc =  await this.truolodayService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.truoliday = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.truoliday) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_ruolo_day;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });
}

async editaTabella_21(idtab: number, tabella: Tabellat) {

  const rc =  await this.truolowebService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.truoliweb = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.truoliweb) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_ruolo_web;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });



}

async editaTabella_22(idtab: number, tabella: Tabellat) {

  const rc =  await this.tsettoreService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tsettori = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.tsettori) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_settore;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });



}


async editaTabella_23(idtab: number, tabella: Tabellat) {

  const rc =  await this.tstatoconsegnaService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstaticonsegna = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.tstaticonsegna) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_consegna;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });



}

async editaTabella_24(idtab: number, tabella: Tabellat) {

  const rc =  await this.tstatofornitoreService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatifornitore = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.tstatifornitore) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_fornitore;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });



}
async editaTabella_25(idtab: number, tabella: Tabellat) {

=======

async editaTabella_25(idtab: number, tabella: Tabellat) {

  // metodo commentato per la creazione tabelle  -- corretta logica
  /*
>>>>>>> d8eac67 (registrazione corretta)
  const rc =  await this.tstatoprenotazioneService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatiprenotazione = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.tstatiprenotazione) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_prenotazione;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });

<<<<<<< HEAD


}

async editaTabella_26(idtab: number, tabella: Tabellat) {

  const rc =  await this.tstatospesaService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatispesa = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.tstatispesa) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_spesa;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });

}

async editaTabella_27(idtab: number, tabella: Tabellat) {

  const rc =  await this.tstatoutentiService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatiutenti = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.tstatiutenti) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_stato_utenti;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });

}
async editaTabella_28(idtab: number, tabella: Tabellat) {

  const rc =  await this.ttipocommandaService.getAll().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.ttipicommanda = response['data'];
       //   console.log('editaTabella_1304 -------------- letto tabella da migrare ' + JSON.stringify(this.tstatipersona));
          for(const tabel of this.ttipicommanda) {
            this.tabellatwdett = new TabellatwDett();
            this.tabellatwdett.id  = tabel.id;
            this.tabellatwdett.idtab  = 0;
            this.tabellatwdett.idtabella  = idtab;
            this.tabellatwdett.descrizione = tabel.d_tipo_commanda;
            this.tabellatwdett.key_utenti_operation = parseInt(localStorage.getItem('id'));
         //   console.log('editaTabella_04 ------------------------------------------------- pronto per insert: ' + JSON.stringify(this.tabellatwdett));


            this.registraTabellatwdett(this.tabellatwdett);
            }
         // setTimeout(this.returntoPadre, 5000);
          this.onSelectTabella.emit(tabella);

          }
     },
    error =>
        {
         this.Message = error.message;
         this.alertSuccess = false;
         this.type = 'error';
         console.log(error);
         this.showNotification(this.type, this.Message);
        });

}
=======
*/

}

>>>>>>> d8eac67 (registrazione corretta)



// tabella non gestita
editaTabella_99(idtab: number, tabella: Tabellat) {
  localStorage.removeItem('tabella');
  localStorage.setItem('tabella', tabella.d_tabella);
  this.esitoTabella.emit(this.esitoNegativo);
}

returntoPadre() {
  this.onSelectTabella.emit(this.tabellat);
}


async registraTabellatwdett(tabellatwdett: TabellatwDett) {

  const rc1 = await this.tabellaTwDettService.create(tabellatwdett).subscribe(
    resp => {
        if(resp['rc'] === 'ok') {
//                  alert('----------------------    inserito commandariga' + prg);
          }
      },
    error =>
       {
         console.log(error);
         this.type = 'error';
         this.Message = error.message;
         this.alertSuccess = false;
         this.showNotification(this.type, this.Message);
       });
}














}


