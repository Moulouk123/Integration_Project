import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  dataArray

  dataArrayE
  getProducts:Subscription
  constructor(private fs:AngularFirestore) { }

  ngOnInit(): void {
    this.getProducts= this.fs.collection("formateurs").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
          flName:element.payload.doc.data()['firstname'],
         lname:element.payload.doc.data()['lastname'],
          email:element.payload.doc.data()['email'],
          link:element.payload.doc.data()['photoURl'],
          
       }
       })
     })
     this.getProducts= this.fs.collection("etudiants").snapshotChanges().subscribe((data)=>{
      this.dataArrayE= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
          flName:element.payload.doc.data()['firstname'],
          lname:element.payload.doc.data()['lastname'],
          email:element.payload.doc.data()['email'],
          link:element.payload.doc.data()['photoURl']
       }
       })
     })

  }
  deletef(id){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.fs.collection("formateurs").doc(id).delete()
  }
  deleteE(id){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.fs.collection("etudiants").doc(id).delete()
  }
}
