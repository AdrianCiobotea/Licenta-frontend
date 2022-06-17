import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login-form/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CategoryService } from './service/category/category.service';
import { ProductService } from './service/product/product.service';
import { AuthService } from './service/auth/auth.service';
import { OrderService } from './service/order/order.service';
import { SubOrderService } from './service/sub-order/sub-order.service';
import { ModalComponent } from './component/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { RegisterComponent } from './component/register-form/register.component';
import { ShoppingCartItemComponent } from './component/shopping-cart-item/shopping-cart-item.component';
import { ModalShoppingCartComponent } from './component/modal-shopping-cart/modal-shopping-cart.component';
import { AuthInterceptor } from './service/auth/auth.interceptor';
import { GroupShoppingCartComponent } from './component/group-shopping-cart/group-shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProductCardComponent,
    ProductFilterComponent,
    OrderByPipe,
    ModalComponent,
    RegisterComponent,
    ShoppingCartItemComponent,
    ModalShoppingCartComponent,
    GroupShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'group-cart', component: GroupShoppingCartComponent },
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
    ]),
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService,
    CategoryService,
    ProductService,
    OrderService,
    SubOrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
