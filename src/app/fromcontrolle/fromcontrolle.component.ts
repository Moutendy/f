import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-fromcontrolle',
  templateUrl: './fromcontrolle.component.html',
  styleUrls: ['./fromcontrolle.component.css']
})
export class FromcontrolleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  personneForm= new FormGroup(
    {
      id: new FormControl(''),
      nom: new FormControl(''),
      prenom: new FormControl('')
    }
  )

  affiche()
  {
    console.log(this.personneForm.value);
    console.log(this.personneForm.get('nom'));
  }
}
