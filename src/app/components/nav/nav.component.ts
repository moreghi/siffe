
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faUserPlus, faUserFriends, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD
// classes
import { User } from '../../classes/User';
import { Userlevel } from '../../classes/UserLevel';
import { Giornata } from '../../classes/Giornata';
import { Prenotazione } from '../../classes/Prenotazione';
import { Message } from '../../classes/Message';
// component
import { InfoPrenotazioneComponent } from './../../components/prenotaziones/info-prenotazione/info-prenotazione.component';
import { MessageComponent } from './../../components/popups/message/message.component';

// import { Manifestazione } from '../../classes/Manifestazione';
// services
import { AuthService } from './../../services/auth.service';
import { UserlevelService } from './../../services/userlevel.service';
import { GiornataService } from './../../services/giornata.service';
=======
// ----------------------------------------------------  classes
import { User } from '../../classes/User';
import { Giornata } from '../../classes/Giornata';
import { Userlevel } from '../../classes/UserLevel';

// import { Prenotazione } from '../../classes/Prenotazione';
import { Message } from '../../classes/Message';
// ---------------------------------------------------   component
// import { InfoPrenotazioneComponent } from './../../components/prenotaziones/info-prenotazione/info-prenotazione.component';
import { MessageComponent } from './../../components/popups/message/message.component';

// import { Manifestazione } from '../../classes/Manifestazione';
// ---------------------------------------------------------------  services
import { AuthService } from './../../services/auth.service';
import { UserlevelService } from './../../services/userlevel.service';
import { GiornataService } from './../../services/giornata.service';


>>>>>>> d8eac67 (registrazione corretta)
import { MessageService } from './../../services/message.service';
// import { ManifestazioneService } from './../../services/manifestazione.service';
// import { Giornata } from './../../classes/Giornata';
// per gestire il popup con esito operazione
import { NotifierService } from 'angular-notifier';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
=======
import { DatePipe } from '@angular/common';
>>>>>>> d8eac67 (registrazione corretta)


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() onNewUser = new EventEmitter();

  public isUserLoggedIn = false;
<<<<<<< HEAD
=======
  public isActiveEvent = false;      // 2022/07/06   per attivare dinamicamente la voce eventi
>>>>>>> d8eac67 (registrazione corretta)
  faUserPlus = faUserPlus;
  faUserFriends = faUserFriends;
  faUser = faUser;
  faUserCheck = faUserCheck;

  public showMenu = true;    // variabile per impostare la visualizzazione della barra  - soluzione puro Angular

  public isCollapsed = true;  // variabile per soluzione con ngbootstrap
  public username: string;

<<<<<<< HEAD
  titolo = "Sanfra in Festa ....  ";
=======
  titolo = "Sanfra in Festa ";
>>>>>>> d8eac67 (registrazione corretta)
  anno = 2020;

  public isAbilityBevande = false;
  public isAbilityCucina = false;
  public isAbilityCassa = false;

  public user: User;
  public userlevel: Userlevel;
  public giornata: Giornata;
<<<<<<< HEAD
  // public manifestazione: Manifestazione;
  public manifActive = false;
  public prenotazione: Prenotazione;
  public message: Message;

=======

  // public manifestazione: Manifestazione;
  public manifActive = false;
 //  public prenotazione: Prenotazione;
  public message: Message;
 // public eventi: Evento[] = [];
>>>>>>> d8eac67 (registrazione corretta)

  public ruoloUser: number;
  public functionAdmin: number;
  public ruoloCassa = 1;
  public ruoloCucina = 2;
  public ruoloBevande = 3;
  public dayAbilitato = false;
 // public giornata: Giornata;
  public idDay = 0;
  public funcEnabled = false;
  public userAnonimus = false;
  public profilo = '';
  public routeGiornata = '';
  public idGiornata = 0;
  public idruoloday = 0;

<<<<<<< HEAD
=======
  public iduser = 0;

>>>>>>> d8eac67 (registrazione corretta)
  public type = '';
  public Message = '';
  closeResult = '';

<<<<<<< HEAD
  constructor(private route: Router,
              private auth: AuthService,
              private userlevelService: UserlevelService,
              private giornataService: GiornataService,
              private messageService: MessageService,
              private notifier: NotifierService,
=======
  public eventoAttivo = false;
  public isreload = false;

  public datadioggi = '';
  public dataOdierna: Date;


  constructor(private route: Router,
              private auth: AuthService,
              private userlevelService: UserlevelService,
              private messageService: MessageService,
              private giornataService: GiornataService,
              private notifier: NotifierService,
              private datePipe: DatePipe,
>>>>>>> d8eac67 (registrazione corretta)
              public modal: NgbModal,
             // private manifestazioneService: ManifestazioneService,
             ) {

    this.notifier = notifier;

    // ascolto evento creato in auth.service
    auth.usersignedin.subscribe(
        (user: User)  => {
<<<<<<< HEAD
            this.username = user.username;
            this.ruoloUser = user.idRuolo_Day;
=======

          console.log('nav ----------- lettura user: ' + JSON.stringify(user))
            this.username = user.username;
            this.ruoloUser = user.idRuolo_Day;
            this.iduser = user.id;
>>>>>>> d8eac67 (registrazione corretta)
            this.functionAdmin = parseInt(localStorage.getItem('user_ruolo'));
            this.isUserLoggedIn = true;
            // verifico se la giornata è attiva per gestione
            this.dayAbilitato = false;
<<<<<<< HEAD
            this.letturaseGiornataAttiva();
           // window.location.reload();

         /*
            this.abilityButton();

            this.isAbilityBevande = true;
        this.isAbilityCucina = true;
        this.isAbilityCassa = true;   */

          //  alert('nav-costruttore  ---------------------------------  login - ruolo: ' + user.idRuolo_Day);
=======
            this.idGiornata = +localStorage.getItem('idGiornata');
            if(this.idGiornata > 0) {
              this.dayAbilitato = true;
            }

            this.profilo =  localStorage.getItem('Druolo');
>>>>>>> d8eac67 (registrazione corretta)

        }
    );
// l'evento logout non ha come risultato un utente quindi lascio vuoto ()
    auth.userlogout.subscribe(
          ()  => {
              this.username = '';
              this.ruoloUser = 0;
              this.isUserLoggedIn = false;

          }
    );
     // per la registrazione ascolto evento creato in auth.service
    auth.usersignedup.subscribe(
          (user: User)  => {
                this.username = user.cognome;
                this.ruoloUser = user.idRuolo_Day;
                this.isUserLoggedIn = true;
      }
    );
    // per il cambio password ascolto evento creato in auth.service
    auth.userchgpwd.subscribe(
        (user: User)  => {
          this.username = user.cognome;
          this.ruoloUser = user.idRuolo_Day;
          this.isUserLoggedIn = true;
      }
  );

<<<<<<< HEAD
  // alert('nav-Costruttore ---------------------------   prima di abilityButton');
  // this.abilityButton();
 // alert('nav-Costruttore --------    fine ----------------   finito abilityButton');
=======
    this.verificaEventiOpen();


  // alert('nav-Costruttore ---------------------------   prima di abilityButton');
  // this.abilityButton();
 // alert('nav-Costruttore --------    fine ----------------   finito abilityButton');





>>>>>>> d8eac67 (registrazione corretta)
  }

  ngOnInit() {

<<<<<<< HEAD
    let data = new Date()
    this.anno = data.getFullYear();

    this.verificaseManifestazioneAttiva();

    this.isUserLoggedIn = this.auth.isUserLoggedIn();

      console.log('nav_onInit isUserLoggedIn: ' + this.isUserLoggedIn);


    if(this.isUserLoggedIn)  {
      this.letturaseGiornataAttiva();
      const user = this.auth.getUtente();
      this.loadProfiloLogged(user.idRuolo_Day);
      this.username = user.cognome;
      this.ruoloUser = user.idRuolo_Day;

=======
    const data = new Date();
    this.anno = data.getFullYear();

    this.dataOdierna = new Date(data);
    this.datadioggi =  this.datePipe.transform(this.dataOdierna, 'dd-MM-yyyy');

    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  //  alert('nav ---- datadioggi: ' + this.datadioggi)
    this.loadGiornata(this.datadioggi);

    this.verificaseManifestazioneAttiva();  // non serve -- da cancellare



      console.log('nav_onInit isUserLoggedIn: ' + this.isUserLoggedIn);
      if(this.isUserLoggedIn === false) {
        this.iduser = +localStorage.getItem('id');
        this.isUserLoggedIn = true;
      }

    if(this.isUserLoggedIn)  {

      const user = this.auth.getUtente();
      console.log('nav-  ngoninit ----- utente loggato: ' + JSON.stringify(user));

      this.loadProfiloLogged(user.idLevel);  // metodo non necessario. recupero il profilo da localStorage
      this.username = user.cognome;
      this.ruoloUser = user.idRuolo_Day;
     // this.profilo = localStorage.getItem('Druolo');
>>>>>>> d8eac67 (registrazione corretta)

      // verifico se utente anonimo abilito a visualizzare le proprie prenotazioni
      if(user.idruoloweb === 0) {
        this.userAnonimus = true;
        this.funcEnabled = false;
       } else {
        this.userAnonimus = false;
        this.funcEnabled = false;
        if(user.idRuolo_Day === -1) {
          this.funcEnabled = true;
        }
<<<<<<< HEAD

      }



=======
        // effettuo reload per rendere visibili subito le voci sulla combo funzioni  2022/07/02
        window.location.reload();

      }

>>>>>>> d8eac67 (registrazione corretta)
  //  ------    alert('nav-OnInit - ruolo: ' + this.ruoloUser);
      // recupero da localstorage il livello utente loggato
      this.ruoloUser = parseInt(localStorage.getItem('user_ruolo'));
      console.log('nav-oninit ---ruoloUser:' + this.ruoloUser);

     // this.abilityButton();

    }
<<<<<<< HEAD
  }

   async loadProfiloLogged(idruolo: number) {
=======

  }


  controllaEvento($event) {
      this.eventoAttivo = $event;

      alert('controllaEvento - lo stato è: ' + this.eventoAttivo);
  }


async verificaEventiOpen() {

  // metodo commentato per problemi di mancanza  classe e service
  /*
    let res = await this.eventoService.getAllActive().subscribe(
      response => {
           console.log('verificaEventiOpen -- dati: ' + JSON.stringify(response['data']));
           if(response['rc'] === 'ok') {
             this.eventoAttivo = true;
            }
           if(response['rc'] === 'nf') {
              this.eventoAttivo = false;
             }
        },
      error => {
        alert('nav  -- verificaEventiOpen - errore: ' + error.message);
        console.log(error);
      });
      */
  }

async loadGiornata(ggmmaaaa: string) {

  localStorage.removeItem('idGiornata');
  console.log('loadGiornata: ' + ggmmaaaa);
  let res = await this.giornataService.getGiornataggmmaaaa(ggmmaaaa).subscribe(
    response => {
         if(response['rc'] === 'ok') {
           this.giornata = response['data'];
           console.log('nav -- loadGiornata:  letta ........ ' + JSON.stringify(this.giornata))
           if(this.giornata.dtGiornata1 == this.datadioggi) {
            if(this.giornata.statoCassa == 1 &&
               this.giornata.statoMagazzino == 1 &&
               this.giornata.statoUtenti == 1) {
                localStorage.setItem('idGiornata', String(this.giornata.id));
                      this.dayAbilitato = true;
                      console.log('trovato giornata aattiva')
                 } else {
                    this.dayAbilitato = false;
                 }
         } else {
          this.dayAbilitato = false;
         }
        }
         if(response['rc'] === 'nf') {
          this.giornata = new Giornata();
        }
    },
    error => {
      alert('nav  -- loadProfiloLogged - errore: ' + error.message);
      console.log(error);
    });
}



   async loadProfiloLogged(idruolo: number) {

      console.log('loadProfiloLogged: ' + idruolo);


>>>>>>> d8eac67 (registrazione corretta)
      let res = await this.userlevelService.getbyId(idruolo).subscribe(
        response => {
             if(response['number'] !== 0) {
               this.userlevel = response['data'];
<<<<<<< HEAD
               this.profilo = this.userlevel.UserLevelName;
=======
               this.profilo = this.userlevel.userLevelName;
>>>>>>> d8eac67 (registrazione corretta)
              } else {
                      this.manifActive = false;
             }
          },
        error => {
          alert('nav  -- loadProfiloLogged - errore: ' + error.message);
          console.log(error);
        });
    }


 async verificaseManifestazioneAttiva() {

  // -----   non gestita fino a quando non attivo componente ) ;

  /*
    let res = await this.manifestazioneService.getManifActive().subscribe(
      response => {

         if(response['number'] !== 0) {
           this.manifestazione = response['data'];

           this.manifActive = true;
            } else {
                    this.manifActive = false;
           }
        },
      error => {
        alert('nav  -- verificaseDayAbilitato - errore: ' + error.message);
        console.log(error);
      });
    */
  }

<<<<<<< HEAD
async letturaseGiornataAttiva() {

  // -----   non gestita fino a quando non attivo componente ) ;

  let res = await this.giornataService.getGiornataactive().subscribe(
            response => {
               if(response['number'] === 1) {
                 this.giornata = response['data'];
                 this.idDay = this.giornata.id;
                 this.dayAbilitato = true;
                 localStorage.setItem('idGiornata', String(this.idDay));   // salvo la giornata in Localstorage
          } else {
            this.dayAbilitato = false;
         }
     },
     error => {
        alert('nav  -- verificaseDayAbilitato - errore: ' + error.message);
        console.log(error);
     });

}
=======
  verifyPresentiGiornate() {

  }

>>>>>>> d8eac67 (registrazione corretta)

 goActivity(ruolo: number) {

  if(this.dayAbilitato === false) {
    alert('Giornata non abilitata - Operatività non eseguibile  xxx');
    return;
  } else {
    this.lancioFunzioni(ruolo, this.idDay);
  }

}


   lancioFunzioni(ruolo: number, idDay: number) {
        console.log('nav - lanciofunzioni:' + ruolo);
        this.idruoloday = +localStorage.getItem('idruoloday');
      // test
     // idDay = 1;
   // ------     alert('nav - lancioFunzioni +++++  Ruolo: --------> ' + ruolo);
        switch (ruolo)  {
          case 1:
              if(ruolo === 1 || this.idruoloday === -1)  {
                this.idGiornata = +localStorage.getItem('idGiornata');
                this.routeGiornata = 'commanda/RegistraAnag/new/' + this.idGiornata;
                console.log('nav - lanciofunzioni: --------- route ' + this.routeGiornata);
                this.route.navigate([`${this.routeGiornata}`]);
              } else {
                this.type = 'error';
                this.Message = 'Utente non abilitato - avvisare amministratore';
                this.showNotification(this.type, this.Message);
              }
              break;
          case 2:
                if(ruolo === 2 || this.idruoloday === -1)  {
<<<<<<< HEAD
                  this.routeGiornata = 'commanda/gestioneCucina';
=======
                  this.routeGiornata = 'commanda/gestioneCucina/' + this.idGiornata;
>>>>>>> d8eac67 (registrazione corretta)
                  console.log('nav - lanciofunzioni: --------- route ' + this.routeGiornata);
                  this.route.navigate([`${this.routeGiornata}`]);
                } else {
                  this.type = 'error';
                  this.Message = 'Utente non abilitato - avvisare amministratore';
                  this.showNotification(this.type, this.Message);
                }
                break;
          case 3:

                if(ruolo === 3 || this.idruoloday === -1)  {
<<<<<<< HEAD
                  this.routeGiornata = 'commanda/gestioneBevande';
=======
                  this.routeGiornata = 'commanda/gestioneBevande/' + this.idGiornata;
>>>>>>> d8eac67 (registrazione corretta)
                  console.log('nav - lanciofunzioni: --------- route ' + this.routeGiornata);
                  this.route.navigate([`${this.routeGiornata}`]);
                } else {
                  this.type = 'error';
                  this.Message = 'Utente non abilitato - avvisare amministratore';
                  this.showNotification(this.type, this.Message);
                }
                 // this.route.navigate(['gestione/' +  idDay]);  // normale
                  // test
                  // this.route.navigate(['gestione/' +  idDay]);
                break;
          default:
              alert('nav - identificato utente Guest');
              break;
        }
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



  newUser() {

    this.onNewUser.emit();
  }

  // se utilizziamo la soluzione di Angular Puro
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout(e) {   // la "e" è l'evento passato da html
    e.preventDefault();
    this.auth.logout();
    this.route.navigate(['login']);
    }

  login(email, pass) {
    this.auth.signIn(email, pass);
  }

  signIn(e) {
    e.preventDefault();
    this.route.navigate(['login']);
  }

  signUp(e) {
    e.preventDefault();
    this.route.navigate(['signup']);
  }


  chgpwd(e)  {
    e.preventDefault()
    this.route.navigate(['chgpwd']);
  }


  gofunctionAdminActivity(activity: string) {

   // alert('nav ---- functionAdmin ----->' + this.functionAdmin);


  //  alert('attività richiesta: ' + activity);
    this.functionAdmin = parseInt(localStorage.getItem('user_ruolo'));
    if(this.functionAdmin != -1) {
      alert('Profilo utente non abilitato - Rivergersi all Amministratore');
      return;
    }
    switch (activity)  {
      case 'manif':
           this.route.navigate(['manif']);
       // this.route.navigate(['commandaw/' +  this.giornata.idManifestazione + '/new']);    // originale

           break;
        case 'commande':
        //   this.route.navigate(['commandeGiornata/' +  this.giornata.idManifestazione]);
           break;
      case 'giormanif':
       //    this.route.navigate(['giormanif/' +  this.giornata.idManifestazione]);
        // mettere link
           break;
      case 'prodotti':
           this.route.navigate(['prodotti']);
           break;
       case 'persone':
           this.route.navigate(['persone']);
    // mettere link
           break;
       case 'tabelle':
            this.route.navigate(['tabellat/']);
     // mettere link
            break;
        default:
            alert('nav - funzione non ancora attivata');
            break;
    }

  }


// ---------------------    info prenotazione  -- versione aperto in nav   ---- fine


showInfoPrenotazionePopup() {
<<<<<<< HEAD
=======
// metodod corretto   commentato solo per problema doi mancanza classe e service
  /*
>>>>>>> d8eac67 (registrazione corretta)
  console.log('showInfoPrenotazione - lancio popup');
  this.prenotazione = new Prenotazione();
  this.prenotazione.id = 1;

  const ref = this.modal.open(InfoPrenotazioneComponent , {size:'lg'});
  ref.componentInstance.selectedUser = this.prenotazione;

  ref.result.then(
      (yes) => {
        console.log('Click YES');
        // quando torno da save su popup faccio elenco per riaggiornare la situazione
        // non funziona perchè sono su prodotto e non prodotti
      },
      (cancel) => {
        console.log('click Cancel');
      }
    );
<<<<<<< HEAD


}

// verifico se ci sono giornate per effettuare prenotazioni
async verifyPresentiGiornate() {
  console.log('verifyPresentiGiornate --inizio');
  // -----   non gestita fino a quando non attivo componente ) ;

  let res = await this.giornataService.getGiornateprenotabili().subscribe(
            response => {
               if(response['rc'] === 'ok') {
                 // effettuo la navigazione a form per registrare prenotazione
                 this.route.navigate(['requestConfirmPrenotazione']);
               }
               if(response['rc'] === 'nf') {
                // apro popup per visualizzare il messaggio di assenza giornate per prenotazione
                this.updateMessage();
              }
     },
     error => {
        alert('nav  -- verificaseDayAbilitato - errore: ' + error.message);
        console.log(error);
     });
=======
*/
>>>>>>> d8eac67 (registrazione corretta)

}


<<<<<<< HEAD
=======
showPrenotazioni() {
  this.route.navigate(['prenotazioni']);
}
>>>>>>> d8eac67 (registrazione corretta)



async updateMessage() {

  const key = 1;
  this.message = new Message();
  this.message.tipo = 'I';
  this.message.title = 'prenotazione Serate';
  this.message.message01 = 'Non presenti giornate';
  this.message.message02 = 'prenotazione non possibile';
  this.message.image = 'Info.png';
  this.message.id = key;

  let res = await this.messageService.update(this.message).subscribe(
    response => {
         if(response['rc'] === 'ok') {
          // alert('aggiornato messaggio');
           this.showMessagePopup(this.message);
          }
      },
    error => {
<<<<<<< HEAD
      alert('nav  -- loadProfiloLogged - errore: ' + error.message);
=======
      alert('nav  -- updateMessage - errore: ' + error.message);
>>>>>>> d8eac67 (registrazione corretta)
      console.log(error);
    });
}

showMessagePopup(message: Message) {
  console.log('showMessagePopup - lancio popup');
 // this.prenotazione = new Prenotazione();
 // this.prenotazione.id = 1;

  const ref = this.modal.open(MessageComponent , {size:'lg'});
  ref.componentInstance.selectedUser = message;

  ref.result.then(
      (yes) => {
        console.log('Click YES');
        // quando torno da save su popup faccio elenco per riaggiornare la situazione
        // non funziona perchè sono su prodotto e non prodotti
      },
      (cancel) => {
        console.log('click Cancel');
      }
    );


}












// ------------------------------------------------------------------------    parti obsolete

/*

  abilityButton() {
      alert('abilityButton: ' + this.ruoloUser);
 /*   this.isAbilityBevande = false;
    this.isAbilityCucina = false;
    this.isAbilityCassa = false;


    switch (this.ruoloUser)  {
      case 1:
        alert('nav - identificato utente per Cassa');
        this.isAbilityCassa = true;
        break;
      case 2:
        alert('nav - identificato utente per Cucina');
        this.isAbilityCucina = true;
        break;
      case 3:
        alert('nav - identificato utente per Bevande');
        this.isAbilityBevande = true;
        break;
      case -1:
        alert('nav - identificato utente amministratore');
        this.isAbilityBevande = true;
        this.isAbilityCucina = true;
        this.isAbilityCassa = true;
        break;
      default:
        alert('nav - identificato utente Guest');
          break;
    }

  }
*/










}
