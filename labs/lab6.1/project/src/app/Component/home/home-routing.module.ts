import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,

    //
    // children: [{
    //   path:'favorite',
    //   loadChildren:() => import('src/app/Component/favorite-user/favorite-user.module')
    //     .then(m => m.FavoriteUserModule)
    // },
    //   {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    //   }
    // ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
