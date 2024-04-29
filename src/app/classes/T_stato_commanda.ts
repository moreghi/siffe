import { TstatocommandaInterface } from '../interfaces/t_stato_commanda';


export class TstatoCommanda implements TstatocommandaInterface {

  id: number;
  d_stato_commanda: string;
  tappo: string;
  key_utenti_operation: number;
  created_at: Date;
  updated_at: Date;

  constructor()  {

    this.id = 0;
    this.d_stato_commanda = '';
    this.tappo = 'N';
    this.key_utenti_operation  = 0;
    this.created_at  = new Date();
    this.updated_at = new Date();

  }

}


