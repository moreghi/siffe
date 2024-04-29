import { TtagliaInterface } from './../interfaces/t_taglia';

export class TTaglia implements TtagliaInterface {

  id: number;
  d_taglia: string;
  valore_taglia: number;
  tappo: string;
  key_utenti_operation: number;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id 	= 0;
    this.d_taglia = '';
    this.valore_taglia = 0;
    this.tappo = 'N';
    this.key_utenti_operation = 0;
    this.created_at = new Date();
    this.updated_at = new Date();

  }
}



