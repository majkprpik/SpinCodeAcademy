import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = '';
  pass = '';
  constructor(
    // private userService: UserService
    ) { }

  ngOnInit() {
    // if(this.username == 'vedran.prpic1@gmail.com')
    //   this.login()
  }

  login() {
    console.log('LOGIN:' + this.username + ':' + this.pass);
    // this.userService.login(this.username, this.pass);
    this.username = '';
    this.pass = '';
  }
}
