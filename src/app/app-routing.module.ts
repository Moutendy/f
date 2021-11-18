import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";
import {FromcontrolleComponent} from "./fromcontrolle/fromcontrolle.component";
import {BuilderComponent} from "./builder/builder.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [{path: 'formulaire', component:FormComponent},
  {path: 'microcontroller', component:FromcontrolleComponent},{path :'b', component:BuilderComponent},
  {path:'adress',component: AuthComponent, canActivate:[AuthGuard]},
  {path: '',redirectTo :'b',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
