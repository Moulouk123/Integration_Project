import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dataP={
    fname:'',
    image:'https://www.addsystems.com/wp-content/uploads/2017/01/Anonym-e1491994623630.jpg',
    lname:'',
    email:'',
    uid:''

  }
  constructor(public sa: AuthService,private fa : AngularFireAuth,private fs:AngularFirestore,private route:Router) {
   }
   


  

  ngOnInit(): void {
  }
  
  register(f:any){
    console.log(f.value)
    let data=f.value
     this.sa.signUp(data.email,data.password).then((user)=>{
      console.log(data.prof)
      if(data.prof=="Etudiant")
     {this.fs.collection("etudiants").add({
      //id:data.payload.doc.id ,
        lastname:data.lname,
        firstname:data.fname,
        email:data.email,

       photoURl:'https://www.addsystems.com/wp-content/uploads/2017/01/Anonym-e1491994623630.jpg',
       uid: data.email,
       
    
      }).then(()=>{
      this.dataP.email=data.email
      this.dataP.lname=data.lname
      this.dataP.fname=data.fname
      this.dataP.uid=data.email

        this.sa.setuser(this.dataP)
        this.route.navigate(['/profil']);
        console.log("done") }) 
      }
      {this.fs.collection("formateurs").add({
       // id:data.payload.doc.id ,
        lastname:data.lname,
        firstname:data.fname,
        email:data.email,
        

       photoURl:'https://www.addsystems.com/wp-content/uploads/2017/01/Anonym-e1491994623630.jpg',
       uid: data.email,
       
    
      }).then(()=>{
        this.dataP.email=data.email
        this.dataP.lname=data.lname
        this.dataP.fname=data.fname
        this.dataP.uid=data.email
        this.route.navigate(['/profil']);
        console.log("done") }) 
        this.sa.setuser(this.dataP)
      }
       
     }).catch(()=>{
       console.log("error !")
     })
   }
}
