import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public sa:AuthService, private router : Router) { }

  ngOnInit(): void {
  }
  login(f:any)
  {
    let data =f.value
    this.sa.signIn(data.email,data.password)
    .then(() =>{
    this.router.navigate(['/home']);
      console.log("login done")
    })
    .catch(() =>{
      console.log("login erreur")
    })
  }

}
