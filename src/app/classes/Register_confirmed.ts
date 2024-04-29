import { RegisterconfirmedInterface } from './../interfaces/register_confirmed';


export class Registerconfirmed implements RegisterconfirmedInterface  {

<<<<<<< HEAD
  email: string;
  id_titolo: number;
  username: string;
  cognome: string;
  nome: string;
=======
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
<<<<<<< HEAD
  constructor()  {

    this.email = '';
    this.id_titolo = 0;
    this.username = '';
    this.cognome = '';
    this.nome = '';
=======

  constructor()  {

    this.id = 0;
    this.cognome = '';
    this.nome = '';
    this.email = '';
    this.username = '';
>>>>>>> d8eac67 (registrazione corretta)
    this.password = '';
    this.token = '';
    this.created_at = new Date();
    this.updated_at = new Date();

  }

}
