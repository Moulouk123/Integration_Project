import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormateursService {

  dataArray=[]
  formateur
  constructor(public firestore: AngularFirestore) { this.dataArray=[]}
  getFormateurs() 
    {
     return this.firestore.collection("formateurs").snapshotChanges()
       
    }
   
   createFormateur(data : any) {
    return new Promise((resolve, reject) => {
    this.firestore
    .collection("formateurs")
    .add(data)
    .then(res => {console.log("data",data)}, err => reject(err));
   });
  }

   deleteFormateurs(id) {
    if (confirm('Etes-vous sûre de vouloir supprimer cet enregistrement ?') == true) {
     return this.firestore
      .collection("formateurs")
      .doc(id)
      .delete();
    }
   return false;
   }
 
}
