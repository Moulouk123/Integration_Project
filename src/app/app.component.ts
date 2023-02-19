import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myStore';
  isAdmin=false
  isUser
  isEtud=false
  isFormat=false
  adminn="admin"
  ens="formateur"
  constructor(private af:AngularFireAuth,private route:Router,private as:AuthService) {
    this.as.user.subscribe(user=>{
      
        if(user){
          this.isUser=true
          
          if(user.email.includes(this.adminn))
          {
            this.isAdmin=true
            this.as.setRole("isAdmin")
            console.log(this.isAdmin)
          }
          else if(user.email.includes(this.ens))
          {this.isFormat=true
            console.log(this.isFormat)
            this.as.setRole("isForma")
          }
          else{
            this.isEtud=true
            console.log(this.isEtud)
            this.as.setRole("isEtud")

          }
        }else{
          this.isUser=false
        }
      })
    
   }

  ngOnInit(): void {
  }

  logout(){
    this.af.signOut()
    .then(()=> {
     // console.log("logout done")
     localStorage.removeItem("userConnect")
     this.route.navigate(['/login'])
    })
    .catch(()=>{
      console.log("error")
    })
  }
}
