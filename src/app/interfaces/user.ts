/* interfaccia tabella utenti  */

export interface UserInterface {

  id: number;
  cognome: string;
  nome: string;
  photo: string;
  idStato: number;
  tipoacc: number;
  username: string;
  password: string;
  email: string;
  telefono: string;
  idRuolo: number;
  idRuolo_Day: number;
<<<<<<< HEAD
  idruoloweb: number;
  noteUtente: string;
=======
  idLevel: number;
  idruoloweb: number;
  noteUtente: string;
  token: string;
>>>>>>> d8eac67 (registrazione corretta)
  eseguitaAbilitazione: string;
  remember_token: string;
  email_verified_at: string;
  key_utenti_operation: number;
  created_at: Date;
  updated_at: Date;
// campo derivato dalla relazione con tabella t_stato_manifestazione
  d_ruolo: string;
  d_ruolo_day: string;
  d_Stato_Utente: string;
  d_ruolo_web: string;

}
<<<<<<< HEAD
=======



>>>>>>> d8eac67 (registrazione corretta)
