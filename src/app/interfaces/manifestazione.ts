/*  interfaccia per manifestazione  */


export interface ManifestazioneInterface {

  id: number;
  descManif: string;
  anno: number;
  dtInizio: string;
  dtFine: string;
  buonoPastoCommanda: number;
  impCoperto: number;
  numTavoli: number;
  numCommandeTot: number;
  numUtentiTot: number;
  nettoSerataTot: number;
  impCommandeTot: number;
  impCopertoTot: number;
  noteManifestazione: string;
  stato: number;
<<<<<<< HEAD
  key_utenti_operation: number;
  stampeBackOffice: string;
=======
  stampeBackOffice: string;
  key_utenti_operation: number;
>>>>>>> d8eac67 (registrazione corretta)
  created_at: Date;
  updated_at: Date;
  // campo derivato dalla relazione con tabella t_stato_manifestazione
  d_stato_manifestazione: string;

}
<<<<<<< HEAD
=======

>>>>>>> d8eac67 (registrazione corretta)
