import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormationService } from '../services/formation.service';
import { EmploiService } from '../services/emploi.service';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})
export class EmploiComponent implements OnInit {

  Uid
  successUpdate
  successMessage
  dataArray
  getProducts:Subscription
role
etat=false
  data={
    poste:'',
    imag:'',
    title:'',
    horaire:'',
    prix:'',
    id:'',
    email:'',
    tel:'',
    mission:'',
    company:'',


  }
  email
  constructor(private fs:AngularFirestore,private as:AuthService,private route:Router,private db:AngularFireDatabase,private es:EmploiService) { 
this.role=this.as.getRole()
if(this.role=="isAdmin")
{this.etat=true}
  }

  ngOnInit(): void {
  this.getProducts= this.fs.collection("emplois").snapshotChanges().subscribe((data)=>{
    this.dataArray= data.map(element=>{
      return{ 
        id:element.payload.doc.id ,
       poste:element.payload.doc.data()['poste'],
        email:element.payload.doc.data()['email'],
        imag:element.payload.doc.data()['imag'],
        prix:element.payload.doc.data()['prix'],
        tel:element.payload.doc.data()['tel'],
        mission:element.payload.doc.data()['mission'],
        profil:element.payload.doc.data()['profil'],
        company:element.payload.doc.data()['company'],
        horaire:element.payload.doc.data()['horaire'],

        uid:element.payload.doc.data()['title'],
     }
     })
   })
  }
  addproduct(f){
    let data=f.value

    this.fs.collection("emplois").add({
   
      email:data.email,
     tel:data.tel,
      company:data.company,
      poste:data.poste,
      imag:data.image,
      prix:data.prix,
      horaire:data.horaire,
      mission:data.mission,
      profil:data.profil,
      
   
  });
     
}
delete(id){

  if (confirm('Etes-vous sûre de vouloir supprimer cet emploi ?') == true) {
    return this.fs
     .collection("emplois")
     .doc(id)
     .delete();
  }

}
update(emploi){
  console.log(emploi)
  this.es.getEmploi(emploi)
  this.route.navigate(['/updateemploi/'+emploi.id])

}

ngOnDestroy(){
  this.getProducts.unsubscribe()
  console.log("done on destroy")

}
detail(id){
  
  this.route.navigate(['/emplois-details/'+id])
 
}
}
