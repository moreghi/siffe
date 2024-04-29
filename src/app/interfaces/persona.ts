<<<<<<< HEAD
=======
/*  interfaccia per persona  */
>>>>>>> d8eac67 (registrazione corretta)


export interface PersonaInterface {

  id: number;
<<<<<<< HEAD
  cognome: string;
  nome: string;
  photo: string;
  titolo: number;
  idStato: number;
  email: string;
  userLevel: number;
  idRuolo: number;
  idRuolo_Day: number;
  inServizio: string;
  utilizzatoCommanda: string;
  noteUtente: string;
  key_utenti_operation: number;
  created_at: Date;
  updated_at: Date;
// campo derivato dalle relazioni
  d_ruolo: string;
  d_ruolo_day: string;
  d_Titolo: string;
  UserLevelName: string;
  d_Stato_Persona: string;

=======
  idGiornata: number;
  cognome: string;
  nome: string;
  idStato: number;
  email: string;
  cellulare: string;
  idRuolo: number;
  dRuolo: string;
  inServizio: string;
  utilizzatoCommanda: string;
  key_utenti_operation: number;
  created_at: Date;
  updated_at: Date;
>>>>>>> d8eac67 (registrazione corretta)

}

