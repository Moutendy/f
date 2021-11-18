import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {Personne} from "../interface/personne";
import {Router} from "@angular/router";
import {AuthGuard} from "../guards/auth.guard";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {


  constructor(private fb:FormBuilder,private router:Router) { }

  personne:Personne ={};
  personneForms=this.fb.group({
    email:new FormControl(),
    password: new FormControl()
  })
  password: any;
  email: any;
  ngOnInit(): void
  {
this.isAuthenticated();
  }

 isAuthenticated()
 {
   if(this.email=='chris' && this.password=='1234')
   {
     sessionStorage.setItem('nom',this.email)
     sessionStorage.setItem('password',this.password)
    this.router.navigateByUrl('adress');
   }

 }



}
