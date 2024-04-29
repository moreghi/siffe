<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { faPlusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
// service
=======
// classi e service commentati per la creazione delle tabelle  -- struttura corretta

import { Component, OnInit } from '@angular/core';
import { faPlusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
// ------------------------------------------------------------------- service
>>>>>>> d8eac67 (registrazione corretta)
import { TabellaService } from '../../../services/tabella.service';
import { TabellaTwDettService } from '../../../services/tabella-tw-dett.service';
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


//import { AbilfunctioneService } from '../../../services/abilfunctione.service';      // eliminare
import { CtrfuncService } from '../../../services/ctrfunc.service';
// classi
import { Tabellat} from '../../../classes/Tabella_t';
import { TabellatwDett } from '../../../classes/Tabella_tw_dett';
// model classi tabelle da Normalizzare in twdwtt
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

import { Abilfunctione} from '../../../classes/Abilfunctione';
=======
// import { TruoloService } from '../../../services/truolo.service';  // tabella_3
// import { TstatoutenteService } from '../../../services/tstatoutente.service';  // tabella_16
// import { TstatoprenotazioneService } from '../../../services/tstatoprenotazione.service';  // tabella_25
import { TtitoloService } from '../../../services/ttitolo.service';  // tabella_19


// ----------------------------------------------------------------------------- classi
import { Tabellat} from '../../../classes/Tabella_t';
import { TabellatwDett } from '../../../classes/Tabella_tw_dett';
// model classi tabelle da Normalizzare in twdwtt

// import { Truolo } from '../../../classes/T_ruolo';  // tabella_3
// import { TstatoPrenotazione } from '../../../classes/T_stato_prenotazione';  // tabella_25


import { TstatoUtente } from '../../../classes/T_stato_utente';  // tabella_16

import { Ttitolo } from '../../../classes/T_titolo';  // tabella_19




>>>>>>> d8eac67 (registrazione corretta)
// per gestire la notifica esito
import { NotifierService } from 'angular-notifier';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tabelle',
  templateUrl: './tabelle.component.html',
  styleUrls: ['./tabelle.component.css']
})
export class TabelleComponent implements OnInit {

  public isVisible = false;
  public alertSuccess = false;

  public tabelle: Tabellat[] = [];
  public tabella: Tabellat;
  public tabelletwdett: TabellatwDett[] = [];
  public tabellatwdett: TabellatwDett;
  public tabelletwdettnull: TabellatwDett[] = [];

// tabelle da normalizzare in twdett
<<<<<<< HEAD
public tcategoriaProdotto: TcategoriaProdotto;
public tcompetenzaProdotto: TcompetenzaProdotto;
public truolo: Truolo;
public tstatobevande: TstatoBevande;
public tstatocassa: TstatoCassa;
public tstatocommanda: TstatoCommanda;
public tstatocontabile: TstatoContabile;
public tstatocucina: TstatoCucina;
public tstatogiornata: TstatoGiornata;
public tstatolavorazione: TstatoLavorazione;
public tstatomagazzino: TstatoMagazzino;
public tstatomanifestazione: TstatoManifestazione;
public tstatopersona: TstatoPersona;
public tstatoprodotto: TstatoProdotto;
public tstatorigacommanda: Tstatorigacommanda;
public tstatoutente: TstatoUtente;
public ttaglia: TTaglia;
public ttipologia: Ttipologia;
public ttitolo: Ttitolo;
public truoloday: Truoloday;
public truoloweb: Truoloweb;
public tsettore: Tsettore;
public tstatoconsegna: TstatoConsegna;
public tstatofornitore: TstatoFornitore;
public tstatoprenotazione: TstatoPrenotazione;
public tstatospesa: Tstatospesa;
public tstatoutenti: TstatoUtenti;
public ttipocommanda: TtipoCommanda;





  public abilfunctione: Abilfunctione;

=======

//public truolo: Truolo;

public tstatoutente: TstatoUtente;

public ttitolo: Ttitolo;

// public tstatoprenotazione: TstatoPrenotazione;


>>>>>>> d8eac67 (registrazione corretta)
 /*    legenda typo messaggio esito

  this.type = 'error';    --- operazione in errore
  this.type = 'success';  --- operazione conclusa correttamente
  this.type = 'default';
  this.type = 'info';
  this.type = 'warning';
*/

 // variabili per gestione inqu/edit/new

 public href = '';
 public functionUser = '';
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


// variabili per notifica esito operazione con Notifier
public type = '';
public Message = '';


  errormsg: any;


  public title = "elenco Tabelle";
  public trovatoRec = false;
  public nRec = 0;
  // icone
  faPlusSquare = faPlusSquare;
  faSearch = faSearch;


  // per paginazone
  p = 1;
  p_e = 1;

  pagination = 1;
  pagination1 = 2;

  public rotta = '';
  public level = 0;
  public enabledFunc = false;
  public ruoloSearch = 0;
  public nameTselected = '';
  public enabledSelectTabella = false;
  public SelectTabella = false;

constructor(private tabellaService: TabellaService,
<<<<<<< HEAD
            private ctrfuncService: CtrfuncService,
            private tabellaTwDettService: TabellaTwDettService,
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
            private tabellaTwDettService: TabellaTwDettService,

         //   private tstatoutenteService: TstatoutenteService,

            private ttitoloService: TtitoloService,
        //    private truoloService: TruoloService,
        //    private tstatoprenotazioneService: TstatoprenotazioneService,
>>>>>>> d8eac67 (registrazione corretta)

            private router: Router,
            private route: ActivatedRoute,
            private modal: NgbModal,
            private notifier: NotifierService) {
              this.notifier = notifier;
            }

           ngOnInit(): void {
              this.enabledSelectTabella = false;
              this.SelectTabella = false;
<<<<<<< HEAD
              this.checkFunctionbylevel();


/*    originaria fino a 05/01/2022
      -- introduco controllo per determinare  la funzione dell'utente

            this.router.url;
            this.href = this.router.url;
            console.log('href: ..................................  ' + this.href);
            console.log('route - 1 ' + this.route.snapshot.url[0].path);
            console.log(this.href.includes(this.searchEdit));
            console.log(this.href.includes(this.searchElenco));
            console.log(this.href.includes(this.searchInqu));
            console.log(this.href.includes(this.searchNew));

            // attenzione
            // su navbar dopo login imposto la localstorage
            // in funzione del valore della user_ruolo effettuo la valorizzazione
            // della visibilità del campo

            // test
            this.testRuoloday = -1; // ----------------------------------------   test   test   test  test
            localStorage.setItem('user_ruolo', String(this.testRuoloday));

            if(this.testRuoloday === -1) {
              this.functionUser = this.navigateEdits;
            }
            if(this.testRuoloday === 0) {
              this.functionUser = this.navigateInqu;
            }
            if(this.testRuoloday === 1) {
              this.functionUser = this.navigateEdit;
            }
            this.loadManifestazioni();

*/
=======
             // this.checkFunctionbylevel();

              this.goApplication();
>>>>>>> d8eac67 (registrazione corretta)

          }



<<<<<<< HEAD

          async   checkFunctionbylevel() {
            this.rotta = this.route.snapshot.url[0].path;
            this.level = parseInt(localStorage.getItem('user_ruolo'));

            console.log('checkFunctiobylevel - inizio: -- rotta ' + this.rotta + ' level:' + this.level);

            let rc =  await this.ctrfuncService.getfuncbyProfilo(this.level, this.rotta).subscribe(
              res =>{
               console.log(res,'res-->');
               if(res['rc'] === 'ko')  {
                this.type = 'error';
                this.Message = res['message'];
                this.showNotification(this.type, this.Message);
                return;
               }
               if(res['rc'] === 'ok') {
                  if(res['number'] !== 1) {
                    this.type = 'error';
                    this.Message = 'Modulo non ancona habilitation';
                    this.showNotification(this.type, this.Message);
                  }  else {
                    this.functionUser = res['data'];
                    //   parte pubblica   --  fine
                    console.log('checkFunctionbylevel - funzione determinata: ' + this.functionUser);
                    // parte personalizzata
                    this.loadTabelle();
                   }
                  }
                },
                   error => {
                      alert('Tabelle  -- checkFunctionbylevel - errore: ' + error.message);
                      console.log(error);
                      this.type = 'error';
                      this.Message = error.message;
                      this.alertSuccess = false;
                      this.showNotification(this.type, this.Message);
                   });

          }

=======
          goApplication() {
            this.loadTabelle();

          }


>>>>>>> d8eac67 (registrazione corretta)
          async loadTabelle() {

            //alert('Manifestazioni   -- loadManifestazioni :  inizio ');
            this.trovatoRec = false;
            this.nRec = 0;
            this.isVisible = true;
            let rc =  await  this.tabellaService.getAll().subscribe(
                 res => {
                    this.tabelle = res['data'];
                    this.nRec = res['number'];
                    this.trovatoRec = true;
                    this.Message = 'Situazione Attuale';
                    this.alertSuccess = true;
                },
                error => {
                   alert('Tabelle  -- loadTabelle - errore: ' + error.message);
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

  onSelectTabella(tabel: Tabellat)  {

    console.log('onSelectTabella - selezionato: ' + tabel.id + ' ' + tabel.d_tabella);

    this.tabella = tabel;
    this.nameTselected = tabel.d_tabella;
    this.enabledSelectTabella = true;

    this.editaTabellatwdett();
   // this.elaboraTabellaSelect(tabel.id);   spostato su tabella

   }

   // ricevo i dati dal figlio (tabella-tw-dett) con i dati per aggiornamento della tabella effettiva
   onUpdateTabella(tabel: TabellatwDett) {

    console.log('tabelle (padre)  onUpdateTabella - selezionato: ' + tabel.id + ' ' + tabel.descrizione + ' ' + tabel.idtabella);

    this.aggiornaeltabella(tabel.idtabella, tabel.id, tabel.descrizione);

   }

  esitoTabella(risposta: string) {

    console.log('esitoTabella - risposta: ' + risposta);

    if(risposta === 'tabella non disponibile') {
      this.nameTselected =  localStorage.getItem('tabella');
      localStorage.removeItem('tabella');
      this.enabledSelectTabella = false;
      this.Message = risposta;
      this.alertSuccess = false;
      this.type = 'error';
      this.isVisible = true;
      this.showNotification(this.type, this.Message);
    }

  }


  aggiornaeltabella(idTabella: number, id: number, descrizione: string) {

  switch (idTabella) {
<<<<<<< HEAD
      case 1:
        this.aggiornaTabella_01(id, descrizione);  // ok
        break;
      case 2:
        this.aggiornaTabella_02(id, descrizione);
        break;
      case 3:
        this.aggiornaTabella_03(id, descrizione);
        break;
      case 4:
        this.aggiornaTabella_04(id, descrizione);
        break;
      case 5:
        this.aggiornaTabella_05(id, descrizione);
        break;
      case 6:
        this.aggiornaTabella_06(id, descrizione);
        break;
      case 7:
        this.aggiornaTabella_07(id, descrizione);
        break;
      case 8:
        this.aggiornaTabella_08(id, descrizione);
        break;
      case 9:
        this.aggiornaTabella_09(id, descrizione);
        break;
      case 10:
        this.aggiornaTabella_10(id, descrizione);
        break;
      case 11:
        this.aggiornaTabella_11(id, descrizione);
        break;
      case 12:
        this.aggiornaTabella_12(id, descrizione);
        break;
      case 13:
        this.aggiornaTabella_13(id, descrizione);
        break;
      case 14:
        this.aggiornaTabella_14(id, descrizione);
        break;
      case 15:
        this.aggiornaTabella_15(id, descrizione);
        break;
      case 16:
        this.aggiornaTabella_16(id, descrizione);
        break;
      case 17:
        this.aggiornaTabella_17(id, descrizione);
        break;
      case 18:
        this.aggiornaTabella_18(id, descrizione);
        break;
      case 19:
        this.aggiornaTabella_19(id, descrizione);
        break;
      case 20:
        this.aggiornaTabella_20(id, descrizione);
        break;
      case 21:
        this.aggiornaTabella_21(id, descrizione);
        break;
      case 22:
        this.aggiornaTabella_22(id, descrizione);
        break;
      case 23:
        this.aggiornaTabella_23(id, descrizione);
        break;
      case 24:
        this.aggiornaTabella_24(id, descrizione);
        break;
      case 25:
        this.aggiornaTabella_25(id, descrizione);
        break;
      case 26:
        this.aggiornaTabella_26(id, descrizione);
        break;
      case 27:
        this.aggiornaTabella_27(id, descrizione);
        break;
      case 28:
        this.aggiornaTabella_28(id, descrizione);
        break;







      default:
      alert('Scelta errata \n editazione tabella non possibile');
      break;
}



=======

      case 3:
        this.aggiornaTabella_03(id, descrizione);
        break;


      case 16:
        this.aggiornaTabella_16(id, descrizione);
        break;
      case 19:
        this.aggiornaTabella_19(id, descrizione);
        break;
      case 25:
        this.aggiornaTabella_25(id, descrizione);
        break;
      default:
      alert('Scelta errata \n editazione tabella non possibile');
      break;
    }
>>>>>>> d8eac67 (registrazione corretta)
  }

/*
*  --------------------------------------------------------------  aggiornaTabella
*/

<<<<<<< HEAD
async aggiornaTabella_01(id: number, descrizione: string) {

  const rc =  await this.tcategoriaProdottoService.getbyId(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tcategoriaProdotto = response['data'];
          this.tcategoriaProdotto.d_categoria = descrizione;
          this.tcategoriaProdotto.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_01(this.tcategoriaProdotto);
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


async aggiornaTabella_02(id: number, descrizione: string) {
  const rc =  await this.tcompetenzaProdottoService.getbyId(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tcompetenzaProdotto = response['data'];
          this.tcompetenzaProdotto.d_competenza = descrizione;
          this.tcompetenzaProdotto.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_02(this.tcompetenzaProdotto);
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

async aggiornaTabella_03(id: number, descrizione: string) {
=======

async aggiornaTabella_03(id: number, descrizione: string) {
//  metodo commentato per la creazione del Modello
/*
>>>>>>> d8eac67 (registrazione corretta)
  const rc =  await this.truoloService.getRuolo(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.truolo = response['data'];
          this.truolo.d_ruolo = descrizione;
          this.truolo.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_03(this.truolo);
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

async aggiornaTabella_04(id: number, descrizione: string) {
  const rc =  await this.tstatobevandeService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatobevande = response['data'];
          this.tstatobevande.d_stato_bevande = descrizione;
          this.tstatobevande.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_04(this.tstatobevande);
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

async aggiornaTabella_05(id: number, descrizione: string) {
  const rc =  await this.tstatocassaService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatocassa = response['data'];
          this.tstatocassa.d_stato_cassa = descrizione;
          this.tstatocassa.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_05(this.tstatocassa);
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

async aggiornaTabella_06(id: number, descrizione: string) {
  const rc =  await this.tstatocommandaService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatocommanda = response['data'];
          this.tstatocommanda.d_stato_commanda = descrizione;
          this.tstatocommanda.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_06(this.tstatocommanda);
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

async aggiornaTabella_07(id: number, descrizione: string) {
  const rc =  await this.tstatocontabileService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatocontabile = response['data'];
          this.tstatocontabile.d_stato_contabile= descrizione;
          this.tstatocontabile.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_07(this.tstatocontabile);
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


async aggiornaTabella_08(id: number, descrizione: string) {
  const rc =  await this.tstatocucinaService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatocucina = response['data'];
          this.tstatocucina.d_stato_cucina = descrizione;
          this.tstatocucina.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_08(this.tstatocucina);
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


async aggiornaTabella_09(id: number, descrizione: string) {
  const rc =  await this.tstatogiornataService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatogiornata = response['data'];
          this.tstatogiornata.d_stato_giornata = descrizione;
          this.tstatogiornata.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_09(this.tstatogiornata);
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

async aggiornaTabella_10(id: number, descrizione: string) {
  const rc =  await this.tstatolavorazioneService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatolavorazione = response['data'];
          this.tstatolavorazione.d_stato_lavorazione = descrizione;
          this.tstatolavorazione.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_10(this.tstatolavorazione);
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


async aggiornaTabella_11(id: number, descrizione: string) {
  const rc =  await this.tstatomagazzinoService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatomagazzino = response['data'];
          this.tstatomagazzino.d_stato_magazzino = descrizione;
          this.tstatomagazzino.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_11(this.tstatomagazzino);
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

async aggiornaTabella_12(id: number, descrizione: string) {
  const rc =  await this.tstatomanifestazioneService.getbyId(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatomanifestazione = response['data'];
          this.tstatomanifestazione.d_stato_manifestazione = descrizione;
          this.tstatomanifestazione.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_12(this.tstatomanifestazione);
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

async aggiornaTabella_13(id: number, descrizione: string) {
  const rc =  await this.tstatopersonaService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatopersona = response['data'];
          this.tstatopersona.d_stato_persona = descrizione;
          this.tstatopersona.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_13(this.tstatopersona);
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


async aggiornaTabella_14(id: number, descrizione: string) {
  const rc =  await this.tstatoprodottoService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatoprodotto = response['data'];
          this.tstatoprodotto.d_stato_prodotto = descrizione;
          this.tstatoprodotto.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_14(this.tstatoprodotto);
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

async aggiornaTabella_15(id: number, descrizione: string) {
  const rc =  await this.tstatorigacommandaService.getbyId(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatorigacommanda = response['data'];
          this.tstatorigacommanda.d_stato_riga_commanda = descrizione;
          this.tstatorigacommanda.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_15(this.tstatorigacommanda);
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

async aggiornaTabella_16(id: number, descrizione: string) {
=======
        */
}

async aggiornaTabella_16(id: number, descrizione: string) {
  //  metodo commentato per la creazione del Modello
/*
>>>>>>> d8eac67 (registrazione corretta)
  const rc =  await this.tstatoutenteService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatoutente = response['data'];
          this.tstatoutente.d_stato_utente = descrizione;
          this.tstatoutente.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_16(this.tstatoutente);
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

async aggiornaTabella_17(id: number, descrizione: string) {
  const rc =  await this.ttagliaService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.ttaglia = response['data'];
          this.ttaglia.d_taglia = descrizione;
          this.ttaglia.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_17(this.ttaglia);
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

async aggiornaTabella_18(id: number, descrizione: string) {
  const rc =  await this.ttipologiaService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.ttipologia = response['data'];
          this.ttipologia.d_tipologia = descrizione;
          this.ttipologia.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_18(this.ttipologia);
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

async aggiornaTabella_19(id: number, descrizione: string) {
  const rc =  await this.ttitoloService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.ttitolo = response['data'];
          this.ttitolo.d_titolo = descrizione;
          this.ttitolo.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
<<<<<<< HEAD
          this.updatetabella_19(this.ttitolo);
=======
      //    function commentata per la creazione Modello  -- logica corretta
       //   this.updatetabella_19(this.ttitolo);
>>>>>>> d8eac67 (registrazione corretta)
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
async aggiornaTabella_20(id: number, descrizione: string) {
  const rc =  await this.truolodayService.getbyId(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.truoloday = response['data'];
          this.truoloday.d_ruolo_day = descrizione;
          this.truoloday.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_20(this.truoloday);
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


async aggiornaTabella_21(id: number, descrizione: string) {
  const rc =  await this.truolowebService.getbyId(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.truoloweb = response['data'];
          this.truoloweb.d_ruolo_web = descrizione;
          this.truoloweb.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_21(this.truoloweb);
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

async aggiornaTabella_22(id: number, descrizione: string) {
  const rc =  await this.tsettoreService.getSettore(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tsettore = response['data'];
          this.tsettore.d_settore = descrizione;
          this.tsettore.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_22(this.tsettore);
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


async aggiornaTabella_23(id: number, descrizione: string) {
  const rc =  await this.tstatoconsegnaService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatoconsegna = response['data'];
          this.tstatoconsegna.d_stato_consegna = descrizione;
          this.tstatoconsegna.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_23(this.tstatoconsegna);
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

async aggiornaTabella_24(id: number, descrizione: string) {
  const rc =  await this.tstatofornitoreService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatofornitore = response['data'];
          this.tstatofornitore.d_stato_fornitore = descrizione;
          this.tstatofornitore.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_24(this.tstatofornitore);
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

async aggiornaTabella_25(id: number, descrizione: string) {
=======

async aggiornaTabella_25(id: number, descrizione: string) {
  //  metodo commentato per la creazione del Modello
/*
>>>>>>> d8eac67 (registrazione corretta)
  const rc =  await this.tstatoprenotazioneService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatoprenotazione = response['data'];
          this.tstatoprenotazione.d_stato_prenotazione = descrizione;
          this.tstatoprenotazione.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_25(this.tstatoprenotazione);
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

async aggiornaTabella_26(id: number, descrizione: string) {
  const rc =  await this.tstatospesaService.getbyId(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatospesa = response['data'];
          this.tstatospesa.d_stato_spesa = descrizione;
          this.tstatospesa.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_26(this.tstatospesa);
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

async aggiornaTabella_27(id: number, descrizione: string) {
  const rc =  await this.tstatoutentiService.getbyId(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.tstatoutenti = response['data'];
          this.tstatoutenti.d_stato_utenti = descrizione;
          this.tstatoutenti.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_27(this.tstatoutenti);
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

async aggiornaTabella_28(id: number, descrizione: string) {
  const rc =  await this.ttipocommandaService.getbyid(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.ttipocommanda = response['data'];
          this.ttipocommanda.d_tipo_commanda = descrizione;
          this.ttipocommanda.key_utenti_operation = parseInt(localStorage.getItem('user_ruolo'));
          this.updatetabella_28(this.ttipocommanda);
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


/*
*  ---------------------------------------------------  Update Tabella
*/

<<<<<<< HEAD
async updatetabella_01(tcategoriaProdotto: TcategoriaProdotto) {

  const rc1 = await this.tcategoriaProdottoService.update(tcategoriaProdotto).subscribe(
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

async updatetabella_02(tcompetenzaProdotto: TcompetenzaProdotto) {

  const rc1 = await this.tcompetenzaProdottoService.update(tcompetenzaProdotto).subscribe(
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

=======

 //  metodo commentato per la creazione del Modello
/*
>>>>>>> d8eac67 (registrazione corretta)
async updatetabella_03(truolo: Truolo) {

  const rc1 = await this.truoloService.updateRuolo(truolo).subscribe(
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
<<<<<<< HEAD

async updatetabella_04(tstatobevande: TstatoBevande) {

  const rc1 = await this.tstatobevandeService.update(tstatobevande).subscribe(
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

async updatetabella_05(tstatocassa: TstatoCassa) {

  const rc1 = await this.tstatocassaService.update(tstatocassa).subscribe(
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

async updatetabella_06(tstatocommanda: TstatoCommanda) {

  const rc1 = await this.tstatocommandaService.update(tstatocommanda).subscribe(
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

async updatetabella_07(tstatocontabile: TstatoContabile) {

  const rc1 = await this.tstatocontabileService.update(tstatocontabile).subscribe(
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

async updatetabella_08(tstatocucina: TstatoCucina) {

  const rc1 = await this.tstatocucinaService.update(tstatocucina).subscribe(
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

async updatetabella_09(tstatogiornata: TstatoGiornata) {

  const rc1 = await this.tstatogiornataService.update(tstatogiornata).subscribe(
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


async updatetabella_10(tstatolavorazione: TstatoLavorazione) {

  const rc1 = await this.tstatolavorazioneService.update(tstatolavorazione).subscribe(
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


async updatetabella_11(tstatomagazzino: TstatoMagazzino) {

  const rc1 = await this.tstatomagazzinoService.update(tstatomagazzino).subscribe(
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


async updatetabella_12(tstatomanifestazione: TstatoManifestazione) {

  const rc1 = await this.tstatomanifestazioneService.update(tstatomanifestazione).subscribe(
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

async updatetabella_13(tstatopersona: TstatoPersona) {
  const rc1 = await this.tstatopersonaService.update(tstatopersona).subscribe(
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

async updatetabella_14(tstatoprodotto: TstatoProdotto) {
  const rc1 = await this.tstatoprodottoService.update(tstatoprodotto).subscribe(
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

async updatetabella_15(tstatorigacommanda: Tstatorigacommanda) {
  const rc1 = await this.tstatorigacommandaService.update(tstatorigacommanda).subscribe(
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

=======
*/


//  metodo commentato per la creazione del Modello
/*
>>>>>>> d8eac67 (registrazione corretta)
async updatetabella_16(tstatoutente: TstatoUtente) {
  const rc1 = await this.tstatoutenteService.update(tstatoutente).subscribe(
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

<<<<<<< HEAD
async updatetabella_17(ttaglia: TTaglia) {
  const rc1 = await this.ttagliaService.update(ttaglia).subscribe(
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

async updatetabella_18(ttipologia: Ttipologia) {
  const rc1 = await this.ttipologiaService.updatePersona(ttipologia).subscribe(
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

=======
>>>>>>> d8eac67 (registrazione corretta)
async updatetabella_19(ttitolo: Ttitolo) {
  const rc1 = await this.ttitoloService.updatePersona(ttitolo).subscribe(
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

<<<<<<< HEAD
async updatetabella_20(truoloday: Truoloday) {
  const rc1 = await this.truolodayService.update(truoloday).subscribe(
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
async updatetabella_21(truoloweb: Truoloweb) {
  const rc1 = await this.truolowebService.update(truoloweb).subscribe(
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

async updatetabella_22(tsettore: Tsettore) {
  const rc1 = await this.tsettoreService.updateSettore(tsettore).subscribe(
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

async updatetabella_23(tstatoconsegna: TstatoConsegna) {
  const rc1 = await this.tstatoconsegnaService.update(tstatoconsegna).subscribe(
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

async updatetabella_24(tstatofornitore: TstatoFornitore) {
  const rc1 = await this.tstatofornitoreService.update(tstatofornitore).subscribe(
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
=======
*/


//  metodo commentato per la creazione del Modello
/*
>>>>>>> d8eac67 (registrazione corretta)

async updatetabella_25(tstatoprenotazione: TstatoPrenotazione) {
  const rc1 = await this.tstatoprenotazioneService.update(tstatoprenotazione).subscribe(
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

<<<<<<< HEAD
async updatetabella_26(tstatospesa: Tstatospesa) {
  const rc1 = await this.tstatospesaService.update(tstatospesa).subscribe(
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

async updatetabella_27(tstatoutenti: TstatoUtenti) {
  const rc1 = await this.tstatoutentiService.update(tstatoutenti).subscribe(
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

async updatetabella_28(ttipocommanda: TtipoCommanda) {
  const rc1 = await this.ttipocommandaService.update(ttipocommanda).subscribe(
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

















=======
*/
>>>>>>> d8eac67 (registrazione corretta)
async editaTabellatwdett() {

  let rc =  await  this.tabellaTwDettService.getAll().subscribe(
       res => {
         if(res['rc'] === 'ok') {
           this.tabelletwdett = res['data'];
           this.alertSuccess = true;
           this.SelectTabella = true;
           this.Message = 'Situazione Attuale';
         }
         if(res['rc'] === 'nf') {
          this.tabelletwdett = this.tabelletwdettnull;
          this.Message = 'Nessuna tabella presente';
         }
      },
      error => {
         alert('Tabelle  -- editaTabellatwdett - errore: ' + error.message);
         console.log(error);
         this.type = 'error';
         this.Message = error.message;
         this.alertSuccess = false;
         this.showNotification(this.type, this.Message);
      });
   }

<<<<<<< HEAD

=======
/*

          async   checkFunctionbylevel() {
            this.rotta = this.route.snapshot.url[0].path;
            this.level = parseInt(localStorage.getItem('user_ruolo'));

            console.log('checkFunctiobylevel - inizio: -- rotta ' + this.rotta + ' level:' + this.level);

            let rc =  await this.ctrfuncService.getfuncbyProfilo(this.level, this.rotta).subscribe(
              res =>{
               console.log(res,'res-->');
               if(res['rc'] === 'ko')  {
                this.type = 'error';
                this.Message = res['message'];
                this.showNotification(this.type, this.Message);
                return;
               }
               if(res['rc'] === 'ok') {
                  if(res['number'] !== 1) {
                    this.type = 'error';
                    this.Message = 'Modulo non ancona habilitation';
                    this.showNotification(this.type, this.Message);
                  }  else {
                    this.functionUser = res['data'];
                    //   parte pubblica   --  fine
                    console.log('checkFunctionbylevel - funzione determinata: ' + this.functionUser);
                    // parte personalizzata
                    this.loadTabelle();
                   }
                  }
                },
                   error => {
                      alert('Tabelle  -- checkFunctionbylevel - errore: ' + error.message);
                      console.log(error);
                      this.type = 'error';
                      this.Message = error.message;
                      this.alertSuccess = false;
                      this.showNotification(this.type, this.Message);
                   });

          }



*/
>>>>>>> d8eac67 (registrazione corretta)

}


