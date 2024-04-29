
import { userlevelInterface } from '../interfaces/userlevel';


export class Userlevel implements userlevelInterface {

  id: number;
<<<<<<< HEAD
  UserLevelName: string;
=======
  userLevelName: string;
>>>>>>> d8eac67 (registrazione corretta)
  key_utenti_operation: number;
  created_at: Date;
  updated_at: Date;

  constructor()  {
    this.id = 0;
<<<<<<< HEAD
    this.UserLevelName = '';
=======
    this.userLevelName = '';
>>>>>>> d8eac67 (registrazione corretta)
    this.key_utenti_operation = 0;
    this.created_at = new Date();
    this.updated_at = new Date();
  }


}
