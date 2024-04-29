
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { faPlusSquare, faSearch, faSave, faUserEdit, faMinus, faPlus, faWindowClose, faTrash, faReply } from '@fortawesome/free-solid-svg-icons';

import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
// component
import { Persona } from '../../../classes/Persona';
import { TstatoPersona } from '../../../classes/T_stato_persona';
import { Ttitolo } from '../../../classes/T_titolo';
import { Truoloday } from '../../../classes/T_ruolo_day';
import { TstatopersonaService } from 'src/app/services/tstatopersona.service';
// service
import { PersonaService } from './../../../services/persona.service';
import { TtitoloService } from 'src/app/services/ttitolo.service';
import { TruoloDayService } from 'src/app/services/truolo-day.service';
import { CtrfuncService } from '../../../services/ctrfunc.service';

import { UploadFilesService } from './../../../services/upload-files.service';

// per gestire il popup con esito operazione
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})
export class PersonaDetailComponent implements OnInit {

   // per upload image
   selectedFiles?: FileList;
   currentFile?: File;
   progress = 0;
   messageimage = '';
   fileInfos?: Observable<any>;
   messageupload = '';
   public folderImage = '';   // salvo la cartella in cui salvare immagine
 // per upload image -- fine

  persona: Persona;
  stati: TstatoPersona[] = [];
  statinull: TstatoPersona[] = [];
  titoli: Ttitolo[] = [];
  titolinull: Ttitolo[] = [];
  ruoli: Truoloday[] = [];
  ruolinull: Truoloday[] = [];


  public title = "Gestione Persona";

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

  public statoServizio = '';

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


  // ---------------------


  public statoModulo  = '?';
  public ricercaIniziale = '';

  closeResult = '';

  public level = 0;
  public nRecord = 0;
  public enabledFunc = false;
  public rotta = '';
  public rottaId = 0;
  public rottaFunz = '';


// variabili per editazione messaggio

public Message1 = '';
public Message2 = '';
public Message3 = '';
public Message1err = 'Contattare il gestore dell applicazione.';

public isValid = false;
public idPersona = 0;
public functionSelected = '';

public selectedTit = 0;
public selectedRuo = 0;
public selectedweb = 0;
public selectedSta = 0;

// per gestione abilitazione funzioni con service Moreno

public functionUrl = '';


public searchInqu = 'Inqu';
public searchEdit = 'Edit';
public searchEdits = 'Edits';
public searchNew = 'New';

public functionUrlUp = '';
public functionUserUp = '';

public selectedRuolo = 0;
public selectedStato = 0;
public selectedTitolo = 0;


constructor(public modalService: NgbModal,
            private personaService: PersonaService,
            private ctrfuncService: CtrfuncService,
            private ttitoloService: TtitoloService,
            private truoloDayService: TruoloDayService,
            private tstatopersonaService: TstatopersonaService,
            private route: ActivatedRoute,
            private router: Router,
            private uploadService: UploadFilesService,
            private notifier: NotifierService) {
              this.notifier = notifier;
            }

            ngOnInit(): void {

              console.log('persona-detail - sono in oninit ');

              this.checkFunctionbylevel();

            }

            checkFunctionbylevel() {
              //  ----- parte comune a tutti i moduli
             this.rotta = this.route.snapshot.url[0].path;
             this.level = parseInt(localStorage.getItem('user_ruolo'));
             this.functionUrl = this.route.snapshot.url[1].path;

             if(this.route.snapshot.url[1].path !== 'new') {
               this.rottaId =  parseInt(this.route.snapshot.url[2].path);
              } else {
               this.rottaId =  0;
              }

            // console.log('frontend - checkFunctionbylevel -- step_01');

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

                   this.loadTitoli();
                   this.loadRuoli();
                   this.loadStati();

                   this.isVisible = true;
                   this.alertSuccess = true;

                   if(this.functionNew) {
                     this.persona = new Persona();
                     this.persona.key_utenti_operation = +localStorage.getItem('id');
                     this.title = 'Inserimento Persona - persona-detail';
                     this.fase = 'N';
                     this.Message = `Inserire i dati della persona`;
                   } else {
                       this.route.paramMap.subscribe(p => {
                         this.idPersona = +p.get('id');
                         console.log('id recuperato: ' + this.idPersona);
                         // -------  leggo i dati della giornata
                         this.loadPersona(this.idPersona);
                         if(this.functionEdit || this.functionEdits) {
                           this.title = 'Aggiornamento Persona - personaDetail';
                           this.fase = 'M';
                          } else {
                           this.title = 'Visualizzazione Persona';
                           this.fase = 'I';
                          }
                         this.Message = 'Situazione Attuale Persona';
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
                     this.Message = 'Errore cancellazione Persona' + '\n' + error.message;
                     this.showNotification(this.type, this.Message);
                     console.log(error);
                   });

            }



            loadPersona(id: number) {
              console.log(`loadPersona - appena entrato`);
              this.personaService.getPersona(id).subscribe(
               resp => {
                     console.log(`loadPersona: ${resp['data']}`);
                     this.persona = resp['data'];
                     this.persona.key_utenti_operation = +localStorage.getItem('id');
                     if(this.persona.inServizio === 'S') {
                       this.statoServizio = 'mpostazione ATTIVA';
                     }
                     if(this.persona.inServizio === 'N') {
                      this.statoServizio = 'Impostazione Disattiva';
                    }
                     console.log('fatto lettura persona: ' + this.persona.id);
                     this.type = 'success';
                     this.Message = 'situazione attuale Persona';
                     this.alertSuccess = true;
                  },
               error => {
                    alert('sono in loadPersona');
                    this.isVisible = true;
                    this.alertSuccess = false;
                    console.log('loadPersona - errore: ' + error);
                    this.type = 'error';
                    this.Message = error.message;
                    this.alertSuccess = false;

                  });
             }


         async  loadTitoli() {

          let rc = await this.ttitoloService.getAll().subscribe(
              resp => {
                    console.log('loadTitoli: ' + JSON.stringify(resp['data']));
                    if(resp['rc'] === 'ok') {
                      this.titoli = resp['data'];
                    }
                 },
              error => {
                   alert('sono in loadTitoli');
                   this.isVisible = true;
                   this.alertSuccess = false;
                   console.log('loadTitoli - errore: ' + error);
                   this.type = 'error';
                   this.Message = error.message;
                   this.alertSuccess = false;
               });
           }


           async  loadRuoli() {

            let rc = await this.truoloDayService.getAll().subscribe(
                resp => {
                      console.log('loadRuoli: ' + JSON.stringify(resp['data']));
                      if(resp['rc'] === 'ok') {
                        this.ruoli = resp['data'];
                      }
                   },
                error => {
                     alert('sono in loadRuoli');
                     this.isVisible = true;
                     this.alertSuccess = false;
                     console.log('loadRuoli - errore: ' + error);
                     this.type = 'error';
                     this.Message = error.message;
                     this.alertSuccess = false;
                 });
             }

             async  loadStati() {

              let rc = await this. tstatopersonaService.getAll().subscribe(
                  resp => {
                        console.log('loadStati: ' + JSON.stringify(resp['data']));
                        if(resp['rc'] === 'ok') {
                          this.stati = resp['data'];
                        }
                     },
                  error => {
                       alert('sono in loadStati');
                       this.isVisible = true;
                       this.alertSuccess = false;
                       console.log('loadStati - errore: ' + error);
                       this.type = 'error';
                       this.Message = error.message;
                       this.alertSuccess = false;
                   });
               }




 async conferma() {
   console.log('conferma - fase: ' + this.fase);

   switch (this.fase)  {
       case 'N':
         let rc = await  this.personaService.createPersona(this.persona).subscribe(
         res => {
               this.persona = res['data'];
               this.type = 'success';
               this.Message =  res['message'];                               //'utente  creato con successo';
               this.alertSuccess = true;
            },
           error => {
              console.log(error);
              this.type = 'error';
              this.Message = error.message;
              this.alertSuccess = false;
           });
         break;
     case 'M':

     console.log(`Persona-detail -- conferma (upd) : ${JSON.stringify(this.persona)}`);


     let rc1 = this.personaService.updatePersona(this.persona).subscribe(
         res => {
               this.persona = res['data'];
               this.type = 'success';
               this.Message = res['message'];          //'utente aggiornato con successo del cazzo';
               this.alertSuccess = true;
               this.router.navigate(['/persona']);
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

 reset() {
   switch (this.fase)  {
       case 'N':
       this.persona = new Persona();
       this.type = 'success';
       this.Message = 'Inserire i dati della Persona';
       this.alertSuccess = true;
       break;
     case 'M':
       this.personaService.getPersona(this.persona.id).subscribe(
       res => {
             this.persona = res['data'];
             this.type = 'success';
             this.Message = 'situazione attuale Persona';
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
   this.router.navigate(['persona']);
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
      this.cancellaUser(this.persona);
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


cancellaUser(persona: Persona) {

  this.personaService.deletePersona(persona).subscribe(
      response => {
        if(response['ok']) {
          this.isVisible = true;
          this.alertSuccess = true;
          this.type = 'success';
          this.Message = 'Persona cancellata correttamente';
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


changeServizio(e) {

  this.persona.inServizio = e.target.value;
  if(this.persona.inServizio === 'S') {
    this.statoServizio = 'Impostazione ATTIVA';
  }
  if(this.persona.inServizio === 'N') {
   this.statoServizio = 'Impostazione Disattiva';
  }
}



onSelectedTitolo(selectedValue: number) {
  //  alert('selezionato: ' + selectedValue);
   if(selectedValue ===  0) {
     this.type = 'error';
     this.Message = 'selezione non corrette';
     this.showNotification(this.type, this.Message);
     this.alertSuccess = false;
     this.isVisible = true;
     return;
  } else {
   this.selectedTitolo = selectedValue;
  }

}

onSelectedStato(selectedValue: number) {
  //  alert('selezionato: ' + selectedValue);
   if(selectedValue ===  0) {
     this.type = 'error';
     this.Message = 'selezione non corrette';
     this.showNotification(this.type, this.Message);
     this.alertSuccess = false;
     this.isVisible = true;
     return;
  } else {
   this.selectedStato = selectedValue;
  }

}

onSelectedRuolo(selectedValue: number) {
  //  alert('selezionato: ' + selectedValue);
   if(selectedValue ===  0) {
     this.type = 'error';
     this.Message = 'selezione non corrette';
     this.showNotification(this.type, this.Message);
     this.alertSuccess = false;
     this.isVisible = true;
     return;
  } else {
   this.selectedRuolo = selectedValue;
  }

}






 // --------------   metodi per upload

 selectFile(event: any): void {
  this.selectedFiles = event.target.files;
  console.log('selectfile - nome file: ' + JSON.stringify(this.selectedFiles));
}

upload(): void {
  this.progress = 0;

  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);
    console.log('.............................................. upload - file pronto per upload in backend: ' + file.name);


    if (file) {
      this.persona.photo = file.name;   // salvo su record il nome del file selezionato
      this.folderImage = 'personas';    // imposto la cartella in cui passare
      this.currentFile = file;

      this.uploadService.upload(this.currentFile, this.folderImage).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.messageimage = event.body.message;
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        (err: any) => {
          console.log(err);
          this.progress = 0;

          if (err.error && err.error.message) {
            this.messageimage = err.error.message;
          } else {
            this.messageimage = 'Could not upload the file!';
          }

          this.currentFile = undefined;
        });
    }

    this.selectedFiles = undefined;
  }
}









}

