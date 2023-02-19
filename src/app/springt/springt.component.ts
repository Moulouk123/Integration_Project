import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-springt',
  templateUrl: './springt.component.html',
  styleUrls: ['./springt.component.css']
})
export class SpringtComponent implements OnInit {
  selected 
  selected1
  selected3
  selected5

  selected6

  selected4
    somm=0
  constructor(private router :Router,private ps :FormationService) { }

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
    this.selected1= document.querySelector('input[name="box2"]:checked').id;
    this.selected3= document.querySelector('input[name="box3"]:checked').id;
    this.selected4= document.querySelector('input[name="box4"]:checked').id;
    this.selected5= document.querySelector('input[name="box5"]:checked').id;
    this.selected6= document.querySelector('input[name="box6"]:checked').id;

     console.log(this.selected)
     if(this.selected=="one")
     {this.somm+=10;}
     if(this.selected1=="seven")
     {this.somm+=10;}
     if(this.selected3=="eleven")
     {this.somm+=10;}
     if(this.selected4=="thirteen")
     {this.somm+=10;}
     if(this.selected5=="sixteen")
     {this.somm+=10;}
     if(this.selected6=="twenty")
     {this.somm+=10;}
     console.log(this.selected1)

     console.log(this.selected4)
     console.log(this.selected3)
     console.log(this.selected5)
     console.log(this.selected6)


     console.log("votre score est :",this.somm)

    }
 
}
