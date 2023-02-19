import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormateursService } from '../services/formateurs.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  getformateurs
  dataArray
  role
  etat
  constructor(private fs:AngularFirestore,private route:Router,private frs : FormateursService,private as : AuthService) { 
    this.role=this.as.getRole()
if(this.role=="isAdmin")
{this.etat=true}
  }

  ngOnInit(): void {
    this.getformateurs= this.fs.collection("formateurs").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
          email:element.payload.doc.data()['email'],
          image:element.payload.doc.data()['photoURl'],
          firstname:element.payload.doc.data()['firstname'],
          lastname:element.payload.doc.data()['lastname'],
          description:element.payload.doc.data()['description'],
  
  
          uid:element.payload.doc.data()['title'],
       }
       })
     })
  }
  delete(id){

   this.frs.deleteFormateurs(id);
  
  }
  update(formateur){
   
  
    this.route.navigate(['updateformateur/'+formateur.id])
  
  }
}
