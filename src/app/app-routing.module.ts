import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ModalComponent } from './modal/modal.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path:'products', component:ProductsComponent },
  { path:'modal', component:ModalComponent},
  { path:'categories',component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
