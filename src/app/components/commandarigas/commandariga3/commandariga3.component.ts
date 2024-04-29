
import { CommandaService} from '../../../services/commanda.service';
import { Component, Input, OnInit } from '@angular/core';
import { Commandariga} from '../../../classes/Commandariga';
import { Commanda} from '../../../classes/Commanda';


@Component({
  selector: 'app-commandariga3',
  templateUrl: './commandariga3.component.html',
  styleUrls: ['./commandariga3.component.css']
})
export class Commandariga3Component implements OnInit {

  @Input('commandarighe') commandarighe: Commanda[];

 // public commandarighe = Commandariga[] = [];

  constructor(private commandaService: CommandaService

  ) { }

  ngOnInit(): void {

   alert('commanda passata - onInit :' + JSON.stringify(this.commandarighe));

  }


  commandaSelected(commanda: Commanda) {

    alert('ho passato ' + commanda.id);

  }

  onSelectCommanda(commanda: Commanda) {

    alert('onSelectCommanda sono su commandariga3 ---------------- - commanda selected: ' + JSON.stringify(commanda));





      }


}

/*

import { UserService } from './../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private usercopy: User;
  private __user: User;

  @Input() set user(user: User) {
    this.__user = user;
    this.usercopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService) {
    this.user = new User();
    this.__user = new User();
    this.usercopy = new User();
  }

  ngOnInit(): void {
  }
  saveUser() {

    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    }
    else {
      this.userService.createUser(this.user);
    }
    // Let's unbind this.user from previously created/modified user
    this.user = new User();
  }
  resetForm(form: FormGroup) {

    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.usercopy;
    }

  }
}






*/

