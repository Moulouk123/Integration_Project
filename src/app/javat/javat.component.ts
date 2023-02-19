import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-javat',
  templateUrl: './javat.component.html',
  styleUrls: ['./javat.component.css']
})
export class JavatComponent implements OnInit {

  selected 
  selected1
  selected3

  selected4
  selected5
  selected6
    somm=0
  constructor(private router:Router,private ps :FormationService) { }

  ngOnInit(): void {


  }
  submit()
  {if (confirm('Etes-vous sûre de vouloir valider vos reponses de tests  ?') == true)
  {this.check();
  }
  this.router.navigate(['/score']);
  return this.ps.setScore(this.somm);
}
check()
  {

    this.selected= document.querySelector('input[name="box"]:checked').id;
    this.selected3= document.querySelector('input[name="box1"]:checked').id;
    this.selected4= document.querySelector('input[name="box2"]:checked').id;
    this.selected5= document.querySelector('input[name="box3"]:checked').id;


     console.log(this.selected)
     if(this.selected=="three")
     {this.somm+=10;}
     
     if(this.selected3=="six")
     {this.somm+=10;}
     if(this.selected4=="ten")
     {this.somm+=10;}
     if(this.selected5=="fourteen")
     {this.somm+=10;}
     
    
     console.log(this.selected5)

     console.log(this.selected4)
     console.log(this.selected3)


     console.log("votre score est :",this.somm)

    }
  }