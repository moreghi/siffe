import { PrenotazioneInterface } from './../interfaces/prenotazione';

export class Prenotazione implements PrenotazioneInterface {

  id: number;
<<<<<<< HEAD
  cognome: string;
  nome: string;
  telefono: string;
  idgiornata: number;
  datapren: Date;
  persone: number;
  email: string;
  idstato: number;
=======
  idstato: number;
  tipo: string;
  idgiornata: number;
  datagiornata: string;
  cognome: string;
  nome: string;
  telefono: string;
  email: string;
  persone: number;
  datapren: string;
  dataconf: string;
  token: string;
  key_utenti_operation: number;
>>>>>>> d8eac67 (registrazione corretta)
  created_at: Date;
  update_at: Date;
   // tabella correlata
  d_stato_prenotazione: string;

  constructor() {

    this.id = 0;
<<<<<<< HEAD
    this.cognome = '';
    this.nome = '';
    this.telefono = '';
    this.idgiornata = 0;
    this.datapren = new Date();
    this.persone = 0;
    this.email = '';
    this.idstato = 0;
=======
    this.idstato = 0;
    this.tipo = 'N';
    this.idgiornata = 0;
    this.datagiornata = '';
    this.cognome = '';
    this.nome = '';
    this.telefono = '';
    this.email = '';
    this.persone = 0;
    this.datapren = '';
    this.dataconf = '';
    this.token = '';
    this.key_utenti_operation = 0;
>>>>>>> d8eac67 (registrazione corretta)
    this.created_at = new Date();
    this.update_at = new Date();
     // tabella correlata
    this.d_stato_prenotazione = '';

  }
}
