
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
msj
 sum
 test=false
  constructor(private fs:FormationService,private route:Router) { 
    this.sum=this.fs.getScore();
if(this.sum<=10){
  this.msj="Niveau : Débutant"
  this.test=true;
}
else if(this.sum>10 && this.sum<30){
  this.msj="Niveau : Moyenne "
}
else{
  this.msj="Niveau : Excellent "
}

 console.log(this.sum + "ggggggg");
 

  }

  ngOnInit(): void {
  }

}