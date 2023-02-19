import { Component, OnDestroy, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { EmailValidator } from '@angular/forms';
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  Uid
  dataProfile={
    fName:'',
    image:'',
    lName:'',
    email:'',
    uid:''

  }
    successUpdate
   
    persentages
    userSubscribe:Subscription
    flName
    image
    bio
    uid
   role
  user
  dataArray
  getusers

  constructor(private as:AuthService,private fs:AngularFirestore,private fst:AngularFireStorage,private route : Router,private fa :AngularFireAuth,private us:AuthService) {
    this.user=this.as.getUser();

   this.role= this.as.getRole();
   console.log(this.user)
   }

  ngOnInit(): void {
  console.log("this Uid : "+this.user.email)
  
    console.log(this.role)
    this.dataProfile.fName=this.user.fname
    this.dataProfile.email=this.user.email
    this.dataProfile.lName=this.user.lname
    this.dataProfile.image=this.user.image
    this.dataProfile.uid=this.user.uid


    console.log(this.dataProfile.fName)
 /*  if(this.role=="isEtud")
   {
    /*this.getusers= this.fs.collection("etudiants").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
          title:element.payload.doc.data()['firstname'],
          email:element.payload.doc.data()['photoURl'],
          imag:element.payload.doc.data()['lastname'],
          prix:element.payload.doc.data()['email'],
         
  
  
       }
       })
     })
   
  
console.log("this etudddd");
    this.fs.collection("etudiants").ref.doc(this.user.uid).get().then((data)=>{
      console.log("ggg"+data.data())
     
      this.dataProfile.fName=data.data()['firstname']
      this.dataProfile.image=data.data()['photoURl'],
    this.dataProfile.lName=data.data()['lastname'],
      this.dataProfile.email=data.data()['email']

      
    })
   }
   else if(this.role=="isForma")
   {
    this.fs.collection("formateurs").ref.doc(this.user.uid).get().then((data)=>{
      console.log(data.data())
     
      this.dataProfile.fName=data.data()['firstname']
      this.dataProfile.image=data.data()['photoURl']
      this.dataProfile.lName=data.data()['lastname']
      this.dataProfile.email=data.data()['email']

      this.dataProfile.uid=localStorage.getItem("userConnect")
      
    })

   }
   
    */


  
    console.log(this.dataProfile)
    
    
   
  }
  ngOnDestroy(){
    this.userSubscribe.unsubscribe()
    console.log("done user unscribe")
  }
  updatE(){
    if(this.role=="isEtud")
   {
    this.fs.collection("etudiants").doc(this.dataProfile.uid).update({
      firstname:this.dataProfile.fName,
      lastname:this.dataProfile.lName,
      email:this.dataProfile.email,
      photoURl:this.dataProfile.image,
    }).then(()=>{
      this.successUpdate="updated!"
     

   
    })
  }else{
    this.fs.collection("formateurs").doc(this.dataProfile.uid).update({
      firstname:this.dataProfile.fName,
      lastname:this.dataProfile.lName,
      email:this.dataProfile.email,
      photoURl:this.dataProfile.image,
    }).then(()=>{
      this.successUpdate="updated!"
      
   
    })
  }
  }
  

}
