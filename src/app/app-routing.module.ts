import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },

  {
    path:'registration',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule)
  },

  {
    path:'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },

  {
    path:'webshop',
    loadChildren: () => import('./pages/webshop/webshop.module').then(m => m.WebshopModule),
    canActivate: [AuthGuard]
  },

  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'

  },

  {
    path:'404-not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  
  {
  path:'contact',
  loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  
  {
    path:'**',
    redirectTo: '/404-not-found'

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
