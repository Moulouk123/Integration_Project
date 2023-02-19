import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { EmploiComponent } from '../emploi/emploi.component';
import { EmploiService } from '../services/emploi.service';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-updateemploi',
  templateUrl: './updateemploi.component.html',
  styleUrls: ['./updateemploi.component.css']
})
export class UpdateemploiComponent implements OnInit {
  keyParams
  dataProduct={
    poste:'',
    image:'',
    mission:'',
    company:'',
    tel:'',
    profil:'',
    email:'',
    prix:'',
    horaire:'',

    
  }

  product
  successUpdate
  constructor(private fs:AngularFirestore,private route:Router,private db:AngularFireDatabase,private parms:ActivatedRoute,private ps : EmploiService) { 
   /* this.as.user.subscribe(user=>{

      this.Uid=user.uid
    })
*/
console.log('emploi '+this.product)
 this.parms.params.subscribe(query=>{
      return this.keyParams=query.key
    })
    this.product=this.ps.emploi

  }
  ngOnInit(): void {
  }

  update(){

    
    this.fs.collection("emplois").doc(this.product.id).update({

      
     poste:this.product.poste,
      imag:this.product.imag,
      mission:this.product.mission,
      profil:this.product.profil,
      company:this.product.company,
      horaire:this.product.horaire,
      email:this.product.email,
      tel:this.product.tel,
      prix:this.product.prix
    }).then(()=>{
      this.successUpdate="updated!"
      this.route.navigate(['emploi'])


   
    }).catch(()=>{
      console.log("not done update")
    })
  }
}
