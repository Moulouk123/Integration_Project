import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  somme : number
  qt:number[];
  ModPaiement :String;
  Uid
  data
  getProducts
  successMessage
  dataArray=[]
  user

  constructor(private ps :FormationService, private fs:AngularFirestore, private router : Router,private fa : AngularFireAuth,private auth:AuthService)
   {  
      this.data=this.ps.getform();
    console.log(this.data);
    console.log(this.auth.getUser().email)

    this.user=this.auth.getUser();
     
  }

  ngOnInit(): void {
    
      
  }
  ModePaiement(event)
  {
     this.ModPaiement=event.target.value;
   if(this.ModPaiement=="Bank")
   {
    let num = prompt("enter your card numero");
    let code = prompt("enter you card code");
    if(num.length==8 && code.length==4)
    {
      let conf=confirm("sucessfull of the operation ")
    }
    else
    {
      let conf=confirm("check what you enter")
    }
   }
   else if (this.ModPaiement=="PayPal")
   {
    let num = prompt("enter you paypal numero");
    let code = prompt("enter your code paypal");
    if(num.length==8 && code.length==4)
    {
      let conf=confirm("sucess of the operation")
    }
    else
    {
      let conf=confirm("check what you enter")
    }
   }
   
   
   
  }
  order()
  {
    this.fs.collection("order").doc(this.user).set(
      {
        articles :this.data,
        total :this.data.prix,
        pay:this.ModPaiement
      }
    )
    const u=this.data.email;
    this.successMessage='Order done!'
    this.fa.currentUser
    
    this.router.navigate(['/myproducts']);
  }
 
 
}
