import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { User } from '../../classes/User';
import { UserService} from '../../services/user.service';
=======
import { Router } from '@angular/router';
>>>>>>> d8eac67 (registrazione corretta)
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  public title = 'titolo di chi siamo';
=======
  public title = 'Sanfra in festa ...... finalmente un pò di vita';
>>>>>>> d8eac67 (registrazione corretta)
  public p1: number;
  public p2: number;
  public p3: number;
  public nRec1 = 0;
  public nRec2 = 0;
  public nRec3 = 0;
  public Message = '';
  public ruolo = '';
<<<<<<< HEAD

  constructor(private userService: UserService) { }

  // risultato della lettura da backend
  public users1: User[] = [];    // elenco user con carica sociale
  public users2: User[] = [];    // elenco user solo soci
  public users3: User[] = [];    // elenco user non abbinati a cariche sociali e non socio

   ngOnInit(): void {
    this.ruolo = 'D';
    this.loadAllUser(this.ruolo);
    this.ruolo = 'S';
    this.loadAllUser(this.ruolo);
    this.ruolo = 'N';
    this.loadAllUser(this.ruolo);
  }

  loadAllUser(ruolo: string) {

    this.userService.getAllUsersCircolo(ruolo).subscribe(
     res =>{
      console.log(res,'res-->');
      if(ruolo === 'D') {
        this.users1 = res['data'];
        this.nRec1 = res['number'];
      }
      if(ruolo === 'S') {
        this.users2 = res['data'];
        this.nRec2 = res['number'];
      }
      if(ruolo === 'N') {
        this.users3 = res['data'];
        this.nRec3 = res['number'];
      }
      this.Message = res.message;  // 'Situazione Attuale';
    },
    error => {
      alert('Users  -- loadUsers - errore: ' + error.message);
      console.log(error);
   });
  }
=======
  public filepdf = 'statuto.pdf'
  constructor(private route: Router) { }


   ngOnInit(): void {
    // cancello i localstorage



  }

>>>>>>> d8eac67 (registrazione corretta)

}
