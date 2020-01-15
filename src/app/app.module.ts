import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './layouts/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { CartComponent } from './components/cart/cart.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import { ToastComponent } from './toast/toast.component';
registerLocaleData(localeVi, 'vi');

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductdetailComponent,
    PagenotfoundComponent,
    AdminComponent,
    CartComponent,
    EditproductComponent,
    ToastComponent
    ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
