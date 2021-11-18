import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }
  nom:string | null=""
  password:string | null=""
  ngOnInit(): void
  {
    this.nom=sessionStorage.getItem('nom');

    this.password=sessionStorage.getItem('password')
  }

}
