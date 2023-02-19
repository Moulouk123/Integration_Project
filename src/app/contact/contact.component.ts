import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fs:AngularFirestore) { }

  ngOnInit(): void {
  }
addcontact(f){
    let data=f.value

    this.fs.collection("contacts").add({
   
      email:data.email,
     name:data.name,
      subject:data.subject,
      
      message:data.message,
      
    }).then(()=>{
      let conf = confirm("Etes-vous sûr ?");
    }) 
      

    
}
}
