import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrSidebarComponent } from './br-sidebar/br-sidebar.component';
import { BrHeaderComponent } from './br-header/br-header.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from "@angular/forms";
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    BrSidebarComponent,
    BrHeaderComponent,
    ProductsComponent,
    ModalComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
