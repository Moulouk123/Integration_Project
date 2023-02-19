import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.css']
})
export class ListcontactComponent implements OnInit {
  dataArray

  dataArrayE
  getProducts:Subscription
  constructor(private fs:AngularFirestore) { }

  ngOnInit(): void {
    this.getProducts= this.fs.collection("contacts").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
          name:element.payload.doc.data()['name'],
         email:element.payload.doc.data()['email'],
          subject:element.payload.doc.data()['subject'],
         message:element.payload.doc.data()['message'],
          
       }
       })
     })
  }
  deletef(id){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.fs.collection("contacts").doc(id).delete()
  }
}
