import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '@modules/layout/components/error404/error404.component';
import { LayoutComponent } from '@modules/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'shopping'
      },
      {
        path: 'shopping',
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
