import { TstatomagazzinoInterface } from '../interfaces/t_stato_magazzino';


export class TstatoMagazzino implements TstatomagazzinoInterface {

  id: number;
  d_stato_magazzino: string;
  tappo: string;
  key_utenti_operation: number;
  created_at: Date;
  updated_at: Date;

  constructor()  {

    this.id = 0;
    this.d_stato_magazzino = '';
    this.tappo = 'N';
    this.key_utenti_operation  = 0;
    this.created_at  = new Date();
    this.updated_at = new Date();

  }

}

