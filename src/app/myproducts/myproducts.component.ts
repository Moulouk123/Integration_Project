import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit,OnDestroy {
  Uid
  successUpdate
  successMessage
  dataArray
  getProducts:Subscription
role
etat=false
  data={
    name:'',
    imag:'',
    title:'',
    description:'',
    prix:'',
    id:'',
    email:'', 


  }
  email
  constructor(private fs:AngularFirestore,private as:AuthService,private route:Router,private db:AngularFireDatabase,private ps:FormationService) { 
this.role=this.as.getRole()
if(this.role=="isAdmin")
{this.etat=true}
  }

  ngOnInit(): void {
  this.getProducts= this.fs.collection("formations").snapshotChanges().subscribe((data)=>{
    this.dataArray= data.map(element=>{
      return{ 
        id:element.payload.doc.id ,
        title:element.payload.doc.data()['title'],
        email:element.payload.doc.data()['email'],
        imag:element.payload.doc.data()['imag'],
        prix:element.payload.doc.data()['prix'],
        nom:element.payload.doc.data()['nom'],
        description:element.payload.doc.data()['description'],


        uid:element.payload.doc.data()['title'],
     }
     })
   })
  }
  addproduct(f){
    let data=f.value

    this.fs.collection("formations").add({
   
      email:data.email,
     nom:data.nom,
      title:data.title,
      prix:data.prix,
      imag:data.image,
      description:data.description,
      
    }).then(()=>{
      this.email=data.email,

      this.email.sendEmailVerification()
        
      this.successMessage='added !'
    })
}
delete(id){

  if (confirm('Etes-vous sûre de vouloir supprimer cet enregistrement ?') == true) {
    return this.fs
     .collection("formations")
     .doc(id)
     .delete();
  }

}
update(formation){
  this.ps.getFormation(formation)
  console.log(formation)

  this.route.navigate(['updateformation/'+formation.id])

}

ngOnDestroy(){
  this.getProducts.unsubscribe()
  console.log("done on destroy")

}
detail(id){
  this.route.navigate(['/formation/'+id])
 
}
}
