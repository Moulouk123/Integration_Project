import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-deatilsemploi',
  templateUrl: './deatilsemploi.component.html',
  styleUrls: ['./deatilsemploi.component.css']
})
export class DeatilsemploiComponent implements OnInit {
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
  role
  etat
  product
  constructor(private parms:ActivatedRoute,private fs:AngularFirestore,private router : Router,private as:AuthService) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query.key
    })
    this.role=this.as.getRole()
if(this.role=="isEtud")
{this.etat=true}

  }

  ngOnInit(): void {
    this.fs.collection('emplois').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())
      this.dataProduct.poste=data.data()['poste']
      this.dataProduct.image=data.data()['imag']
      this.dataProduct.mission=data.data()['mission']
      this.dataProduct.profil=data.data()['profil']
      this.dataProduct.company=data.data()['company']
      this.dataProduct.horaire=data.data()['horaire']
      this.dataProduct.email=data.data()['email'],
      this.dataProduct.tel=data.data()['tel'],
      this.dataProduct.prix=data.data()['prix']



    })

  }
  tester()
  {if(this.dataProduct.profil=="JAVA")
  {this.router.navigate(['/java']);}
  else if(this.dataProduct.profil=="HTML")
  {this.router.navigate(['/html']);}
  else if(this.dataProduct.profil=="SPRING")
  {this.router.navigate(['/spring']);}
  else if(this.dataProduct.profil=="MATH")
  {this.router.navigate(['/math']);}
  else if(this.dataProduct.profil=="PYTHON")
  {this.router.navigate(['/python']);}
  else{
    this.router.navigate(['/tests']);
  }

  }
  

}
