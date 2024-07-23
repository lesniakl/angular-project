import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent, data: { message: 'test' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
