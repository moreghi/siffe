import { TtipologiaInterface } from '../interfaces/t_tipologia';


export class Ttipologia implements TtipologiaInterface {

  id: number;
  d_tipologia: string;
  stato: number;
  tappo: string;
  ordineMenu: number;
<<<<<<< HEAD
=======
  photo: string;
>>>>>>> d8eac67 (registrazione corretta)
  key_utenti_operation: number;
  created_at: Date;
  updated_at: Date;

  constructor()  {

    this.id = 0;
    this.d_tipologia = '';
    this.stato = 0;
    this.tappo = 'N';
    this.ordineMenu = 0;
<<<<<<< HEAD
=======
    this.photo = '';
>>>>>>> d8eac67 (registrazione corretta)
    this.key_utenti_operation  = 0;
    this.created_at  = new Date();
    this.updated_at = new Date();

  }

}
