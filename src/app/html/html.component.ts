import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
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
    this.selected3= document.querySelector('input[name="box2"]:checked').id;
    this.selected4= document.querySelector('input[name="box3"]:checked').id;
    this.selected5= document.querySelector('input[name="box4"]:checked').id;

    this.selected6= document.querySelector('input[name="box5"]:checked').id;

     console.log(this.selected)
     if(this.selected=="four")
     {this.somm+=10;}
     
     if(this.selected3=="ten")
     {this.somm+=10;}
     if(this.selected4=="twelve")
     {this.somm+=10;}
     if(this.selected5=="eighteen")
     {this.somm+=10;}
     
    
     console.log(this.selected5)

     console.log(this.selected4)
     console.log(this.selected3)


     console.log("votre score est :",this.somm)

    }
  }