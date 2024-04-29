import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { environment } from './../environments/environment';
>>>>>>> d8eac67 (registrazione corretta)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'frontend';
=======

  title = 'frontend';
  public version = environment.version;
  public api = environment.APIURL;

  public dProfile = localStorage.getItem('Druolo');
>>>>>>> d8eac67 (registrazione corretta)
}
