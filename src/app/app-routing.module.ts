import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// service
import { RouteGuardService } from './services/route-guard.service';
// componenti utente
import { LoginComponent } from './components/security/login/login.component';
import { RegistrazioneComponent } from './components/security/registrazione/registrazione.component';
import { UsersComponent } from './components/users/users/users.component';
<<<<<<< HEAD

=======
>>>>>>> d8eac67 (registrazione corretta)
import { SignupComponent } from './components/security/signup/signup.component';
import { SignupConfermeComponent } from './components/security/signup-conferme/signup-conferme.component';
import { ForgotPasswordComponent } from './components/security/forgotPassword/forgot-password/forgot-password.component';
import { ForgotPasswordConfermeComponent } from './components/security/forgotPassword/forgot-password-conferme/forgot-password-conferme.component';
import { ChangePasswordNewUserComponent } from './components/security/change-password-new-user/change-password-new-user.component';
import { ChangePasswordConfermeComponent } from './components/security/changePassword/change-password-conferme/change-password-conferme.component';
import { ChangePasswordComponent } from './components/security/changePassword/change-password/change-password.component';
import { Page404Component } from './components/page404/page404.component';
<<<<<<< HEAD
import { AbilitazioniComponent } from './components/abilitazionis/abilitazioni/abilitazioni.component';
import { AbilitazioneDetailComponent } from './components/abilitazionis/abilitazione-detail/abilitazione-detail.component';
import { HomeComponent } from './components/home/home.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ManifestazioniComponent } from './components/manifestaziones/manifestazioni/manifestazioni.component';

import { AbilfunctioniComponent } from './components/abilfunctions/abilfunctioni/abilfunctioni.component';
import { ModuliComponent } from './components/modulis/moduli/moduli.component';
import { ModuloDetailComponent } from './components/modulis/modulo-detail/modulo-detail.component';
import { AbilitazioniDetailComponent } from './components/abilitazionis/abilitazioni-detail/abilitazioni-detail.component';
import { AbilfunctioneDetailComponent } from './components/abilfunctions/abilfunctione-detail/abilfunctione-detail.component';
// import { UserDetail1Component } from './components/users/user-detail1/user-detail1.component';  // test
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { ManifestazioneDaysComponent } from './components/manifestaziones/manifestazione-days/manifestazione-days.component';
import { ManifestazioneDetailComponent } from './components/manifestaziones/manifestazione-detail/manifestazione-detail.component';
import { GiornataDetailComponent } from './components/giornatas/giornata-detail/giornata-detail.component';
import { GiornataDetailInfoComponent } from './components/giornatas/giornata-detail-info/giornata-detail-info.component';
import { GiornataDetailCassaComponent } from './components/giornatas/giornata-detail-cassa/giornata-detail-cassa.component';
import { GiornataCassaComponent } from './components/giornatas/giornata-cassa/giornata-cassa.component';
import { GiornataDetailProdottiComponent } from './components/giornatas/giornata-detail-prodotti/giornata-detail-prodotti.component';
import { ProdottoDetailMenuComponent } from './components/prodottos/prodotto-detail-menu/prodotto-detail-menu.component';
import { GiornataDetailPersoneComponent } from './components/giornatas/giornata-detail-persone/giornata-detail-persone.component';
import { PersonaDetailRuoloComponent } from './components/personas/persona-detail-ruolo/persona-detail-ruolo.component';
import { GiornataDetailCommandeComponent } from './components/commandas/giornata-detail-commande/giornata-detail-commande.component';
import { CommandaDetailComponent } from './components/commandas/commanda-detail/commanda-detail.component';
import { CommandaRegistrazioneAnagraficaComponent } from './components/commandas/commanda-registrazione-anagrafica/commanda-registrazione-anagrafica.component';
import { CommandaRegistrazioneProdottiComponent } from './components/commandas/commanda-registrazione-prodotti/commanda-registrazione-prodotti.component';
import { CommandaRegistrazioneCassaComponent } from './components/commandas/commanda-registrazione-cassa/commanda-registrazione-cassa.component';
import { GiornataDetailCassa1Component } from './components/giornatas/giornata-detail-cassa1/giornata-detail-cassa1.component';
import { CommandaPreviewComponent } from './components/commandas/commanda-preview/commanda-preview.component';
import { GestioneComponent } from './components/gestioneCucinaBevande/gestione/gestione.component';
import { CommandeComponent } from './components/commandas/commande/commande.component';
import { RequestPrenotazioneComponent } from './components/prenotaziones/prenotazione/request-prenotazione/request-prenotazione.component';
import { ResponsePrenotazioneComponent } from './components/prenotaziones/prenotazione/response-prenotazione/response-prenotazione.component';
import { PrenotazioniComponent } from './components/prenotaziones/prenotazione/prenotazioni/prenotazioni.component';
import { ProdottiComponent } from './components/prodottos/prodotti/prodotti.component';
import { ProdottoDetailComponent } from './components/prodottos/prodotto-detail/prodotto-detail.component';
import { FornitoriComponent } from './components/fornitores/fornitori/fornitori.component';
import { FornitoreDetailComponent } from './components/fornitores/fornitore-detail/fornitore-detail.component';
import { FornitoreDetailSpeseComponent } from './components/fornitores/fornitore-detail-spese/fornitore-detail-spese.component';
import { SpesaComponent } from './components/speses/spesa/spesa.component';
import { SpesaDetailComponent } from './components/speses/spesa-detail/spesa-detail.component';
import { SpeseComponent } from './components/speses/spese/spese.component';
import { ManifestazioneDetailBilancioComponent } from './components/manifestaziones/manifestazione-detail-bilancio/manifestazione-detail-bilancio.component';
import { PersoneComponent } from './components/personas/persone/persone.component';
import { PersonaDetailComponent } from './components/personas/persona-detail/persona-detail.component';
import { ManifestazioneDetailDayGraphComponent } from './components/manifestaziones/manifestazione-detail-day-graph/manifestazione-detail-day-graph.component';
import { InfoPrenotazioneComponent } from './components/prenotaziones/info-prenotazione/info-prenotazione.component';
import { TabelleComponent } from './components/tabelles/tabelle/tabelle.component';
=======
import { HomeComponent } from './components/home/home.component';
// import { UserDetail1Component } from './components/users/user-detail1/user-detail1.component';  // test
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { TabelleComponent } from './components/tabelles/tabelle/tabelle.component';
import { AbilitazioneComponent } from './components/security/abilitazione/abilitazione.component';
import { TestuploadComponent } from './components/testupload/testupload.component';
import { ManifestazioniComponent } from './components/manifestaziones/manifestazioni/manifestazioni.component';
import { ManifestazioneDetailComponent } from './components/manifestaziones/manifestazione-detail/manifestazione-detail.component';
import { GiornateComponent } from './components/giornatas/giornate/giornate.component';
import { GiornataDetailComponent } from './components/giornatas/giornata-detail/giornata-detail.component';
import { PrenotazioniComponent } from './components/prenotaziones/prenotazioni/prenotazioni.component';
import { RequestPrenotazioneComponent } from './components/prenotaziones/prenotazione/request-prenotazione/request-prenotazione.component';
import { ResponsePrenotazioneComponent } from './components/prenotaziones/prenotazione/response-prenotazione/response-prenotazione.component';
import { RequestPrenotazione1Component } from './components/prenotaziones/prenotazione/request-prenotazione1/request-prenotazione1.component';
import { Prenotazioni1Component } from './components/prenotaziones/prenotazioni1/prenotazioni1.component';
import { GiornataDetailProdottiComponent } from './components/giornatas/giornata-detail-prodotti/giornata-detail-prodotti.component';
import { GiornataDetailPersoneComponent } from './components/giornatas/giornata-detail-persone/giornata-detail-persone.component';
import { VolontariComponent } from './components/volontaris/volontari/volontari.component';
import { VolontarioDetailComponent } from './components/volontaris/volontario-detail/volontario-detail.component';
import { CassasinteticaDetailComponent } from './components/cassasinteticas/cassasintetica-detail/cassasintetica-detail.component';
import { GiornateDashboardComponent } from './components/giornatas/giornate-dashboard/giornate-dashboard.component';
import { CommandaRegistrazioneAnagraficaComponent } from './components/commandas/commanda-registrazione-anagrafica/commanda-registrazione-anagrafica.component';
import { CommandaRegistrazioneComponent } from './components/commandas/commanda-registrazione/commanda-registrazione.component';
import { CommandaRegistrazioneProdottiComponent } from './components/commandas/commanda-registrazione-prodotti/commanda-registrazione-prodotti.component';
import { GiornataCassaEditComponent } from './components/giornatas/giornata-cassa-edit/giornata-cassa-edit.component';
import { CommandaRegistrazioneCassaComponent } from './components/commandas/commanda-registrazione-cassa/commanda-registrazione-cassa.component';
import { CommandaPreviewComponent } from './components/commandas/commanda-preview/commanda-preview.component';
import { CommandaGestioneComponent } from './components/commandas/commanda-gestione/commanda-gestione.component';

>>>>>>> d8eac67 (registrazione corretta)

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrazioneComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signupConferme',
    component: SignupConfermeComponent
  },
<<<<<<< HEAD

=======
>>>>>>> d8eac67 (registrazione corretta)
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'forgotpasswordConferme',
    component: ForgotPasswordConfermeComponent
  },
<<<<<<< HEAD
  {
    path: 'jumbotron',
    component: JumbotronComponent
  },

  {
    path: 'giornata/inqu/:id/:idManif',
    component: GiornataDetailComponent
  },
  {
    path: 'giornata/edit/:id/:idManif',
    component: GiornataDetailComponent
  },
  {
    path: 'giornata/edits/:id/:idManif',
    component: GiornataDetailComponent
  },
  {
    path: 'giornata/new/:idManif',
    component: GiornataDetailComponent
  },
// dettaglio giornata della manifestazione  -- dettaglio Info
{
  path: 'giornata/Info/Inqu/:id/:idManif',
  component: GiornataDetailInfoComponent
},
{
  path: 'giornata/Info/Edit/:id/:idManif',
  component: GiornataDetailInfoComponent
},
{
  path: 'giornata/Info/Edits/:id/:idManif',
  component: GiornataDetailInfoComponent
},
// dettaglio giornata della manifestazione  -- dettaglio Cassa
{
  path: 'giornata/Cassa/Inqu/:id/:idManif',
  component: GiornataDetailCassaComponent
},
{
  path: 'giornata/Cassa/Edit/:id/:idManif',
  component: GiornataDetailCassaComponent
},
{
  path: 'giornata/Cassa/Edits/:id/:idManif',
  component: GiornataDetailCassaComponent
},


// dettaglio giornata della manifestazione  -- dettaglio Cassa1  nuova versione col elenco
{
  path: 'giornata/Cassa1/Inqu/:id/:idManif',
  component: GiornataDetailCassa1Component
},
{
  path: 'giornata/Cassa1/Edit/:id/:idManif',
  component: GiornataDetailCassa1Component
},
{
  path: 'giornata/Cassa1/Edits/:id/:idManif',
  component: GiornataDetailCassa1Component
},



// dettaglio giornata della manifestazione  -- dettaglio Prodotti
{
  path: 'giornata/Prod/Inqu/:id/:idManif',
  component: GiornataDetailProdottiComponent
},
{
  path: 'giornata/Prod/Edit/:id/:idManif',
  component: GiornataDetailProdottiComponent
},
{
  path: 'giornata/Prod/Edits/:id/:idManif',
  component: GiornataDetailProdottiComponent
},
// dettaglio giornata della manifestazione  -- dettaglio Persone
{
  path: 'giornata/Pers/Inqu/:id/:idManif',
  component: GiornataDetailPersoneComponent
},
{
  path: 'giornata/Pers/Edit/:id/:idManif',
  component:  GiornataDetailPersoneComponent
},
{
  path: 'giornata/Pers/Edits/:id/:idManif',
  component:  GiornataDetailPersoneComponent
},
// dettaglio giornata della manifestazione  -- dettaglio Commande
{
  path: 'giornata/Commande/Inqu/:id/:idManif',
  component: GiornataDetailCommandeComponent
},
{
  path: 'giornata/Commande/Edit/:id/:idManif',
  component:  GiornataDetailCommandeComponent
},
{
  path: 'giornata/Commande/Edits/:id/:idManif',
  component:  GiornataDetailCommandeComponent
},

// dettagli delle varie visualizzazioni di giornata
{
  path: 'giornata/ValoriCassa/Edits/:id',
  component: GiornataCassaComponent
},
{
  path: 'giornata/ProdottiMenu/Edits/:id',
  component: ProdottoDetailMenuComponent
},
{
  path: 'giornata/PersoneRuolo/Edits/:id',
  component: PersonaDetailRuoloComponent
},
{
  path: 'giornata/Commanda/Edits/:id',
  component: CommandaDetailComponent
},
// REgistrazione Commanda - Anagrafica
{
  path: 'commanda/RegistraAnag/new/:idGiornata',
  component: CommandaRegistrazioneAnagraficaComponent
},
// REgistrazione Commanda - Prodotti
{
  path: 'commanda/RegistraProd/new/:idCommanda',
  component: CommandaRegistrazioneProdottiComponent
},
// REgistrazione Commanda - Cassa
{
  path: 'commanda/RegistraCassa/new/:idCommanda',
  component: CommandaRegistrazioneCassaComponent
},

{
  path: 'prewcommanda/:id',
  component: CommandaPreviewComponent,
 // canActivate: [RouteGuardService]
},
// -------------------------------------------------------  Prenotazioni
{
  path: 'requestConfirmPrenotazione',
   component: RequestPrenotazioneComponent
},
{
  path: 'prenotazioneConferma',
   component: ResponsePrenotazioneComponent
},
{
  path: 'prenotazione',
   component: PrenotazioniComponent,
   canActivate: [RouteGuardService]
},

{
  path: 'prenotazione/infor',
   component: InfoPrenotazioneComponent
},

// ----------------------------------------------------------------  Gestione Bevance / Cucina

{
  path: 'commanda/gestioneCucina',
  component: GestioneComponent,
 // canActivate: [RouteGuardService]
},
{
  path: 'commanda/gestioneBevande',
  component: GestioneComponent,
 // canActivate: [RouteGuardService]
},
{
  path: 'commanda',
  component: CommandeComponent
},
=======

>>>>>>> d8eac67 (registrazione corretta)
// ----------------------------------------------------------------  Tabelle
{
  path: 'tabella',
  component: TabelleComponent
},
<<<<<<< HEAD
// ----------------------------------------------------------------  Manifestazione
  {
    path: 'manif',
    component: ManifestazioniComponent
  },
  {
    path: 'manif/inqu/:id',
    component: ManifestazioneDetailComponent
  },
  {
    path: 'manif/edit/:id',
    component: ManifestazioneDetailComponent
  },
  {
    path: 'manif/edits/:id',
    component: ManifestazioneDetailComponent
  },
  {
    path: 'manif/new',
    component: ManifestazioneDetailComponent
  },
  {
    path: 'manif/:id',
    component: ManifestazioneDaysComponent
  },
  {
    path: 'manif/bilancio/:id',
    component: ManifestazioneDetailBilancioComponent
  },
  {
    path: 'manif/grafico/day/:id',
    component: ManifestazioneDetailDayGraphComponent
  },

// ------------------------------------------------------------------  Users


  {
=======
 {
>>>>>>> d8eac67 (registrazione corretta)
    path: 'users',
    component: UsersComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'users/inqu/:id',
    component: UserDetailComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'users/edit/:id',
    component:  UserDetailComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'users/edits/:id',
    component: UserDetailComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'users/new',
    component: UserDetailComponent,
    canActivate: [RouteGuardService]
  },
<<<<<<< HEAD
=======
  //  ------------------------------------------------------------------------------------ Manifestazione
  {
    path: 'manif',
    component: ManifestazioniComponent
  },
  {
    path: 'manif/edit/:id',
    component: ManifestazioneDetailComponent
  },
  {
    path: 'manif/new',
    component: ManifestazioneDetailComponent
  },
  // -------------------------------------------------------------------------  Cassa sintetica
  {
    path: 'cassasintetica/new/:id',
    component: CassasinteticaDetailComponent
  },
  {
    path: 'cassasintetica/edit/:id',
    component: CassasinteticaDetailComponent
  },
  // ---------------------------------------------------- Giornate
  {
    path: 'GiornateDashboard',
    component: GiornateDashboardComponent
  },
  {
    path: 'giornate/:idManif',
    component: GiornateComponent
  },
  {
    path: 'giornata/edit/:id/:idManif',
    component: GiornataDetailComponent
  },
  {
    path: 'giornata/new/:idManif',
    component: GiornataDetailComponent
  },
  // dettaglio giornata della manifestazione  -- dettaglio Prodotti
  {
    path: 'giornata/Prod/:id',
    component: GiornataDetailProdottiComponent
  },
  // dettaglio giornata della manifestazione  -- dettaglio Perone
  {
    path: 'giornata/Pers/:id',
    component: GiornataDetailPersoneComponent
  },
  // dettaglio cassa di giornata
  {
    path: 'giornata/CassaDett/:id',
    component: GiornataCassaEditComponent
  },


  // -------------------------------------------------------------------------------------   commanda
  {
    path: 'commanda/RegistraAnag/new/:idGiornata',
    component: CommandaRegistrazioneAnagraficaComponent
  },
  {
    path: 'commanda/Registrazione/new/:idGiornata',
    component: CommandaRegistrazioneComponent
  },
  // Registrazione Commanda - Prodotti
  {
    path: 'commanda/RegistraProd/new/:idCommanda',
    component: CommandaRegistrazioneProdottiComponent
  },
  // Registrazione Commanda - Prodotti
  {
    path: 'commanda/RegistraCassa/:idCommanda',
    component: CommandaRegistrazioneCassaComponent
  },
  {
    path: 'prewcommanda/:id',
    component: CommandaPreviewComponent,
   // canActivate: [RouteGuardService]
  },
// ----------------------------------------------------------------  Gestione Bevance / Cucina

{
  path: 'commanda/gestioneCucina/:idGiornata',
  component: CommandaGestioneComponent,
 // canActivate: [RouteGuardService]
},
{
  path: 'commanda/gestioneBevande/:idGiornata',
  component: CommandaGestioneComponent,
 // canActivate: [RouteGuardService]
},





  // -------------------------------------------------------------------------------------   Volontari
  {
    path: 'volontari',
    component: VolontariComponent
  },
  {
    path: 'volontario/new',
    component: VolontarioDetailComponent
  },
  {
    path: 'volontario/:id',
    component: VolontarioDetailComponent
  },

  // -------------------------------------------------------------------------------------   Prenotazioni
  {
    path: 'prenotazioni',
    component: PrenotazioniComponent
  },
  {
    path: 'requestConfirmPrenotazione/:id',
     component: RequestPrenotazioneComponent
  },
  {
    path: 'requestConfirmPrenotazione1/:idday/:id',
     component: RequestPrenotazione1Component
  },
  {
    path: 'prenotazioneConferma',
     component: ResponsePrenotazioneComponent
  },
  {                                  // prenotazioni di giornata
    path: 'PrenotazionidelGiorno/:id',
     component: Prenotazioni1Component
  },
  // -------------------------------------------------------------------------------------   abilitazione
  {
    path: 'users/abil/:id',
    component: AbilitazioneComponent,
    canActivate: [RouteGuardService]
  },
>>>>>>> d8eac67 (registrazione corretta)
  {
    path: 'chgpswnuwuser',
    component: ChangePasswordNewUserComponent
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent
  },
  {
    path: 'changepasswordConferme',
    component: ChangePasswordConfermeComponent
  },
  {
    path: 'page404',
    component: Page404Component
  },
<<<<<<< HEAD
  // ----------------------------------------------------------------- Spese
  {
    path: 'spesa',
    component: SpeseComponent
  },
  {
    path: 'spesa/newf/:id',
    component: SpesaDetailComponent
  },
  {
    path: 'spesa/new',
    component: SpesaDetailComponent
  },
  {
    path: 'spesa/edits/:id',
    component: SpesaDetailComponent
  },
  // ----------------------------------------------------------------- Fornitori
  {
    path: 'fornitore',
    component: FornitoriComponent
  },
  {
    path: 'fornitore/new',
    component: FornitoreDetailComponent
  },
  {
    path: 'fornitore/edits/:id',
    component: FornitoreDetailComponent
  },
  {
    path: 'fornitore/edit/:id',
    component: FornitoreDetailComponent
  },
  {
    path: 'fornitore/inqu/:id',
    component: FornitoreDetailComponent
  },
  {
    path: 'fornitore/spese/:id',
    component: FornitoreDetailSpeseComponent
  },
  // ----------------------------------------------------------------- Prodotti
  {
    path: 'prodotto',
    component: ProdottiComponent
  },
  {
    path: 'prodotto/new',
    component: ProdottoDetailComponent
  },
  {
    path: 'prodotto/edits/:id',
    component: ProdottoDetailComponent
  },
  {
    path: 'prodotto/edit/:id',
    component: ProdottoDetailComponent
  },
  {
    path: 'prodotto/inqu/:id',
    component: ProdottoDetailComponent
  },
  // ----------------------------------------------------------------- Persona
  {
    path: 'persona',
    component: PersoneComponent
  },
  {
    path: 'persona/inqu/:id',
    component: PersonaDetailComponent
  },
  {
    path: 'persona/edit/:id',
    component: PersonaDetailComponent
  },
  {
    path: 'persona/edits/:id',
    component: PersonaDetailComponent
  },
  {
    path: 'persona/new',
    component: PersonaDetailComponent
  },
 // ---------------------------------------------------------------------- Moduli
  {
    path: 'modulis',
    component: ModuliComponent
  },
  {
    path: 'modulis/inqu/:id',
    component: ModuloDetailComponent
  },
  {
    path: 'modulis/edit/:id',
    component: ModuloDetailComponent
  },
  {
    path: 'modulis/edits/:id',
    component: ModuloDetailComponent
  },
  {
    path: 'modulis/new',
    component: ModuloDetailComponent
  },



  // abilitazioni per livello -----------------------
  {
    path: 'abilfunctione',
    component: AbilfunctioniComponent
  },
  {
    path: 'abilfunctione/edits/:id',
    component: AbilfunctioneDetailComponent
  },
  {
    path: 'abilitaziones/:id',
    component: AbilitazioniComponent
  },
  {
    path: 'abilitaziones/:id/edit',
    component: AbilitazioneDetailComponent
  },
  {
    path: 'abilitazioni',
    component: AbilitazioniDetailComponent
  },
=======
>>>>>>> d8eac67 (registrazione corretta)
  {
    path: 'home',
    component: HomeComponent
  },
<<<<<<< HEAD
  {
    path: '',
    redirectTo: 'jumbotron',  //home   // login
=======

  {
    path: 'testupload',
    component: TestuploadComponent
  },
  {
    path: '',
    redirectTo: 'home',  //home   // login
>>>>>>> d8eac67 (registrazione corretta)
    pathMatch: 'full'
  },

  //  ultimo
  {
    path: '**',
    redirectTo: 'page404',
    pathMatch: 'full'
  },

 ];

@NgModule({
<<<<<<< HEAD
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
=======
  imports: [RouterModule.forRoot(routes)],
>>>>>>> d8eac67 (registrazione corretta)
  exports: [RouterModule]
})
export class AppRoutingModule { }



