import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-matht',
  templateUrl: './matht.component.html',
  styleUrls: ['./matht.component.css']
})
export class MathtComponent implements OnInit {
  selected 
  selected1
  selected3
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
    this.selected1= document.querySelector('input[name="box2"]:checked').id;
    this.selected3= document.querySelector('input[name="box3"]:checked').id;
    console.log(this.selected)
    if(this.selected=="one")
    {this.somm+=10;}
    if(this.selected1=="seven")
    {this.somm+=10;}
    if(this.selected3=="ten")
    {this.somm+=10;}
    console.log(this.selected1)
    console.log(this.selected3)
    console.log("votre score est :",this.somm)

    }
}





