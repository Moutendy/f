import { Component, OnInit } from '@angular/core';
import {Personne} from "../interface/personne";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //interface personne
  personne:Personne={};
//tableau d'interface
  personnel:Array<Personne>=[];



  constructor() {
  }
  ngOnInit():void{}
  ajouterPersonne():void
  {
    this.personnel.push({...this.personne});
    console.log(this.personne);
  }

}
