import { Component, OnInit } from '@angular/core';
import { faPlusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';

// service
import { ManifestazioneService } from '../../../services/manifestazione.service';
import { GiornataService } from './../../../services/giornata.service';
import { CtrfuncService } from '../../../services/ctrfunc.service';
// classi
import { Manifestazione} from '../../../classes/Manifestazione';
import { Abilfunctione} from '../../../classes/Abilfunctione';
import { Giornata} from '../../../classes/Giornata';

// per gestire la notifica esito
import { NotifierService } from 'angular-notifier';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// grafico
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-manifestazione-detail-day-graph',
  templateUrl: './manifestazione-detail-day-graph.component.html',
  styleUrls: ['./manifestazione-detail-day-graph.component.css']
})
export class ManifestazioneDetailDayGraphComponent implements OnInit {

  public isVisible = false;
  public alertSuccess = false;

  public manif: Manifestazione;
  public giornate: Giornata[] = [];
  public giornatenull: Giornata[] = [];
  public abilfunctione: Abilfunctione;

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


  public title = "Situazione Grafica Manifestazione";
  public trovatoRec = false;
  public nRec = 0;
  // icone
  faPlusSquare = faPlusSquare;
  faSearch = faSearch;

  public tipoRichiesta = '?';
  public validSearch = false;
  public stato = 0;

 options = [
    'incassi',
    'importi',
    'volumi'
  ];

  options1 = [
    'pie',
    'line',
    'bar',
    'doughnut'
  ];


  public searchText = '';
  // per paginazone
  p = 1;

  public rotta = '';
  public rottaId = 0;
  public level = 0;
  public enabledFunc = false;
  public ruoloSearch = 0;
  public functionUrl = '';
  public searchEdits = 'Edits';

  // array per editazione grafica

  public utentiA: any[] = [];
  public commandeA: any[] = [];
  public nettoA: any[] = [];
  public impCommandeA: any[] = [];
  public impCopertoA: any[] = [];
  public dayA: any[] = [];

  chart: any = [];
  chart1: any = [];
  chart2: any = [];

   public selez1 = false;
   public selez2 = false;
   public selez3 = false;

  constructor(public modalService: NgbModal,
              private ctrfuncService: CtrfuncService,
              private manifestazioneService: ManifestazioneService,
              private giornataService: GiornataService,
              private route: ActivatedRoute,
              private router: Router,
              private notifier: NotifierService) {
                  this.notifier = notifier;
                  Chart.register(...registerables);
              }

              ngOnInit(): void {

                console.log('giornata-detail-Bilancio - sono in oninit ');

                this.checkFunctionbylevel();

              }

              checkFunctionbylevel() {
                //  ----- parte comune a tutti i moduli
               this.rotta = this.route.snapshot.url[0].path;
               this.level = parseInt(localStorage.getItem('user_ruolo'));
               this.functionUrl = this.route.snapshot.url[1].path;

               if(this.route.snapshot.url[1].path !== 'new') {
                 this.rottaId =  parseInt(this.route.snapshot.url[3].path);
                } else {
                 this.rottaId =  0;
                }

               console.log('frontend ----------------  checkFunctionbylevel -- step_01 rotta ' + this.rotta + ' rottaId ' + this.rottaId + ' functionUrl ' + this.functionUrl);

               // variante rispetto allo standard di modello

               if(this.functionUrl === 'grafico') {
                 this.loadManif(this.rottaId);
                 this.loadGiornatebyChart(this.rottaId);
                 this.functionUser = this.searchEdits;  // forzo la funzione per la gestione dei record sul figlio

                 this.title = 'Situazione Grafico Manifestazione - manifestazione-detail-day-graphj works!';

                 this.type = 'success';
                 this.showNotification(this.type, this.Message);
                 return;
               }

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
                      this.showNotification(this.type, this.Message);
                    });
               }


// load giornate

async loadGiornatebyChart(id: number) {
  console.log('Grapf - onInit - appena entrato');
  let rc =  await this.giornataService.getforChart(id).subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']




          this.utentiA = response['utenti'];
          this.commandeA = response['commande'];
          this.nettoA = response['netto'];
          this.impCommandeA = response['impCommande'];

          this.impCopertoA = response['impCoperto'];
          this.dayA = response['day'];

          this.giornate = response['data'];
          this.nRec = response['number'];



          console.log('utenti in formato array: ' + JSON.stringify(this.utentiA));
          console.log('commande in formato array: ' + JSON.stringify(this.commandeA));
          console.log('netto in formato array: ' + JSON.stringify(this.nettoA));
          console.log('impCommande in formato array: ' + JSON.stringify(this.impCommandeA));
          console.log('impCoperto in formato array: ' + JSON.stringify(this.impCopertoA));
          console.log('day in formato array: ' + JSON.stringify(this.dayA));

          console.log('----- altri dati -----------------: ');
          console.log('giornate: ' + JSON.stringify(this.giornate));
          console.log('nRec: ' + JSON.stringify(this.nRec));






          /*
          console.log('prezzo in formato array: ' + JSON.stringify(this.prezzoA));
          console.log('id in formato array: ' + JSON.stringify(this.idA));
          console.log('descrizione in formato array: ' + JSON.stringify(this.descrizioneA));   */



          this.selez1 = true;
          // show Chart
          this.chart = new Chart('canvas' , {
            type: 'bar',
            data: {
              labels: this.dayA,
              datasets: [{
                  label: 'utile per Serata',
                  data: this.nettoA,
                  borderWidth: 2,
                 // fill: false,
                //  backgroundColor: 'rgba(93,175,89,0.1)',
                backgroundColor:  [
                  'rgba(255, 160, 122, 1 )',
                  'rgba(144, 238, 144, 1)',
                  'rgba(32, 178, 170, 1 )',
                  'rgba(255, 250, 205, 1)',
                  'rgba(255, 105, 180, 1 )',
                  'rgba(173, 255, 47, 1)',
                  'rgba(255, 69, 0, 1)',
                  'rgba( 255, 165, 0, 1 )',
                  'rgba(219, 112, 147, 1)',
                  'rgba(221, 160, 221, 1)',
                  'rgba(46, 139, 87, 1 )',

              ],
                  borderColor: '#3e95cd'
              }]
          },

          options: {
            indexAxis: 'y',
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each horizontal bar to be 2px wide
            elements: {
              bar: {
                borderWidth: 2,
              }
            },
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                text: 'Situazione Incasso netto Manifestazione'
              }
            }
          },

           });

          // show Chart1
          this.chart1 = new Chart('canvas1' , {
            type: 'bar',
            data: {
              labels: this.dayA,
              datasets: [{
                  label: 'Utenti',
                  data: this.utentiA,
                  borderWidth: 2,
                 // fill: false,
                //  backgroundColor: 'rgba(93,175,89,0.1)',
                backgroundColor:  [
                  'rgba(255, 160, 122, 1 )',
                  'rgba(144, 238, 144, 1)',
                  'rgba(32, 178, 170, 1 )',
                  'rgba(255, 250, 205, 1)',
                  'rgba(255, 105, 180, 1 )',
                  'rgba(173, 255, 47, 1)',
                  'rgba(255, 69, 0, 1)',
                  'rgba( 255, 165, 0, 1 )',
                  'rgba(219, 112, 147, 1)',
                  'rgba(221, 160, 221, 1)',
                  'rgba(46, 139, 87, 1 )',

              ],
                  borderColor: '#3e95cd'
              },
              {
                label: 'Commande',
                data: this.commandeA,
                borderWidth: 2,
               // fill: false,
              //  backgroundColor: 'rgba(93,175,89,0.1)',
              backgroundColor:  [
                'rgba(173, 255, 47, 1)',
                'rgba(221, 160, 221, 1)',
                'rgba(255, 69, 0, 1)',
                'rgba(46, 139, 87, 1 )',
                'rgba(255, 250, 205, 1)',
                'rgba(255, 160, 122, 1 )',
                'rgba(32, 178, 170, 1 )',
                'rgba(219, 112, 147, 1)',
                'rgba(144, 238, 144, 1)',
                'rgba( 255, 165, 0, 1 )',
                'rgba(255, 105, 180, 1 )',
            ],
                borderColor: '#3e95cd'
            }]
          },

          options: {
            indexAxis: 'y',
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each horizontal bar to be 2px wide
            elements: {
              bar: {
                borderWidth: 2,
              }
            },
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                text: 'Situazione Persone / Commande '
              }
            }
          },

         });
          this.chart2 = new Chart('canvas2' , {
          type: 'bar',
          data: {
            labels: this.dayA,
            datasets: [{
                label: 'Imp. Commande',
                data: this.impCommandeA,
                borderWidth: 2,
               // fill: false,
              //  backgroundColor: 'rgba(93,175,89,0.1)',
              backgroundColor:  [
                'rgba(255, 160, 122, 1 )',
                'rgba(144, 238, 144, 1)',
                'rgba(32, 178, 170, 1 )',
                'rgba(255, 250, 205, 1)',
                'rgba(255, 105, 180, 1 )',
                'rgba(173, 255, 47, 1)',
                'rgba(255, 69, 0, 1)',
                'rgba( 255, 165, 0, 1 )',
                'rgba(219, 112, 147, 1)',
                'rgba(221, 160, 221, 1)',
                'rgba(46, 139, 87, 1 )',

            ],
                borderColor: '#3e95cd'
            },
            {
              label: 'Imp. Coperto',
              data: this.impCopertoA,
              borderWidth: 2,
             // fill: false,
            //  backgroundColor: 'rgba(93,175,89,0.1)',
            backgroundColor:  [
              'rgba(173, 255, 47, 1)',
              'rgba(221, 160, 221, 1)',
              'rgba(255, 69, 0, 1)',
              'rgba(46, 139, 87, 1 )',
              'rgba(255, 250, 205, 1)',
              'rgba(255, 160, 122, 1 )',
              'rgba(32, 178, 170, 1 )',
              'rgba(219, 112, 147, 1)',
              'rgba(144, 238, 144, 1)',
              'rgba( 255, 165, 0, 1 )',
              'rgba(255, 105, 180, 1 )',
          ],
              borderColor: '#3e95cd'
          }]
        },

        options: {
          indexAxis: 'y',
          // Elements options apply to all of the options unless overridden in a dataset
          // In this case, we are setting the border of each horizontal bar to be 2px wide
          elements: {
            bar: {
              borderWidth: 2,
            }
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Situazione Importi Commande / Coperto'
            }
          }
        },

       });



     }
    },
    error =>
    {
     this.Message = error.message;
     this.alertSuccess = false;
     console.log(error);
    });

 }

/*
 loaddatiforChart() {

  console.log('Grapf - onInit - appena entrato');
  let rc =  await this.prodottoService.dailyForecast().subscribe(
    response => {
        if(response['rc'] === 'ok') {            //  response['success']
          this.qtaA = response['qta'];
          this.prezzoA = response['prezzo'];
          this.idA = response['id'];
          this.descrizioneA = response['descrizione'];
          console.log('qta in formato array: ' + JSON.stringify(this.qtaA));
          console.log('prezzo in formato array: ' + JSON.stringify(this.prezzoA));
          console.log('id in formato array: ' + JSON.stringify(this.idA));
          console.log('descrizione in formato array: ' + JSON.stringify(this.descrizioneA));

          // show Chart
          this.chart = new Chart('canvas' , {
            type: 'pie',
            data: {
              labels: this.descrizioneA,
              datasets: [{
                  label: 'Qta vendute dei Prodotti',
                  data: this.qtaA,
                  borderWidth: 2,
                 // fill: false,
                //  backgroundColor: 'rgba(93,175,89,0.1)',
                backgroundColor:  [
                  'rgba(255, 160, 122, 1 )',
                  'rgba(144, 238, 144, 1)',
                  'rgba(32, 178, 170, 1 )',
                  'rgba(255, 250, 205, 1)',
                  'rgba(255, 105, 180, 1 )',
                  'rgba(173, 255, 47, 1)',
                  'rgba(255, 69, 0, 1)',
                  'rgba( 255, 165, 0, 1 )',
                  'rgba(219, 112, 147, 1)',
                  'rgba(221, 160, 221, 1)',
                  'rgba(46, 139, 87, 1 )',

              ],
                  borderColor: '#3e95cd'
              },
              {
                label: 'Commande ',
                data: this.commandeA,
                borderWidth: 2,
               // fill: false,
              //  backgroundColor: 'rgba(93,175,89,0.1)',
              backgroundColor:  [
                'rgba(255, 160, 122, 1 )',
                'rgba(144, 238, 144, 1)',
                'rgba(32, 178, 170, 1 )',
                'rgba(255, 250, 205, 1)',
                'rgba(255, 105, 180, 1 )',
                'rgba(173, 255, 47, 1)',
                'rgba(255, 69, 0, 1)',
                'rgba( 255, 165, 0, 1 )',
                'rgba(219, 112, 147, 1)',
                'rgba(221, 160, 221, 1)',
                'rgba(46, 139, 87, 1 )',

            ],
                borderColor: '#3e95cd'
            }]
          },

          options: {
            indexAxis: 'y',
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each horizontal bar to be 2px wide
            elements: {
              bar: {
                borderWidth: 2,
              }
            },
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                text: 'Grafico andamento vendita Prodotti'
              }
            }
          },

      });





     }
    },
    error =>
    {
     this.Message = error.message;
     this.alertSuccess = false;
     console.log(error);
    });






 }


*/







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


     onSelectionChange(tipo: string)   {

      this.validSearch = true;
/*
      if(this.tipoRichiesta === '?') {
          this.validSearch = false;
          alert('effettuare prima la selezione del ruolo ,\n ricerca non possibile');
          return;
        }
*/
        console.log('onSelectionChange - tipo: ' + tipo);

      switch (tipo) {
                  case 'incassi':
                      this.selez2 = false;
                      this.selez3 = false;
                      this.selez1 = true;
                      this.graficoIncassiStd();
                      break;
                  case 'importi':
                      this.selez1 = false;
                      this.selez3 = false;
                      this.selez2 = true;
                      this.graficoImportiStd();
                      break;
                  case 'volumi':
                      this.selez1 = false;
                      this.selez2 = false;
                      this.selez3 = true;
                      break;
                  default:
                  alert('Scelta errata \n ricerca non possibile');
                  break;
         }

      }


      onSelectionChange1(tipo: string)  {
        alert('onSelectionCgange1 - da fare');
      }

      graficoIncassiStd()  {
                  this.chart.destroy();
                  // show Chart
                  this.chart = new Chart('canvas' , {
                    type: 'bar',
                    data: {
                      labels: this.dayA,
                      datasets: [{
                          label: 'utile per Serata',
                          data: this.nettoA,
                          borderWidth: 2,
                         // fill: false,
                        //  backgroundColor: 'rgba(93,175,89,0.1)',
                        backgroundColor:  [
                          'rgba(255, 160, 122, 1 )',
                          'rgba(144, 238, 144, 1)',
                          'rgba(32, 178, 170, 1 )',
                          'rgba(255, 250, 205, 1)',
                          'rgba(255, 105, 180, 1 )',
                          'rgba(173, 255, 47, 1)',
                          'rgba(255, 69, 0, 1)',
                          'rgba( 255, 165, 0, 1 )',
                          'rgba(219, 112, 147, 1)',
                          'rgba(221, 160, 221, 1)',
                          'rgba(46, 139, 87, 1 )',

                      ],
                          borderColor: '#3e95cd'
                      }]
                  },

                  options: {
                    indexAxis: 'y',
                    // Elements options apply to all of the options unless overridden in a dataset
                    // In this case, we are setting the border of each horizontal bar to be 2px wide
                    elements: {
                      bar: {
                        borderWidth: 2,
                      }
                    },
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'right',
                      },
                      title: {
                        display: true,
                        text: 'Grafico andamento vendita Prodotti'
                      }
                    }
                  },

              });

      }









      graficoImportiStd() {

        this.chart1.destroy();

        this.chart1 = new Chart('canvas1' , {
          type: 'bar',
          data: {
            labels: this.utentiA,
            datasets: [{
                label: 'utenti presenti',
                data: this.nettoA,
                borderWidth: 2,
               // fill: false,
              //  backgroundColor: 'rgba(93,175,89,0.1)',
              backgroundColor:  [
                'rgba(255, 160, 122, 1 )',
                'rgba(144, 238, 144, 1)',
                'rgba(32, 178, 170, 1 )',
                'rgba(255, 250, 205, 1)',
                'rgba(255, 105, 180, 1 )',
                'rgba(173, 255, 47, 1)',
                'rgba(255, 69, 0, 1)',
                'rgba( 255, 165, 0, 1 )',
                'rgba(219, 112, 147, 1)',
                'rgba(221, 160, 221, 1)',
                'rgba(46, 139, 87, 1 )',

            ],
                borderColor: '#3e95cd'
            },
            {
              label: 'Commande emesse',
              data: this.commandeA,
              borderWidth: 2,
             // fill: false,
            //  backgroundColor: 'rgba(93,175,89,0.1)',
            backgroundColor:  [
              'rgba(255, 105, 180, 1 )',
              'rgba( 255, 165, 0, 1 )',
              'rgba(32, 178, 170, 1 )',
              'rgba(255, 250, 205, 1)',
              'rgba(255, 69, 0, 1)',
              'rgba(144, 238, 144, 1)',
              'rgba(255, 160, 122, 1 )',
              'rgba(221, 160, 221, 1)',
              'rgba(46, 139, 87, 1 )',
              'rgba(173, 255, 47, 1)',
              'rgba(219, 112, 147, 1)',
          ],
              borderColor: '#ffccfe'
          }]
        },

        options: {
          indexAxis: 'y',
          // Elements options apply to all of the options unless overridden in a dataset
          // In this case, we are setting the border of each horizontal bar to be 2px wide
          elements: {
            bar: {
              borderWidth: 2,
            }
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Grafico andamento vendita Prodotti'
            }
          }
        },

    });
      }





     /*   dentro checkfuncion
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

                     if(this.functionNew) {
                       this.manif = new Manifestazione();
                       this.manif.key_utenti_operation = +localStorage.getItem('id');
                       this.title = 'Inserimento Manifestazione';
                       this.fase = 'N';
                       this.Message = `Inserire i dati del fornitore`;
                     } else {
                         this.route.paramMap.subscribe(p => {
                           this.idManif = +p.get('id');
                           console.log('id recuperato: ' + this.idManif);
                           // -------  leggo i dati della giornata

                           this.loadManif(this.idManif);
                           this.loadEntrate(this.idManif);
                           this.LoadSpese(this.idManif);
                           if(this.functionEdit || this.functionEdits) {
                             this.title = 'Aggiornamento Spese Fornitore';
                             this.fase = 'M';
                            } else {
                             this.title = 'Visualizzazione Spese Fornitore';
                             this.fase = 'I';
                            }
                           this.Message = 'Situazione Attuale Spese Fornitore';
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
                       this.Message = 'Errore cancellazione Spese Fornitore' + '\n' + error.message;
                       this.showNotification(this.type, this.Message);
                       console.log(error);
                     });

              }
  */


}



