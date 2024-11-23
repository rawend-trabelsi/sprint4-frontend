import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SmartphonesComponent } from './smartphones/smartphones.component';
import { AuthGuard } from './guards/secure.guard';

const routes: Routes = [
  {path: "smartphones", component : SmartphonesComponent ,canActivate:[AuthGuard], data : {roles:['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
