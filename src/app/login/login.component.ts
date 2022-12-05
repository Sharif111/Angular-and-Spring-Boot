import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='admin'
  password=''
  errorMessage='Invalid credentials'
  invalidLogin = false


  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router) { }

  handleLogin(){

    if(this.username==='admin' && this.password==='123'){
      this.router.navigate(['welcome'])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }

  ngOnInit() {
  }

}
