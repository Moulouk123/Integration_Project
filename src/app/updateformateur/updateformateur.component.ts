import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateursService } from '../services/formateurs.service';

@Component({
  selector: 'app-updateformateur',
  templateUrl: './updateformateur.component.html',
  styleUrls: ['./updateformateur.component.css']
})
export class UpdateformateurComponent implements OnInit {

  keyParams
  data={
   lastname: '',
   firstname: '',
   email:'',
   image: ''


  }
  formateur
  successUpdate
  constructor(private fs:AngularFirestore,private route:Router,private db:AngularFireDatabase,private parms:ActivatedRoute,private frs:FormateursService,private fa:AngularFireAuth) { 
   /* this.as.user.subscribe(user=>{

      this.Uid=user.uid
    })
*/
console.log('formateur '+this.formateur)
 this.parms.params.subscribe(query=>{
  
      return this.keyParams=query.key
    })
    this.formateur=this.frs.formateur
    console.log(this.formateur)


  }
  ngOnInit(): void {
    this.fs.collection("formateurs").ref.doc(this.keyParams).get().then((data)=>{
      console.log(data.data())
     
      this.data.firstname=data.data()['firstname']
      this.data.image=data.data()['photoURl']
      this.data.lastname=data.data()['lastname']
      this.data.email=data.data()['email']

      
    })
  }

  update(){

    
    this.fs.collection("formateurs").doc(this.keyParams).update({

      firstname:this.data.firstname,
      email:this.data.email,
      lastname:this.data.lastname,
      photoURl:this.data.image,
      
    }).then(()=>{
      
     
      this.successUpdate="updated!"
      this.route.navigate(['trainers'])


   
    }).catch(()=>{
      console.log("not done update")
    })
  }
}
