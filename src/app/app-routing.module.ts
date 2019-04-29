import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContainerComponent } from './container/container.component';
import { Error404Component } from './error404/error404.component';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';

const routes: Routes = [{
  path: '',
  component: ContainerComponent,
  children: [
    { path: 'welcome', component: WelcomeComponent },
    {
      path: 'products',
      loadChildren: ()=>ProductsModule
    },
    {
      path:'user',
      loadChildren: ()=>UserModule
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  ]
},
{ path: '**', component: Error404Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
