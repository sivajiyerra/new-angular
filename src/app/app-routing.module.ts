import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
  { path: 'cpl/one', component: View1Component },
  { path: 'cpl/two', component: View2Component },
  { path: 'cpl', redirectTo: 'cpl/one' },
  {path: 'cpl/lazy', 
  loadChildren: () => import(`./lazyloading/lazyloading.module`).then(
    module => module.LazyloadingModule
  )
  },
  
  { path: '**', redirectTo: '/cpl' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
