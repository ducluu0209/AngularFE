import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products/cart', component: CartComponent},
  { path: 'products', component: ProductdetailComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/edit-product/:productID', component: EditproductComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
