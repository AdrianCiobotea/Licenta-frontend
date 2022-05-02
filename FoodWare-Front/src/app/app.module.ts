import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login-form/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CategoryService } from './service/category/category.service';
import { ProductService } from './service/product/product.service';
import { AuthService } from './service/auth/auth.service';
import { OrderService } from './service/order/order.service';
import { SubOrderService } from './service/sub-order/sub-order.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    //ProductFormComponent,
    ProductCardComponent,
    ProductFilterComponent,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
      // { 
      //   path: 'admin/products/new', 
      //   component: ProductFormComponent
      // },
      // { 
      //   path: 'admin/products/:id', 
      //   component: ProductFormComponent 
      // },
      // { 
      //   path: 'admin/products', 
      //   component: AdminProductsComponent
      // },
    ])    
  ],
  providers: [
    AuthService,
    CategoryService,
    ProductService,
    OrderService,
    SubOrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
