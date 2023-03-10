import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { SellerAuthComponent } from './COMPONENTS/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './COMPONENTS/seller-home/seller-home.component';

const routes: Routes = [
  {
  path:'',component:HomeComponent
},
{
  path:'seller-auth',component:SellerAuthComponent
},
{
  path:'seller-home',component:SellerHomeComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
