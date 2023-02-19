import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  keyParams
  successMessage
  dataProduct={
    title:'',
    image:'',
    description:'',
    nom:'',
    email:'',
    prix:'',

    
  }
  viddata
  getProducts
  product
  role
  etat
  etate
  data
  constructor(private parms:ActivatedRoute,private fs:AngularFirestore,private ps : FormationService,private as:AuthService,private router:Router) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query.key
    })
this.product=ps.product
console.log(ps.product)
this.role=this.as.getRole()
if(this.role=="isForma")
{this.etat=true}
else if(this.role=="isEtud")
{this.etate=true}
  }

  ngOnInit(): void {
    this.data=this.fs.collection('formations').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())
      this.dataProduct.title=data.data()['title']
      this.dataProduct.image=data.data()['imag']
      this.dataProduct.description=data.data()['description']
      this.dataProduct.nom=data.data()['nom']
      this.dataProduct.email=data.data()['email'],
      this.dataProduct.prix=data.data()['prix']



    });

    this.getProducts= this.fs.collection("formations").doc(this.keyParams).collection("ListeVideo").snapshotChanges().subscribe((data)=>{
      this.viddata= data.map(element=>{
        return{ 
         
          id:element.payload.doc.id ,
          title:element.payload.doc.data()['title'],
          urlvideo:element.payload.doc.data()['urlvideo']
       }
       }) 
       console.log(this.viddata)

     })

  }
  addvideo(f){
    let data=f.value

    this.fs.collection('formations').ref.doc(this.keyParams).collection("ListeVideo").add({
   
     
      title:data.title,
      
      urlvideo:data.urlvideo,
      
      
    })
      this.successMessage='added !'
    
    }

  
  
   
    
gocheck()
{
  this.router.navigate(['/checkout']);
return this.ps.setform(this.dataProduct);


}
}
