import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {
  dataArray=[]
  emploi
  
  sum
  constructor(public firestore: AngularFirestore) { this.dataArray=[]}
  getEmplois() 
    {
     return this.firestore.collection("emplois").snapshotChanges()
       
    }
    getEmploi(p)
    {
      this.emploi=p;
    }
   createEmploi(data : any) {
    return new Promise((resolve, reject) => {
    this.firestore
    .collection("emplois")
    .add(data)
    .then(res => {console.log("data",data)}, err => reject(err));
   });
  }
  updateEmploi(data:any) {
    return this.firestore
     .collection("emplois")
     .doc(data.payload.doc.title)
     .set({ livree: true }, { merge: true });
   }
   deleteEmploi(data:any) {
    if (confirm('Etes-vous sûre de vouloir supprimer cet enregistrement ?') == true) {
     return this.firestore
      .collection("emplois")
      .doc(data.payload.doc.id)
      .delete();
    }
   return false;
   }
  
}
