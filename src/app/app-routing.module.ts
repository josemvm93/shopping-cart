import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/home.component';
import { Error404Component } from '@modules/layout/components/error404/error404.component';
import { LayoutComponent } from '@modules/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'shopping',
        component: LayoutComponent,
        loadChildren: () => import('./modules/shopping/shopping.module').then(m => m.ShoppingModule)
      }
    ],
    runGuardsAndResolvers: 'always'
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
