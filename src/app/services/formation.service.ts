import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  
  dataArray=[]
  product 
 
data
  sum
  constructor(public firestore: AngularFirestore) { this.dataArray=[]}
  getFormations() 
    {
     return this.firestore.collection("formations").snapshotChanges()
       
    }
    getFormation(p)
    {
      this.product=p;
    }
   createFormation(data : any) {
    return new Promise((resolve, reject) => {
    this.firestore
    .collection("formations")
    .add(data)
    .then(res => {console.log("data",data)}, err => reject(err));
   });
  }
  updateFormation(data:any) {
    return this.firestore
     .collection("formations")
     .doc(data.payload.doc.title)
     .set({ livree: true }, { merge: true });
   }
   deleteFormation(data:any) {
    if (confirm('Etes-vous sûre de vouloir supprimer cet enregistrement ?') == true) {
     return this.firestore
      .collection("formations")
      .doc(data.payload.doc.id)
      .delete();
    }
   return false;
   }
   setScore( ps)
   {
     this.sum=ps;
   }
   getScore(  )
   {
    return this.sum;
   }
   setform(d )
   {
     this.data=d;
   }
   getform(  )
   {
    return this.data;
   }
}
