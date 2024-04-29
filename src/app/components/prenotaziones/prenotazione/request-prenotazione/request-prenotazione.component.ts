<<<<<<< HEAD
// esempio di notify
// https://stackblitz.com/edit/angular-notifier-demo?file=src%2Fapp%2Fapp.component.html

=======
>>>>>>> d8eac67 (registrazione corretta)
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// Classe

<<<<<<< HEAD
import { PrenotazioneConfirm } from './../../../../classes/PrenotazioneConfirm';
import { Manifestazione} from './../../../../classes/Manifestazione';
import { Giornata } from './../../../../classes/Giornata';
import { faPlusSquare, faSearch, faSave, faUserEdit, faMinus, faPlus, faWindowClose, faTrash } from '@fortawesome/free-solid-svg-icons';
// service
import { PrenotazioneConfirmService } from './../../../../services/prenotazione-confirm.service';
=======
import { Prodotto } from './../../../../classes/Prodotto';
import { Prenotazionework } from './../../../../classes/Prenotazionework';
import { Prenotazioneprodwork } from './../../../../classes/Prenotazioneprodwork';
import { Prenotazione } from './../../../../classes/Prenotazione';
import { Manifestazione} from './../../../../classes/Manifestazione';
import { Giornata } from './../../../../classes/Giornata';
import { faPlusSquare, faSearch, faSave, faUserEdit, faMinus, faPlus, faWindowClose, faTrash} from '@fortawesome/free-solid-svg-icons';
// service
import { ProdottoService } from './../../../../services/prodotto.service';
import { PrenotazioneworkService } from './../../../../services/prenotazionework.service';
import { PrenotazioneprodworkService } from './../../../../services/prenotazioneprodwork.service';
import { PrenotazioneService } from './../../../../services/prenotazione.service';
>>>>>>> d8eac67 (registrazione corretta)
import { GiornataService } from './../../../../services/giornata.service';
import { ManifestazioneService} from './../../../../services/manifestazione.service';
import { AuthService } from './../../../../services/auth.service';
import { ActivatedRoute, Data, Router, RouterStateSnapshot } from '@angular/router';

// per gestire il popup con esito operazione
import { NotifierService } from 'angular-notifier';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';
import { DatePipe } from '@angular/common';

<<<<<<< HEAD
=======

>>>>>>> d8eac67 (registrazione corretta)
@Component({
  selector: 'app-request-prenotazione',
  templateUrl: './request-prenotazione.component.html',
  styleUrls: ['./request-prenotazione.component.css']
})
export class RequestPrenotazioneComponent implements OnInit {

<<<<<<< HEAD
  public form = {
    cognome: '',
    name: '',
    email: '',
    telefono: '',
    datapre: null,
    persone: ''
  };

/*
  public Registrationform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    password_confirmation: new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')])
  })
*/

  // private type = "password";
  public error = [];

  public prens: PrenotazioneConfirm[] = [];
  public pren: PrenotazioneConfirm;
  public giornate: Giornata[] = [];
  public giornata: Giornata;
  public manif: Manifestazione;
=======
  public error = [];


  public giornate: Giornata[] = [];
  public giornata: Giornata;
  public manif: Manifestazione;
  public prenotazioni: Prenotazione[] = [];
  public prenotazione: Prenotazione;
  public prenotazionework: Prenotazionework;
  //
  public prenotazioneprodwork: Prenotazioneprodwork;
  public prenotazioniprodwork: Prenotazioneprodwork[]=[];
  public prodotti: Prodotto[]=[];
>>>>>>> d8eac67 (registrazione corretta)

  public datapre = '';
  public datagiaRichiesta = false;
  public selectedGiornataValue = 0;
  public dataSelected = '';
  public dataPrenotata: string;       //Date;
  public numPre = 0;
  // icone
  faTrash = faTrash;
  faSave = faSave;
  faPlus = faPlus;
<<<<<<< HEAD
=======
  faSearch = faSearch;
>>>>>>> d8eac67 (registrazione corretta)

  public isVisible = false;
  public alertSuccess = false;
  public Message = '';
  public type = '';
  public manifActive = 1;
  public manAct = 0;
  public sanfraActive = false;

  public cognome = '';
  public nome = '';
  public email = '';
<<<<<<< HEAD

  public visibleConferma = true;


  constructor(private router: Router,
              private datePipe: DatePipe,
              private prenotazioneConfirmService: PrenotazioneConfirmService,
=======
  public idPassed = 0;
  public title = '';
  public title1 = 'Prenotazioni a serate';
  public nRec = 0;

  public visibleConferma = true;

  options = [
    'No',
    'Si'
  ];

  public searchText = '';
// per paginazone
  p = 1;
  p1 = 1;
  p2 = 1;

  public tipoRichiesta = '';
  public activateChiusuraSoloPrenotazione = false;
  public activateSelezioneProdotti = false;
  public activateNuovaPrenotazione = false;
  public token = '';
  public tokenlong = '';

  public prenwid = 9999;

  public form = {
    cognome: '',
    name: '',
    email: '',
    telefono: '',
    persone: ''
  };

  public dataOdierna;
  public datadioggi = '';


  constructor(private router: Router,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private prenotazioneService: PrenotazioneService,
              private prenotazioneworkService: PrenotazioneworkService,
              private prenotazioneprodworkService: PrenotazioneprodworkService,
              private prodottoService: ProdottoService,
>>>>>>> d8eac67 (registrazione corretta)
              private giornataService: GiornataService,
              private manifService: ManifestazioneService,
              private auth: AuthService,
              private notifier: NotifierService) {
                this.notifier = notifier;
              }

<<<<<<< HEAD
  ngOnInit(): void {
      console.log('request-prenotazione -----  onInit');
      // recupero la manifestazione attiva per caricare le giornate
      this.visibleConferma = true;
      this.manifAttiva(this.manifActive);

  }


  manifAttiva(stato: number) {
    this.manifService.getManifbyStato(stato).subscribe(
      response => {
        // visualizzo i dati della prima manifestazione attiva che trovo
        // ce ne deve essere una solo attiva
          if(response['number'] > 0) {
            console.log('manifAttiva ----------- ' + JSON.stringify(response['data']));
            this.sanfraActive = true;
            this.manif = response['data'];
            this.manAct = this.manif.id;
            this.loadGiornate(this.manif.id);
       //     alert('la manifestazione attive è: ' + this.manAct);
          } else {
            this.isVisible = true;
            this.alertSuccess = false;
            this.sanfraActive = false;
            this.Message = "Nessuna Manifestazione attiva \n funzione non eseguibile";
            this.type = 'error';
            this.showNotification(this.type, this.Message);
          }
      },
      error => {
         alert('Manif-Data  --loadManifestazione: ' + error.message);
         console.log(error);
      }
    )
=======

              ngOnInit(): void {
                this.goApplication();
             }

             goApplication() {

              this.isVisible = true;
              this.alertSuccess = true;
              this.activateNuovaPrenotazione = false;

              const date = Date();
              this.dataOdierna = new Date(date);
              this.datadioggi =  this.datePipe.transform(this.dataOdierna, 'dd-MM-yyyy');

              this.visibleConferma = true;

              this.route.paramMap.subscribe(p => {
                this.idPassed = +p.get('id');
                console.log('id recuperato: ' + this.idPassed);
                // -------  leggo i dati della giornata
                this.loadGiornata(this.idPassed);
                this.loadprenotazioni(this.idPassed);

                this.Message = 'Inserire i dati per la prenotazione';

              });


            this.type = 'success';
            this.showNotification(this.type, this.Message);
         }

  nuovaPrenotazione(giornata: Giornata) {
    this.activateNuovaPrenotazione = true;


    this.form.cognome = '';
    this.form.name = '';
    this.form.email = '';
    this.form.telefono = '';
    this.form.persone = '';

>>>>>>> d8eac67 (registrazione corretta)
  }



<<<<<<< HEAD

 loadGiornate(id: number) {

  console.log('request-prenotazione -------  loadGiornate ' + id);
    this.giornataService.getGiornatebyManif(id).subscribe(
     res => {
=======
  async loadGiornata(id: number) {

    //console.log('request-prenotazione -------  loadGiornata ' + id);
    let res = await this.giornataService.getbyId(id).subscribe(
     res => {
           this.giornata = res['data'];
          // this.nuovaPrenotazione(this.giornata);
           this.title = 'Prenotazione per Giornata del ' + this.giornata.dtGiornata1;
        },
       error => {
          alert('Request-Prenotazione  -- loadGiornata - errore: ' + error.message);
          this.isVisible = true;
          this.alertSuccess = false;
          console.log(error);
          this.Message = error.message;
          this.type = 'error';
          this.showNotification(this.type, this.Message);
       }
     )
  }

  async loadprenotazioni(id: number) {
    // console.log('-----------------------------------------------------------  loadPrenotazioni ------ ' + id)
    let res = await this.prenotazioneService.getAllbyday(id).subscribe(
     res => {
          if(res['rc'] ===  'ok' )  {
            this.prenotazioni = res['data'];
            this.nRec = res['number'];
          }

           this.title = 'Prenotazione per Giornata del ' + this.giornata.dtGiornata1;
        },
       error => {
          alert('Request-Prenotazione  -- loadGiornata - errore: ' + error.message);
          this.isVisible = true;
          this.alertSuccess = false;
          console.log(error);
          this.Message = error.message;
          this.type = 'error';
          this.showNotification(this.type, this.Message);
       }
     )
  }



 loadGiornate(id: number) {

   // console.log('request-prenotazione -------  loadGiornate ' + id);
    this.giornataService.getAllGiornatebyManif(id).subscribe(
     res => {
           if(res['rc'] === 'ok')
>>>>>>> d8eac67 (registrazione corretta)
           this.giornate = res['data'];
        },
       error => {
          alert('Request-Prenotazione  -- loadGiornate - errore: ' + error.message);
          this.isVisible = true;
          this.alertSuccess = false;
          console.log(error);
          this.Message = error.message;
          this.type = 'error';
          this.showNotification(this.type, this.Message);
       }
     )
  }

  selectedGiornata(selectedValue: number) {
    //  alert('selezionato: ' + selectedValue);
      if(selectedValue === 99) {

     //   alert('selezionato: ---  uscito errato ' );
        this.type = 'error';
        this.Message = 'selezione non corrette';
        this.showNotification(this.type, this.Message);
        this.alertSuccess = false;
        this.isVisible = true;

    } else {
    //  alert('selezionato: ------------- uscito corretto');
<<<<<<< HEAD
      this.giornataService.getGiornata(selectedValue).subscribe(
=======
      this.giornataService.getbyId(selectedValue).subscribe(
>>>>>>> d8eac67 (registrazione corretta)
          resp => {
            this.giornata = resp['data'];
            this.dataSelected = this.datePipe.transform(this.giornata.dtGiornata, 'dd-MM-yyyy');  //this.giornata.dtGiornata;
            this.dataPrenotata = this.giornata.dtGiornata;
            console.log('data selezionata: ' + this.dataSelected + ' dataPrenotata: ' + this.dataPrenotata);
          },
          error => {
            this.isVisible = true;
            this.alertSuccess = false;
            console.log(error);
            this.Message = error.message;
            this.type = 'error';
            this.showNotification(this.type, this.Message);
          });
       }
    }


<<<<<<< HEAD
  onSubmit(form: NgForm) {
   // alert('sono in submit');
    console.log('sono in submit -----------  ' );
// determino la giornata








    // effettuo una verifica su user se presenti utenti con la stessa mail
    this.prenotazioneConfirmService.getPreConfirmbyEmail(form.value.email).subscribe(
        resp => {
               if(resp['rc'] === 'ok') {
                this.datagiaRichiesta  = false;
                console.log('onsubmit - verifica se posso inviare mail: ' + JSON.stringify(resp['data']));
                this.prens = resp['data'];
                this.numPre = resp['number'];
                if(this.numPre !== 0) {
                   console.log('n.ro di prenotazioni trovate con la mail ' + this.numPre);
                   for(let pren of this.prens) {
                      this.datapre = this.datePipe.transform(pren.datapren, 'dd-MM-yyyy');
                      console.log('data selezionata: ' + this.dataSelected);
                      console.log('datapre: ' + this.datapre);
                      if(this.datapre === this.dataSelected) {
                        this.datagiaRichiesta  = true;
                      }
                   }
                   if(this.datagiaRichiesta  === true) {
                    this.Message = 'Prenotazione già eseguita  - inserimento non consentito';
                    this.isVisible = true;
                    this.alertSuccess = false;

                    this.type = 'error';
                    this.showNotification(this.type, this.Message);

                    return;
                  }  else  {
                   console.log('vado a invaire la mail e creare laa prenotazione da confermare poi  -----   da fare ----->  2');

                  }
                 }

               else {

                 console.log('vado a invaire la mail e creare laa prenotazione da confermare poi  -----   da fare');



                 let res =  this.auth.sendAccountConfirmedLink
                                 (form.value.email, form.value.cognome, form.value.name, form.value.username, form.value.password)
                                 .subscribe(
                     resp => {
                           console.log('effettuata la send email per ' + form.value.email);
                     },
                   error => {
                     console.log('errore in invio email ' + error.message);
                   }
                 );
                 this.Message = 'utente ' + form.value.cognome + ' inviata mail di richiesta registrazione --------------';
                 this.isVisible = true;
                 this.alertSuccess = true;

                 this.type = 'success';
                 this.Message = 'utente ' + form.value.cognome + ' Registrato con successo - inviata mail di conferma';
                 this.showNotification(this.type, this.Message);
               }
          }
               if(resp['rc'] === 'nf') {

                this.cognome = form.value.cognome;
                this.nome = form.value.name;
                this.email = form.value.email;

                console.log('merda   -------------------        vado a invaire la mail e creare laa prenotazione da confermare poi  -----   da fare');
/*
                console.log('merda   ---- cognome ---------------  ' + this.cognome);
                console.log('merda   ---- nome ---------------  ' + this.cognome);
                console.log('merda   ---- email ---------------  ' + form.value.email);
                console.log('merda   ---- telefono ---------------  ' + form.value.telefono);
                console.log('merda   ---- persone ---------------  ' + form.value.persone);
                console.log('merda   ---- datapren ---------------  ' + this.dataPrenotata);
*/

            // utilizzo da api/autu   --->  inspiegabilmente non va
         //   const res =  this.auth.registerConfermetPrenotazioneMoreno(form.value.cognome, form.value.name, form.value.email,
        //                                                             form.value.telefono, this.dataPrenotata , form.value.persone);

                const res =  this.prenotazioneConfirmService.registerConfermetPrenotazioneMoreno
                              (this.cognome.toLowerCase(), this.nome.toLowerCase(), this.email.toLowerCase(),
                              form.value.telefono, this.dataSelected , form.value.persone, this.giornata.id)
                              .subscribe(
                     resp => {
                             console.log('effettuata la send email per ' + form.value.email);
                             this.visibleConferma = false;
                             this.Message = 'utente ' + form.value.cognome + ' inviata mail di richiesta registrazione --------------';
                             this.isVisible = true;
                             this.alertSuccess = true;

                             this.type = 'success';
                             this.Message = 'utente ' + form.value.cognome + ' Registrato con successo - inviata mail di conferma';
                             this.showNotification(this.type, this.Message);
                          },
                     error => {
                            console.log('errore in invio email ' + error.message);
                      });
                      /*
            if(res) {
                    console.log('effettuata la send email per ' + form.value.email);
                                console.log('res: ' + JSON.stringify(res));
                    this.Message = 'utente ' + form.value.cognome + ' inviata mail di richiesta registrazione --------------';
                    this.isVisible = true;
                    this.alertSuccess = true;

                    this.type = 'success';
                    this.Message = 'utente ' + form.value.cognome + ' Registrato con successo - inviata mail di conferma';
                    this.showNotification(this.type, this.Message);
               }
                 */
          }


        },
        error => {
          this.handleError(error);
          console.log(error.message);

          this.type = 'error';
          this.Message = 'errore in registrazione: ' + error.message;
          this.showNotification(this.type, this.Message);
        });





   // this.router.navigate(['users']);



    /*
    this.Jarwis.signup(this.form).subscribe(
      data => {
        console.log('merda - fatto signup');
        console.log(data);
        this.handleResponse(data);
      },
      error => this.handleError(error)
    );
    */
  }

/*
async  inviataMail(form.value.email: NgForm) {

    const resp = await this.auth.sendAccountConfirmedLink(form.value.email).subscribe(
      resp => {
                this.handleResponse(resp);
           console.log(' -------------1------ ?' + resp);
                this.type = 'success';
           this.Message = 'inviata richiesta di reset password per utente ';
           this.showNotification(this.type, this.Message);

//alert(resp.cognome + ' loggatao correttamente');
           this.Message = 'inviata richiesta di reset password per utente ';
           this.isVisible = true;
           this.alertSuccess = true;
      },
      error => {
           this.Message = error.error.error;
           this.type = 'error';
           this.showNotification(this.type, this.Message);
//  messaggio sulla barra

           this.isVisible = true;
           this.alertSuccess = false;

      });

  }

*/






  handleResponse(data) {
  //  this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
=======
    async onSubmit(form: NgForm) {

    this.token = (Math.random() + 1).toString(36).substring(2,7);

    this.prenotazione = new Prenotazione();
    this.prenotazione.idgiornata = this.giornata.id;
    this.prenotazione.datagiornata = this.giornata.dtGiornata1;
    this.prenotazione.datapren = this.datadioggi;
    this.prenotazione.cognome = form.value.cognome;
    this.prenotazione.nome = form.value.name;
    this.prenotazione.persone = form.value.persone;
    this.prenotazione.email = form.value.email;
    this.prenotazione.telefono = form.value.telefono;
    this.prenotazione.token = this.token;

    let res = await this.prenotazioneService.create(this.prenotazione).subscribe(
      res => {
               if(res['rc']  === 'ok')  {
                  this.prenotazione = res['data'];
                  this.InviaConfermaPrenotazione(this.prenotazione);
               }
        },
        error => {
           alert('creaprenotazione - errore: ' + error.message);
           this.isVisible = true;
           this.alertSuccess = false;
           console.log(error);
           this.Message = error.message;
           this.type = 'error';
           this.showNotification(this.type, this.Message);
        }
      )
  }



  async   InviaConfermaPrenotazione(prenotazione: Prenotazione) {

    //alert('InviaConfermaPrenotazione  -- appena entrato')

    let res =  await this.prenotazioneService.sendemailPrenotazionedaConfermareMoreno(prenotazione).subscribe(
     resp => {
        if(resp['rc'] === 'ok') {
                console.log('effettuata la send email per ' + prenotazione.email);
               // this.visibleConferma = false;
                this.type = 'success';
                this.Message = 'utente ' + prenotazione.cognome + ' ' + prenotazione.nome + '  inviata mail di richiesta conferma prenotazione';
                this.isVisible = true;
                this.alertSuccess = true;
                this.showNotification(this.type, this.Message);
                this.router.navigateByUrl('requestConfirmPrenotazione/' + this.giornata.id);
             }
     },
     error => {
          alert('InviaConfermaPrenotazione  -- errore in invio email - errore: ' + error.message);
          this.isVisible = true;
          this.alertSuccess = false;
          console.log(error);
          this.Message = error.message;
          this.type = 'error';
          this.showNotification(this.type, this.Message);
   });

  }


controlloNome(campo: string, minlen: number, maxlen: number) {
  this.alertSuccess = true;
  this.isVisible = true;

 alert('lunghezza campo da controllare: ' + campo.length)

       if(campo.length == 0) {
          this.alertSuccess = false;
          this.Message = "il campo nome è obbligatorio "
          return;
      }
      if(campo.length < minlen) {
          this.alertSuccess = false;
          this.Message = "il campo nome è troppo corto - minimo " + minlen + " caratteri"
          return;
      }
      if(campo.length > maxlen) {
          this.alertSuccess = false;
          this.Message = "il campo nome è troppo lungo - massimo " + maxlen + " caratteri"
          return;
      }
      if(campo.length > minlen && campo.length < maxlen) {
          alert('campo corretto')
          return;
      }

}

controlloCognome(campo: string, minlen: number, maxlen: number) {
    this.alertSuccess = true;
    this.isVisible = true;

   alert('lunghezza campo da controllare: ' + campo.length)

       if(campo.length == 0) {
          this.alertSuccess = false;
          this.Message = "il campo cognome è obbligatorio "
          return;
      }
      if(campo.length < minlen) {
          this.alertSuccess = false;
          this.Message = "il campo cognome è troppo corto - minimo " + minlen + " caratteri"
          return;
      }
      if(campo.length > maxlen) {
          this.alertSuccess = false;
          this.Message = "il campo cognome è troppo lungo - massimo " + maxlen + " caratteri"
          return;
      }
      if(campo.length > minlen && campo.length < maxlen) {
          alert('campo corretto')
          return;
      }
}

controlloEmail(campo: string) {
        this.alertSuccess = true;
        this.isVisible = true;

        if(campo.length == 0) {
          this.alertSuccess = false;
          this.Message = "il campo email è obbligatorio "
          return;
        }

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(campo))
        {
           alert("L'indirizzo email che hai inserito e' valido")
        }
        else {
          alert("L'indirizzo email che hai inserito non e' valido");
       }
  }

  handleResponse(data) {
  //  this.Token.handle(data.access_token);
    this.router.navigateByUrl('profile');
>>>>>>> d8eac67 (registrazione corretta)
  }

  handleError(error) {
    this.error = error.error.errors;
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
nuovaPrenotazione() {
  this.form.cognome = '';
  this.form.name = '';
  this.form.email = '';
  this.form.telefono = '';
  this.form.persone = '';
  this.visibleConferma = true;

}


  /*
  show() {
    this.type = "text"
  }
  hide() {
    this.type = "password"
  }
  */


// importante

/*
 la fase di creazione effettiva utente va spostata nella form di conferma (response-signup)

*/
            /*
                let resp =  this.auth.signUp(form.value.cognome, form.value.name, form.value.username, form.value.email, form.value.password);
                if (resp) {
                     console.log('resp - dopo creazione utente ' + resp.);
                     let res =  this.auth.sendAccountConfirmedLink(form.value.email);
                    this.Message = 'utente ' + form.value.cognome + ' Registrato con successo - inviata mail di conferma';
                    this.isVisible = true;
                    this.alertSuccess = true;

                    this.type = 'success';
                    this.Message = 'utente ' + form.value.cognome + ' Registrato con successo - inviata mail di conferma';
                    this.showNotification(this.type, this.Message);
                   }
                     */
=======
confermaSolaPrenotazione(prenotazionework: Prenotazionework) {
  alert('creo prenotazione semplice con invio email')
}


onSelectionChange(tipo: string, form: NgForm)   {



   this.tipoRichiesta = tipo.substring(0, 1);
  // alert('onSelectionChange - Tipo Richiesta: ' + this.tipoRichiesta);

   this.isVisible = true;
   this.activateChiusuraSoloPrenotazione = false;
   this.activateSelezioneProdotti = false;

   switch (this.tipoRichiesta) {
    case 'N':
      this.activateChiusuraSoloPrenotazione = true;
      this.activateSelezioneProdotti = true;
 //   this.router.navigate(['getpersoneforMessa', this.messa.id]);
      break;
    case 'S':
    console.log(' sono nello swith tra si e no')
     // this.activateChiusuraSoloPrenotazione = false;
     // this.activateSelezioneProdotti = true;

     this.creoPrenotazwork(form);
     console.log(' this.giornata.id : ' + this.giornata.id)
     console.log(' this.prenwid : ' + this.prenwid)
      // non faccio in tempo a recuperare il codice id dell'ultima prenotazione inserita
      // nel requestprenotazione1  farò la lettura dell'ultimo registrato

      let aa = 'requestConfirmPrenotazione1/' + this.giornata.id + '/' + this.prenwid;
      console.log('vado a navbigare a ' + aa);
      this.router.navigate(['requestConfirmPrenotazione1/' + this.giornata.id + '/' + this.prenwid]);
      break;
     default:
    alert('Scelta errata \n ricerca non possibile');
    break;
  }
}

creoPrenotazwork(form: NgForm) {
  // determino la giornata
          this.token = (Math.random() + 1).toString(36).substring(2,7);


          this.prenotazionework = new Prenotazionework();
          this.prenotazionework.idgiornata = this.giornata.id;
          this.prenotazionework.datapren = this.giornata.dtGiornata1;
          this.prenotazionework.cognome = form.value.cognome;
          this.prenotazionework.nome = form.value.name;
          this.prenotazionework.persone = form.value.persone;
          this.prenotazionework.email = form.value.email;
          this.prenotazionework.telefono = form.value.telefono;
          this.creaprenotazionework(this.prenotazionework);
    }

    async creaprenotazionework(prenotazionework: Prenotazionework) {

      let res = await this.prenotazioneworkService.create(prenotazionework).subscribe(
       res => {
                if(res['rc']  === 'ok')  {
                   this.prenotazionework = res['data'];
                   // li creo nella richprenotazione1
                //   this.creaprodprenotazionework(this.prenotazionework.id)
                }
         },
         error => {
            alert('Request-Prenotazione  -- creaprenotazionework - errore: ' + error.message);
            this.isVisible = true;
            this.alertSuccess = false;
            console.log(error);
            this.Message = error.message;
            this.type = 'error';
            this.showNotification(this.type, this.Message);
         }
       )
    }

>>>>>>> d8eac67 (registrazione corretta)


}
