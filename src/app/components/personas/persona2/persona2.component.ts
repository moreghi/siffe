import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonaService} from '../../../services/persona.service';
import { Persona} from '../../../classes/Persona';
import { faUserEdit, faTrash, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// per gestire il popup con esito operazione
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'tr[app-persona2]',
  templateUrl: './persona2.component.html',
  styleUrls: ['./persona2.component.css']
})
export class Persona2Component implements OnInit {

 // variabili passate dal componente padre
 @Input('persona2-data') persona: Persona;
 @Input('persona2-prog') i: number;
 @Input('functionUser') functionUser: string;

// passo dati a persona-detail
 @Output('onSelectPersona') onSelectPersona = new EventEmitter();

// passo al Padre la segnalazione che ho effettuato la cancellazione- serve per rifare l'elemco aggiornato
@Output('onDeletePersona') onDeletePersona = new EventEmitter();


 faUserEdit = faUserEdit;
 faTrash = faTrash;
 faInfo = faInfo;
 faInfoCircle = faInfoCircle;

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
 public funcSearch = 0;
 public nRec = 0;

 public type = '';
 public utenteFedele = false;
 public functionEnabled = false;
 public idDay = 0;


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
 public routePersona = '';
 public deletedPersona = 'Dpersona';
  public errordeletedPersona = 'errorDpersona';

 closeResult = '';

 constructor(public modalService: NgbModal,
             private personaService: PersonaService,
             private route: Router,
             private notifier: NotifierService) {
             this.notifier = notifier;
           }

 ngOnInit(): void {

 console.log('persona - oninit - ' + JSON.stringify(this.persona));

 }


/*   come passare da figlio a padre
 showPersonaDetailNew() {
   //alert('creato evento per passare utente: ' + this.persona.cognome);
   this.onSelectUser.emit(this.persona);
   //alert(' ---- 2   creato evento per passare utente: ' + this.persona.cognome);
 }

*/


selectedPersona() {

 // this.onSelectPersona.emit(this.persona);
}

showPersonaDetail(functionUser: string) {
 // alert('da fare -  functionUser passata dal Padre : ' + functionUser);

  switch (functionUser) {

       case 'Inqu':
     //  let aa = this.router.navigate(['/users/id/inqu', id]);
     //  console.log('aaaaa ' + aa);

      this.route.navigate(['persona/inqu/' + this.persona.id]);
      break;
    case 'Edit':
      this.route.navigate(['persona/edit/'  + this.persona.id]);
      break;
    case 'Edits':
      this.route.navigate(['persona/edits/'  + this.persona.id]);
      break;
    default:
      alert('scelta errata \n navigazione non possibile');
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


getColor(ruolo) {
 switch (ruolo) {
   case -1:
     return 'red';
   case 1:
     return 'blue';
   case 2:
     return 'orange';
   case 3:
     return 'green';
   case 4:
     return 'violet';
   case 5:
     return 'lime';
 }
}

getBbackgroundColor(ruolo) {

 switch (ruolo) {
   case 0:
     return 'red';
 }
}


// -------------------------------------------  per la cancellazione

open(content:any, persona: Persona) {
  console.log(`open_content - user ${persona.cognome}&nbsp; ${persona.nome}`);
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  this.closeResult = `Closed with: ${result}`;
  // alert('controllo la modalità di chiusura della popup - chiusura su tasto save: ' + result);
  if(result === 'Cancel click') {
  this.cancellazioneAbort();
  }
  if(result === 'Delete click') {
    console.log('fare routine di cancellazione: ' + persona.id + ' - ' + persona.cognome );
   //this.cancellaProdotto(this.prodotto);
    this.cancellaPersona(persona);
  //  this.cancellazioneCompleted(persona);   buttare
   // per riaggiornare elenco
  //                                 window.location.reload();

  }
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // alert('controllo la modalità di chiusura della popup ------------------ chiusura su tasto close: ' + reason);
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

  /*
  cancellazioneCompleted(persona: Persona) {
    this.type = 'success';
    this.Message = `cancellazione della persona ${persona.cognome}&nbsp;${persona.nome}  eseguita con successo `;
    this.showNotification(this.type, this.Message);
  }

  */
  /*   da buttare
  delete(id:any) {
    console.log(id,'cancelllllllllllllllllllllllo --->');
    this.personaService.deletePersona(id).subscribe((res)=> {
      console.log(res,'res- delete -->');

      this.type = 'error';
      this.Message = res['message'];
      this.showNotification(this.type, this.Message);
    });
  }

  */

  async  cancellaPersona(persona: Persona) {
    console.log('cancella - emetto onDeletepersona');
    let rc = await  this.personaService.deletePersona(persona).subscribe(
      response => {
        if(response['rc'] === 'ok') {
          // imposto l'evento per passare la segnalazione di cancellazione al padre
          this.onDeletePersona.emit(this.deletedPersona);
          this.isVisible = true;
          this.alertSuccess = true;
          this.type = 'success';
          this.Message = 'Persona cancellata correttamente';
          this.showNotification(this.type, this.Message);
        }
    },
    error =>
        {
          /*
         let errore =  error.error.message;
         console.log('errore-1: ' + errore);
         errore = errore.substr(7, 68);
         console.log('errore-2............: ' + errore);
         console.log('error.error.message ................. ' + error.error.message);
         console.log('error.name ................. ' + error.name);
*/
         const test = 'Cannot delete or update a parent row: a foreign key constraint fails';

         const str = error.error.message;
         const substr = 'Cannot delete or update a parent row: a foreign key constraint fails';

         console.log(' controllo se errore contiene una string particolare :' + str.includes(substr));



         if(str.includes(substr)) {
            console.log('trovato errore - imposto event');
            this.onDeletePersona.emit(this.errordeletedPersona);
            console.log('trovato errore - impostato -------------------------- event');
            //return;
        }  else {
          this.isVisible = true;
          this.alertSuccess = false;
          this.type = 'error';
          console.log('error.message: ' + error.message);
          console.log('error.error.message: ' + error.error.message);
          this.Message = 'Errore cancellazione persoona' + '\n' + error.error.message;
          this.showNotification(this.type, this.Message);
          console.log(error);
        }

        });
  }







}


