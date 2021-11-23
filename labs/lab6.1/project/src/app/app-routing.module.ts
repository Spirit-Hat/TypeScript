import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Component/home/home.module').then(m => m.HomePageModule),


  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
      path:'favorite',
      loadChildren:() => import('src/app/Component/favorite-user/favorite-user.module')
        .then(m => m.FavoriteUserModule)
    },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
