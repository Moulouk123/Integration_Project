import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-updateformation',
  templateUrl: './updateformation.component.html',
  styleUrls: ['./updateformation.component.css']
})
export class UpdateformationComponent implements OnInit {
  keyParams

  product
  successUpdate
  constructor(private fs:AngularFirestore,private route:Router,private db:AngularFireDatabase,private parms:ActivatedRoute,private ps:FormationService) { 
   /* this.as.user.subscribe(user=>{

      this.Uid=user.uid
    })
*/
console.log('product '+this.product)
 this.parms.params.subscribe(query=>{
      return this.keyParams=query.key
    })
    this.product=this.ps.product

  }
  ngOnInit(): void {
  }

  update(){

    
    this.fs.collection("formations").doc(this.product.id).update({

      title:this.product.title,
      email:this.product.email,
      prix:this.product.prix,
      imag:this.product.imag,
      nom:this.product.nom,
      description:this.product.description
    }).then(()=>{
      this.successUpdate="updated!"
      this.route.navigate(['myproducts'])


   
    }).catch(()=>{
      console.log("not done update")
    })
  }
}
