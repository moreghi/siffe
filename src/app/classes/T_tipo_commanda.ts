import { TtipocommandaInterface } from './../interfaces/t_tipo_commanda';

export class TtipoCommanda implements TtipocommandaInterface {

  id: number;
  d_tipo_commanda: string;
  tappo: string;
  key_utenti_operation: number;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id 	= 0;
    this.d_tipo_commanda = '';
    this.tappo = 'N';
    this.key_utenti_operation = 0;
    this.created_at = new Date();
    this.updated_at = new Date();

  }
}









