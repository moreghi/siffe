/* interfaccia tabella register_confirmed  */

<<<<<<< HEAD
export class RegisterconfirmedInterface {

  email: string;
  id_titolo: number;
  username: string;
  cognome: string;
  nome: string;
=======
export interface RegisterconfirmedInterface {

  id: number;
  cognome: string;
  nome: string;
  email: string;
  username: string;
>>>>>>> d8eac67 (registrazione corretta)
  password: string;
  token: string;
  created_at: Date;
  updated_at: Date;

}
